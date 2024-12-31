import { PROFILE } from "../constants";
import profilePic from "../assets/profile.jpg";

function HeroSection() {
  return (
    <div className="relative flex min-h-screen items-end justify-center" id="hero">
      {/* Profile Picture as Background */}
      <img
        src={profilePic}
        alt={PROFILE.name}
        className="absolute inset-0 z-0 h-full w-full object-cover"
      />
      {/* Overlay Content */}
      <div className="z-10 flex flex-col items-center text-center text-white">
        <h1 className="text-4xl font-bold drop-shadow-md">{PROFILE.name}</h1>
        <p className="mt-2 text-lg drop-shadow-md">{PROFILE.info}</p>
      </div>
    </div>
  );
}

export default HeroSection;