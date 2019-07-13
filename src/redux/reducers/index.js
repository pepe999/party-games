import { NACTI_HLASKY, NACTI_HLASKY_SAGA, DALSI_HLASKA } from "../constants/action-types";

const initialState = {
  articles: [],
  hlasky: [],
  aktHlaska: {},
  lastIndex: 0
};

function rootReducer(state = initialState, action) {
  if (action.type === NACTI_HLASKY) {
    console.log("reducer - action nacti_hlasky")
    console.log(action)
    return Object.assign({}, state, {
      hlasky: action.payload,
      aktHlaska: action.payload[state.lastIndex]
      // aktHlaska: action.payload.hlasky[Math.floor(Math.random() * state.hlasky.length)]
    });
  }else if (action.type === NACTI_HLASKY_SAGA) {
    console.log("reducer - action nacti_hlasky_saga")
    console.log(action)
    return Object.assign({}, state, {
      aktHlaska: null
      // aktHlaska: action.payload.hlasky[Math.floor(Math.random() * state.hlasky.length)]
    });
  }else if (action.type === DALSI_HLASKA) {
    let nextHlaska;
    if (state.lastIndex === state.hlasky.length){
        nextHlaska = null;
    }else{
         nextHlaska = state.hlasky[state.lastIndex+1]
    }
    return Object.assign({}, state, {
      hlasky: state.hlasky.map((item, index) => {
        if(state.hlasky[index].id === state.aktHlaska.id) {
          item.prehrano = true;
        }
        return item;
      }),
      lastIndex: state.lastIndex+1,
      aktHlaska: nextHlaska
      
      
    });
  }

  return state;
}

export default rootReducer;