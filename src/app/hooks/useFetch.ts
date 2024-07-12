import axios from "axios";
import { useEffect, useState } from "react"
import { apiData, apiError } from "../utils/types";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { setCheckModal } from "@/redux/state/CheckModal";



export const useFetch = () => {
    const [data,setData] = useState<apiData[]>([])
    const [error,setError] = useState<apiError>()
    const dispatch = useAppDispatch()
    const check = useAppSelector(state=>state.CheckModal)
    const url = 'https://api.dictionaryapi.dev/api/v2/entries/en/';
    useEffect(()=>{
        setTimeout(()=>{
            dispatch(setCheckModal(false))
        },3000)
    },[check])
    const getData = (search:string) => {

        axios
        .get(url + search)
        .then((response) => {
            setData(response.data)
            dispatch(setCheckModal(true))
            setError(undefined)
        })
        .catch((error) => {setError(error.response.data)
            console.log(error.response.data)
        });
    };
    return {getData,data,error};
};
