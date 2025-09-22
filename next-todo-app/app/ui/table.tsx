import { getTodos } from "../lib/data";
import { todos } from "../lib/placeholder-data";
import clsx from "clsx";

export default async function Table() {

  const todos = await getTodos();

  return (
    <div className="flex flex-col">
      <div className="-m-1.5 overflow-x-auto">
        <div className="p-1.5 min-w-full inline-block align-middle">
          <div className="overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-start text-xs font-medium uppercase"
                  >
                    Status
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-start text-xs font-medium uppercase"
                  >
                    Title
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-start text-xs font-medium uppercase"
                  >
                    Description
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-end text-xs font-medium uppercase"
                  >
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {todos.map((todo) => (
                  <tr key={todo.id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <input
                        id="default-checkbox"
                        type="checkbox"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        defaultChecked={todo.status}
                      />
                    </td>
                    <td
                      className={clsx("px-6 py-4 whitespace-nowrap text-sm", {
                        "line-through text-gray-400": todo.status,
                      })}
                    >
                      {todo.title}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      {(todo.description?.length ?? 0) > 50
                        ? todo.description?.substring(0, 30) + "..."
                        : todo.description}
                    </td>
                    <td className="px-6 py-4 space-x-4 whitespace-nowrap text-end text-sm font-medium">
                      <button
                        type="button"
                        className="inline-flex items-center gap-x-2 text-sm rounded-lg border border-transparent text-blue-200 hover:text-blue-100 focus:outline-hidden focus:text-blue-200 disabled:opacity-50 disabled:pointer-events-none cursor-pointer"
                      >
                        Edit
                      </button>
                      <button
                        type="button"
                        className="inline-flex items-center gap-x-2 text-sm rounded-lg border border-transparent text-blue-200 hover:text-blue-100 focus:outline-hidden focus:text-blue-200 disabled:opacity-50 disabled:pointer-events-none cursor-pointer"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
