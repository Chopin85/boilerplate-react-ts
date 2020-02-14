import {
  INCREMENT_COUNTER,
  DECREMENT_COUNTER,
  INCREMENT_COUNTER_WITH_VALUE,
  DECREMENT_COUNTER_WITH_VALUE,
  RESET_COUNTER,
  SET_COUNTER,
  CounterActionTypes
} from './types';

export function incrementCounter(): CounterActionTypes {
  return {
    type: INCREMENT_COUNTER
  };
}

export function decrementCounter(): CounterActionTypes {
  return {
    type: DECREMENT_COUNTER
  };
}

export function incrementCounterWithValue(value: number): CounterActionTypes {
  return {
    type: INCREMENT_COUNTER_WITH_VALUE,
    payload: value
  };
}

export function decrementCounterWithValue(value: number): CounterActionTypes {
  return {
    type: DECREMENT_COUNTER_WITH_VALUE,
    payload: value
  };
}

export function setCounterToValue(value: number): CounterActionTypes {
  return {
    type: SET_COUNTER,
    payload: value
  };
}

export function resetCounter(): CounterActionTypes {
  return {
    type: RESET_COUNTER
  };
}
