import styles from "./Button.module.css";

type TButtonTypes = "primary";
type TButtonClassnames = "btn-cart";

type TButtonProps = {
  type?: TButtonTypes;
  className: TButtonClassnames;

  children: React.ReactNode;

  onClick?: () => void;
};

const Button = ({ type = "primary", className, onClick, children }: TButtonProps) => {
  return (
    <button onClick={onClick} className={`btn ${styles[className]}  ${styles[`btn-${type}`]}`}>
      {children}
    </button>
  );
};

export default Button;
