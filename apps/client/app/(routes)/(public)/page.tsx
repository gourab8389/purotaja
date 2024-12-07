"use client";

import { useAuth } from "@/hooks/use-auth";
import { MaxWrapper } from "@/components/shared/max-wrapper";
import Hero from "./_components/hero";
import BestSellers from "./_components/best-sellers";
import RecommendedItem from "./_components/recommended-item";

export default function Home() {

  return (
    <MaxWrapper>
      <Hero/>
      <BestSellers/>
      <RecommendedItem/>
    </MaxWrapper>
  );
}
