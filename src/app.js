import React from "react";
import AutoComplete from "./components/auto_complete";

export default function MyApp() {
  return (
    <div className="flex flex-col gap-10 items-center justify-center py-2 text-1xl">
      <section className="w-full border border-gray-300 p-2 flex item-center justify-center">
        <h1 class="text-4xl font-bold text-center text-purple-700 transition duration-500 ease-in-out transform hover:scale-110 hover:shadow-2xl">
          Welcome to My App
        </h1>
      </section>
      <AutoComplete />
    </div>
  );
}
