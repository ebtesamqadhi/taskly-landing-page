function Button({children,variant }) {
  return (
    <button className={`btn custom-btn custom-btn-${variant} fs-14`} type="button">
      {children}
    </button>
  );
}

export default Button;
