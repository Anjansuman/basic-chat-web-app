"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ws_1 = require("ws");
const wss = new ws_1.WebSocketServer({ port: 8080 });
let allSockets = [];
wss.on("connection", (socket) => {
    socket.on("message", (message) => {
        var _a;
        const parsedMessage = JSON.parse(message.toString());
        // this is to check if the user requested to join a chat room or not
        if (parsedMessage.type === "join") {
            // And if yes then push the user to the main array
            allSockets.push({
                socket,
                room: parsedMessage.payload.roomId
            });
        }
        // this is to exit from a room
        if (parsedMessage.type === "exit") {
            allSockets.filter(x => x.socket !== socket);
        }
        // This is to check if the user want to send a message or not
        if (parsedMessage.type === "chat") {
            // this will search for the current sending user's room I'd
            const currentUserRoom = (_a = allSockets.find((x) => x.socket == socket)) === null || _a === void 0 ? void 0 : _a.room;
            // If found then this loop will send the message to all users with same room I'd
            allSockets.forEach((s) => {
                if (s.room == currentUserRoom) {
                    s.socket.send(parsedMessage.payload.message);
                }
            });
        }
    });
});
