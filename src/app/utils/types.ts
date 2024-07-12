export type TextLineProp = {
    text:string
}

export type MeaningTitleProp = {
    title:string | string[]
}


export interface apiData {
    word: string
    phonetic:string
    phonetics: Phonetic[]
    meanings: Meaning[]
    license: License
    sourceUrls: string[]
}

export interface Meaning {
    partOfSpeech: string
    definitions: Definition[]
    synonyms?: string[]
    antonyms?: string[]
}
export interface Definition {
    definition: string
    synonyms?: string[]
    antonyms?: string[]
    example?: string
}

export interface Phonetic {
    text: string
    audio?: string
    sourceUrl?: string
    license?: License
}
export interface License {
    name: string
    url: string
}


export interface apiError {
    title: string
    message: string
    resolution: string
}


export interface HistoryData {
    text: string
    data: string
}