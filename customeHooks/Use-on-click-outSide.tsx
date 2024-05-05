'use client'

import { useEffect } from "react"

const useONClickOutSide = (ref,handeloutSide)=>{
useEffect(()=>{
const listen = (event:Event)=>{
   
    const el = ref?.current
  if(!el || el.contains(event.target||null)){
return
  }
  handeloutSide()
}

    document.addEventListener('mousedown',listen)
    document.addEventListener('touchstart',listen)
    return ()=>{
        document.removeEventListener('mousedown',listen)
        document.removeEventListener('touchstart',listen)
    }
},[ref,handeloutSide])
    
}
export default useONClickOutSide