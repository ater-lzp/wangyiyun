import React from 'react'
import { Outlet } from "react-router";
export default function index() {
  return (
    <div>
      你好
      <Outlet />
    </div>
  )
}
