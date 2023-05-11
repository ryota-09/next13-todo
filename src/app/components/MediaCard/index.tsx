import { FC } from "react";
import Button from "../Button";

type PropsType = {
  title: string;
  description: string;
  buttonText: string;
  onButtonClick: () => void;
};

const MediaCard: FC<PropsType> = ({
  title,
  description,
  buttonText,
  onButtonClick,
}) => {
  return (
    <div className="bg-white m-2 shadow-md rounded-md py-4 px-2 flex gap-1 justify-between items-center">
      <div className="text-left">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
      <div className="">
        <Button onClick={onButtonClick}>{buttonText}</Button>
      </div>
    </div>
  );
};

export default MediaCard;
