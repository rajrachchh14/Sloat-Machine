import React from 'react';

export default function BodyPart() {
  // console.log(obj1, obj2, obj3);
  let x1 = '🔥';
  let x2 = '🔥';
  let x3 = '🔥';

  let y1 = '🎓';
  let y2 = '🎓';
  let y3 = '🎓';

  let z1 = '😃';
  let z2 = '😃';
  let z3 = '😃';

  let obj = { x1, x2, x3, y1, y2, y3, z1, z2, z3 };

  function PullFunction() {
    if (obj.x1 === obj.x2 && obj.x2 === obj.x3) {
      console.log('x');
    } else if (obj.y1 === obj.y2 && obj.y2 === obj.y3) {
      console.log('y');
    } else if (obj.z1 === obj.z2 && obj.z2 === obj.z3) {
      console.log('z');
    }
  }

  return (
    <>
      <br />
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <button
              type="button"
              className="btn btn-dark"
              onClick={() => PullFunction()}
            >
              Pull
            </button>
            <br />
            <br />
            <ul className="list-group">
              <li className="list-group-item">{x1}</li>
              <li className="list-group-item">🎓 🎓 🎓</li>
              <li className="list-group-item">😃 😃 😃</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
