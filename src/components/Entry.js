// EntryCard.js
import React from 'react';
import FlipWordsDemo  from './FlipWordsDemo';

const Entry = () => {
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
    <div className="  rounded-lg text-left">
      <div><FlipWordsDemo></FlipWordsDemo></div>
      {/* <div className="flex flex-col items-center">
        <img src={profilePic} alt="Profile" className="w-24 h-24 rounded-full mb-4" />
        <h1 className="text-2xl font-semibold mb-2">Luan Trindade</h1>
        <p className="text-base mb-4">
          Hi, I’m Luan! A passionate software engineer with expertise in backend development, cloud computing, and a knack for solving complex problems. Let’s build something amazing together!
        </p>
        <h2 className="text-lg font-medium mb-2">Skills</h2>
        <ul className="flex flex-wrap justify-center gap-2">
          {skills.map((skill, index) => (
            <li
              key={index}
              className="bg-white bg-opacity-20 rounded-full px-4 py-2 text-sm text-gray-800 shadow-sm"
            >
              {skill}
            </li>
          ))}
        </ul>
      </div> */}
    </div>
  );
};

export default Entry;
