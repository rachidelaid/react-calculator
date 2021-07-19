import { useEffect, useState } from "react";
import Keys from "./components/Keys";
import Result from "./components/Result";

const App = () => {
  const [history, setHistory] = useState("");
  const [result, setResult] = useState("");
  const [afterEqual, setAfterEqual] = useState(false);

  function add() {
    if (history === "") {
      setHistory(result + "+");

      setResult("");
    } else if (result !== "") {
      setHistory(history + result + "+");
      setResult("");
    } else if (isNaN(history.slice(history.length - 1))) {
      setHistory(history.slice(0, -1) + "+");
    }
  }
  function sub() {
    if (history === "") {
      setHistory(result + "-");

      setResult("");
    } else if (result !== "") {
      setHistory(history + result + "-");
      setResult("");
    } else if (isNaN(history.slice(history.length - 1))) {
      setHistory(history.slice(0, -1) + "-");
    }
  }
  function div() {
    if (history === "") {
      setHistory(result + "/");

      setResult("");
    } else if (result !== "") {
      setHistory(history + result + "/");
      setResult("");
    } else if (isNaN(history.slice(history.length - 1))) {
      setHistory(history.slice(0, -1) + "/");
    }
  }
  function mult() {
    if (history === "") {
      setHistory(result + "*");

      setResult("");
    } else if (result !== "") {
      setHistory(history + result + "*");
      setResult("");
    } else if (isNaN(history.slice(history.length - 1))) {
      setHistory(history.slice(0, -1) + "*");
    }
  }
  function purs() {
    if (history === "") {
      setHistory(result + "%");

      setResult("");
    } else if (result !== "") {
      setHistory(history + result + "%");
      setResult("");
    } else if (isNaN(history.slice(history.length - 1))) {
      setHistory(history.slice(0, -1) + "%");
    }
  }
  function equl() {
    if (result === "") {
      if (isNaN(history.slice(history.length - 1))) {
        const res = eval(history.slice(0, -1)).toFixed(2);
        setResult(Number(res.toString()));
      } else {
        const res = eval(history).toFixed(2);
        setResult(Number(res.toString()));
      }
    } else {
      const res = eval(history + result).toFixed(2);
      setResult(Number(res.toString()));
    }

    setAfterEqual(true);
    setHistory("");
  }

  function reset() {
    setHistory("");
    setResult("");
  }

  function delet() {
    setResult(result.slice(0, -1));
  }

  function oper(e) {
    switch (e.target.innerText) {
      case "+":
        add();
        break;
      case "-":
        sub();
        break;
      case "/":
        div();
        break;
      case "x":
        mult();
        break;
      case "%":
        purs();
        break;
      case "=":
        equl();
        break;
      default:
        break;
    }
  }

  function num(e) {
    if (afterEqual) {
      setResult(e.target.innerText);
      setAfterEqual(false);
    } else if (String(result).length <= 10) {
      setResult(result + e.target.innerText);
    }
  }

  function handleKeyDown(e) {
    if (e.type === "keydown") {
      switch (e.key) {
        case "+":
          add();
          break;
        case "-":
          sub();
          break;
        case "/":
          div();
          break;
        case "x":
          mult();
          break;
        case "%":
          purs();
          break;
        case "=":
          equl();
          break;
        case "Backspace":
          delet();
          break;
        case ".":
          if (String(result).length <= 10) {
            setResult(result + ".");
          }
          break;
        default:
          if (!isNaN(Number(e.key))) {
            if (String(result).length <= 10) {
              setResult(result + e.key);
            }
          }
          break;
      }
    }
  }

  document.onkeydown = handleKeyDown;
  return (
    <div className="container">
      <div className="calculator">
        <Result history={history} result={result} />
        <Keys reset={reset} delet={delet} oper={oper} num={num} />
      </div>
    </div>
  );
};

export default App;
