import { WebSocketServer, WebSocket } from "ws";

const wss = new WebSocketServer({ port: 8080 });

/*
A client can send:
    Join a room:

    {
        "type": "join",
        "payload": {
            "roomId": "2fji2"
        }
    }

    Send a message:

    {
        "type": "chat",
        "payload": {
            "message": "some message"
        }
    }

A client can receive:
    message:

    {
        "type": "chat",
        "payload": {
            "message": "some message"
        }
    }
*/

interface User {
    socket: WebSocket,
    room: string
}

let allSockets: User[] = [];

wss.on("connection", (socket) => {

    socket.on("message", (message) => {
        const parsedMessage = JSON.parse(message.toString());

        // this is to check if the user requested to join a chat room or not
        if(parsedMessage.type === "join") {
            // And if yes then push the user to the main array
            allSockets.push({
                socket,
                room: parsedMessage.payload.roomId
            });
        }

        if(parsedMessage.type === "exit") {
            allSockets.filter(x => x.socket !== socket);
        }

        // This is to check if the user want to send a message or not
        if(parsedMessage.type === "chat") {
            // this will search for the current sending user's room I'd
            const currentUserRoom = allSockets.find((x) => x.socket == socket)?.room;

            // If found then this loop will send the message to all users with same room I'd
            allSockets.forEach((s) => {
                if(s.room == currentUserRoom) {
                    s.socket.send(parsedMessage.payload.message);
                }
            })
        }

    });


})