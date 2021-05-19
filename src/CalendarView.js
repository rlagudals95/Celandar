/* eslint-disable no-loop-func */
// import React, { useState } from "react";
// import moment from "moment";
// import CalendarBody from "./CalendarBody";
// import styled from "styled-components";
// function CalendarView(props) {
//   const [today, setToday] = useState(moment());
//   const plusMonth = () => {
//     setToday(today.clone().add(1, "month"));
//   };
//   const minusMonth = () => {
//     setToday(today.clone().add(-1, "month"));
//   };
//   return (
//     <>
//       <button
//         onClick={() => {
//           props.history.push("/");
//         }}
//       >
//         메인 페이지로 이동하기
//       </button>
//       <Container>
//         <Body>
//           <div>
//             <button onClick={minusMonth}>이전 달</button>
//             <span>{today.format("YYYY년 MM월")}</span>
//             <button onClick={plusMonth}>다음 달</button>
//           </div>
//           {/* <CalendarBody today={today} /> */}
//         </Body>
//       </Container>
//     </>
//   );
// }
// const Container = styled.div`
//   width: 100vw;
//   height: 100vh;
//   display: flex;
//   align-items: center;
//   justify-content: center;
// `;
// const Body = styled.div`
//   width: 600px;
//   height: 600px;
//   display: flex;
//   flex-direction: column;
//   & div {
//     display: flex;
//     align-items: center;
//     justify-content: center;
//   }
// `;

// export default CalendarView;
