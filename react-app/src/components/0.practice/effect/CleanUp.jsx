import { useEffect, useState } from "react";

/* function Hello() {
  useEffect(() => {
    console.log("created :> ");
    return () => console.log("destroyed :<");
  }, []);
  return <h1>Hello</h1>;
} */

// 위와 같이 동작. 다른 방식.
/* function Hello() {
  function byeFuntion() {
    console.log("destroyed :<");
  }
  function hiFunction() {
    console.log("created :> ");
    return byeFuntion;
  }
  useEffect(hiFunction, []);
  return <h1>Hello</h1>;
} */

// 위와 같이 동작. 다른 방식.
function Hello() {
  useEffect(function () {
    console.log("Hi :> ");
    return function () {
      console.log("Bye :<");
    };
  }, []);
  return <h1>Hello</h1>;
}

function CleanUp() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev);
  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
}

export default CleanUp;
