function Button({children,variant,className="" }) {
  return (
    <button className={`btn custom-btn custom-btn-${variant} fs-14 ${className}`} type="button">
      {children}
    </button>
  );
}

export default Button;
