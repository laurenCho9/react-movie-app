import { useState } from "react";

function MinutesToHours() {
  // 데이터를 업데이트 하는 방법은 setState 함수를 사용하는 것.
  const [amount, setAmount] = useState(0); //[]배열의 첫번째 요소는 데이터, 두번째 요소는 데이터를 수정하기 위한 함수다.
  const [invert, setInvert] = useState(false);
  const onChange = (e) => {
    // console.log(e.target.value);
    setAmount(e.target.value);
  };
  const reset = () => setAmount(0);
  //   const onInvert = () => setInvert(!invert);
  const onInvert = () => {
    reset();
    setInvert((current) => !current);
  };
  return (
    <div>
      <h3>Minutes To Hours</h3>
      {/* 1. 분 => 시간으로 변환 */}
      <label htmlFor="minutes">Minutes</label>
      <input
        id="minutes"
        type="number"
        onChange={onChange} // 해당 인풋에만 onChange 값을 넣어주면 아래 인풋박스의 시간 값은 입력, 수정(변경)할 수 없음.
        placeholder="Minutes"
        value={invert ? amount * 60 : amount}
        // disabled={invert === true}
        disabled={invert}
      />
      <div>입력값: {amount}</div>

      <label htmlFor="hours">Hours</label>
      <input
        id="hours"
        type="number"
        onChange={onChange}
        placeholder="Hours"
        // value={amount / 60} // 새로 업데이트 된 값을 가지고 다시 한 번 리렌더링 되는 것임.
        value={invert ? amount : Math.round(amount / 60)} // 반올림 하고 싶다면.
        // disabled // 입력, 클릭 안되게 막아주는 속성.
        // disabled={invert === false} // 명시적으로 속성 값 작성.
        disabled={!invert} // 짧게 작성.
      />

      <button onClick={reset}>Reset</button>
      <button onClick={onInvert}>
        {invert ? "분으로 단위 변환" : "시로 단위 변환"}
      </button>
    </div>
  );
}

/* 
jsx에서 속성 작성할 때
    class는 className=""
    for는 htmlFor=""
*/

export default MinutesToHours;
