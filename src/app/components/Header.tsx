'use client'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { setDarkMode } from '@/redux/state/DarkMode.slice'
import { setFont } from '@/redux/state/Font.slice'
import { setHistoryModal } from '@/redux/state/HistoryModal.slice'

const Header = () => {
    const dispatch = useAppDispatch()
    const darkMode = useAppSelector((state) => state.DarkModeSlice)
    const handleDarckMode = () => {
        dispatch(setDarkMode(!darkMode))
    }


    const selectFont = (e: React.ChangeEvent<HTMLSelectElement>) => {
        dispatch(setFont(e.target.value))
    }

    const handleHistoryModal = () => {
        dispatch(setHistoryModal())
    }


    return (
        <header className=" flex justify-between items-center w-full h-[50px]  px-3" >
            <i onClick={handleHistoryModal} className='bx bx-book text-3xl text-gray-700 dark:text-[#A046EA] dark:opacity-100 opacity-70 cursor-pointer'></i>

            <div className=" flex justify-center items-center space-x-4 relative">
                <div className=' flex justify-center items-center '>
                    <select className="max-w-[60px] appearance-none outline-none cursor-pointer dark:text-slate-100 dark:bg-black " onChange={selectFont}>
                        <option value="font-serif">Serif</option>
                        <option value="font-sans">Sans serif</option>
                        <option value="font-mono">monospace</option>
                    </select>
                    <i className='bx bx-chevron-down text-xl absolute transform -translate-x-[-100%] -translate-y-[10%]  text-[#A046EA] pointer-events-none bg-white  dark:bg-black '></i>

                </div>
                <hr className=" border border-gray-700 dark:border-slate-100 dark:opacity-100 opacity-50  h-[25px] " />

                <div className=" flex justify-center items-center space-x-5">

                    <div onClick={handleDarckMode} className=" w-[35px] h-[16px] bg-gray-700 dark:bg-slate-100 dark:opacity-100 opacity-70 rounded-xl px-[10px] py-[5px] grid grid-cols-1 place-items-center justify-items-center relative cursor-pointer">
                        <div className={` w-[14px] h-[14px] rounded-full bg-white dark:bg-black border border-solid border-white dark:border-black transition-transform transform ${darkMode ? '-translate-x-[-50%]' : '-translate-x-[50%]'}  -translate-y-[30%] `}></div>
                    </div>

                    {
                        darkMode ?
                            <i onClick={handleDarckMode} className='bx bx-sun text-slate-100 opacity-100  text-xl animate-spin animate-thrice cursor-pointer' ></i> :
                            <i onClick={handleDarckMode} className='bx bx-moon text-gray-700 opacity-70 text-xl animate-bounce animate-thrice  cursor-pointer ' ></i>}

                </div>

            </div>

        </header>
    )
}

export default Header