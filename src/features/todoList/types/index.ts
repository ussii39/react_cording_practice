import { BaseEntity } from "@/types";

export type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
} & BaseEntity;
