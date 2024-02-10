import Header from "@/components/Header";
import FormSection from "@/components/form/FormSection";
import FinalValueContextProvider from "@/context/FinalValueContextProvider";
import IsYearlyContextProvider from "@/context/IsYearlyContextProvider";

export default function Home() {
  return (
    <main className="grid h-full md:grid-cols-[360px_1fr]">
      <Header />
      <IsYearlyContextProvider>
        <FinalValueContextProvider>
          <FormSection />
        </FinalValueContextProvider>
      </IsYearlyContextProvider>
    </main>
  );
}
