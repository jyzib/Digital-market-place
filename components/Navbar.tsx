import Link from "next/link"
import MaxWidthWrapper from "./MaxWidthWrapper"
import {Icons} from '@/components/Icon'
import NavItems from "./NavItems"
import { Button, buttonVariants } from "./ui/button"
import Cart from "./Cart"

const Navbar = ()=>{
    const user = null
    return (
        <div className="sticky top-0 inset-x-0 h-16 bg-white z-50">
            <header className="relative bg-white ">
                <MaxWidthWrapper >
                    <div className="border-b border-gray-200">
                       <div className="flex h-16 items-center">
                        {/* todo Mobile Navbar */}
                        <div className="ml-4 flex lg:ml-0">
                            <Link href={'/'}>
                               <Icons.logo className="w-10 h-10" />
                            </Link>
                        </div>     
                        <div className="hidden lg:block z-50 lg:ml-8 lg:self-stretch">
                       <NavItems/>
                            </div>   
                            <div className="ml-auto flex items-center">
                                <div className="hidden lg:flex  lg:flex-1">

                                    {!user&&
                                    <div className="">
                                        <Link href={'/sign-in'} className={buttonVariants({variant:'ghost'})} >Sign In</Link>
                                    </div>
                                    }
                                    {!user&&
                                    <div className="">
                                          <Link href={'/sign-up'} className={buttonVariants({variant:'ghost'})} >Create Account</Link>
                                    </div>
                                    }
                               
                                    <div className="">
                                       <Cart/>
                                    </div>
                                  
                                </div>
                            </div>
                       </div>
                    </div>
                </MaxWidthWrapper>

            </header>
        </div>
    )
}
export default Navbar