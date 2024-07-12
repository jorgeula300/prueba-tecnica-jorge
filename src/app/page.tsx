'use client'
import { useEffect } from "react";
import Header from "./components/Header";
import HistoryModal from "./components/HistoryModal";
import Search from "./components/Search";
import Section from "./components/Section";
import { useAppSelector, useAppDispatch } from "@/redux/hooks";
import { setDarkMode } from "@/redux/state/DarkMode.slice";

export default function Home() {
  const font = useAppSelector((state) => state.FontSlice)
  const darkMode = useAppSelector((state) => state.DarkModeSlice)
  const dispatch = useAppDispatch()
  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme:dark)").matches) {
      dispatch(setDarkMode(true))
    }
  }, [])

  return (<div className={`${font} w-full min-h-[100vh] ${darkMode ? 'dark' : 'ligh'}  dark:bg-black`}>

    <div className=" w-full max-w-[760px] min-h-[100vh] mx-auto">
      <Header />
      <Search />
      <Section />
      <HistoryModal />
    </div>
  </div>
  );
}
