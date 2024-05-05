"use client";
import { useEffect, useState } from "react";
import { PRODUCTS_CATEGORIES } from "@/config";
import NavItem from "./NavItem";
import useONClickOutSide from "@/customeHooks/Use-on-click-outSide";
import { useRef } from "react";
const NavItems = () => {
  const [activeIndex, setActiveIndex] = useState<null | Number>(null);
  const ref = useRef(null);

  useONClickOutSide(ref, () => setActiveIndex(null));

  useEffect(() => {
    const handelKey = (e:KeyboardEvent) => {
      if (e.key === "Enter") {
        setActiveIndex(null);
      }
    };

    document.addEventListener("keydown", handelKey);
    return () => {
      document.removeEventListener("keydown", handelKey);
    };
  }, []);

  return (
    <div className="flex gap-4 h-full" ref={ref}>
      {PRODUCTS_CATEGORIES.map((categories, i) => {
        const handelOpen = () => {
          if (activeIndex === i) {
            setActiveIndex(null);
          } else {
            setActiveIndex(i);
          }
        };

        const isOpen = activeIndex === i;

        return (
          <NavItem
            handelOpen={handelOpen}
            isOpen={isOpen}
            categories={categories}
            key={i}
          />
        );
      })}
    </div>
  );
};

export default NavItems;
