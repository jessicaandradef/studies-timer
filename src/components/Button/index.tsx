import style from "./button.module.scss";

const Button: React.FC<{
  type?: "button" | "submit" | "reset";
  children: React.ReactNode;
}> = ({ type, children }) => {
  return (
    <button type={type} className={style.button}>
      {children}
    </button>
  );
};

export default Button;
