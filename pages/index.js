import Image from "next/image";
import { Inter } from "next/font/google";
import LineChart from "@/components/lineChart";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <LineChart />
    </div>
  );
}
