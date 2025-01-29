
interface MainContainerProps {
    messages: string[]
}

export const MainContainer = ({ messages }: MainContainerProps) => {
    return  <div className='h-full w-full bg-[#653AD847] rounded-xl p-0.5 shadow-2xl '>
        <div className="h-full w-full bg-[#653AD847] rounded-xl p-3 shadow-2xl overflow-y-scroll no-scrollbar">
            {messages.map(m => <div className="bg-white text-black p-2 rounded-b-xl rounded-tr-xl max-w-[50%] mb-3 ">
                {m}
            </div>)}
        </div>
    </div>
}