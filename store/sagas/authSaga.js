import { takeLatest, call, put } from "redux-saga/effects";
import { authService } from "../../services/authService";
import {
  loginStart,
  loginSuccess,
  loginFailure,
  signupStart,
  signupSuccess,
  signupFailure,
} from "../slices/authSlice";

function* loginSaga(action) {
  try {
    const response = yield call(authService.login, action.payload);
    yield put(
      loginSuccess({
        user: {
          id: response.id,
          username: response.username,
          email: response.email,
          firstName: response.firstName,
          lastName: response.lastName,
        },
        token: response.token,
      })
    );
  } catch (error) {
    yield put(loginFailure(error.message));
  }
}

function* signupSaga(action) {
  try {
    const response = yield call(authService.signup, action.payload);
    yield put(
      signupSuccess({
        user: response.user,
        token: response.token,
      })
    );
  } catch (error) {
    yield put(signupFailure(error.message));
  }
}

export default function* authSaga() {
  yield takeLatest(loginStart.type, loginSaga);
  yield takeLatest(signupStart.type, signupSaga);
}
