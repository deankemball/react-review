type Props = {
  onClick?: () => void;
  content: string;
  type: "button" | "submit" | "reset" | undefined;
};

const ButtonClick = (props: Props) => {
  return (
    <button
      className="min-w-max h-auto rounded-md px-4 py-2 shadow-md bg-lime-300 text-xs"
      onClick={props.onClick}
      type={props.type}
    >
      {props.content}
    </button>
  );
};

export default ButtonClick;
