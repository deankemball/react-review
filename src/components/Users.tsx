type Props = {
  first_name: string;
  last_name: string;
  gender: string;
  city: string;
  avatar: string;
  title: string;
  key_skill: string;
};

const InfoBox = (props: Props) => {
  return (
    <div className="flex w-3/4 self-center items-center bg-pink-300 rounded-md px-4 py-2 text-slate-50 font-medium space-x-4 shadow-md">
      <img
        src={props.avatar}
        className="w-12 rounded-md shadow-md bg-pink-100"
      ></img>
      <div className="flex flex-col w-56 text-xs">
        <p className="text-sm font-bold">
          {props.first_name} {props.last_name}
          <span className="text-[8px] font-light">
            {" "}
            {props.gender.toLowerCase()}
          </span>
        </p>
        <em>{props.title}</em>
      </div>
    </div>
  );
};

export default InfoBox;
