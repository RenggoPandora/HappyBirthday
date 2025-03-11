import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function LandingPage() {
  const [showConfirm, setShowConfirm] = useState(false);
  const [randomPosition, setRandomPosition] = useState({ top: "20%", left: "30%" });

  const handleClick = () => {
    setShowConfirm(true);
    setRandomPosition({
      top: `${Math.random() * 60 + 10}%`,
      left: `${Math.random() * 60 + 10}%`
    });
  };

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('/assets/Background.svg')" }}>
      <motion.p 
        className='text-4xl text-center mb-4'
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1, ease: "easeOut" }}
      >
        REDI GA CEN
      </motion.p>
      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
      >
        <button 
          onClick={handleClick} 
          className="relative px-6 py-3 w-50 text-white text-center text-3xl font-bold bg-[#EE8700] rounded-full border-4 border-[#FFDA44] shadow-2xl transition-all duration-300 hover:bg-[#ee6b00] active:scale-95"
        >
          REDI BANG
        </button>
      </motion.div>

      {showConfirm && (
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 0.5 }}
          style={{ position: "absolute", top: randomPosition.top, left: randomPosition.left, transform: "translate(-50%, -50%)" }}
        >
          <p className="text-4xl font-semibold ">YAKINKAH REDI?</p>
          <Link 
            to="/home" 
            className="mt-2 block px-4 py-2 text-white text-center text-3xl font-bold bg-[#EE8700] rounded-full border-4 border-[#FFDA44] shadow-2xl  active:scale-95 hover:bg-[#ee6b00] transition-all duration-300"
          >
            YAKIN BANG
          </Link>
        </motion.div>
      )}
    </div>
  );
}
