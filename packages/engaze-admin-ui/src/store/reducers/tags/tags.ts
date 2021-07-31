import { SET_TAGS } from "./actionCreators";

const initialState: any = {
  tags: [],
};

const tagsReducer = (state = initialState, action: any): any => {
  switch (action.type) {
    case SET_TAGS: {
      return {
        tags: [...state.tags, action.payload],
      };
    }
    default:
      return state;
  }
};

export default tagsReducer;
