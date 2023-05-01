// import { Footer, Navbar } from '../components';
// import { About, Explore, Feedback, GetStarted, Hero, Insights, WhatsNew, World } from '../sections';

// const Page = () => (
//   <div className='my-bg overflow-hidden'>
//     <Navbar />
//     <Hero />
//     <div className="relative">
//       <About />
//       <div className="gradient-03 z-0" />
//       <Explore />
//     </div>

//     <div className="relative">
//       {/* <GetStarted /> */}
//       <div className="gradient-04 z-0" />
//       {/* <WhatsNew /> */}
//     </div>

//     {/* <World /> */}

//     <div className="relative">
//       <Insights />
//       <div className="gradient-03 z-0" />
//       <Feedback />
//     </div>

//     <Footer />
//   </div>
// );

// export default Page;

import { Navbar } from '../components';
import { AboutUs, ContactUs, Events, Hero, Patrons, Section1, Theme } from '../sections';

const Page = () => (
  <>
    <Navbar />
    <div className='my-bg overflow-hidden'>
      <Hero />
      <div className="relative" >
        <Section1 />
        <div className="gradient-03 z-0" />
        <Events />
      </div>

      <div className="relative">
        <Theme />
        <div className="gradient-04 z-0" />
        <AboutUs />
      </div>

      <div className="relative">
        <Patrons />
        <div className="gradient-03 z-0" />
        <ContactUs />
      </div>
    </div>
  </>
);

export default Page;
