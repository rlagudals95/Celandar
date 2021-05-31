# calendar 프로젝트
![달력구현](https://user-images.githubusercontent.com/76252074/120060572-74f6f800-c093-11eb-8c5d-bc5c9496b04b.png)

## 기능소개

+ 월 이동 기능

+ JavaScript의 date함수를 이용하여 해당 월의 1일이 시작하는 요일(달력 표기가 시작되는 지점)과 마지막 날짜(달력 표기가 끝나는 지점)를 구하고 이를 배열로 저장하여 렌더링하였습니다.

+ 일정 클릭 시 모달창에 상세 내용 표기

+ 부모 컴포넌트에서 모달 창 열림 여부, 모달 닫기 함수, 클릭한 요소에 대한 값을 state로 두고 모달 컴포넌트로 전달하였습니다. 모달 컴포넌트에서는 클릭한 요소와 일치하는 일정에 대한 정보를 렌더링하게 하였습니다. 모달창은 Confirm 버튼을 누르거나 모달창 바깥의 오버레이된 부분을 클릭해도 닫히도록 만들었습니다.

+ 일정 삭제 및 완료 여부

+ 모달창을 통해 일정 삭제가 가능하며 완료 여부를 선택할 수 있습니다. 완료된 일정은 모달창 상단에 완료된 일정이라 표기됩니다. 완료되지 않은 일정은 예정된 일정이라 표기됩니다.

+ 캘린더 내에 시간순으로 정렬된 일정 표기

+ filter함수를 이용하여 캘린더 날짜와 일정의 시간 정보를 대조하여 골라냅니다. 이후 입력된 일정에 대한 시간 정보를 JS 내장함수인 sort()함수로 정렬하여 렌더링합니다. 날짜 필터링 전에 정렬을 할 경우 일정 데이터가 늘어날수록 성능이 저하될 듯 하여 날짜별로 골라낸 후에 정렬을 수행하도록 하였습니다.

+ 일정 추가 기능 버튼

+ 첫 화면에 있는 두 개의 버튼은 모두 플로팅 버튼으로 구현하였습니다. 일정의 내용과 시간 정보가 모두 입력되었는지를 확인한 뒤 입력되지 않은 정보가 있다면 팝업창이 뜹니다. 입력된 정보는 최종적으로 firestore에 저장됩니다.

+ 완료된 일정/전체 일정을 볼 수 있는 버튼



## 개요

- 일정을 관리할 수 있는 캘린더
- 일정 추가 완료일정 체크하기 기능구현
- React 프론트엔드+ 백엔드 firebase(서버리스) 사용

<hr/>
<br/>

## 프로젝트 특징

- 풀캘린더 라이브러리(fullcalendar)를 사용했으며 styled-components, material-ui를 사용하여 구현
- 주요 기능: 일정 추가, 삭제, 완료, 조회(전체 일정, 완료 일정 조회 조건부 렌더링)
- 데이터 베이스구성: {date: 날짜, title: 일정내용, completed: 일정완료여부(boolean)}
<hr/>
<br/>

## 상태관리 패키지

- react-redux, redux
- redux-middleware(redux-thunk)
- react-router-dom
<hr/>
<br/>
