"use client"
import { FC } from "react";
import Button from "../Button";

const FormArea: FC = () => {
  return (
    <div className="bg-white pt-32 shadow-md  py-4 px-2 flex gap-1 justify-between items-center">
      <div className="text-left">
        
        <p className="text-gray-600">インプット</p>
      </div>
      <div className="">
        <Button>ボタン</Button>
      </div>
    </div>
  );
};

export default FormArea;
