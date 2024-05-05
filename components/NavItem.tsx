"use client";
import { ChevronDown } from "lucide-react";
import { Button } from "./ui/button";
import { PRODUCTS_CATEGORIES } from "@/config";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
type categories = (typeof PRODUCTS_CATEGORIES)[number];

interface NavItemProps {
  categories: categories;
  handelOpen: () => void;
  isOpen: Boolean;
}

const NavItem = ({ categories, handelOpen, isOpen }: NavItemProps) => {
  return (
    <div className="flex ">
      <div className=" flex items-center">
        <Button
          className="gap-1.5"
          onClick={handelOpen}
          variant={isOpen ? "secondary" : "ghost"}
        >
          {categories.label}
          <ChevronDown
            className={cn("w-5 h-5 transition-all text-muted-foreground", {
              "-rotate-180 ": isOpen,
            })}
          />
        </Button>
        {isOpen && (
          <div
            className={cn("left-0 right-0 absolute top-full z-100", {
              "animate-in fade-in-10 slide-in-from-top-5 ": isOpen,
            })}
          >
            <div className="relative bg-white border-b">
              <div className="mx-auto max-w-7xl px-8">
                <div className="grid grid-cols-3 gap-4  py-10 ">
                  {categories.featured.map((item) => {
                    return (
                      <div className="">
                        <div className="relative bg-gray-400 overflow-hidden aspect-video rounded-xl hover:opacity-75">
                          <Image src={item.imageSrc} fill alt="Product img" />
                        </div>
<div className="mt-5 ">
    <Link href={item.imageSrc}>
    <h1 className="text-md font-bold text-gray-700">{item.name}</h1>
    </Link>
    <p className="text-muted-foreground ">Shop Now</p>

</div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavItem;
