import React from 'react';
import FaceDetection from './FaceDetection';
import ClockFace from './ClockFace';

function Display() {
  return (
    <>
      <ClockFace />
      <FaceDetection />
    </>
  );

}

export default Display;