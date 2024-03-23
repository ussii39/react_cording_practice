// components/TodoItem.tsx
import { FC } from "react";
import { Todo } from "../types"; // 正しいパスに修正
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";

interface TodoItemProps {
  todo: Todo;
  changeCompleteStatus: (id: number, completed: boolean) => void;
}

const TodoItem: FC<TodoItemProps> = ({ todo, changeCompleteStatus }) => {
  return (
    <div key={todo.id}>
      <Grid container spacing={2}>
        <Grid
          item
          xs={8} // xsのサイズを調整
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {todo.title}
        </Grid>
        <Grid item xs={4} sx={{ display: "flex", justifyContent: "flex-end" }}>
          <FormControlLabel
            label="完了"
            control={
              <Checkbox
                checked={todo.completed}
                onChange={(e) =>
                  changeCompleteStatus(todo.id, e.target.checked)
                }
                color="primary"
              />
            }
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default TodoItem;
