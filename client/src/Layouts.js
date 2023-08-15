import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'

export default function Layouts() {
  return (
    <main>
        <Header />
        <Outlet />
    </main>
  )
}
