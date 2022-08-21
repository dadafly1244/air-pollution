import React, { useState } from 'react'
import { SIDO_ARR } from '~/src/utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import {
  getAllAirPollutions,
  getMyAirPollution,
  setMyArea,
  getFilteredAirPollutionData,
  setFilteredAirPollutionArr,
} from '~/src/store/slice/airPollutionSlice'

function DropDown() {
  const [isSidoSeleted, setIsSidoSeleted] = useState(false)
  const [isGunguSeleted, setIsGunguSeleted] = useState(false)
  const dispatch = useDispatch()
  const allAirPollutions = useSelector(getAllAirPollutions)
  const myAirPollution = useSelector(getMyAirPollution)
  const filteredAirPollution = useSelector(getFilteredAirPollutionData)
  const [filteredSidoData, SetFilteredSidoData] = useState([])
  const [filteredGunguData, setFilteredGunguData] = useState([])

  const handleSidoChange = (e) => {
    console.log(e.target.value)
    if (e.target.value === '전체') {
      setIsSidoSeleted(false)
      console.log('allAirPollutions', allAirPollutions)
    } else {
      setIsSidoSeleted(true)
      SetFilteredSidoData(
        allAirPollutions.filter(
          (element) => element.sidoName === e.currentTarget.value,
        ),
      )
      dispatch(setFilteredAirPollutionArr(filteredSidoData))
      console.log('filteredAirPollution', filteredAirPollution)
    }
  }

  const handleGunguChange = (e) => {
    if (e.currentTarget.value === '군구') {
      setIsGunguSeleted(false)
      return
    } else {
      console.log(e.currentTarget.value)
      dispatch(setMyArea())
    }
  }
  return (
    <div className="flex justify-center items-center m-2">
      <label htmlFor="sido" className="text-sm mr-2">
        시/도 :
      </label>
      <select
        onChange={handleSidoChange}
        name="sido"
        id="sido"
        className="z-10 w-20 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 text-center"
      >
        {SIDO_ARR.map((sido, index) => (
          <option
            key={index}
            className="text-sm block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
          >
            {sido}
          </option>
        ))}
      </select>
      {isSidoSeleted && (
        <div>
          <label htmlFor="gungu">군구</label>
          <select id="gungu" name="gungu" onChange={handleGunguChange}>
            <option key={'군구'}>군구</option>
            {filteredSidoData?.map((airPollutionData) => (
              <option key={airPollutionData.stationName}>
                {airPollutionData.stationName}
              </option>
            ))}
          </select>
        </div>
      )}
    </div>
  )
}

export default DropDown
