import BackSpace from "../backspace-outline.svg";

const Keys = ({ reset, delet, oper, num }) => {
  return (
    <div className="buttons">
      <div onClick={reset}>C</div>
      <div onClick={delet}>
        <img src={BackSpace} alt="BackSpace" />
      </div>
      <div onClick={oper}>%</div>
      <div onClick={oper}>+</div>
      <div onClick={num}>1</div>
      <div onClick={num}>2</div>
      <div onClick={num}>3</div>
      <div onClick={oper}>-</div>
      <div onClick={num}>4</div>
      <div onClick={num}>5</div>
      <div onClick={num}>6</div>
      <div onClick={oper}>x</div>
      <div onClick={num}>7</div>
      <div onClick={num}>8</div>
      <div onClick={num}>9</div>
      <div onClick={oper}>/</div>
      <div onClick={num}>0</div>
      <div onClick={num}>.</div>
      <div className="equal" onClick={oper}>
        =
      </div>
    </div>
  );
};

export default Keys;
