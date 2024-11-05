export type TodoTypes = {
  title: string;
  description: string;
  date: Date;
  done: boolean;
  id: string;
};

const TodoActions = (state: TodoTypes[] = [], action: any) => {
  const todos = JSON.parse(localStorage.getItem("todos") as string) || [];
  state = [...todos];

  switch (action.type) {
    case "ADD":
      // console.log(state, action.payload)

      localStorage.setItem("todos", JSON.stringify([...todos, action.payload]));
      return [...todos, action.payload];

    case "DELETE":
      console.log(state);

      const newarr = state.filter((item) => item.id !== action.payload);
      // console.log(newarr);
      localStorage.setItem("todos", JSON.stringify(newarr));

      return newarr;

    case "ISDONE":
      const abc = state.map((item) =>
        item.id === action.payload.index
          ? { ...item, done: action.payload.isDone }
          : item
      );
      // console.log(abc);

      localStorage.setItem("todos", JSON.stringify(abc));
      return abc;

    case "EDIT":
      console.log(action.payload);

      const abcd = state.map((item) =>
        item.id === action.payload.id
          ? {
              ...item,
              title: action.payload.title,
              description: action.payload.description,
              date: action.payload.date,
            }
          : item
      );

      localStorage.setItem("todos", JSON.stringify(abcd));
      return abcd;

    default:
      return state;
  }
};
export default TodoActions;
