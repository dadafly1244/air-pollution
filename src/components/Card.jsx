import React, { useState } from 'react'
import { gradeToKR, gradeToColor } from '~/src/utils/constants'
import { useSelector, useDispatch } from 'react-redux'
import {
  addFavorites,
  removeFavorite,
} from '~/src/store/slice/airPollutionSlice'

//item
function Card({ item }) {
  const dispatch = useDispatch()
  const [favorite, setFavorite] = useState(false)

  const handleClickFavorite = (item) => {
    if (favorite) {
      dispatch(removeFavorite(item.stationName))
    } else {
      dispatch(addFavorites(item))
    }
    setFavorite(!favorite)
  }
  return (
    <div className="m-2">
      <div
        className={
          'block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 ' +
          gradeToColor[item.pm10Grade]
        }
      >
        <div className="flex  justify-center items-baseline">
          <span className="mb-2 mr-2 text-2xl ">{item.stationName}</span>
          <span className="mb-2  text-l ">{item.sidoName}</span>
          <div className="grow"></div>
          <span
            className="material-symbols-rounded"
            onClick={() => {
              handleClickFavorite(item)
            }}
          >
            {favorite ? 'star' : 'grade'}
          </span>
        </div>
        <h5
          className={
            'mb-2 text-center text-4xl font-bold tracking-tight text-gray-900 dark:text-white'
          }
        >
          {gradeToKR[item.pm10Grade]}
        </h5>
        <p className="font-normal  text-center text-gray-700 dark:text-gray-400">
          미세먼지 수치 : {item.pm10Value}
        </p>
        <p className="font-normal  text-center text-gray-700 dark:text-gray-400">
          미세먼지 수치 : {item.dataTime}
        </p>
      </div>
    </div>
  )
}
export default Card
