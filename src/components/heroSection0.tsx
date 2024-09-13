import Link from "next/link"
import { Spotlight } from "./ui/Spotlight"
import { Button } from "./ui/moving-border"

function HeroSection() {
  return (
    <div className="h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0"
    >
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-8 justify-center">

      <div>
        <img src="https://britfort.com/wp-content/uploads/2023/01/abcd.jpg.webp" alt="" className="imgage m-auto" />
      </div>
        <div className="p-4 ralative z-10 w-full text-center m-auto imggs">
            <h1 className="mt-20 md:mt-0 text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 mb-4">About British Academy</h1>
            <h1 className="mt-20 md:mt-0 text-4xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">Welcome to the No. 1 Language Coaching Centre in India.</h1>
            <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">Britfort Academy is a unique and distinctive institute that helps you to realize your drawbacks and improve your cherished aspiration about advanced mastery and proficiency in English.</p>
            <div className="mt-4">
                <Link href={"/service"}>
                <Button
                    borderRadius="1.75rem"
                    className="dark:bg-black dark:text-white border-neutral-200 dark:border-slate-800"
                    >
                    Get in touch
                </Button>
                </Link>
            </div>
        </div>
                  </div>
    </div>
  )
}

export default HeroSection
