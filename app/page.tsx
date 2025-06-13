"use client";
import { useSwitch } from "./components/Switch/useSwitch";
import Switch from "./components/Switch";

export default function Home() {
  const { isOn, isAnimating, toggle, current } = useSwitch(false);
  return (
    <div className="flex flex-col items-center justify-center gap-10 min-h-screen min-w-screen">
      <div>
        <h1 className=" text-2xl font-bold">Switch Component</h1>
        <p className="text-center">By MachadoDev</p>
      </div>
      <div className="flex items-center justify-center ">
        <div className="flex flex-col items-center gap-4">
          <Switch isAnimating={isAnimating} toggle={toggle} current={current} />
          <span className="text-xl">{isOn ? "Ligado ✅" : "Desligado ❌"}</span>
        </div>
      </div>
    </div>
  );
}
