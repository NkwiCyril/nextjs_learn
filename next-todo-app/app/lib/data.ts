import { sql } from "@vercel/postgres";
import { Todo } from "./definition";

export async function createTodo(todo: { title: string; description: string }) {
  try {
    const { title, description } = todo;

    if (!title || !description) {
      throw new Error("Title and description are required");
    }

    await sql`
      INSERT INTO todos (title, description, completed)
      VALUES (${title}, ${description}, false)
    `;

    return { message: "Todo created successfully" };
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to create todo");
  }
}

export async function getTodos() {
  try {
    const todos = await sql<Todo>`
      SELECT * FROM todos`;

    return todos.rows;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch todos");
  }
}
