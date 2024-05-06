'use client'
import React , {useContext} from 'react'
import {SearchContext} from '../Context/contextProvider'
import { FiSearch } from "react-icons/fi"
import FixedLocations from './fixedLocations'

export default function LeftComponent(){

    const { setSearch , setSearchState , searchState } = useContext(SearchContext)
   
    return(
        <div className = 'w-full h-screen bg-[#111B41] px-6 py-4 md:px-[40px] md:py-[24px] flex flex-col justify-start gap-3 md:gap-6'>
            <span className = 'font-semibold text-xl md:text-2xl text-[#F5F5F5] antialiased flex items-center'>Ap<p className = 'text-[#66CC00]'>Weather</p></span>
            <div className='mx-4 md:mx-10'>
                <div className = 'relative mb-4 md:mb-6'>
                    <FiSearch onClick = {()=>{setSearchState(!searchState)}} size = {20} className = 'text-[#BFC1C5] absolute top-4 right-3 active:scale-110 transition-all cursor-pointer'/>
                    <input 
                        onChange={(event)=>{setSearch(event.target.value)}} 
                        placeholder = 'Search location'
                        type = 'text' 
                        className = 'bg-[#192861] rounded-lg h-14 w-full pl-8 md:pl-10 placeholder:text-[#BFC1C5] text-slate-200 focus:outline-none'
                    />   
                </div>
                <FixedLocations/>
            </div>
        </div>
    )
}