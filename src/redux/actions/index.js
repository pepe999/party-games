import { NACTI_HLASKY, NACTI_HLASKY_SAGA, DALSI_HLASKA } from "../constants/action-types";

export function nactiHlasky(payload) {
  return { type: NACTI_HLASKY, payload };
}

export function nactiHlaskySaga(payload) {
  return { type: NACTI_HLASKY_SAGA, payload };
}

export function dalsiHlaska(payload) {
  return { type: DALSI_HLASKA, payload };
}