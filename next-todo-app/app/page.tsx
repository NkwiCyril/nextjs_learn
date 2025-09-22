import { PlusCircleIcon } from "@heroicons/react/20/solid";
import Table from "./ui/table";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col gap-5 max-w-3xl mx-auto my-10">
      <div className="flex justify-between items-center my-2">
        <p className="text-lg">Next.js ToDo App</p>
        <Link href={"/todos/new"}>
          <button className="flex gap-2 rounded items-center bg-blue-700 hover:bg-blue-600 cursor-pointer text-white px-3 py-1">
            <PlusCircleIcon height={25} width={25} />
            Create Task
          </button>
        </Link>
      </div>
      <Table />
    </div>
  );
}
