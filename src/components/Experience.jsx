import React from 'react';

const EXPERIENCE = {
  company: "NexusLogic Technologies",
  position: "Frontend Web Development Intern",
  offerLetterId: "NLT-24-TDE-285",
  startDate: "28 December, 2024",
  endDate: "28 February, 2025",
  location: "Remote",
};

const Experience = () => {
  return (
    <>
      <h2 className="mb-4 mt-10 text-center text-4xl">Experience</h2> {/* Adjusted margin-bottom */}
      <div
        id="experience"
        className="flex items-center justify-center bg-black text-white px-4"
        style={{ minHeight: '70vh' }} /* Reduced minHeight for better alignment */
      >
        <div className="text-center max-w-lg border border-teal-400 rounded-lg p-8">
          <h3 className="text-3xl font-bold text-teal-400">
            {EXPERIENCE.company}
          </h3>
          <p className="text-xl font-medium text-gray-300 mt-2">
            {EXPERIENCE.position}
          </p>
          <div className="mt-6 text-lg leading-7">
            <p>
              <span className="text-teal-400 font-semibold">Offer Letter ID:</span>{" "}
              {EXPERIENCE.offerLetterId}
            </p>
            <p>
              <span className="text-teal-400 font-semibold">Start Date:</span>{" "}
              {EXPERIENCE.startDate}
            </p>
            <p>
              <span className="text-teal-400 font-semibold">End Date:</span>{" "}
              {EXPERIENCE.endDate}
            </p>
            <p>
              <span className="text-teal-400 font-semibold">Location:</span>{" "}
              {EXPERIENCE.location}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Experience;
