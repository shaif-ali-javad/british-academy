import Link from "next/link"
// import { Spotlight } from "./ui/Spotlight"
import { Button } from "../../components/ui/moving-border"

function HeroSection() {
  return (
    <div className="bd-black">

    <div className="h-auto w-full flex flex-col items-center justify-center relative overflow-hidden mx-auto pt-20 bg-black pb-10"
    >
      <div
        className="-top-40 left-0 md:left-60 md:-top-20"
      />
      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-8 justify-center">

      <div>
        <img src="https://img.freepik.com/free-photo/portrait-teacher-work-educational-system_23-2151737331.jpg?t=st=1727090879~exp=1727094479~hmac=fcaf702a7d5ec4254be8b050a4511e00b2c3854c569997e9bb50f128644f8ce2&w=900" alt="" className="imgage m-auto" />
      </div>
        <div className="p-4 ralative z-10 w-full m-auto imggs">
            <h1 className="mt-20 md:mt-0 text-3xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 mb-4">About Company</h1>
            <h1 className="mt-20 md:mt-0 text-4xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">The Best Language School in India
            </h1>
            <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">The Britfort Academy started functioning at Fort Kochi in 2015 and has emerged, within a few years, as a Number One Language Academy in India to provide quality-ensured and outcome-based training for communicative mastery in English Language, Professional Advancements and excellent IELTS/OET/PTE Centre.</p>
            <div className="mt-4">
                <Link href={"/service"}>
                <Button
                    borderRadius="1.75rem"
                    className="dark:bg-black dark:text-white border-neutral-200 dark:border-slate-800"
                    >
                    Discover More
                </Button>
                </Link>
            </div>
        </div>
                  </div>
                  <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 mx-auto px-3">The Academy has, so far, successfully completed around 500 batches of Advanced Communicative Mastery in English (ACME) and Stay and Study Camps (SSC) of IELTS respectively. Now we have 25000+ Britfortians who completed our Academic Courses.</p>
    
    </div>



    <div className="h-auto w-full flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0 bg-black"
    >
      <div
        className="-top-40 left-0 md:left-60 md:-top-20"
      />
      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-8 justify-center">

      <div>
      <h1 className="mt-20 md:mt-0 text-3xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 mb-4 text-center">Leading Visionary</h1>
        <img src="https://britfort.com/wp-content/uploads/2023/01/CEO.jpg.webp" alt="" className="imgage m-auto" />
      </div>
        <div className="p-4 ralative z-10 w-full m-auto imggs">
            <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">Britfort Academy, India’s leading English language/IELTS center, is founded and led by Mr.Noushad Nilgris. He began his entrepreneurial journey in 2014 when he launched his brainchild, Britfort Academy. Britfort was flagged off in Kochi and grew from a 3 member team to its current 120+ members. He has been at the helm of affairs on a day-to-day basis tirelessly. Since 2014, Britfort has guided over 25000+ Britfortians to conquer their dreams. He possesses a master’s degree in English literature and psychology, MBA in marketing, B.Ed in English, and certified American TEFL/ TESOL certification. <br />

            Mr. Nilgris is the author of the international best selling book : Mentoring My Mind – Reflections On My Life Journey. <br /><br />

            He has received multiple accolades and recognition including the Public Relations Council of India’s (PRCI) Young Entrepreneur Award, Dr. APJ Abdul Kalam Students Foundation’s Best English Language Institute Award, and Global Vision International’s Best Associate Partner Award (GVI -UK). He was also featured in The New Indian Express, South India’s leading English newspaper, for his commendable entrepreneurial excellence.




            </p>
            <div className="mt-4">
                <div
                    className="dark:bg-black dark:text-white border-neutral-200 dark:border-slate-800"
                    >
                    <p>Noushad Nilgris</p>
                    <p>Founder & CEO, Britfort Academy</p>
                </div>
            </div>
        </div>
        </div>
        <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 mx-auto px-3">His mission as an educator is to assist one million students in finding their road to success, and his mission as a human being is to contribute generously to the world in order to make a difference in the lives of those in need. 
            <br /><br />
        
            Mr. Nilgris is known for mentoring young entrepreneurs and startups develop businesses that can expand without them, based on key concepts of humanism and simplicity — all while boosting social skills, happiness, productivity, and awesomeness. He is also known for his practical wisdom, impactful strategies, innate sense of humor, and ability to simplify complex ideas into fun and simple, step by step strategies that anyone can implement to accelerate their business.
            <br /><br />

            As the saying goes : Education is the key to all the locked doors ; so does he uphold the same as his motto. He firmly believes that imparting proper education to individuals who seek, will help them stand on their own feet and unlock their potentials for a brighter, better and promising tomorrow.

        </p>
    
    </div>

    </div>
  )
}

export default HeroSection
