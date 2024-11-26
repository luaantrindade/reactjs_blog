// EntryCard.js
import React from 'react';

const ServicesSection = () => {
  // const skills = [
  //   'JavaScript',
  //   'React',
  //   'Node.js',
  //   'AWS',
  //   'CSS & Tailwind',
  //   'Problem Solving',
  //   'Communication'
  // ];

  return (
// {/* <div className="flex flex-col items-center rounded-lg text-left border-2 m-4 p-4">
//   <div className="flex flex-col items-center pb-8 text-center justify-center">
//     <h1 className="text-4xl font-bold m-10 underline decoration-purple-600">Services</h1>
//     <h3>I find Web Solutions to your needs!</h3>
//   </div>

//   {/* Responsive row on mobile, column on larger screens */}
//   <div className="flex flex-col md:flex-row items-center md:justify-around w-full space-y-4 md:space-y-0 md:space-x-4">
//     <div className="flex flex-col justify-center items-center border border-gray-300 rounded-lg p-4 w-full md:w-1/3">
//       <h2 className="text-lg text-center font-semibold mb-2">Website Maintenance Services</h2>
//       <p>Lorem Ipso test novak telast puts hudito forever</p>
//       <button className=' bg-green-400 rounded-lg hover:bg-green-600 w-fit p-4'>Learn more</button>
//     </div>

//     <div className="flex flex-col justify-center items-center border border-gray-300 rounded-lg p-4 w-full md:w-1/3">
//       <h2 className="text-lg text-center font-semibold mb-2">Website Maintenance Services</h2>
//       <p>Lorem Ipso test novak telast puts hudito forever</p>
//       <button className=' bg-green-400 rounded-lg hover:bg-green-600 w-fit p-4'>Learn more</button>
//     </div>

//     <div className="flex flex-col justify-center items-center border border-gray-300 rounded-lg p-4 w-full md:w-1/3">
//       <h2 className="text-lg text-center font-semibold mb-2">Website Maintenance Services</h2>
//       <p>Lorem Ipso test novak telast puts hudito forever</p>
//       <button className=' bg-green-400 rounded-lg hover:bg-green-600 w-fit p-4'>Learn more</button>
//     </div>
//   </div>
// </div> */}
      
// {/* <div className="bg-background  flex flex-col items-center justify-center">
//   <header className="text-center p-8">
//     <h1 className="text-4xl font-heading font-bold text-primaryText">
//       Services
//     </h1>
//     <p className="text-lg text-primaryText mt-4">
//       Delivering web solutions with clarity and consistency.
//     </p>
//   </header>

//   <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl w-full p-6">
//     {/* Card 1 */}
//     <div className="bg-cardBg shadow-card rounded-lg p-6">
//       <h2 className="text-xl font-semibold text-primaryText mb-4">
//         Website Maintenance
//       </h2>
//       <p className="text-sm text-primaryText mb-4">
//         Ensuring your website stays updated and secure.
//       </p>
//       <button className="bg-accent text-white px-4 py-2 rounded-lg shadow-button hover:bg-accent/90">
//         Learn More
//       </button>
//     </div>

//     {/* Card 2 */}
//     <div className="bg-cardBg shadow-card rounded-lg p-6">
//       <h2 className="text-xl font-semibold text-primaryText mb-4">
//         Custom Development
//       </h2>
//       <p className="text-sm text-primaryText mb-4">
//         Tailored solutions for your unique business needs.
//       </p>
//       <button className="bg-accent text-white px-4 py-2 rounded-lg shadow-button hover:bg-accent/90">
//         Get Started
//       </button>
//     </div>

//     {/* Card 3 */}
//     <div className="bg-cardBg shadow-card rounded-lg p-6">
//       <h2 className="text-xl font-semibold text-primaryText mb-4">
//         UI/UX Design
//       </h2>
//       <p className="text-sm text-primaryText mb-4">
//         Creating intuitive designs that users love.
//       </p>
//       <button className="bg-accent text-white px-4 py-2 rounded-lg shadow-button hover:bg-accent/90">
//         Contact Us
//       </button>
//     </div>
//   </div>
// </div> */}
<div className="flex flex-col items-center justify-center   transition duration-300">
  <header className="text-center p-8">
    <h1 className="text-4xl font-heading font-bold text-primaryText dark:text-white">
      Services
    </h1>
    <p className="text-lg text-primaryText mt-4 dark:text-gray-300">
      Delivering web solutions with clarity and consistency.
    </p>
  </header>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl w-full p-6">
    {/* Card 1 */}
    <div className="bg-cardBg dark:bg-gray-800 shadow-card dark:shadow-none rounded-lg p-6 transition duration-300">
      <h2 className="text-xl font-semibold text-primaryText dark:text-white mb-4">
        Website Maintenance
      </h2>
      <p className="text-sm text-primaryText dark:text-gray-300 mb-4">
        Ensuring your website stays updated and secure.
      </p>
      <button className="bg-accent text-white px-4 py-2 rounded-lg shadow-button hover:bg-accent/90 dark:bg-secondaryAccent dark:hover:bg-secondaryAccent/80 transition duration-300">
        Learn More
      </button>
    </div>

    {/* Card 2 */}
    <div className="bg-cardBg dark:bg-gray-800 shadow-card dark:shadow-none rounded-lg p-6 transition duration-300">
      <h2 className="text-xl font-semibold text-primaryText dark:text-white mb-4">
        Custom Development
      </h2>
      <p className="text-sm text-primaryText dark:text-gray-300 mb-4">
        Tailored solutions for your unique business needs.
      </p>
      <button className="bg-accent text-white px-4 py-2 rounded-lg shadow-button hover:bg-accent/90 dark:bg-secondaryAccent dark:hover:bg-secondaryAccent/80 transition duration-300">
        Get Started
      </button>
    </div>

    {/* Card 3 */}
    <div className="bg-cardBg dark:bg-gray-800 shadow-card dark:shadow-none rounded-lg p-6 transition duration-300">
      <h2 className="text-xl font-semibold text-primaryText dark:text-white mb-4">
        UI/UX Design
      </h2>
      <p className="text-sm text-primaryText dark:text-gray-300 mb-4">
        Creating intuitive designs that users love.
      </p>
      <button className="bg-accent text-white px-4 py-2 rounded-lg shadow-button hover:bg-accent/90 dark:bg-secondaryAccent dark:hover:bg-secondaryAccent/80 transition duration-300">
        Contact Us
      </button>
    </div>
  </div>
</div>
      

  );
};

export default ServicesSection;
