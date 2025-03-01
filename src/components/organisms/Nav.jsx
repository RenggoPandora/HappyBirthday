export default function Nav() {
  return (
    <div className="flex justify-between items-center w-full h-[180px] bg-[#EE8700] text-white px-4 md:px-10 relative">
      
      {/* Teks Selamat Ulang Tahun */}
      <div className="text-[24px] md:text-[36px] text-left w-auto ml-4 md:ml-10">
        HAI, SELAMAT ULANG TAHUN!
      </div>

      {/* Gambar Sunflower (Tepat di Tengah) */}
      <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <img src="/src/assets/sunflower.svg" alt="sunflower" className="w-[60px] md:w-[80px]" />
      </div>

      {/* Navigasi Icon */}
      <div className="flex gap-4 md:gap-8 justify-between w-auto mr-4 md:mr-10">
        <a href="/">
          <img src="/src/assets/Home_Icon.svg" className="hover:scale-150 w-10 md:w-auto" alt="Home" />
        </a>
        <a href="/music">
          <img src="/src/assets/Music_Icon.svg" className="hover:scale-150 w-10 md:w-auto" alt="Music" />
        </a>
        <a href="/notes">
          <img src="/src/assets/Notes_Icon.svg" className="hover:scale-150 w-10 md:w-auto" alt="Notes" />
        </a>
      </div>

    </div>
  );
}
