"use client";
import Switch from "./components/Switch";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center gap-10 min-h-screen min-w-screen">
      <div>
        <h1 className="text-2xl font-bold">Switch Component</h1>
        <p className="text-center">By MachadoDev</p>
      </div>
      <Switch />
    </div>
  );
}
