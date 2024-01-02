"use client";

import { useOptimistic, useTransition } from "react";
import { Todo } from "./TodoList";
import { updateTodo } from "@/lib/actions";

const CheckBox = ({ todo }: { todo: Todo }) => {
  const [optimistictodo, addOptimisticTodo] = useOptimistic(
    todo,
    (state: Todo, completed: boolean) => ({
      ...state,
      completed,
    })
  );

  //const [isPending, startTransition] = useTransition();
  return (
    <input
      type="checkbox"
      checked={optimistictodo.completed}
      id="completed"
      name="completed"
      onChange={async () => {
        addOptimisticTodo(!todo.completed);
        await updateTodo(todo);
      }}
      className="min-w-[2rem] min-h-[2rem]"
    />
  );
};

export default CheckBox;
