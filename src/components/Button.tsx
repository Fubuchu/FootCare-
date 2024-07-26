interface Props {
  children: string;
  onClick: () => void;
}

const Button = ({ children, onClick }: Props) => {
  return (
    <Button className="btn btn-primary" onClick={onClick}>
      {children}
    </Button>
  );
};

export default Button;
