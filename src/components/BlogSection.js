// EntryCard.js
import React from 'react';
import BentoBlogGrid from "./BentoBlogGrid.tsx";

const BlogSection = () => {

  return (
    //      <div className="flex flex-col items-center justify-center   transition duration-300">
    //   <header className="text-center p-8">
    //     <h1 className="text-4xl font-heading font-bold text-primaryText dark:text-white">
    //       Blog
    //     </h1>
    //     <p className="text-lg text-primaryText mt-4 dark:text-gray-300">
    //       Delivering web solutions with clarity and consistency.
    //     </p>
    //   </header>

    //   <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl w-full p-6">
    //     {/* Card 1 */}
    //     <div className="bg-cardBg dark:bg-gray-800 shadow-card dark:shadow-none rounded-lg p-6 transition duration-300">
    //       <h2 className="text-xl font-semibold text-primaryText dark:text-white mb-4">
    //         Website Maintenance
    //       </h2>
    //       <p className="text-sm text-primaryText dark:text-gray-300 mb-4">
    //         Ensuring your website stays updated and secure.
    //       </p>
    //       <button className="bg-accent text-white px-4 py-2 rounded-lg shadow-button hover:bg-accent/90 dark:bg-secondaryAccent dark:hover:bg-secondaryAccent/80 transition duration-300">
    //         Learn More
    //       </button>
    //     </div>

    //     {/* Card 2 */}
    //     <div className="bg-cardBg dark:bg-gray-800 shadow-card dark:shadow-none rounded-lg p-6 transition duration-300">
    //       <h2 className="text-xl font-semibold text-primaryText dark:text-white mb-4">
    //         Custom Development
    //       </h2>
    //       <p className="text-sm text-primaryText dark:text-gray-300 mb-4">
    //         Tailored solutions for your unique business needs.
    //       </p>
    //       <button className="bg-accent text-white px-4 py-2 rounded-lg shadow-button hover:bg-accent/90 dark:bg-secondaryAccent dark:hover:bg-secondaryAccent/80 transition duration-300">
    //         Get Started
    //       </button>
    //     </div>

    //     {/* Card 3 */}
    //     <div className="bg-cardBg dark:bg-gray-800 shadow-card dark:shadow-none rounded-lg p-6 transition duration-300">
    //       <h2 className="text-xl font-semibold text-primaryText dark:text-white mb-4">
    //         UI/UX Design
    //       </h2>
    //       <p className="text-sm text-primaryText dark:text-gray-300 mb-4">
    //         Creating intuitive designs that users love.
    //       </p>
    //       <button className="bg-accent text-white px-4 py-2 rounded-lg shadow-button hover:bg-accent/90 dark:bg-secondaryAccent dark:hover:bg-secondaryAccent/80 transition duration-300">
    //         Contact Us
    //       </button>
    //     </div>
    //   </div>
    // </div>

    <header className="text-center p-8 space-y-12">
      <div className=''>
        <h1 className="text-4xl font-heading font-bold text-primaryText dark:text-white">
          Blog
        </h1>
        <p className="text-lg text-primaryText mt-4 dark:text-gray-300">
          Delivering web solutions with clarity and consistency.
        </p>
      </div>
      <BentoBlogGrid />
    </header>
    
  );
};

export default BlogSection;
