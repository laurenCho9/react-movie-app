import { useState } from "react";

function KilometerToMiles() {
  const [amount, setAmount] = useState(0);
  const [invert, setInvert] = useState(false);
  const onChange = (e) => setAmount(e.target.value);
  const reset = () => setAmount(0);
  const onInvert = (e) => {
    reset();
    setInvert((item) => !item);
  };
  return (
    <div>
      <h3>Kilometer To Miles</h3>
      <label htmlFor="kilometer">Kilometer</label>
      <input
        id="kilometer"
        type="number"
        onChange={onChange}
        placeholder="Kilometer"
        value={invert ? amount * 1.60934 : amount}
        disabled={invert}
      />

      <div>입력값: {amount}</div>

      <label htmlFor="miles">Miles</label>
      <input
        id="miles"
        type="number"
        onChange={onChange}
        placeholder="Miles"
        value={invert ? amount : amount / 1.60934}
        disabled={!invert}
      />

      <button onClick={reset}>Reset</button>
      <button onClick={onInvert}>
        {invert ? "kilometer로 단위 변환" : "Miles로 단위 변환"}
      </button>
    </div>
  );
}

export default KilometerToMiles;
