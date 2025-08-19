import { takeLatest, call, put } from "redux-saga/effects";
import { postService } from "../../services/postService";
import {
  fetchPostsStart,
  fetchPostsSuccess,
  fetchPostsFailure,
  fetchPostStart,
  fetchPostSuccess,
  fetchPostFailure,
  createPostStart,
  createPostSuccess,
  createPostFailure,
} from "../slices/postSlice";

function* fetchPostsSaga(action) {
  try {
    const response = yield call(postService.getPosts, action.payload);
    yield put(fetchPostsSuccess(response));
  } catch (error) {
    yield put(fetchPostsFailure(error.message));
  }
}

function* fetchPostSaga(action) {
  try {
    const response = yield call(postService.getPost, action.payload);
    yield put(fetchPostSuccess(response));
  } catch (error) {
    yield put(fetchPostFailure(error.message));
  }
}

function* createPostSaga(action) {
  try {
    const response = yield call(postService.createPost, action.payload);
    yield put(createPostSuccess(response));
  } catch (error) {
    yield put(createPostFailure(error.message));
  }
}

export default function* postsSaga() {
  yield takeLatest(fetchPostsStart.type, fetchPostsSaga);
  yield takeLatest(fetchPostStart.type, fetchPostSaga);
  yield takeLatest(createPostStart.type, createPostSaga);
}
