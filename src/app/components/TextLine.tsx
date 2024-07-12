import { TextLineProp } from "../utils/types"

const TextLine = ({ text }: TextLineProp) => {
    return (
        <div className=" w-full h-[20px] flex  items-center mt-5 px-3 overflow-hidden relative ">
            <h2 className=" absolute transform -translate-x-[20%] -translate-y-[10%] bg-white px-3   font-semibold dark:bg-black dark:text-slate-100 ">{text}</h2>

            <hr className=" border-[1px] border-solid w-full" />

        </div>
    )
}

export default TextLine