const Result = ({ history, result }) => {
  return (
    <div className="screen">
      {history.length >= 24 ? <span>...{history.substr(0, 23)}</span> : <span>{history}</span>}
      <p>{result}</p>
    </div>
  );
};

export default Result;
