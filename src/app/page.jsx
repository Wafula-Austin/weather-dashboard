'use client'
import React , {useState} from 'react';
import Hero from './components/hero'
import ProvideContext from './Context/contextProvider'

export default function Page(){
  return(
      <div className='s'>
        <Hero/>
      </div>
  )
}