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

            <Teams data={data}/>
            <div className="relative">
                
                <Patrons />
                <div className="gradient-03 z-0" />
                <ContactUs />
            </div>
        </div>
    </>
);

export default Page;

export async function getServerSideProps(context) {
    const response = await fetch('https://bmsutsav.in/api/files');
    // const response = await fetch('http://localhost:3000/api/files');

    const data = await response.json();
    return{
        props:{
            data: shuffle(data.fileNames)
        }
    }
}

function shuffle(array) {
    // Copy the array elements from index 2 to a new shuffled array
    const shuffledArray = array.slice(2);
  
    // Shuffle the new array
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
  
    // Combine the shuffled array with the unchanged elements at indices 0 and 1
    const result = [...array.slice(0, 2), ...shuffledArray];
    // console.log("new array "+result);
    return result;
  }
  
  