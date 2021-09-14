import React from 'react';
import LogicPart from './LogicPart';
export default function BodyPart() {
  return (
    <>
      {/* {console.log(list)} */}
      <br />
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            {/* <button
              type="button"
              className="btn btn-dark"
              onClick={() => PullFunction()}
            >
              Pull
            </button> */}
            <br />
            <br />
            <LogicPart />
          </div>
        </div>
      </div>
    </>
  );

  // if (obj.x1 === obj.x2 && obj.x2 === obj.x3) {
  //   return obj.x1;
  // } else if (obj.y1 === obj.y2 && obj.y2 === obj.y3) {
  //   console.log('y');
  // } else if (obj.z1 === obj.z2 && obj.z2 === obj.z3) {
  //   console.log('z');
  // }
}
