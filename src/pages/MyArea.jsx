import React, { useEffect } from 'react'
import Card from '~/src/components/Card'
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
function MyArea() {
  const dispatch = useDispatch()
  const allAirPollutions = useSelector(getAllAirPollutions)
  const airPollutionStatus = useSelector(getAirPollutionStatus)
  const airPollutionError = useSelector(getAirPollutionError)
  const myAirPollution = useSelector(getMyAirPollution)

  useEffect(() => {
    if (airPollutionStatus === 'idle') {
      dispatch(fetchAirPollution('전국'))
    }
  }, [airPollutionStatus, dispatch])

  return (
    <div>
      <DropDown />
      <section>
        <h2>내 지역보기</h2>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:gap-4">
          {airPollutionStatus === 'loading' && <Loader />}
          {(airPollutionStatus === 'succeeded' && myAirPollution && (
            <Card key={myAirPollution.stationName} item={myAirPollution} />
          )) ||
            allAirPollutions?.map((airPollution) => (
              <Card key={airPollution.stationName} item={airPollution} />
            ))}
          {airPollutionStatus === 'failed' && <p>{airPollutionError}</p>}
        </div>
      </section>
    </div>
  )
}

export default MyArea
