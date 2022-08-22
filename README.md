# 미세먼지

**[필수 요구 사항]**

0. 미세먼지 정보는 axios를 통해서 api에서 받아와야합니다. (useEffect 등을 통해서, 사용자가 카드를 보려고 하면 api에 요청을 보내서 데이터를 받아오도록) :heavy_check_mark:

- **개발하실 때는 우선 제공해드리는 서울 미세먼지 정보 데이터인 data.json를 활용해서 개발을 완료하시고, 이후에 api를 통해서 받아오도록 수정하시는 것을 추천드립니다! (환경공단의 미세먼지 api 서버가 불안정한 경우가 있어서, 개발 속도를 늦출 수 있기 때문입니다!)**
  [data.json](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/6dd85928-7919-46c7-ab66-0931df3fe4aa/data.json)

1. 미세먼지 정보를 표시하기 위한 카드 형태의 컴포넌트 제작 :heavy_check_mark:

1-1. 카드 컴포넌트에서 styled-component 혹은 sass 등을 적절히 활용하여, props에 따라 배경색, 글자색 등이 달라지도록 제작 (미세먼지 수치에 따라 카드의 색상이 변화할 수 있도록) :heavy_check_mark:

1-2. 카드 컴포넌트에 즐겨찾기 등록/해제를 위한 버튼을 만들고, 즐겨찾기 등록 여부에 따라 버튼의 형태가 달라지도록 제작 :heavy_check_mark:

2. 지역을 변경하기 위한 드롭다운 메뉴 형태의 컴포넌트 제작 (지역을 변경하면 화면에 표시되는 카드의 미세먼지 지역/수치 등의 정보도 변경에 지역에 맞추어서 달라져야함) :heavy_check_mark:

3. 기본 지역 보기 / 전체 보기 / 즐겨찾기 지역 보기를 전환할 수 있도록 화면 하단에 탭 컴포넌트 제작 :heavy_check_mark:

4. 기본 지역 보기 / 전체 지역 보기 / 즐겨찾기 지역 보기 페이지 각각 구현 :heavy_check_mark:

5. react-redux를 활용해서 즐겨찾기 등록/해제 액션에 따라 즐겨찾기 데이터가 변경되도록 하고, 즐겨찾기 데이터는 어떤 컴포넌트에서든 불러올 수 있도록 제작 (container를 만들어서 활용할 것) :x:

- **1회성으로 사용되는 상태라면 굳이 redux로 관리하지 않아도 무방합니다.**

**[선택 요구 사항]**

- (옵션) useCallback, useMemo 등을 통한 컴포넌트 렌더링 최적화 :x:
