import React from 'react';
import LogicPart from './LogicPart';
export default function BodyPart() {
  let PullFunction = () => {
    console.log('clik');
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
    list = list.sort(() => Math.random() - 0.5);

    // console.log(typeof list);

    <LogicPart data={list} />;

    // <ul className="list-group">
    //   <li className="list-group-item">
    //     {list[0]} {list[1]} {list[2]}
    //   </li>
    //   <li className="list-group-item">
    //     {list[3]} {list[4]} {list[5]}
    //   </li>
    //   <li className="list-group-item">
    //     {list[6]} {list[7]} {list[8]}
    //   </li>
    // </ul>;
  };
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

            {/* <PullFunction /> */}
          </div>
        </div>
      </div>
    </>
  );
}
