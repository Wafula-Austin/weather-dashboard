'use client'
import { useState , useEffect } from 'react'
import clearDay from '../resources/01.png'
import clearNight from '../resources/01n.png'
import fewCloudsDay from '../resources/02.png'
import fewCloudsNight from '../resources/02n.png'
import scatteredClouds from '../resources/03.png'
import brokenClouds from '../resources/04.png'
import showerRain from '../resources/09.png'
import rainyDay from '../resources/10d.png'
import rainyNight from '../resources/10n.png'
import thunderStorm from '../resources/11.png'
import snow from '../resources/13.png'
import mist from '../resources/50.png'
import Image from 'next/image'

export const sortIcons = (icon)=>{
    if( icon == '01d'){
        return <Image src = {clearDay} fill objectFit = 'contain'/>
    } else if( icon == '01n'){
        return <Image src = {clearNight} fill objectFit = 'contain'/>
    } else if( icon == '02d'){
        return <Image src = {fewCloudsDay} fill objectFit = 'contain'/>
    } else if( icon == '02n'){
        return <Image src = {fewCloudsNight} fill objectFit = 'contain'/>
    } else if( icon == '03n'|| icon == '03d'){
        return <Image src = {scatteredClouds} fill objectFit = 'contain'/>
    } else if( icon == '04n'|| icon == '04d'){
        return <Image src = {brokenClouds} fill objectFit = 'contain'/>
    } else if( icon == '09n'|| icon == '09d'){
        return <Image src = {showerRain} fill objectFit = 'contain'/>
    } else if( icon == '10d'){
        return <Image src = {rainyDay} fill objectFit = 'contain'/>
    } else if( icon == '10n'){
        return <Image src = {rainyNight} fill objectFit = 'contain'/>
    } else if( icon == '11n'|| icon == '11d'){
        return <Image src = {thunderStorm} fill objectFit = 'contain'/>
    } else if( icon == '13n'|| icon == '13d'){
        return <Image src = {snow} fill objectFit = 'contain'/>
    } else if( icon == '50n'|| icon == '50d'){
        return <Image src = {mist} fill objectFit = 'contain'/>
    }
}