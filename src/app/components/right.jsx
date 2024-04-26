'use client'
import { FaGithub } from "react-icons/fa"
import React , {useContext} from 'react'
import {SearchContext} from '../Context/contextProvider'
import Forecast from './forecast'
import Overview from './overview'

export default function RightComponent(){

    const GithubLink = ()=>(
        <a className = 'absolute right-3' href = 'https://github.com/Wafula-Austin/weather-dashboard' target = '_blank' rel = 'noopener noreferrer'>
            <FaGithub size = {26} className = 'text-[#F5F5F5] hover:text-zinc-600/70'/>
        </a>
    )
    return(
        <div className = 'w-full h-screen bg-[#192861] flex flex-col px-6 py-4 md:px-[80px] md:py-[24px] gap-y-4 md:gap-y-2 relative'>
            <GithubLink/>
            <Forecast/>
            <Overview/>
        </div>
    )
}

