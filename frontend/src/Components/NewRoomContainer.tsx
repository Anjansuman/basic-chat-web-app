import { Button } from "./Button";
import { Input } from "./Input";

export const NewRoomContainer = () => {
    return <div className="h-full w-full">
        <div className="h-[10%] ">
            <Input placeholder="Enter your name..."/>
        </div>
        <div className=" flex justify-center my-3">
            <div className="h-0.5 w-[90%] bg-white opacity-30 rounded">
            </div>
        </div>
        <div className="h-[40%] bg-[#653AD847] rounded-xl p-0.5">
            <div className="h-full bg-[#653AD847] rounded-xl p-3">
                <div className="h-[25%] w-full ">
                    <div className="mb-3">
                        <Input placeholder="Enter a room code..." bgc={"#1D1D3B69"} />
                    </div>
                    <div className="h-full flex justify-center">
                        <Button text={"Join"} bgc={"#1D1D3B69"}/>
                    </div>
                </div>
                <div className="relative -right-25 -bottom-12 text-[#1D1D3B69] opacity-50 text-8xl font-extrabold ">
                    JOIN
                </div>
            </div>
        </div>
        <div className=" flex justify-center my-3">
            <div className="h-0.5 w-[90%] bg-white opacity-30 rounded">
            </div>
        </div>
        <div className="h-[40%] bg-[#653AD847] rounded-xl p-0.5">
        <div className="h-full bg-[#653AD847] rounded-xl p-3">
            <div className="h-[25%] w-full flex justify-center mt-5">
                <Button text={"Create"} bgc={"#1D1D3B69"}/>
            </div>
            <div className="relative -bottom-5 left-3 text-[#1D1D3B69] opacity-50 text-[85px] font-extrabold ">
                CREATE
            </div>
            </div>
        </div>
    </div>
}