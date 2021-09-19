import { PHOTO_TYPES } from "../types";

const photoReducers = (state = [], action) => {
  switch (action.type) {
    case PHOTO_TYPES.FETCH_PHOTOS:
      return action.payload.data;
    default:
      return state;
  }
};

export default photoReducers;
