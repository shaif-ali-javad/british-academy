'use client'
import Image from "next/image";
import React from "react";
// import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

// import img0 from "https://shaif-ali-javad.github.io/image-storage/wall-paper-1(mobile).jpg";
// import img1 from "https://shaif-ali-javad.github.io/image-storage/wall-paper-1(mobile).jpg";
// import img2 from "https://shaif-ali-javad.github.io/image-storage/wall-paper-1(mobile).jpg";
// import img3 from "https://shaif-ali-javad.github.io/image-storage/wall-paper-1(mobile).jpg";
// import img4 from "https://shaif-ali-javad.github.io/image-storage/wall-paper-1(mobile).jpg";

const courseData = [
  {
    "id": 1,
    "title": "Montessori",
    "slug": "guitar-fundamentals",
    "description": "Are you looking to become a Montessori Teacher? With Montessori Teachers Training, you can unlock the potential of Montessori training.",
    "price": 99.99,
    "instructor": "John Doe",
    "isFeatured": true,
    "image": "https://img.freepik.com/free-photo/medium-shot-kids-sitting-together-table_23-2149355251.jpg?t=st=1727188308~exp=1727191908~hmac=f68e734e2b61e42d8d16ea5acab4ebfcbb20900476c430e1bd8789c6bf257f30&w=900" 
  },
  {
    "id": 2,
    "title": "Residential",
    "slug": "piano-for-beginners",
    "description": "Are you looking to improve your English speaking skills? With Residential Camp, you can stay and study English.",
    "price": 109.99,
    "instructor": "Jane Smith",
    "isFeatured": true,
    "image": "https://img.freepik.com/premium-photo/new-luxury-residential-buildings-stylish-office-building-premium-apartments-flat-building_71956-25222.jpg?w=826 " 
  },
  {
    "id": 3,
    "title": "ACME",
    "slug": "advanced-vocal-techniques",
    "description": "Lift your English from basic level to an excellent phase so that your language gives you an identity and cutting edge to stand out from the rest.",
    "price": 119.99,
    "instructor": "Emily Johnson",
    "isFeatured": true,
    "image": "https://img.freepik.com/premium-photo/young-women-teacher-stand-up-front-student_1015832-482.jpg?uid=R77884259&ga=GA1.1.215374147.1714585520&semt=ais_hybrid"
  },
  {
    "id": 4,
    "title": "IELTS",
    "slug": "drumming-mastery",
    "description": "Aims at equipping the learners with all the tools and mechanics of listening, speaking,reading and Writing.",
    "price": 129.99,
    "instructor": "Mike Brown",
    "isFeatured": true,
    "image": "https://img.freepik.com/premium-photo/close-up-student-taking-exam-classroom_1110519-16045.jpg?w=900"
  },
  {
    "id": 5,
    "title": "OET",
    "slug": "jazz-improvisation",
    "description": "Customized to upskill the healthcare professionals with the right level of English proficiency to deliver safe and high quality nursing care.",
    "price": 139.99,
    "instructor": "Chris Davis",
    "isFeatured": false,
    "image": "https://img.freepik.com/premium-photo/three-women-are-talking-hospital-room-with-doctor_1053-40790.jpg?w=900"
  },
  {
    "id": 6,
    "title": "PTE",
    "slug": "jazz-improvisation",
    "description": "Transforming skills in English from the intermediate level to an elite phase so that they get a dream score and a brilliant career.",
    "price": 139.99,
    "instructor": "Chris Davis",
    "isFeatured": true,
    "image": "https://img.freepik.com/premium-photo/students-working-study-group_1121250-197086.jpg?w=826"
  },
  {
    "id": 7,
    "title": "TTT",
    "slug": "jazz-improvisation",
    "description": "Do you have in you what it takes to be an IELTS trainer? Come discover with our TTT and pave your way into the world of  IELTS teaching.",
    "price": 139.99,
    "instructor": "Chris Davis",
    "isFeatured": true,
    "image": "https://img.freepik.com/premium-photo/trainer-leading-workshop-emotional-intelligence-workplace-relationships_1314467-52729.jpg?uid=R77884259&ga=GA1.1.215374147.1714585520&semt=ais_hybrid"
  }
];


function page() {
  return (
    <div>
    
    <div className="img-container-product pt-20">
    <div className="text-center">
          <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">Checkout Our Course List
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">Explore Courses</p>
        </div>
    </div>

    <div className="min-h-screen bg-black py-12 pt-30">
  
        <div className="flex flex-wrap justify-center">
            {courseData.map((course) => (
                <div className="inter-var m-4" key={course.id}>
                <div className="bg-black relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-white/[0.2] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
                  <div className="w-full mt-4">
                    <img
                      src={course.image}
                      height="1000"
                      width="1000"
                      className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                      alt={course.title}
                    />
                  <div
                    className="text-xl font-bold text-white mt-4"
                  >
                    {course.title}
                  </div>
                  <div
                    className="text-white text-sm max-w-sm mt-2"
                  >
                    {course.description}
                  </div>
                  </div>
                  <div className="flex justify-between items-center mt-20">
                    <div
                      
                      
                      className="px-4 py-2 rounded-xl text-xs font-normal text-white"
                    >
                      Try now →
                    </div>
                    <div
                      
                      
                      className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                    >
                      Sign up
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>  
    </div>
  </div>
  )
}

export default page