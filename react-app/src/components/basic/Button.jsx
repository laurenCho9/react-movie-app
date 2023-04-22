import { useState } from "react";

function Button() {
  const [count, setCount] = useState(0);
  // 1. 직접 값을 설정해주는 법
  // const onClick = () => setCount(count + 1); // 이런 방식은 예상치 못한 업데이트가 어디선가 일어나면 원하는 결과값과 다르게 나올 수 있으므로, 안에 또 함수를 담아줘야 혹시모를 상황에 대비할 수 있음. (아래처럼하는 게 좋은 관리 방법.)
  // 2. 함수 전달하기
  const onClick = () => setCount((current) => current + 1); // (current) 이 첫번째 argument(인자)가 현재 값인 것임. 이렇게 써주면 이 안에서 새로운 state가 되는 것임. 즉, 이게 더 안전한 방법. (혼동을 주는 걸 방지해줌.)
  return (
    <div>
      <h2>버튼 컴포넌트</h2>
      <div>count: {count}</div>
      <button onClick={onClick}>버튼</button>
    </div>
  );
}

export default Button;
