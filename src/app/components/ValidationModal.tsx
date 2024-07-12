import { useAppSelector } from "@/redux/hooks"

const ValidationModal = () => {
    const modal = useAppSelector(state => state.CheckModal)
    return (
        <div className={` ${modal ? 'flex' : 'hidden'} fixed bottom-0 right-0 rounded-tl-lg w-full max-w-[200px] min-h-[50px] z-50  bg-[#0003] dark:bg-slate-100  text-2xl  justify-center items-center space-x-3 text-green-600 font-semibold  `}><i className='bx bx-check-circle '></i> <span>Found</span></div>
    )
}

export default ValidationModal