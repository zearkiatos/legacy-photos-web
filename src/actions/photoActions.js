import axios from "axios";
import config from "../config";
import { PHOTO_TYPES } from "../types";

function fetchPhotos() {
  const request = axios.get(
    `${config.JSONPLACEHOLDER_API_BASE_URL}/photos?albumId=${config.JSONPLACEHOLDER_ALBUM_ID}`
  );

  return {
    type: PHOTO_TYPES.FETCH_PHOTOS,
    payload: request,
  };
}

export default {
  fetchPhotos,
};
