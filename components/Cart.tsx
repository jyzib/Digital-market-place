
import { Button, buttonVariants } from "@/components/ui/button"
import { formatePrice } from "@/lib/utils"

import { ShoppingCart } from "lucide-react"
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import Link from "next/link"
import Image from "next/image"
  const Cart = ()=>{
   const fee =667
   const itemCount = 0
    return (
        <Sheet>
        <SheetTrigger asChild>
          <Button className="group" variant="outline"><ShoppingCart className="group-hover:text-muted-foreground"/>
          <span className="ml-4 flex items-center justify-center group-hover:text-muted-foreground">0</span>
          </Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle className="text-center">Cart (0)</SheetTitle>
            <SheetDescription>
              Cart Item
            </SheetDescription>
          </SheetHeader>
          <hr className="my-5" />
{itemCount>0?<> <div className="flex w-full mt-5 flex-col gap-3">
            <div className="flex justify-between w-full">
                <p>Shiping</p>
                <p>free</p>
            </div>
            <div className="flex justify-between w-full">
                <p>Transaction</p>
                <p>{formatePrice(fee)}</p>
            </div>
           
          
          </div> 
           <SheetFooter>
           <SheetTrigger asChild>

            <Link href={'/cart'} className={buttonVariants({className:'w-full mt-4'})} >Continue to checkout</Link>
           </SheetTrigger>
        </SheetFooter>
        </>:
          <div className="flex flex-col bg-red items-center justify-center">
            <div className="relative h-60 w-60">
            <Image src={'/hippo-empty-cart.png'} 
            alt="cart is empty"  fill/>
            </div>
<h4 className="text-black text-xl" >Your Cart is Empty</h4>
<SheetTrigger asChild>

<Link href={'/products'} className="text-blue-600 underline" >
    Add Item to your cart to checkout
</Link>
</SheetTrigger>
          </div>
          }
         
         
       
        </SheetContent>


      </Sheet>
    )
}
export default Cart