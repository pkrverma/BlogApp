import { all } from "redux-saga/effects";
import authSaga from "./sagas/authSaga";
import postSaga from "./sagas/postSaga";

export default function* rootSaga() {
  yield all([authSaga(), postSaga()]);
}
