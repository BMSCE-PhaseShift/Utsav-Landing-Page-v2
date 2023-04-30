import { Footer, Navbar } from '../components';
import { AboutUs, Patrons, Explore, ContactUs, Events, Feedback, GetStarted, Hero, Section1, Theme, WhatsNew, World } from '../sections';

const Page = () => (
    <>
        <Navbar />
        <div className='my-bg overflow-hidden'>
            <Hero />
            {/* <Hero /> */}
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

            {/* <World /> */}

            <div className="relative">
                <Patrons />
                <div className="gradient-03 z-0" />
                {/* <Feedback /> */}
                <ContactUs />
            </div>

            {/* <Footer /> */}
        </div>
    </>
);

export default Page;
