/* eslint-disable no-unused-expressions */
import axios from 'axios';

const GET_GREETING_SUCCESS = 'GET_GREETING_SUCCESS';

const initialState = {
  greeting: [],
};

export const getGreeting = () => async (dispatch) => {
  const res = await axios.get('http://localhost:3000/api/v1/greeting/index');
  const greetingData = [];
  Object.entries(res).forEach(([key, value]) => {
    const datas = {
      key,
      id: value.id,
      message: value.message,
    };
    datas.id === undefined ? null : greetingData.push(datas);
  });
  dispatch({ type: GET_GREETING_SUCCESS, payload: greetingData });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_GREETING_SUCCESS:
      return {
        ...state,
        greeting: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
