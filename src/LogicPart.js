import React from 'react';
import BodyPart from './BodyPart';
function LogicPart(props) {
  // list = list.sort(() => Math.random() - 0.5);

  return (
    <>
      hi
      {console.log('hi')}
      {console.log(props)}
      <div>x</div>
    </>
  );

  //  <ul className="list-group">
  //     <li className="list-group-item">
  //       {list[0]} {list[1]} {list[2]}
  //     </li>
  //     <li className="list-group-item">
  //       {list[3]} {list[4]} {list[5]}
  //     </li>
  //     <li className="list-group-item">
  //       {list[6]} {list[7]} {list[8]}
  //     </li>
  //   </ul>

  // <LogicPart />

  {
    /* <span id="result">s</span> */
  }

  // if (obj.x1 === obj.x2 && obj.x2 === obj.x3) {
  //   return obj.x1;
  // } else if (obj.y1 === obj.y2 && obj.y2 === obj.y3) {
  //   console.log('y');
  // } else if (obj.z1 === obj.z2 && obj.z2 === obj.z3) {
  //   console.log('z');
  // }
}
export default LogicPart;
