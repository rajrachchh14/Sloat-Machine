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

  function PullFunction() {
    let list = [x1, x2, x3, y1, y2, y3, z1, z2, z3];
    list = list.sort(() => Math.random() - 0.5);
    console.log(list);

    // let randomData = random(obj);
    // let randomData = obj[Math.floor(Math.random() * obj.length)];
    // let randomData = this[Math.floor(Math.random() * this.length)];

    // if (obj.x1 === obj.x2 && obj.x2 === obj.x3) {
    //   return obj.x1;
    // } else if (obj.y1 === obj.y2 && obj.y2 === obj.y3) {
    //   console.log('y');
    // } else if (obj.z1 === obj.z2 && obj.z2 === obj.z3) {
    //   console.log('z');
    // }
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
              <li className="list-group-item"> Flame {} </li>
              <li className="list-group-item">Cap {}</li>
              <li className="list-group-item">Smile {}</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
