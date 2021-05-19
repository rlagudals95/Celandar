/* eslint-disable no-loop-func */
// import React from "react";
// import styled from "styled-components";
// import moment from "moment";

// function CalendarBody(props) {
//   const today = props.today;
//   const firstWeek = today.clone().startOf("month").week();
//   const lastWeek =
//     today.clone().endOf("month").week() === 1
//       ? 53
//       : today.clone().endOf("month").week();

//   const calendarArr = () => {
//     let result = [];
//     let week = firstWeek;
//     for (week; week <= lastWeek; week++) {
//       result = result.concat(
//         <tr key={week}>
//           {Array(7)
//             .fill(0)
//             .map((data, index) => {
//               let days = today
//                 .clone()
//                 .startOf("year")
//                 .week(week)
//                 .startOf("week")
//                 .add(index, "day");
//               if (moment().format("YYYYMMDD") === days.format("YYYYMMDD")) {
//                 return (
//                   <td key={index} style={{ color: "red" }}>
//                     <span>{days.format("D")}</span>
//                   </td>
//                 );
//               } else if (days.format("MM") !== today.format("MM")) {
//                 return (
//                   <td key={index} style={{ color: "gray" }}>
//                     <span>{days.format("D")}</span>
//                   </td>
//                 );
//               } else {
//                 return (
//                   <td key={index}>
//                     <span>{days.format("D")}</span>
//                   </td>
//                 );
//               }
//             })}
//         </tr>
//       );
//     }

//     return result;
//   };
//   return (
//     <Table>
//       <tbody>{calendarArr()}</tbody>
//     </Table>
//   );
// }
// const Table = styled.table`
//   height: 500px;
// `;
// export default CalendarBody;
