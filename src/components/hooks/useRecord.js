/* eslint-disable keyword-spacing */
import { useState } from 'react';

export const useRecord = () => {
  const [colorArray, setColorArray] = useState([]);
  const [current, setCurrent] = useState([]);
  const [index, setIndex] = useState(0);

  const handleUndo = () => {
    setCurrent(colorArray[index - 1]);
    setIndex(() => index - 1);
  };

  const handleRedo = () => {
    setCurrent(colorArray[index + 1]);
    setIndex(() => index + 1);
  };

  const handleRecord = ({ target }) => {
    setCurrent(target.value);
    if (colorArray.length === 0) {
      setColorArray([target.value]);
    } else if (index !== colorArray.length - 1) {
      const firstHalf = colorArray.slice(0, index + 1);
      const lastHalf = colorArray.slice(index + 1, colorArray.length);
      setColorArray([...firstHalf, target.value, ...lastHalf]);
      setIndex(firstHalf.length);
    } else {
      setColorArray([...colorArray, target.value]);
      setIndex(() => index + 1);
    }
  };

  return { handleUndo, handleRedo, current, handleRecord, index, colorArray };
};
