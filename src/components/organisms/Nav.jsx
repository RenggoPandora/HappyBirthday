import { useLocation } from "react-router-dom";

export default function Nav() {
  const location = useLocation(); // Mendapatkan path halaman saat ini

  // Fungsi untuk menentukan apakah ikon aktif
  const isActive = (path) => location.pathname === path;

  return (
    <div className="flex justify-between items-center w-full h-[180px] bg-[#EE8700] text-white px-4 md:px-10 relative">
      
      {/* Teks Selamat Ulang Tahun */}
      <div className="text-[20px] md:text-[36px] text-left flex-1 min-w-0 ml-4 md:ml-10">
        HAI, SELAMAT ULANG TAHUN!
      </div>

      {/* Gambar Sunflower (Tetap di Tengah) */}
      <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <img src="/src/assets/sunflower.svg" alt="sunflower" className="w-[60px] md:w-[80px]" />
      </div>

      {/* Navigasi Icon */}
      <div className="flex gap-4 md:gap-8 justify-end flex-1 min-w-0 mr-4 md:mr-10">
        <a href="/" className="relative">
          <div className={`flex items-center justify-center p-2 rounded-full transition-all duration-300 ease-in-out 
            ${isActive("/") ? "bg-[#FFDA44] bg-opacity-20" : ""}`}>
            <img 
              src="/src/assets/Home_Icon.svg" 
              alt="Home" 
              className={`w-8 md:w-10 transition-all duration-300 ease-in-out hover:scale-125 hover:rotate-6`}
            />
          </div>
        </a>
        <a href="/music" className="relative">
          <div className={`flex items-center justify-center p-2 rounded-full transition-all duration-300 ease-in-out 
            ${isActive("/music") ? "bg-[#FFDA44] bg-opacity-30" : ""}`}>
            <img 
              src="/src/assets/Music_Icon.svg" 
              alt="Music" 
              className={`w-8 md:w-10 transition-all duration-300 ease-in-out hover:scale-125 hover:rotate-6`}
            />
          </div>
        </a>
        <a href="/notes" className="relative">
          <div className={`flex items-center justify-center p-2 rounded-full transition-all duration-300 ease-in-out 
            ${isActive("/notes") ? "bg-[#FFDA44] bg-opacity-30" : ""}`}>
            <img 
              src="/src/assets/Notes_Icon.svg" 
              alt="Notes" 
              className={`w-8 md:w-10 transition-all duration-300 ease-in-out hover:scale-125 hover:rotate-6`}
            />
          </div>
        </a>
      </div>

    </div>
  );
}
