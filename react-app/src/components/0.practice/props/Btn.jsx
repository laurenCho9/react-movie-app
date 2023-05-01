// function Btn(props) {
// function Btn({ btnName, big }) {
// function Btn({ btnName, changeValue }) {
function Btn({ btnName, fontSize = 14 }) {
  // fontSize 에 14px이라는 기본값을 주고 싶다면.

  //   //   console.log(props);
  //   console.log(btnName, big);
  console.log(btnName, "렌더링이 되었습니다.");
  return (
    <>
      <button
        // onClick={changeValue}
        style={{
          backgroundColor: "red",
          color: "#fff",
          padding: "10px 20px",
          border: 0,
          borderRadius: 10,
          //   fontSize: big ? 24 : 16,
          fontSize: fontSize, // fontSize 하나로 생략가능. 키:밸류값이 동일하므로.
        }}
      >
        {/* {props.btnName} */}
        {btnName}
      </button>
    </>
  );
}

export default Btn;
