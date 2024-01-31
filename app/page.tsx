import Image from "next/image";
import Roulette from "@/components/Roulette/Roulette";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Roulette />
    </main>
  );
}
