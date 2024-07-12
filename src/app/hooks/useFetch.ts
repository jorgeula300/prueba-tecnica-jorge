import axios from "axios";
import { useState } from "react"
import { apiData, apiError } from "../utils/types";



export const useFetch = () => {
    const [data,setData] = useState<apiData[]>([])
    const [error,setError] = useState<apiError>()
    const url = 'https://api.dictionaryapi.dev/api/v2/entries/en/';
    const getData = (search:string) => {

        axios
        .get(url + search)
        .then((response) => {
            setData(response.data)
            setError(undefined)
        })
        .catch((error) => {setError(error.response.data)
            console.log(error.response.data)
        });
    };
    return {getData,data,error};
};
