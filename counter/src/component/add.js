import React from "react";

function ByTen(props) {
const {valueByten, setValueByten,increaseBy}=props;

  const increased = () => {
    setValueByten(valueByten + increaseBy);
  };
 
  console.log(valueByten, setValueByten);
  return (
    <div>
      <button onClick={increased}>{increaseBy}</button>
    </div>
  );
}

export default ByTen;
