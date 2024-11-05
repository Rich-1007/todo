export const add = (todo) => {
  // console.log("ADDING TODOS", todo)
  return {
    type: "ADD",
    payload: todo,
  };
};

export const deletes = (id) => {
  return {
    type: "DELETE",
    payload: id,
  };
};

export const ISDONE = (isDone, index) => {
  return {
    type: "ISDONE",
    payload: { isDone, index },
  };
};
export const EDIT = (updatesInput) => {
  return {
    type: "EDIT",
    payload:  updatesInput,
  };
};
