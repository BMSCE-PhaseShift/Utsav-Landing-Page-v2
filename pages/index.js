import { Navbar } from '../components';
import { AboutUs, ContactUs, Events, Hero, Patrons, Section1, Teams, Theme } from '../sections';
import Head from '../app/head';

const Page = ({data}) => (
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
                <Teams data={data}/>
                <Patrons />
                <div className="gradient-03 z-0" />
                <ContactUs />
            </div>
        </div>
    </>
);

export default Page;

export async function getServerSideProps(context) {
    // const response = await fetch('http://bmsutsav.in/api/files');
    const response = await fetch('http://localhost:3000/api/files');

    const data = await response.json();
    return{
        props:{
            data
        }
    }
}
