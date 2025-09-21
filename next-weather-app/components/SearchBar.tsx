"use client";

import Image from "next/image";
import { useState } from "react";

type SearchBarProps = {
  placeholder?: string;
  onSearch?: (query: string) => void;
  defaultValue?: string;
  className?: string;
};

export default function SearchBar({
  placeholder = "Search for a place...",
  onSearch,
  defaultValue = "",
  className,
}: SearchBarProps) {
  const [query, setQuery] = useState(defaultValue);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    onSearch?.(query.trim());
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={`w-full max-w-2xl flex gap-3 ${className ?? ""}`}
    >
      <div className="flex-1 flex items-center gap-3 bg-[--neutral-800] border border-[--neutral-700] rounded-lg px-4 h-12">
        <Image
          src="/images/icon-search.svg"
          alt="search"
          width={20}
          height={20}
        />
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="bg-transparent outline-none w-full placeholder:text-[--neutral-300]"
          placeholder={placeholder}
        />
      </div>
      <button
        type="submit"
        className="h-12 px-5 rounded-lg bg-[--blue-500] hover:bg-[--blue-700] transition-colors"
      >
        Search
      </button>
    </form>
  );
}
