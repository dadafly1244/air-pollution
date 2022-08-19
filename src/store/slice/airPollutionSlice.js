import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const AIR_POLLUTION_URL =
  '/api/B552584/ArpltnInforInqireSvc/getCtprvnRltmMesureDnsty'

const initialState = {
  airPollutionArr: [],
  myAreaAir: null,
  favoritesAirPollutionArr: [],
  status: 'idle', //'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
}

export const fetchAirPollution = createAsyncThunk(
  'fetchAirPollution',
  async (sidoName, pageNo) => {
    try {
      const response = await axios.get(AIR_POLLUTION_URL, {
        params: {
          sidoName,
          serviceKey: import.meta.env.VITE_DE_KEY,
          returnType: 'json',
          numOfRows: '100',
          pageNo,
          ver: '1.0',
        },
      })
      return response.data.response.body.items.map((element) => {
        return { ...element, isFavorite: false }
      })
    } catch (error) {
      return error.message
    }
  },
)

const airPollutionSlice = createSlice({
  name: 'airPollution',
  initialState,
  //reducers이다! 오타주의!
  reducers: {
    // payload: stationName
    setMyArea(state, action) {
      const myArea = state.airPollutionArr.find(
        // 판별 함수를 만족하는 첫번째 값(객체)를 반환
        (element) => element.stationName === action.payload,
      )
      if (!myArea) return //반환값이 undefined라면 함수 종료
      state.myAreaAir = myArea
    },
    //payload:airPollutiondata
    addFavorites(state, action) {
      state.favoritesAirPollutionArr.push({
        ...action.payload,
        isFavorite: true,
      })
    },
    //payload:stationName
    removeFavorite(state, action) {
      const favoriteAirPollutionData = state.airPollutionArr.find(
        //존재하고 있는 데이터인지확인
        (element) => element.stationName === action.payload,
      )
      if (!favoriteAirPollutionData) return //데이터가 없다면 종료
      favoriteAirPollutionData.isFavorite = false // 데이터가 있다면 즐겨찾기 해제
      state.favoritesAirPollutionArr.filter(
        // 즐겨찾기 배열에서 제거
        (element) => element.stationName !== action.payload,
      )
    },
  },
  extraReducers(builder) {
    //비동기 액션에 대한 리듀서 // slice.actions에 생성되지 않음.
    builder
      .addCase(fetchAirPollution.pending, (state, action) => {
        state.status = 'loading'
        //로딩중이라면
      })
      .addCase(fetchAirPollution.fulfilled, (state, action) => {
        state.status = 'succeeded'
        //성공했다면
        state.airPollutionArr = action.payload
        console.log(' state.airPollutionArr', state.airPollutionArr)
      })
      .addCase(fetchAirPollution.rejected, (state, action) => {
        state.status = 'failed'
        //실패했다면
        state.error = action.error.message
      })
  },
})

export default airPollutionSlice.reducer

export const getAllAirPollutions = (state) => state.airPollution.airPollutionArr
export const getAirPollutionStatus = (state) => state.airPollution.status
export const getAirPollutionError = (state) => state.airPollution.error
export const getFavorites = (state) =>
  state.airPollution.favoritesAirPollutionArr
export const getMyAirPollution = (state) => state.airPollution.myAreaAir

export const { setMyArea, addFavorites, removeFavorite } =
  airPollutionSlice.actions
