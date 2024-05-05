import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { ArrowDownToLine, ArrowRight, CheckCircle, Leaf } from "lucide-react";

const perks = [
  {name:"Instant Devlivery",
    icon:ArrowDownToLine,
    description:"Get your assets devliveredto your mail in second and donwload right away"
  },
  {name:"Guaranted Quality",
    icon:CheckCircle,
    description:"Get your assets devliveredto your mail in second and donwload right away"
  },
  {name:"For the planet",
    icon:Leaf,
    description:"Get your assets devliveredto your mail in second and donwload right away"
  }
]

export default function Home() {
  return (
    <>
    
      <MaxWidthWrapper>
<div className="flex flex-col py-20 mx-auto items-center max-w-3xl">
<h1 className="text-4xl text-center py-2 tracking-tighter font-bold text-transparent bg-clip-text bg-gradient-to-t from-slate-600 to-black md:text-6xl">Your Markit Place for high-quality <span className="text-blue-600" >digital assets</span></h1>
<p className="mt-6 text-center text-lg max-w-prose text-muted-foreground">Welcome to digital . Every asset on our platform is verified by our team to insure our high quailty standards</p>
<div className="flex flex-col sm:flex-row gap-4 mt-6">

<Link href={'/'} className={buttonVariants()}>Browse Tranding</Link>
<Button variant={"ghost"}>Our quality promise <ArrowRight className="text-sm"/> </Button>
</div>
</div>
{/* todo list products */}
      </MaxWidthWrapper>
      <section className="flex  bg-gray-50 border-t" >
      <MaxWidthWrapper className='py-20'>
<div className="flex flex-wrap justify-center gap-12 md:gap-4">
 {perks.map((perk)=>(
  <div key={perk.name} className="flex flex-col justify-center items-center w-64 gap-y-2">
    <div className="rounded-full w-16 h-16 flex items-center justify-center bg-blue-100">{< perk.icon className="w-1/3 h-1/3 text-blue-400" />}</div>
    <div className="">
      <h3 className="text-base font-medium">{perk.name}</h3>
    </div>
    <div className="">
      <p className="text-muted-foreground text-center text-sm" >{perk.description}</p>
    </div>
  </div>
 ))}
</div>
      </MaxWidthWrapper>
      </section>
      </>
   
  );
}
