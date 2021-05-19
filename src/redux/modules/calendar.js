import { firestore } from "../../firebase";
const calendar_db = firestore.collection("calendar");

// action
const GET_CALENDAR = "calendar/GET_CALENDAR";
const UPLOAD = "calendar/UPLOAD";
const DELETE = "calendar/DELETE";
const UPDATE = "calendar/UPDATE";

const initialState = {
  list: [],
};
// action creator
export const getCalendar = (data) => {
  return { type: GET_CALENDAR, data };
};

export const createCalendar = (data) => {
  return { type: UPLOAD, data };
};
export const deleteCalendar = (id) => {
  return { type: DELETE, id };
};
export const updateCalendar = (id) => {
  return { type: UPDATE, id };
};

// firebase
export const getCalendarFB = () => {
  return function (dispatch) {
    calendar_db.get().then((docs) => {
      let calendar_data = [];
      docs.forEach((doc) => {
        if (doc.exists) {
          calendar_data = [...calendar_data, { id: doc.id, ...doc.data() }];
        }
      });
      dispatch(getCalendar(calendar_data));
    });
  };
};
export const addCalendarFB = (data) => {
  return function (dispatch) {
    let calendar_data = {
      date: data.date,
      title: data.title,
      completed: false,
    };
    calendar_db
      .add(calendar_data)
      .then((res) => {
        calendar_data = { ...calendar_data, id: res.id };
      })
      .catch((e) => {
        console.log(e);
        window.alert("에러가 발생했습니다. 나중에 다시 시도해주세요!");
      });
  };
};
export const deleteCalendarFB = (id) => {
  return function (dispatch, getState) {
    const calendar_arr = getState().calendar.list;
    let primary_data;
    for (let i = 0; i < calendar_arr.length; i++) {
      if (calendar_arr[i].id === id) {
        primary_data = calendar_arr[i];
      }
    }
    if (!primary_data.id) {
      return;
    }
    calendar_db
      .doc(primary_data.id)
      .delete()
      .then((res) => {
        dispatch(deleteCalendar(id));
      })
      .catch((e) => {
        console.log(e);
        window.alert("에러가 발생했습니다. 나중에 다시 시도해 주세요!");
      });
  };
};

export const updateCalendarFB = (id) => {
  return function (dispatch, getState) {
    const calendar_arr = getState().calendar.list;
    let primary_data;
    for (let i = 0; i < calendar_arr.length; i++) {
      if (calendar_arr[i].id === id) {
        primary_data = calendar_arr[i];
      }
    }
    let calendarData = {
      title: primary_data.title,
      date: primary_data.date,
      completed: true,
    };

    if (!primary_data.id) {
      return;
    }
    calendar_db
      .doc(primary_data.id)
      .update(calendarData)
      .then((res) => {
        dispatch(updateCalendar(id));
      });
  };
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case "calendar/GET_CALENDAR": {
      const data = [...new Set([...action.data])];
      return { list: data };
    }

    case "calendar/UPLOAD": {
      const new_item = [...state.list, action.data];
      return { list: new_item };
    }
    case "calendar/DELETE": {
      // eslint-disable-next-line array-callback-return
      const calendar_list = state.list.filter((val) => {
        if (val.id !== action.calendar) {
          return val;
        }
      });
      return { list: calendar_list };
    }
    case "calendar/UPDATE": {
      const calendar_list = state.list.map((val) => {
        if (val.id === action.id) {
          return { ...val, completed: true };
        } else {
          return val;
        }
      });
      return { list: calendar_list };
    }

    default:
      return state;
  }
}
