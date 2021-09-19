import store from "../../store";
import { photoActions } from "../../actions";

export function onPhotosEnter() {
  store.dispatch(photoActions.fetchPhotos());
}
