import { FC } from "react";
import MediaCard from "../MediaCard";
import { fetchDataWithSG } from "@/app/lib";
import Button from "../Button";

type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

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
      {todoList?.map(({id, userId, title, completed}) => (
        <div key={id} className="bg-white m-2 shadow-md rounded-md py-4 px-2 flex gap-1 justify-between items-center">
        <div className="text-left">
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-gray-600">{title}</p>
        </div>
        <div className="px-2 py-1 rounded-md text-xs bg-green-500 text-white hover:bg-green-600">
          <button>ボタン</button>
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
