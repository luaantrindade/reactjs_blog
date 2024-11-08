import React from "react";


function Footer() {
    return (
        <footer className="fixed inset-x-0 bottom-0 bg-gradient-to-tr text-black p-4 sm:px-8 sm:py-6 lg:p-4 xl:px-8 xl:py-6">
            <div className="flex-auto justify-center text-sm md:flex space-x-8 items-center font-thin ">
                <div>Copyrights © 2024</div>
                <a href="about" className="hover:text-green-500 transition ease-in-out duration-300">about</a>
            </div>
        </footer>
    );
    
}

export default Footer;