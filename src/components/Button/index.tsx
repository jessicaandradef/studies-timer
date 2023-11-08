import style from "./button.module.scss";

const Button: React.FC<{
  type?: "button" | "submit" | "reset" | undefined;
  onClick?: () => void;
  children: React.ReactNode;
}> = ({ type, children, onClick }) => {
  return (
    <button onClick={onClick} type={type} className={style.button}>
      {children}
    </button>
  );
};

export default Button;
