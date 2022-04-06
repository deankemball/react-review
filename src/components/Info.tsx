type Props = {
  content: string;
  style?: string;
};

const InfoBox = (props: Props) => {
  return (
    <div className="flex grow items-center bg-pink-300 rounded-md px-4 py-2 text-slate-50 text-xs font-medium justify-center">
      <p className={props.style}>{props.content}</p>
    </div>
  );
};

export default InfoBox;
