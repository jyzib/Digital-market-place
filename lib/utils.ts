import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const formatePrice = (price:number|string)=>{
  const amount =typeof price == 'string' ? parseInt(price) : price

  return new Intl.NumberFormat('en-IN',{
    style:'currency',
    currency:'INR',
    maximumFractionDigits:2,
  }).format(amount)

}