import Header from "@/components/Header";
import FormSection from "@/components/form/FormSection";

export default function Home() {
  return (
    <main className="grid h-full  bg-[#EFF5FF] md:grid-cols-[360px_1fr]">
      <Header />

      <FormSection />
    </main>
  );
}
