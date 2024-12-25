import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const EmptyWishlist = () => {
  return (
    <div className="w-full flex items-center justify-center flex-col mt-20 md:mt-10 gap-16 md:gap-10 text-center">
        <h1 className="text-3xl">Opps ! Nothing in Wishlist.</h1>
      <Image
        src={"/cart/empty-cart.png"}
        alt="empty cart"
        width={450}
        height={450}
        className="shrink-0"
      />
      <Link href={"/"}>
      <Button variant={"outline"} className="border-none flex items-center text-lg">
        <ChevronLeft className="w-5 h-5 mr-2"/>
        Continue Shopping
      </Button>
      </Link>
    </div>
  );
};

export default EmptyWishlist;