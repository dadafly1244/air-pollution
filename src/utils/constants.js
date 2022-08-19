const SIDO_ARR = [
  '전체',
  '서울',
  '부산',
  '대구',
  '인천',
  '광주',
  '대전',
  '울산',
  '경기',
  '강원',
  '충북',
  '충남',
  '전북',
  '전남',
  '경북',
  '경남',
  '제주',
  '세종',
]

const gradeToKR = {
  1: '좋음',
  2: '보통',
  3: '한때나쁨',
  4: '나쁨',
  5: '매우나쁨',
}

const gradeToColor = {
  1: 'bg-green-500',
  2: 'bg-blue-500',
  3: 'bg-red-300',
  4: 'bg-red-500',
  5: 'bg-red-800',
}
export { SIDO_ARR, gradeToKR, gradeToColor }
