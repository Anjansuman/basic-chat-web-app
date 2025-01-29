import { ReactElement } from "react"

interface ButtonProps {
    text: string | ReactElement,
    onClick?: () => void,
    mr?: number;
    bgc?: string;
}

export const Button = ({ text, onClick, mr, bgc }: ButtonProps) => {
    return <div
        className={`h-full w-[27%] rounded-xl p-0.5 shadow-2xl ${mr ? 'mr-3': ''} cursor-pointer `}
        style={{backgroundColor: bgc || '#653AD847'}}
    >
        <button onClick={onClick}
            className={`h-full w-full rounded-xl text-white shadow-2xl flex justify-center items-center cursor-pointer `}
            style={{backgroundColor: bgc || '#653AD847'}}
        >
            {text}
        </button>
    </div>
}