# calendar 프로젝트
https://codesandbox.io/api/v1/sandboxes/2z6wp2jozn/screenshot.png
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
