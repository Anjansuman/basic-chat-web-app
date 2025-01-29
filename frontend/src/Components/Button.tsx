import { ReactElement } from "react"

interface ButtonProps {
    text: string | ReactElement,
    onClick?: () => void,
    mr?: number
}

export const Button = ({ text, onClick, mr }: ButtonProps) => {
    return <div className={`h-full w-[27%] bg-[#653AD847] rounded-xl p-0.5 shadow-2xl ${mr ? 'mr-3': ''} cursor-pointer `}>
        <button onClick={onClick} className="h-full w-full bg-[#653AD847] rounded-xl text-white shadow-2xl flex justify-center items-center cursor-pointer ">
            {text}
        </button>
    </div>
}