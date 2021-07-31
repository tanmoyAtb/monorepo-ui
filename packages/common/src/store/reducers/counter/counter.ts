import { ADD_COUNT } from "./actionCreators";

const initialState: any = {
  count: 1,
};

const countReducer = (state = initialState, action: any): any => {
  switch (action.type) {
    case ADD_COUNT: {
      return {
        count: state.count + 1,
      };
    }
    default:
      return state;
  }
};

export default countReducer;
