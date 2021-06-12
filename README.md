# calendar 프로젝트

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

## 사용 시 주의 사항

- firebase를 연결해서 사용하세요
- 사용법은 다음과 같습니다.
<hr/>
<code>
import firebase from 'firebase/app'; 
  </code>
  <br/>
  <code>
import 'firebase/firestore';
    </code>
    <br/><br/><br/>
  <code>
const firebaseConfig = {

  키를 추가하세요
};  </code><br/><br/>
  <code>
firebase.initializeApp(firebaseConfig);
  </code>
  <br/>
    <code>
const firestore = firebase.firestore();
  </code>
    <br/>
      <code>
export { firestore };
</code>
