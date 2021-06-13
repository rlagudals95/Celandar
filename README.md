# calendar 프로젝트

## 달력 메인화면
![image](https://user-images.githubusercontent.com/76252074/121760983-6e26b580-cb68-11eb-88c1-a7ea87b64a4c.png)
## 일정 추가하기 
![image](https://user-images.githubusercontent.com/76252074/121761010-88f92a00-cb68-11eb-9877-2cb46b476335.png)
## 일정 완료하기 
![image](https://user-images.githubusercontent.com/76252074/121804234-4f1b4700-cc80-11eb-8a41-cdc20ccf32e8.png)



## 개요

- 개인 프로젝트
- 프로젝트 주제: 일정관리 캘린더
- 개발 기간: 2021.03.22 ~ 2021.03.24
- React + firebase 사용
- 데이터 베이스: firestore
- 형상관리 툴: git
<hr/>
<br/>

## 프로젝트 특징

- 본 프로젝트는 개인 프로젝트로 일정 관리 기능이 있는 캘린더를 React와 서버리스 플랫폼인 firebase를 이용하여 구현
- 캘린더 라이브러리로 fullcalendar를 사용했으며 UI 부분은 styled-components, material-ui를 사용
- 모든 페이지는 PC, 모바일, 태블릿에서 확인했을 때 뷰가 깨지지 않도록 반응형으로 구현
- 컴포넌트 구성: Calendar-component, Upload-component, Detail-component, NotFound-component
- 주요 기능: 일정 추가, 삭제, 완료, 조회(전체 일정, 완료 일정 조회 조건부 랜더링)
- DB구성: {date: 날짜, title: 일정내용, completed: 완료여부(boolean)}
<hr/>
<br/>

## 상태관리 패키지

- react-redux, redux
- redux-middleware(redux-thunk)
- react-router-dom
<hr/>
<br/>


