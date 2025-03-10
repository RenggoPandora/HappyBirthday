import { useEffect } from "react";
import BirthdayGIF from "../atoms/BirthdayGIF";
import Nav from "../organisms/Nav";

export default function Home() {
  useEffect(() => {
    const audio = document.getElementById("bg-music");

    const playAudio = () => {
      if (audio.paused) {
        audio.play().catch((error) => console.log("Autoplay blocked:", error));
      }
    };

    document.addEventListener("mouseover", playAudio, { once: true });

    return () => {
      document.removeEventListener("mouseover", playAudio);
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('/src/assets/Background.svg')" }}>
      <Nav />
      <BirthdayGIF />
      <div className="justify-center items-center mt-[50px] text-center">
        <p className="animate-pulse text-[24px] md:text-[36px]">
          SELAMAT ULANG TAHUN YANG KE-20 COY <br /> SUDAH DEWASA HOHOHO!!
        </p>
      </div>

      {/* Audio untuk Backsound */}
      <audio id="bg-music" loop>
        <source src="/src/assets/SONG 2.mp3" type="audio/mpeg" />
      </audio>
    </div>
  );
}
