import { Footer, Navbar } from '../components';
import { AboutUs, Explore, ContactUs, Events, Feedback, GetStarted, Hero, Section1, Theme, WhatsNew, World } from '../sections';

const Page = () => (
    <div className='my-bg overflow-hidden'>
        {/* <Navbar /> */}
        <Hero />
        <div className="relative">
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
            <ContactUs />
            <div className="gradient-03 z-0" />
            {/* <Feedback /> */}
        </div>

        {/* <Footer /> */}
    </div>
);

export default Page;
