import Link from "next/link"
import { Button } from "./ui/moving-border"

function HeroSection() {
  return (
    <div className="h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0"
    >
      <div
        className="-top-40 left-0 md:left-60 md:-top-20"
      />
      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-8 justify-center">

        <div className="p-4 ralative z-10 w-full m-auto imggs">
            <h1 className="mt-20 md:mt-0 text-2xl md:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 mb-4">Why Choose Us?</h1>
            <h1 className="mt-20 md:mt-0 text-4xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">Benefits of Learning at Britfort</h1>
            <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">The main goal of this academy is to ensure each of our student’s communicative competence, comprehensive command, and overall skill in English.</p>
            <div className="mt-4">
            <h1 className="mt-20 md:mt-0 text-2xl md:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 mb-4">Start learning from our experts and enhance your skills.</h1>
            </div>
        </div>
        <div>
        <img src="https://britfort.com/wp-content/uploads/2023/01/abcde.jpg.webp" alt="" className="imgage m-auto" />
      </div>
                  </div>
    </div>
  )
}

export default HeroSection
