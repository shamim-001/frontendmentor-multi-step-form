import { steps } from "@/constants";
import StepIdicator from "@/components/StepIdicator";
import Image from "next/image";

const Header = () => {
  return (
    <section className="relative">
      <Image
        src="/bg-sidebar-mobile.svg"
        alt="Sidebar Image"
        fill
        priority
        className="relative  rounded-md object-cover md:hidden"
      />

      <Image
        src="/bg-sidebar-desktop.svg"
        alt="Sidebar Image"
        fill
        priority
        className="relative hidden rounded-md object-cover md:block"
      />

      <div className="absolute top-10 flex w-full justify-center gap-6 md:ml-10 md:flex-col md:justify-normal">
        {steps.map((step) => (
          <div key={step.id} className="md:flex md:items-center">
            <StepIdicator id={step.id} />

            <div className="ml-5 hidden md:flex md:flex-col md:gap-1">
              <span className="font-semibold text-slate-800">{step.step}</span>
              <span className="font-semibold text-slate-200">{step.label}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Header;
