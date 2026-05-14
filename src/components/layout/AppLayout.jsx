import React from 'react'
import Headers from '../ui/Headers'
import Footers from '../ui/Footers'
import { Outlet } from 'react-router-dom'

function AppLayout() {
  return (
    <div>
        <Headers />

        <Outlet/>

        <Footers />
    </div>
  )
}

export default AppLayout