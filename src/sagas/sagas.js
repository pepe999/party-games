import { call, put, takeLatest, all } from 'redux-saga/effects';
import { nactiHlasky } from "../redux/actions/index";

import axios from 'axios';

/** function that returns an axios call */
function fetchApi(authParams) {
  return axios.request({
    method: 'get',
    url: 'http://localhost/api/games/read.php',
    data: authParams
  });
}

function* loadGames() {

  try {
    // data is obtained after axios call is resolved
    let { data } = yield call(fetchApi, null);
    // dispatch action to change redux state
    // yield put(updateProfile(data.profile));
     console.log("data")
    console.log(data)
    yield put(nactiHlasky(data.records));
    // console.log(data)

  } catch (e) {
    // catch error on a bad axios call
    // alert using an alert library
  }
}

function* actionWatcher() {
     yield takeLatest('NACTI_HLASKY_SAGA', loadGames)
}

export default function* rootSaga() {
   yield all([
   actionWatcher(),
   ]);
}