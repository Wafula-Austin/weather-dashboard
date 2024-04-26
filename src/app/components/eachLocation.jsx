'use client'
import { useState , useEffect , useContext } from 'react'
import axios from 'axios'
import { sortIcons } from './sortIcons'
import {SearchContext} from '../Context/contextProvider'


export default function EachLocation({location}){

    useEffect(()=>{
        fetchLocationData()
    },[])

    const { setLoading } = useContext(SearchContext)
    const api_key = process.env.WEATHER_API_KEY
    const [ allData , setAllData ] = useState()
    const currentWeather = allData?.weather
    const mainWeather = allData?.main

    const fetchLocationData = ()=>{
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=d0fe71f74aabfae4b728cc6258356876`)
        .then(response=>setAllData(response.data) , setLoading(true))
    }
    return(
            <div>
              {       
                currentWeather?.map(
                    (current)=>(
                        <div key = {current?.id} className = 'cursor-pointer px-4 py-6 bg-[#192861] rounded-xl text-[#F5F5F5] flex flex-col'>
                            <div className = 'flex justify-between items-center'>
                                <span className='flex flex-col gap-1 justify-start'>
                                    <span className='flex items-center gap-x-[2px]'>
                                        <h1 className='font-bold text-2xl'>{(mainWeather?.temp).toFixed(0)}</h1>
                                        <h1 className='text-[#66CC00] font-semibold'>&deg;C</h1>
                                    </span>
                                    <h1 className = 'text-[#BFC1C5]'>{current?.description}</h1>
                                </span>
                                <div className = 'relative w-[55px] h-[37px]'>{sortIcons(current?.icon)}</div>
                            </div>
                            <h1>{location}</h1>
                        </div>
                    )
                )
              }
        </div> 
          
          )
}

/*
                          
{
  "coord": {
    "lon": 10.99,
    "lat": 44.34
  },
  "weather": [
    {
      "id": 501,
      "main": "Rain",
      "description": "moderate rain",
      "icon": "10d"
    }
  ],
  "base": "stations",
  "main": {
    "temp": 298.48,
    "feels_like": 298.74,
    "temp_min": 297.56,
    "temp_max": 300.05,
    "pressure": 1015,
    "humidity": 64,
    "sea_level": 1015,
    "grnd_level": 933
  },
  "visibility": 10000,
  "wind": {
    "speed": 0.62,
    "deg": 349,
    "gust": 1.18
  },
  "rain": {
    "1h": 3.16
  },
  "clouds": {
    "all": 100
  },
  "dt": 1661870592,
  "sys": {
    "type": 2,
    "id": 2075663,
    "country": "IT",
    "sunrise": 1661834187,
    "sunset": 1661882248
  },
  "timezone": 7200,
  "id": 3163858,
  "name": "Zocca",
  "cod": 200
}                        
                        
 */