import bgImage from '../assets/bg-1.jpg'
import bgImage2 from '../assets/bg-2.jpg'

const LandingPage = () => {
    return (
        <div
            className="bg-cyan-100 min-h-screen bg-center bg-cover bg-fixed"
            style={{ backgroundImage: `url(${bgImage2})` }}
            >
            <div className="container mx-auto p-4">
                <h1 className="text-4xl font-bold text-teal-700 mt-32">Welcome to Our Strore</h1>
                <p className="text-gray-900 mt-4">
                We sell high quality shoes and lots of herbs and spices.
                </p>
                <button type='button' className='bg-teal-800 border-none rounded-md text-lg capitalize py-3 px-4 mt-4 hover:text-teal-200 text-white'>check us out</button>
                {/* Add your content here */}
            </div>
            </div>
        );
    };

export default LandingPage;
