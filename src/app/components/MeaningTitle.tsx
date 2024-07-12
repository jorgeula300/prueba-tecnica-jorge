import { MeaningTitleProp } from "../utils/types"
const MeaningTitle = ({ title }: MeaningTitleProp) => {
    return (
        <h2 className=" text-gray-700 opacity-70 dark:text-[#A046EA] dark:opacity-100">{title}</h2>
    )
}

export default MeaningTitle