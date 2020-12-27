import React from 'react';
import FaceDetection from './FaceDetection';
import Clock from './Clock';

function Display() {
    return (
        <div>
            <Clock />
            <FaceDetection />
        </div>
    );

}

export default Display;