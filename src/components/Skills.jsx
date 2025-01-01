import React from 'react';
import { SKILLS } from '../constants';

const Skills = () => {
  return (
    <div className="container mx-auto" id="skills">
      <h2 className="mb-12 mt-20 text-center text-4xl">Skills</h2>
      <div className="mx-2 rounded-xl bg-gradient-to-b from-zinc-900 to-zinc-950 px-4 py-10 lg:px-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center">
          {SKILLS.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center rounded-lg bg-zinc-800 px-6 py-4 text-white shadow-md"
            >
              {skill.icon}
              <h3 className="mt-4 text-lg font-semibold lg:text-xl">{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
