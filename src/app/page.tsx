"use client";
import Loader from "@/components/Loader";
import QuoteCard from "@/components/QuoteCard";
import { useAppContext } from "@/context/AppContext";

function HomePage() {
  const { isLoading, color, quote } = useAppContext();

  if (isLoading) return <Loader />;

  return (
    <main
      style={{ backgroundColor: `${color ? color : "#000"}` }}
      className="min-h-screen transition-colors ease-in sm:px-0 px-5"
    >
      <section className="container mx-auto flex justify-center items-center h-screen">
        <QuoteCard quote={quote} />
      </section>
    </main>
  );
}

export default HomePage;
