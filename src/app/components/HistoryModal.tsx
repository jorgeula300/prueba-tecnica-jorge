import { useAppSelector, useAppDispatch } from "@/redux/hooks"
import { setHistoryModal } from "@/redux/state/HistoryModal.slice"

const HistoryModal = () => {
    const history = useAppSelector(state => state.HistorySlice)
    const historyModal = useAppSelector(state => state.HistoryModalSlice)
    const dispatch = useAppDispatch()
    const handleCloseHistory = () => {
        dispatch(setHistoryModal())

    }
    return (
        <div className={` ${historyModal ? 'grid' : 'hidden'} fixed top-0 left-0 w-full min-h-[100vh] z-50 bg-[#0003] backdrop-blur-[2px] grid-cols-1 place-items-center px-3`}>

            <div className=" w-full max-w-[760px] bg-slate-100 dark:bg-black dark:text-slate-100 h-[400px] rounded-lg px-3 py-1 flex flex-col justify-between items-center relative">
                <h2 className=" text-center font-semibold">Search history</h2>
                <div className=" w-full h-[300px] overflow-y-scroll absolute px-3 py-2">
                    <ul>
                        {history?.map((historys, index) => (
                            <li key={index} className={` ${historys.text.length > 0 && historys.data.length > 0 ? 'flex' : 'hidden'} border-b border-slate-300 py-2 justify-between items-center`}><span>{historys.text}</span> <span>{historys.data}</span></li>
                        ))}
                    </ul>
                </div>

                <button onClick={handleCloseHistory} className=" bg-[#A046EA] px-2 text-slate-100 rounded-lg">Close History</button>

            </div>
        </div>
    )
}

export default HistoryModal