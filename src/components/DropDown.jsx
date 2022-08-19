import React from 'react'
import { SIDO_ARR } from '~/src/utils/constants'
function DropDown() {
  return (
    <div className="flex justify-center items-center m-2">
      <label htmlFor="sido" className="text-sm mr-2">
        시/도 :
      </label>
      <select
        name="sido"
        id="sido"
        className="z-10 w-20 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 text-center"
      >
        <option
          key={'시도'}
          className="text-sm block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
        >
          전체
        </option>
        {SIDO_ARR.map((sido, index) => (
          <option
            key={index}
            className="text-sm block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
          >
            {sido}
          </option>
        ))}
      </select>
      {/* <label htmlFor="gungu">군구</label>
      <select id="gungu" name="gungu">
        <option key={'군구'}>군구</option>
        <option key={'군구'}>군구</option>
      </select> */}
    </div>
  )
}

export default DropDown
