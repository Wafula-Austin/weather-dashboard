'use client'
import { useState } from 'react'
import EachLocation from './eachLocation'

export default function FixedLocations(){
    return(
        <div className = 'grid grid-cols-2 gap-4'>
            <EachLocation location = 'Garissa'/>
            <EachLocation location = 'Kisumu'/>
            <EachLocation location = 'Eldoret'/>
            <EachLocation location = 'Mombasa'/>
            <EachLocation location = 'Nakuru'/>
        </div>
    )
}