"use client";

import { useStep } from "@/context/StepContextProvider";
import { cn } from "@/lib/utils";

const StepIdicator = ({ id }: { id: number }) => {
  const { step } = useStep();
  return (
    <>
      <button
        className={cn(
          "size-10 cursor-default rounded-full border-2 bg-transparent font-semibold text-slate-100",
          { "bg-[#BEE2FD] text-slate-900 ": step === id }
        )}
      >
        {id}
      </button>
    </>
  );
};

export default StepIdicator;
