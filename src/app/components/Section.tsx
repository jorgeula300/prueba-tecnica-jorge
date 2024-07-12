'use client'
import Link from "next/link"
import MeaningTitle from "./MeaningTitle"
import TextLine from "./TextLine"
import { useFetch } from "../hooks/useFetch"
import { useAppSelector } from "@/redux/hooks"
import { useEffect } from "react"


const Section = () => {
    const search = useAppSelector(state => state.Searchslice)
    const { getData, data, error } = useFetch()
    useEffect(() => {
        getData(search)
    }, [search])

    return (
        <>
            <section className={` px-2 pt-4 space-y-4  ${error ? 'block' : 'hidden'}`}>

                <h2 className={` text-xl text-center font-bold text-[#A046EA]`}>{error?.title}</h2>
                <p className=" text-sm dark:text-slate-100">{error?.message}</p>
                <p className=" text-sm dark:text-slate-100">Try searching for another word.</p>

            </section>

            <section className={` px-2  ${error ? 'hidden' : 'block'}`}>


                {
                    data.map((data, index) => (
                        <div key={index}>
                            <div className=" flex justify-between items-center w-full  mt-3 relative">
                                <div className=" [&>h2]:text-lg [&>h2]:font-semibold [&>h2]:dark:text-slate-100">
                                    <h2>{data?.word}</h2>
                                    <div
                                        className=" w-full h-[20px] ">

                                    </div>
                                </div>

                                {data?.phonetics.map((data, index) => (
                                    <>
                                        <p className={` absolute transform -translate-x-[-2%] -translate-y-[-70%] text-sm text-[#A046EA] font-medium ${data.text && data.audio ? 'block' : 'hidden'}`}>{data.text}</p>

                                        <Link href={`${data.audio}`} key={index} className={` w-[40px] h-[40px] rounded-full bg-[#E9D0FA] hover:bg-[#c2acd2] dark:bg-slate-100 dark:hover:bg-slate-300 dark:opacity-100 opacity-50 grid grid-cols-1 place-items-center cursor-pointer ${data.text && data.audio ? 'block' : 'hidden'} `}>
                                            <i className='bx bx-play text-[#A046EA] text-2xl'></i>
                                        </Link>
                                    </>
                                ))}
                            </div>


                            <div className=" mb-11">
                                {
                                    data?.meanings.map((data, index) => (

                                        <div key={index}>

                                            <TextLine text={data.partOfSpeech} />

                                            <div className="px-3 mt-4 space-y-3">
                                                <MeaningTitle title="Meaning" />


                                                <ul className=" text-sm list-disc px-4 space-y-3 dark:text-slate-100">

                                                    {data.definitions.map((data, index) => (
                                                        <li key={index} >{data.definition}</li>
                                                    ))}
                                                </ul>

                                                {data.synonyms?.map((data, index) => (
                                                    <div key={index} className={` w-full text-sm space-x-4 mt-4 ${data?.length > 0 ? 'flex' : 'hidden'}`}>
                                                        <h2 className=" text-gray-700 dark:text-slate-100 opacity-70 font-medium">Synonims</h2>
                                                        <p className=" text-[#A046EA] font-semibold">{data}</p>
                                                    </div>
                                                ))}

                                                {
                                                    data.antonyms?.map((data, index) => (
                                                        <div key={index} className={` w-full text-sm space-x-4 mt-4 ${data?.length > 0 ? 'flex' : 'hidden'}`}>
                                                            <h2 className=" text-gray-700 dark:text-slate-100 opacity-70 font-medium">Antonims</h2>
                                                            <p className=" text-[#A046EA] font-semibold">{data}</p>
                                                        </div>
                                                    ))
                                                }

                                                {data?.definitions.map((data, index) => (
                                                    <div className={data.example ? 'block' : 'hidden'} key={index}>
                                                        <p className=" text-gray-700 dark:text-slate-100 opacity-70 text-sm">{`"${data.example}"`}</p>
                                                    </div>
                                                ))}



                                            </div>


                                        </div>


                                    ))
                                }
                            </div>

                            <div className="w-full space-y-4 pb-20">
                                <hr className=" mb-4" />
                                <MeaningTitle title="Source" />
                                <div className=" flex items-center space-x-2">
                                    <Link href={`${data?.sourceUrls}`} className="underline decoration-solid text-sm dark:text-slate-100">{data?.sourceUrls}</Link>
                                    <Link href={`${data?.sourceUrls}`}><i className='bx bx-link-external text-md text-gray-700 dark:text-slate-100 opacity-70' ></i></Link>
                                </div>

                            </div>
                        </div>
                    ))
                }



            </section>

        </>







    )
}

export default Section