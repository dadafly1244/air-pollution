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

  // useEffect(() => {
  //   favoritesArr.map((element) => element.isFavorite)
  // }, [favoritesArr])

  // useEffect(() => {}, [content])

  // if (airPollutionStatus === 'loading') {
  //   useContent()
  // } else if (airPollutionStatus === 'succeeded') {
  //   const concontent = favoritesArr
  //     ? favoritesArr?.map((airPollution) => (
  //         <Card key={airPollution.stationName} item={airPollution} />
  //       ))
  //     : allAirPollutions?.map((airPollution) => (
  //         <Card key={airPollution.stationName} item={airPollution} />
  //       ))
  //   useContent(concontent)
  // } else if (airPollutionStatus === 'failed') {
  //   useContent(<p>{airPollutionError}</p>)
  // }
  // else if (myAirPollution && airPollutionStatus === 'succeeded') {
  //   let filteredAirPollution = allAirPollutions.filter(myAirPollution)
  //   content = allAirPollutions?.map
  // }
  return (
    <div>
      <DropDown />
      <section>
        <h2>전체 시도보기</h2>
        {content}

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
