const NextBtn = ({ id, value, ...rest }) => {
  return (
    <button
      type="button"
      id={id}
      className="btn-next"
      onClick={() => window.location.reload(false)}
      value={value}
    >
      {value}
      <span></span>
    </button>
  );
};

export default NextBtn;
