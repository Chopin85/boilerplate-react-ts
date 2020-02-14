import React, { useState } from 'react';
import {
  incrementCounter,
  decrementCounter,
  incrementCounterWithValue,
  decrementCounterWithValue,
  setCounterToValue,
  resetCounter
} from '../../store/counter/actions';
import { useDispatch } from 'react-redux';

import Drawer from './Drawer';
import ActionButton from '../Buttons/ActionButton';

const MainDrawer = () => {
  const [value, setvalue] = useState(0);
  const dispatch = useDispatch();

  const onChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setvalue(Number(e.currentTarget.value));
  };

  const headerContent = <div>Counter actions</div>;
  const content = (
    <div>
      <div>Enter a value :</div>
      <input type="number" onChange={onChangeValue} value={value} />
      <ActionButton
        buttonText="+1"
        text="Add 1"
        onClick={() => dispatch(incrementCounter())}
      />
      <ActionButton
        buttonText="-1"
        text="Remove 1"
        onClick={() => dispatch(decrementCounter())}
      />
      <ActionButton
        buttonText={`+${value}`}
        text={`Add ${value}`}
        onClick={() => dispatch(incrementCounterWithValue(value))}
      />
      <ActionButton
        buttonText={`+${value}`}
        text={`Remove ${value}`}
        onClick={() => dispatch(decrementCounterWithValue(value))}
      />
      <ActionButton
        buttonText={`=${value}`}
        text={`Set to ${value}`}
        onClick={() => dispatch(setCounterToValue(value))}
      />
      <ActionButton
        buttonText="Reset"
        text="Reset counter"
        onClick={() => dispatch(resetCounter())}
      />

      {/* <ActionButton buttonText="-1" text="Remove 1" onClick={decrement} />
        <ActionButton
          buttonText={`+${value}`}
          text={`Add ${value}`}
          onClick={() => incrementWithValue(value)}
        />
        <ActionButton
          buttonText={`+${value}`}
          text={`Remove ${value}`}
          onClick={() => decrementWithValue(value)}
        />
        <ActionButton
          buttonText={`=${value}`}
          text={`Set to ${value}`}
          onClick={() => setCounter(value)}
        />
        <ActionButton buttonText="Reset" text="Reset counter" onClick={reset} /> */}
    </div>
  );

  return <Drawer content={content} headerContent={headerContent} />;
};

export default MainDrawer;
