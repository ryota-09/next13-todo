"use client";
import { FC, FormEvent, useState } from "react";
import Button from "../Button";

const FormArea: FC = () => {
  const [value, setValue] = useState("");
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };
  return (
    <div className="bg-white pt-32 shadow-md  pb-4 flex gap-1 justify-center items-center">
      <form onSubmit={handleSubmit} className="flex items-center space-x-2">
        <div className="w-full">
          <input
          size={30}
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-green-500"
            placeholder="Type here..."
          />
        </div>
        <div className="shrink-0 w-auto">
          <Button className="py-2">ボタン</Button>
        </div>
      </form>
    </div>
  );
};

export default FormArea;
