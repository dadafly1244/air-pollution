import React, { useEffect, useState } from 'react'
import { gradeToKR, gradeToColor } from '~/src/utils/constants'
import { useLocation } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import {
  addFavorites,
  removeFavorite,
} from '~/src/store/slice/airPollutionSlice'

//item
function Card({ item, isFavorite = false }) {
  const location = useLocation()
  const currentPath = location.pathname
  const dispatch = useDispatch()
  const [favorite, setFavorite] = useState(false)

  //처음 렌더링 될때 만약 favorites 페이지라면
  useEffect(() => {
    if (currentPath === '/favorites') {
      setFavorite(true)
    }
  }, [])

  useEffect(() => {
    if (item.isFavorite === true) {
      setFavorite(true)
    } else {
      setFavorite(false)
    }
  }, [item.isFavorite])

  const handleClickFavorite = async (item) => {
    if (favorite) {
      await dispatch(removeFavorite(item.stationName))
      console.log('삭제!!')
    } else {
      await dispatch(addFavorites(item))
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
          {item.pm10Grade ? gradeToKR[item.pm10Grade] : '정보없음'}
        </h5>
        <p className="font-normal  text-center text-gray-700 dark:text-gray-400">
          미세먼지 수치 : {item.pm10Value !== '-' ? item.pm10Value : '측정불가'}
        </p>
        <p className="font-normal  text-center text-gray-700 dark:text-gray-400">
          미세먼지 수치 : {item.dataTime}
        </p>
      </div>
    </div>
  )
}
export default Card
