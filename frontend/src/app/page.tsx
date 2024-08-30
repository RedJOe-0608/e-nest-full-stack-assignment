import AboutInstructor from "./_components/AboutInstructor"
import CourseOfferings from "./_components/CourseOfferings"
import FeaturedReviews from "./_components/FeaturedReviewSection"
import Footer from "./_components/Footer"
import Header from "./_components/Header"
import Hero from "./_components/Hero"
import InternshipOpportunity from "./_components/InternshipOppurtunity"
import PeopleAlsoBought from "./_components/PeopleAlsoBought"
import Syllabus from "./_components/Syllabus"
import WhatYouWillLearn from "./_components/WhatWillYouLearn"

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#F5F2F8] ">
     <Header />
      <Hero />
      <CourseOfferings />
      <InternshipOpportunity />
      <WhatYouWillLearn />
      <Syllabus />
      <AboutInstructor />
      <FeaturedReviews />
      <PeopleAlsoBought />
      <Footer />
    </div>
  )
}

export default Home
