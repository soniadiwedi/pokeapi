import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Listing } from './Listing'
import { SearchPage } from './SearchPage'
import { Details } from './Details'
import { Bookmark } from './Bookmark'







export const AllRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Listing/>} />
      <Route path='/search' element={<SearchPage/>} />
      <Route path='/details/:id' element={<Details/>} />
      <Route path='bookmark' element={<Bookmark/>} />
      
      
    </Routes>
  )
}
