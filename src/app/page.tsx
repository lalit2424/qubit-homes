"use client"; // Ensures this component runs on the client side

import Image from "next/image";
import dynamic from "next/dynamic";
import HomeBanner from '../components/HomeBanner';
import AboutSection from "@/components/AboutSection";
import PropertiesByCities from "@/components/PropertiesByCities";


export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <HomeBanner />
        <AboutSection />
        <PropertiesByCities />
      </main>
    </div>
  );
}
