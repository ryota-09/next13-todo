"use client";
import { Todo } from "@/types";
import Button from ".";
import { FC } from "react";

type PropType = {
  todo: Todo;
};

const ButtonWrapper: FC<PropType> = ({ todo }) => {
  const handler = () => {
    console.log("クリック");
  };
  return (
    <>
      <Button
        variant={todo.completed ? "secondary" : "primary"}
        onClick={handler}
      >
        {todo.completed ? "Done" : "Yet"}
      </Button>
    </>
  );
};
export default ButtonWrapper;
