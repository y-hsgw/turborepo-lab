import styles from "./button.module.scss";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export const Button = ({
  children,
  ...other
}: ButtonProps): React.ReactElement => {
  return (
    <button type="button" className={styles["button"]} {...other}>
      {children}
    </button>
  );
};
