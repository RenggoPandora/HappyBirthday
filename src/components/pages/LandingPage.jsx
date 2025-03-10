import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('/assets/Background.svg')" }}>
        <p className='text-4xl text-center mb-4 '>REDI GA CEN</p>
        <Link to="/home" className="relative px-6 py-3 w-50 text-white text-center text-3xl font-bold bg-[#EE8700] rounded-full border-4 border-[#FFDA44] shadow-2xl transition-all duration-300 hover:bg-[#ee6b00] active:scale-95">
        REDI BANG
      </Link>

    </div>
  )
}
