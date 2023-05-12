import { FC } from "react";
import MediaCard from "../MediaCard";
import { fetchDataWithSG } from "@/app/lib";
import ButtonWrapper from "../Button/ButtonWrapper";
import { Todo } from "@/types";


const getTodoList = async () => {
  const data: Todo[] = await fetchDataWithSG(
    "https://jsonplaceholder.typicode.com/todos"
  );
  return data;
};

const CardList = async () => {
  const todoList = await getTodoList()
  return (
    <div>
      {todoList?.map((item) => (
        <div key={item.id} className="bg-white m-2 shadow-md rounded-md py-4 px-2 flex gap-1 justify-between items-center">
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
