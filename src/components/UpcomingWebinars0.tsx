"use client"
import Link from "next/link";
import { HoverEffect } from "./ui/card-hover-effect";

function CardHoverEffectDemo() {
  
  const featuredWebinars = [
    {
      title: 'Montessori',
      description:
        'Are you looking to become a Montessori Teacher? With Montessori Teachers Training, you can unlock the potential of Montessori training.',
      slug: 'understanding-music-theory',
      isFeatured: true,
    },
    {
      title: 'Residential',
      description:
        'Are you looking to improve your English speaking skills? With Residential Camp, you can stay and study English.',
      slug: 'the-art-of-songwriting',
      isFeatured: true,
    },
    {
      title: 'ACME',
      description:
        'Lift your English from basic level to an excellent phase so that your language gives you an identity and cutting edge to stand out from the rest.',
      slug: 'mastering-your-instrument',
      isFeatured: true,
    },
    {
      title: 'IELTS',
      description:
        'Aims at equipping the learners with all the tools and mechanics of listening, speaking,reading and Writing.',
      slug: 'music-production-essentials',
      isFeatured: true,
    },
    // Added two more webinars
    {
      title: 'OET',
      description:
        'Customized to upskill the healthcare professionals with the right level of English proficiency to deliver safe and high quality nursing care.',
      slug: 'live-performance-techniques',
      isFeatured: true,
    },
    {
      title: 'PTE',
      description:
        'Transforming skills in English from the intermediate level to an elite phase so that they get a dream score and a brilliant career.',
      slug: 'digital-music-marketing',
      isFeatured: true,
    },
    {
      title: 'TTT',
      description:
        'Do you have in you what it takes to be an IELTS trainer? Come discover with our TTT and pave your way into the world of  IELTS teaching.',
      slug: 'digital-music-marketing',
      isFeatured: true,
    },
  ];

  return (
    <div className="p-12 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">Checkout Our Course List
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">Explore Courses</p>
        </div>
        <div className="mt-10">
          <HoverEffect items={featuredWebinars.map(webinar => (
            {
              title: webinar.title,
              description: webinar.description,
              link: '/'
            }
          ))} />
        </div>
        <div className="mt-10 text-center">
          <Link href={"/"}
          className="px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200"
          >
            View All webinars
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CardHoverEffectDemo