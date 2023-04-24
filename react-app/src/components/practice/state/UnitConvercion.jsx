import { useState } from "react";
import MinutesToHours from "./MinutesToHours";
import KilometerToMiles from "./KilometerToMiles";

// 수정한 함수를 실행하면 컴포넌트들이 리렌더링 된다.
function UnitConvercion() {
  const [index, setIndex] = useState("1");
  const onSelect = (e) => {
    // console.log(e.target.value);
    setIndex(e.target.value);
  };
  return (
    <div>
      <h2>Unit Convercion: 단위 변환</h2>
      <select value={index} onChange={onSelect}>
        <option value="0">Minutes & Hours</option>
        <option value="1">Kilometer & Miles</option>
      </select>
      <hr />
      {index === "0" ? <MinutesToHours /> : null}
      {index === "1" ? <KilometerToMiles /> : null}
      {/* <MinutesToHours />
      <KilometerToMiles /> */}
    </div>
  );
}

export default UnitConvercion;
