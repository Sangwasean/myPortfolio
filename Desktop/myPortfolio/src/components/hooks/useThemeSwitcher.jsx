import React, { useEffect, useState } from "react";
const useThemeSwitcher = () => {
    const preferDarkQuery=("prefer-color-scheme: dark");
    const [mode,setMode]=useState("");

    useEffect(()=>{
        const mediaQuery= window.matchMedia(preferDarkQuery);
        const userPref=window.localstorage.getItem("theme");
        const handleChange=()=>{
            if(userPref){
                let check=userPref =="dark" ? "dark" : "light";
                setMode(check);
                if(check ==="dark"){
                    document.getElement.classList.add("dark")

                }else{
                    document.getElement.classList.remove("dark")
                } 
            }else{
                let check=mediaQuery.matches ? "dark":"light";
                setMode(check);
                if(check ==="dark"){
                    document.getElement.classList.add("dark")

                }else{
                    document.getElement.classList.remove("dark")
                }
            }
        }

        mediaQuery.addEventListener("change",handleChange)

        return ()=> mediaQuery.removeEventListener("change",handlechange)
    },[])

    useEffect(()=>{
        if(mode === "dark"){
            window.localStorage.setItem("theme","dark");
            document.getElement.classList.add("dark")
        }
    },[mode])

    return[mode,setMode]
}
 
export default useThemeSwitcher;