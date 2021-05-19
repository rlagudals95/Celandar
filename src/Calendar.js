import React, { useEffect, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import SearchIcon from "@material-ui/icons/Search";
import { Fab } from "@material-ui/core";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { getCalendarFB } from "./redux/modules/calendar";

//여기가 메인페이지 그 자체
function Calendar(props) {
  console.log("메인페이지 props:", props);

  const dispatch = useDispatch();
  const data = useSelector((state) => state.calendar.list);
  console.log("달력 데이터", data);
  useEffect(() => {
    dispatch(getCalendarFB());
  }, []);

  const data_list = data.map((val) => {
    return {
      title: val.title, //일정 내용
      date: val.date,
      publicId: val.id,
      completed: val.completed,
      color: val.completed ? "#E74C3C" : "#ABEBC6",
      imageurl:
        "http://image.dongascience.com/Photo/2018/12/2d5efe44bdd02f3e2ec4e99189d89d18.jpg",
    };
  });

  const completedDate = data_list.filter((val) => {
    return val.completed === true;
  }); //완료된 일정을 필터로 걸러낸다

  const [btn, setBtn] = useState(true);
  const btnEvent = () => {
    setBtn(!btn);
  };

  return (
    <div>
      <FullCalendar
        plugins={[dayGridPlugin]}
        headerToolbar={{
          center: "title",
          start: "",
          end: "prev next today",
        }}
        titleFormat={{ year: "numeric", month: "short" }}
        // 완료된 일정 보기 눌렀을때 completedDate만 보여준다
        events={btn ? data_list : completedDate} //달력 데이터 일정데이터를 여기서 보여주는 구나..!
        eventClick={(e) => {
          props.history.push("/detail/" + e.event._def.extendedProps.publicId);
        }} //여기서 id를 붙여서 디테일 페이지로 넘어간다
        height={"100vh"}
      />
      {/* 오른쪽아래 플로팅 버튼 */}
      <PositionBtn>
        <Fab
          color="secondary"
          aria-label="filter"
          variant="extended"
          onClick={btnEvent}
        >
          <SearchIcon />
          <p style={{ fontSize: "1rem" }}>
            {/* btn이 처음엔 false 상태고 누르면 모든일정보기로 바뀜 */}
            {btn ? "완료된 일정 보기" : "모든 일정 보기"}
          </p>
        </Fab>
      </PositionBtn>
    </div>
  );
}
const PositionBtn = styled.div`
  position: fixed;
  top: 80%;
  right: 10px;
  z-index: 10;
  @media only screen and (max-width: 768px) {
    top: 70%;
    left: 10px;
    & p {
      display: none;
    }
  }
`;
export default Calendar;
