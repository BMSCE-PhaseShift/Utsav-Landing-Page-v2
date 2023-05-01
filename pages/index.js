import { Navbar } from '../components';
import { AboutUs, ContactUs, Events, Hero, Patrons, Section1, Theme } from '../sections';
import Head from '../app/head';

const Page = () => (
    <>
        <Head />
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
