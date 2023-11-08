import style from "./button.module.scss";

interface Props {
  type?: "button" | "submit" | "reset" | undefined;
  onClick?: () => void;
  children?: React.ReactNode;
}

const Button = ({ type, children, onClick }: Props) => {
  return (
    <button onClick={onClick} type={type} className={style.button}>
      {children}
    </button>
  );
};

export default Button;
