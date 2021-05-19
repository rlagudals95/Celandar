import React from "react";
import { withRouter } from "react-router";
import { Route, Switch } from "react-router-dom";
import { Fab } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import styled from "styled-components";
import Calendar from "./Calendar";
import Upload from "./Upload";
import Detail from "./Detail";
import NotFound from "./NotFound";
import CalendarView from "./CalendarView";

function App(props) {
  return (
    <>
      <Switch>
        <Route path="/" exact>
          <Calendar history={props.history} />
          <PositionBtn>
            <Fab
              color="primary"
              aria-label="add"
              onClick={() => {
                props.history.push("/upload");
              }}
            >
              <AddIcon />
            </Fab>
          </PositionBtn>
        </Route>
        <Route path="/upload" component={Upload} exact />
        <Route path="/detail/:defid" component={Detail} exact />
        <Route path="/calendarview" component={CalendarView} />
        <Route component={NotFound} />
      </Switch>
    </>
  );
}

const PositionBtn = styled.div`
  position: fixed;
  top: 90%;
  right: 50px;
  z-index: 10;
  @media only screen and (max-width: 768px) {
    top: 90%;
    left: 10px;
  }
`;

const CalendarViewBtn = styled.div`
  position: fixed;
  top: 0;
  right: 10px;
  z-index: 10;
  @media only screen and (max-width: 768px) {
    top: 80%;
    left: 10px;
    & p {
      display: none;
    }
  }
`;

export default withRouter(App);
