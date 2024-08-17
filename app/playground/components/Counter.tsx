"use client";
import { Button } from "@/components/ui/button";
import { useCounterStore } from "../../../provider/counter-store-provider";
import React from "react";

const Counter = () => {
  const { count, incrementCount, decrementCount } = useCounterStore(
    (state) => state
  );

  return (
    <div className="flex gap-4 items-center">
      <Button onClick={incrementCount}> + Add</Button>
      <p>Counter: {count}</p>
      <Button onClick={decrementCount}> - Remove</Button>
    </div>
  );
};

export default Counter;
