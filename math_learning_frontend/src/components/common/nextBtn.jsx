const NextBtn = ({ id, value, ...rest }) => {
  return (
    <button
      type="button"
      id={id}
      className="btn"
      onClick={() => window.location.reload(false)}
      value={value}
    >
      {value}
    </button>
  );
};

export default NextBtn;
