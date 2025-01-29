
interface RoomIdProps {
    roomId: string
}

export const RoomId = ({ roomId }: RoomIdProps) => {
    return <div className="h-full w-full bg-[#653AD847] p-0.5 rounded-xl shadow-2xl cursor-pointer">
        <div className="h-[100%] w-full bg-[#653AD847] flex items-center text-white rounded-xl p-3 shadow-2xl ">
            Room I'd:
            <div className="text-gray-300 ml-1">
                {roomId}
            </div>
        </div>
    </div>
}