import { Todo } from "./definition";

export const todos: Todo[] = [
  {
    id: 1,
    title: "Complete project proposal",
    description:
      "Draft and submit the initial project proposal to the team lead.",
    status: true,
  },
  {
    id: 2,
    title: "Buy groceries",
    description: "Milk, eggs, bread, and fresh vegetables for the week.",
    status: true,
  },
  {
    id: 3,
    title: "Book dentist appointment",
    status: false,
  },
  {
    id: 4,
    title: "Read TypeScript documentation",
    description: "Focus on generics and utility types for upcoming tasks.",
    status: false,
  },
  {
    id: 5,
    title: "Team meeting prep",
    description:
      "Gather performance metrics and create slides for Monday’s meeting.",
    status: true,
  },
];
