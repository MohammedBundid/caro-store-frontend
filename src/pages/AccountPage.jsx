import { useState } from "react";
import bgImage from '../assets/bg-1.jpg';


const AccountPage = () => {

    const[inputs, setInputs] = useState({});
    
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        setInputs(values => ({
          ...values,
          [name]: value
        }));
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        alert(JSON.stringify(inputs, null, 2));
    }

  return (
    <div className="min-h-screen flex justify-center items-center bg-center bg-cover" style={{ backgroundImage: `url(${bgImage})` }}>
      <form onSubmit={handleSubmit} className="bg-teal-700 p-8 max-w-md rounded-lg shadow-lg">
        <label htmlFor="email" className="block text-white font-bold mb-2">
            Email address
        </label>
        <input
            type="email"
            id="email"
            name="email"
            className="w-full px-4 py-2 rounded bg-white text-gray-800"
            placeholder="Enter your email"
            value={inputs.email || ""}
            onChange={handleChange}
        />
        <label htmlFor="password" className="block text-white font-bold mb-2">
            Password
        </label>
        <input
            type="password" 
            name="password" 
            id="pswd" 
            className="w-full px-4 py-2 rounded bg-white text-gray-800"
            placeholder="enter password"
            value={inputs.password || ""} 
            onChange={handleChange}
        />

        <button
          type="submit"
          className="mt-4 bg-slate-800 text-white py-2 px-4 rounded hover:bg-slate-600"
        >
          Register
        </button>
      </form>
    </div>
  );
}

export default AccountPage;
