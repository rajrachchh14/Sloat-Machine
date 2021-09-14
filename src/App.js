import React from 'react';
import Topbar from './Topbar';
import BodyPart from './BodyPart';

// import Webcam from 'react-webcam';
export default function App() {
  return (
    <>
      <div>
        <Topbar />
        <BodyPart />
        {/* <Webcam /> */}
      </div>
    </>
  );
}
