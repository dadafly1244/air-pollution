import React, { useEffect } from 'react'
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
  useEffect(() => {
    if (airPollutionStatus === 'idle') {
      dispatch(fetchAirPollution('전국'))
    }
  }, [airPollutionStatus, dispatch])

  let content
  if (airPollutionStatus === 'loading') {
    content = <Loader />
  } else if (airPollutionStatus === 'succeeded') {
    content = favoritesArr
      ? favoritesArr?.map((airPollution) => (
          <Card key={airPollution.stationName} item={airPollution} />
        ))
      : allAirPollutions?.map((airPollution) => (
          <Card key={airPollution.stationName} item={airPollution} />
        ))
  } else if (airPollutionStatus === 'failed') {
    content = <p>{airPollutionError}</p>
  } else if (myAirPollution && airPollutionStatus === 'succeeded') {
    let filteredAirPollution = allAirPollutions.filter(myAirPollution)
    content = allAirPollutions?.map
  }
  return (
    <div>
      <DropDown />
      <section>
        <h2>전체 시도보기</h2>
        {content}
      </section>
    </div>
  )
}

export default Favorites
