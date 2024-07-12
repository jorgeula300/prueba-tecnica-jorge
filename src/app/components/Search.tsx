'use client'
import { useForm, SubmitHandler } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { setSearch } from "@/redux/state/Search.slice";
import { setHistory } from "@/redux/state/History.slice";
import { HistoryData } from "../utils/types"

type Inputs = {
    search: string,
};


const Search = () => {
    const dispatch = useAppDispatch();


    const { register, handleSubmit, formState: { errors }, reset } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = data => {
        dispatch(setSearch(data.search))
        // mostrar historial con fecha y hora

        dispatch(setHistory({
            text: data.search,
            data: new Date().toLocaleDateString()
                + " / " + new Date().toLocaleTimeString()
        }))
        reset({ search: "" })

    };
    return (
        <form className=" w-full flex flex-col justify-center items-center" onSubmit={handleSubmit(onSubmit)}>
            {errors.search && <span className=" px-2 text-red-700">This field is required</span>}
            <div className="w-full flex justify-center items-center [&>input]:border [&>input]:border-solid [&>input]:w-[80%] 
[&>input]:h-[35px] [&>input]:rounded-l-lg [&>input]:border-r-0 
[&>button]:h-[35px] [&>button]:border  [&>button]:border-solid [&>button]:px-2 [&>button]:rounded-r-lg [&>button]:border-l-0">
                <input type="text" placeholder="Search" className="px-2 outline-none text-xs font-bold dark:bg-slate-100 dark:text-[#A046EA]  " {...register("search", { required: true })} />
                <button className=" grid grid-cols-1 place-items-center dark:bg-slate-100"><i className='bx bx-search text-[#8A61AC] text-center'></i></button>
            </div>
        </form>
    )
}

export default Search