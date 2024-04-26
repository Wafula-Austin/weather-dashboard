'use client'
import { useState , useEffect , useContext } from 'react'
import { FaLocationPin } from "react-icons/fa6"
import axios from 'axios'
import {SearchContext} from '../Context/contextProvider'
import { sortIcons } from './sortIcons'
import LiveClock from './dateTime'

export default function Forecast(){
    const { search , searchState , setLoading , loading } = useContext(SearchContext)

    useEffect(()=>{
        fetchForecastData()
    },[searchState])

    const [ allData , setAllData ] = useState()
    const mainWeather = allData?.main
    const currentWeather = allData?.weather

    const fetchForecastData = ()=>{
        try{
            axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=d0fe71f74aabfae4b728cc6258356876`).then(
                res=>setAllData(res.data),setLoading(true)
            )
        }
        catch(error){

        }
    }

    return(
        <div >
            {
                loading ? 
                <div className = 'flex flex-col justify-start gap-y-4 md:gap-y-8'>
                    <span className = 'flex items-center gap-x-[8px] font-semibold text-2xl antialiased'>
                        <h1 className = 'text-[#F5F5F5]'>Weather</h1>
                        <h1 className = 'text-[#66CC00]'>forecast</h1>
                    </span>
                    <div className = 'flex flex-col w-full rounded-xl bg-[#111B41]/20 px-4 py-4 md:px-8 md:py-10 gap-y-6'>
                        <span className = 'flex items-center justify-between'>
                            <h1 className = 'font-semibold text-xl text-[#F5F5F5] antialiased'>Today</h1>
                            <h1 className = 'font-light text-md text-[#BFC1C5] antialiased'><LiveClock timezone = {allData?.dts}/></h1>
                        </span>
                        <span className = 'flex items-center justify-between'>
                            <span className = 'flex flex-col justify-start gap-y-1'>
                                <span className = 'flex items-center gap-y-[3px] text-[#F5F5F5] font-bold text-4xl md:text-6xl antialiased'>{(mainWeather?.temp)?.toFixed(0)}<h1 className = 'text-[#66CC00] font-bold '>&deg;C</h1></span>
                                <h1 className = 'text-[#F5F5F5] antialiased font-semibold'>{currentWeather?.[0]?.description}</h1>
                            </span>
                            <div className = 'relative w-[110px] h-[75px]'>
                                {
                                    currentWeather?.map(
                                        (i)=>(
                                            <div key = {i?.id}>
                                                {sortIcons(i?.icon)}
                                            </div>
                                        )
                                    )
                                }
                            </div>
                        </span>
                        <span className = 'flex items-center gap-x-3'>
                            <FaLocationPin size = {20} className = 'text-[#66CC00]'/>
                            <h1 className = 'antialiased text-[#F5F5F5] text-md font-semibold'>{allData?.name} , {allData?.sys?.country}</h1>
                        </span>
                    </div>
                </div> : <div className = ''></div>
            }
            
        </div>
    )
}

