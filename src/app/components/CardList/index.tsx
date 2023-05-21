import { FC } from "react";
import MediaCard from "../MediaCard";
import { fetchDataWithSG } from "@/app/lib";
import ButtonWrapper from "../Button/ButtonWrapper";
import { Todo } from "@/types";
import { dummyData } from "@/db";

import { z } from "zod";

const getTodoList = async () => {
  const TodoSchema = z.object({
    userId: z.number(),
    id: z.number(),
    title: z.string(),
    completed: z.boolean(),
  });

  const data = await fetchDataWithSG<Todo[]>(
    "https://jsonplaceholder.typicode.com/todos",
    TodoSchema.array()
  );
  return data;
};
//NOTE: with yup .ver
// const schema = yup.array().of(
//   yup.object().shape({
//     userId: yup.string().required(),
//     id: yup.string().required(),
//     title: yup.string().required(),
//     completed: yup.boolean().required(),
//   })
// );

// const data: Todo[] = await fetchDataWithSG(
//   "https://jsonplaceholder.typicode.com/todos",
//   schema
// );

const CardList = async () => {
  const todoList = await getTodoList();
  return (
    <div>
      {[...dummyData, ...todoList].map((item, index) => (
        <div
          key={index}
          className="bg-white m-2 shadow-md rounded-md py-4 px-2 flex gap-1 justify-between items-center"
        >
          <div className="text-left">
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
          </div>
          <div className="shurink-0">
            <ButtonWrapper todo={item} />
          </div>
        </div>
      ))}
      {/* NOTE: 本当は下のようにかきたい */}
      {/* {list.map((item) =>  (
        <MediaCard
          title="カードタイトル"
          description="ここにテキストが入るここにテキストが入る"
          buttonText="クリック"
          onButtonClick={handler}
        />
      ))} */}
    </div>
  );
};
export default CardList;
