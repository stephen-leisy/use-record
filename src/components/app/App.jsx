/* eslint-disable keyword-spacing */
import React from 'react';
import { useRecord } from '../hooks/useRecord';

function App() {
  const { current, handleUndo, handleRedo, handleRecord, index, colorArray } =
    useRecord();

  return (
    <>
      <button onClick={handleUndo} disabled={index === 0}>
        undo
      </button>
      <button
        onClick={handleRedo}
        disabled={index === colorArray.length - 1 || colorArray.length === 0}
      >
        redo
      </button>
      <input
        placeholder="colors"
        type="color"
        value={current}
        onChange={handleRecord}
      />
      <div
        style={{ backgroundColor: current, width: '10rem', height: '10rem' }}
      ></div>
    </>
  );
}

export default App;
