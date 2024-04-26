'use client'
import { useState , useEffect , useContext} from 'react'
import { TbWind } from "react-icons/tb"
import { MdVisibility } from "react-icons/md"
import { LuWaves } from "react-icons/lu"
import { FaTemperatureHalf } from "react-icons/fa6"
import axios from 'axios'
import { SearchContext } from '../Context/contextProvider'

export default function Overview(){

    const { search , searchState , setLoading , loading } = useContext(SearchContext)

    useEffect(()=>{
        fetchForecastData()
    },[searchState])

    const [ allData , setAllData ] = useState()
    const mainWeather = allData?.main
    const currentWind = allData?.wind

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
        <div className = 'flex flex-col justify-start gap-y-3'>
            <h1 className = 'text-[#BFC1C5] font-semibold text-xl antialiased'>Today&apos;s Overview</h1>
            {
              loading ? 
              <div className = 'grid grid-cols-2 gap-4'>
              <div className = 'flex items-center gap-x-2 p-8 md:p-6 bg-[#111B41] rounded-xl shadow-md shadow-zinc-900'>
                  <TbWind size = {32} className = 'text-[#66CC00]'/>
                  <span className = 'flex flex-col justify-start gap-y-1'>
                      <h1 className = 'text-[#BFC1C5] font-semibold text-md'>Wind Speed</h1>
                      <h1 className = 'font-semibold text-xl text-[#F5F5F5]'>{currentWind?.speed} km/h</h1>
                  </span>
              </div>
              <div className = 'flex items-center gap-x-3 p-8 md:p-6 bg-[#111B41] rounded-xl shadow-md shadow-zinc-900'>
                  <LuWaves size = {32} className = 'text-[#66CC00]'/>
                  <span className = 'flex flex-col justify-start gap-y-1'>
                      <h1 className = 'text-[#BFC1C5] font-semibold text-md'>Pressure</h1>
                      <h1 className = 'font-semibold text-xl text-[#F5F5F5]'>{mainWeather?.pressure} pa</h1>
                  </span>
              </div>
              <div className = 'flex items-center gap-x-2 p-8 md:p-6 bg-[#111B41] rounded-xl shadow-md shadow-zinc-900'>
                  <FaTemperatureHalf size = {32} className = 'text-[#66CC00]'/>
                  <span className = 'flex flex-col justify-start gap-y-1'>
                      <h1 className = 'text-[#BFC1C5] font-semibold text-md'>Feels like</h1>
                      <h1 className = 'font-semibold text-xl text-[#F5F5F5]'>{(mainWeather?.feels_like)?.toFixed(0)}&deg;C</h1>
                  </span>
              </div>
              <div className = 'flex items-center gap-x-3 p-8 md:p-6 bg-[#111B41] rounded-xl shadow-md shadow-zinc-900'>
                  <MdVisibility size = {32} className = 'text-[#66CC00]'/>
                  <span className = 'flex flex-col justify-start gap-y-1'>
                      <h1 className = 'text-[#BFC1C5] font-semibold text-md'>Visibility</h1>
                      <h1 className = 'font-semibold text-xl text-[#F5F5F5]'>{(allData?.visibility)/1000} km</h1>
                  </span>
              </div>
          </div>
                 : <div></div>
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