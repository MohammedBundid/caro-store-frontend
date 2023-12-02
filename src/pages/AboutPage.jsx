import bgImage3 from '../assets/bg-3.jpg'
import bgImage4 from '../assets/bg-4.jpg'

const About = () => {
    return (
        <div
            className="bg-cyan-100 min-h-screen bg-center bg-cover"
            style={{ backgroundImage: `url(${bgImage4})` }}
        >
            <div className="container mx-auto p-4">
                <h1 className="text-4xl font-bold text-teal-700 mt-26">About Us</h1>
                <p className="text-gray-900 mt-4">
                    Welcome to our store! We are a passionate team dedicated to providing you with the best products and services. Our journey started with a love for quality and a commitment to excellence.
                </p>
                <p className="text-gray-900 mt-4">
                    Our collection includes a wide range of high-quality shoes, as well as a variety of herbs and spices to cater to your unique tastes and needs. We take pride in ensuring that every product we offer meets our high standards of quality and craftsmanship.
                </p>
                <button className='bg-teal-800 border-none rounded-md text-lg capitalize py-3 px-4 mt-4 hover:text-teal-200 text-white'>Learn More</button>
                {/* You can add more content as needed */}
            </div>
        </div>
    );
}
 
export default About;