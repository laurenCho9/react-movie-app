// props는 일종의 방식이다. 부모 컴포넌트로부터 자식 컴포넌트에 데이터를 보낼 수 있게 해주는 방법.
import { memo, useMemo, useState } from "react";
import Btn from "./Btn";

import propTypes from "prop-types"; // props의 타입이 잘못되었을 때 오류를 던져주는 라이브러리.

Btn.propTypes = {
  //   btnName: propTypes.string,
  //   fontSize: propTypes.number,
  btnName: propTypes.string.isRequired, // .isRequired를 붙여주면 필수 값이므로 해당 값을 누락시 오류를 던져준다.
  fontSize: propTypes.number,
};

function Props() {
  const [value, setValue] = useState("상태관리를 활용한 버튼");
  const changeValue = () => setValue("되돌리기 버튼");

  return (
    <div>
      {/* 버튼 제목을 아무렇게나 지어도 된다. 그리고 Btn 컴포넌트 안에 props 를 넣어주는데 비구조화할당해서 {btnName} 로 바로 넣어줘도 된다. */}
      {/* Btn({btnName:"버튼버튼"}) */}

      {/* <Btn btnName="props비구조화할당 버튼1" big={true} />
      <Btn btnName="props비구조화할당 버튼2" /> */}

      {/* 아래 온클릭은 Btn으로 들어갈 프롭스명이다. (프롭스명은 자유). 
      아래꺼는 이벤트리스너가 아니란 소리임. 왜냐? 커스텀 컴포넌트.에 넣은 것이기 때문에.(내가 만든 컴포넌트.) 

      만약 html 요소에 넣는거라면 onClick은 이벤트리스너가 되는 게 맞음.
      걍 이름만 동일하게 해둔 것 뿐임.*/}
      {/* <Btn btnName={value} changeValue={changeValue} /> */}
      {/* <Btn btnName="props비구조화할당 버튼2" /> */}

      {/* 상태값이 변경될 때 컴포넌트를 리렌더링해서 다시 그려주는데,
      특정 컴포넌트를 다시 그리지 않도록 막아주는 것이 Memo 이다. */}
      {/* <MemorizeBtn btnName={value} changeValue={changeValue} />
      <MemorizeBtn btnName="props비구조화할당 버튼2" /> */}

      {/* props type - 어떤 타입의 props를 받고 있는지를 체크해주는 것. 설치해서 사용.
      https://ko.legacy.reactjs.org/docs/typechecking-with-proptypes.html
      https://www.npmjs.com/package/prop-types


      */}
      <Btn btnName="치킨먹고싶다" />
      <Btn btnName="bhc먹고싶다" fontSize={20} />
    </div>
  );
}
const MemorizeBtn = memo(Btn); // 해당 컴포넌트 아래에 적어줘야 실행된다.

export default Props;
