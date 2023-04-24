import { useEffect, useState } from "react";

function Effect() {
  // component가 맨 처음만 render 되도록 하는 것.
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (e) => {
    setKeyword(e.target.value);
  };

  //useEffect는 실행하려는 코드, dependency(지켜보려는 것)으로만 이루어져 있다.
  useEffect(() => {
    console.log("나는 한 번만 실행돼요.");
  }, []); // 빈 배열이면 아무것도 지켜보지 않기 때문에.

  useEffect(() => {
    if (keyword !== "" && keyword.length > 5) {
      console.log("나는 키워드가 변화할 때 실행돼요", keyword);
    }
  }, [keyword]); // 빈배열 안에 있는 걸 지켜보고 해당 부분의 변화에만 실행된다.

  useEffect(() => {
    console.log("나는 카운터가 변화할 때 실행돼요", counter);
  }, [counter]);

  useEffect(() => {
    console.log("나는 키워드도 카운터도 변화할 때 실행돼요");
  }, [keyword, counter]); // 배열이라서 여러개 가능. 둘 중 하나가 변화하면 실행된다.
  return (
    <div>
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="검색창"
      />
      <h1>{counter}</h1>
      <button onClick={onClick}>클릭!</button>
    </div>
  );
}

export default Effect;
