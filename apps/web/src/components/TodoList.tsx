export const TodoList = async () => {
  const todos: string[] = ["aaa", "bbb"];
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo}>{todo}</li>
      ))}
    </ul>
  );
};
