import styles from "./Button.module.css";

type TButtonTypes = "primary";
type TButtonClassnames = "btn-cart";

type TButtonProps = {
  type?: TButtonTypes;
  className: TButtonClassnames;

  children: React.ReactNode;
};

const Button = ({ type = "primary", className, children }: TButtonProps) => {
  return (
    <button className={`btn ${styles[className]}  ${styles[`btn-${type}`]}`}>{children}</button>
  );
};

export default Button;
