import React, { useEffect, useState } from 'react'
import DropDown from '~/src/components/DropDown'
import { useDispatch, useSelector } from 'react-redux'
import {
  getAllAirPollutions,
  getAirPollutionStatus,
  getAirPollutionError,
  getFavorites,
  getMyAirPollution,
  addFavorites,
  removeFavorite,
} from '~/src/store/slice/airPollutionSlice.js'
import Loader from '~/src/components/Loader'
import { fetchAirPollution } from '~/src/store/slice/airPollutionSlice'
import Card from '~/src/components/Card'

function Favorites() {
  const dispatch = useDispatch()
  const allAirPollutions = useSelector(getAllAirPollutions)
  const airPollutionStatus = useSelector(getAirPollutionStatus)
  const airPollutionError = useSelector(getAirPollutionError)
  const myAirPollution = useSelector(getMyAirPollution)
  const favoritesArr = useSelector(getFavorites)
  const [content, useContent] = useState(null)

  useEffect(() => {
    if (airPollutionStatus === 'idle') {
      dispatch(fetchAirPollution('전국'))
    }
  }, [airPollutionStatus, dispatch])

  return (
    <div>
      <DropDown />
      <section>
        <h2>즐겨찾기</h2>
        {/* <div className='grid grid-cols-4 gap-4' >

        </div> */}
        {airPollutionStatus === 'loading' && <Loader />}
        {(airPollutionStatus === 'succeeded' &&
          favoritesArr &&
          favoritesArr?.map((airPollution) => (
            <Card key={airPollution.stationName} item={airPollution} />
          ))) || <p>즐겨찾기 목록이 없습니다 ㅠㅠ</p>}

        {airPollutionStatus === 'failed' && <p>{airPollutionError}</p>}
      </section>
    </div>
  )
}

export default Favorites
