'use client'
import React , {useState} from 'react'
import LeftComponent from './left'
import RightComponent from './right'
import {SearchContext} from '../Context/contextProvider'

export default function Hero() {
  const [ search , setSearch ] = useState("Nairobi")
  const [ searchState , setSearchState ] = useState(false)
  const [ loading , setLoading ] = useState(false)
  return (
    <SearchContext.Provider value = {{ search , setSearch , searchState , setSearchState , loading , setLoading }}>
      <div className = 'md:flex md:items-center'>
          <LeftComponent/>
          <RightComponent/>
      </div>
    </SearchContext.Provider>
  )
}
