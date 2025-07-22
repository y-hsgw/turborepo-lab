export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export const Button = ({
  children,
  ...other
}: ButtonProps): React.ReactElement => {
  return (
    <button type="button" style={{ backgroundColor: "orange" }} {...other}>
      {children}
    </button>
  );
};
