import TodoItem from "./TodoItem";

export type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

async function fetchTodos() {
  try {
    const res = await fetch("http://localhost:3001/todos");
    const todos = await res.json();
    return todos;
  } catch (e) {
    if (e instanceof Error) {
      console.log(e.stack);
    }
  }
}

const TodoList = async () => {
  const todos = await fetchTodos();

  let content;
  if (!todos || todos.length === 0) {
    content = <p>Todo 리스트가 없습니다.</p>;
  } else {
    const sortedTodos = todos.reverse();

    content = (
      <>
        {sortedTodos.map((todo: Todo) => (
          <TodoItem key={todo.id} {...todo} />
        ))}
      </>
    );
  }

  return content;
};

export default TodoList;
