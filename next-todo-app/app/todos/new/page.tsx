"use client";

import { ArrowLeftCircleIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { createTodo } from "@/app/lib/data";

export default function Page() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    setError(null);
    setIsSubmitting(true);

    try {
      if (!title.trim() || !description.trim()) {
        setError("Title and description are required");
        setIsSubmitting(false);
        return;
      }

      await createTodo({ title, description });
      router.push("/");
      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
      setIsSubmitting(false);
    }
  };

  const pathName = usePathname();
  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto my-10">
      <div className="flex justify-between items-center mb-3">
        <Link href={"/"}>
          <ArrowLeftCircleIcon height={30} width={30} />
        </Link>

        <h1 className="py-5 text-xl font-medium">Create ToDo</h1>
      </div>

      {error && (
        <div className="p-3 mb-4 text-sm text-red-800 rounded-lg bg-red-50">
          {error}
        </div>
      )}

      <div>
        <label className="block mb-2 text-lg font-medium text-gray-900 dark:text-white">
          Title
        </label>
        <input
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="block w-full mb-5 p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
        <label className="block mb-2 text-lg font-medium text-gray-900 dark:text-white">
          Description
        </label>
        <textarea
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="block mb-5 w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          rows={4}
        />
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        className={`flex gap-2 rounded items-center ${
          isSubmitting
            ? "bg-blue-400 cursor-not-allowed"
            : "bg-blue-700 hover:bg-blue-600 cursor-pointer"
        } text-white px-3 py-1`}
      >
        {isSubmitting
          ? "Creating..."
          : pathName == "/todos/new"
          ? "Create"
          : "Update"}
      </button>
    </form>
  );
}
