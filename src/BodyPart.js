import React from 'react';
import LogicPart from './LogicPart';
export default function BodyPart() {
  function PullFunction() {
    let x1 = '🔥';
    let x2 = '🔥';
    let x3 = '🔥';

    let y1 = '🎓';
    let y2 = '🎓';
    let y3 = '🎓';

    let z1 = '😃';
    let z2 = '😃';
    let z3 = '😃';

    let list = [x1, x2, x3, y1, y2, y3, z1, z2, z3];

    // console.log(typeof list);
    // console.log('clik');
    <LogicPart data={'raj'} />;
  }
  return (
    <>
      <br />
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <button className="btn btn-danger" onClick={() => PullFunction()}>
              Pull
            </button>
            <br />
            <br />

            {/* <LogicPart /> */}
          </div>
        </div>
      </div>
    </>
  );
}
