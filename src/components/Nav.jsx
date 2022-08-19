import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'

function Nav() {
  // const location = useLocation()

  let activeStyle = {
    color: 'rgb(6, 182, 212)',
    // textDecoration: 'underline',
  }

  return (
    <nav className="flex items-center justify-center fixed inset-x-0 bottom-1  ">
      <ul className="inline-flex rounded-md shadow-sm">
        <li className="">
          <NavLink
            to="/myarea"
            className="py-2 px-4 text-sm font-medium text-cyan-700 bg-white rounded-l-lg border border-gray-200 hover:bg-gray-100  dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white flex items-center justify-center flex-col"
            style={({ isActive }) => (isActive ? activeStyle : null)}
          >
            <span className="material-symbols-rounded">home_pin</span>
            <span>내 지역보기</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/"
            className="py-2 px-4 text-sm font-medium text-cyan-700 bg-white border border-gray-200 hover:bg-gray-100  dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white flex items-center justify-center flex-col"
            style={({ isActive }) => (isActive ? activeStyle : null)}
          >
            <span className="material-symbols-rounded  ">map</span>
            <span>전체 시도보기</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/favorites"
            className="py-2 px-4 text-sm font-medium text-cyan-700 bg-white rounded-r-lg border border-gray-200 hover:bg-gray-100  dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white flex items-center justify-center flex-col"
            style={({ isActive }) => (isActive ? activeStyle : null)}
          >
            <span className="material-symbols-rounded  ">star</span>
            <span>즐겨찾기</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
