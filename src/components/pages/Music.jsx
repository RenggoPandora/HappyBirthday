import MusicCard from "../organisms/MusicCards";
import Nav from "../organisms/Nav";
import { useEffect } from "react";

export default function Music() {
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
    <div className="flex flex-col min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('/assets/Background.svg')" }}>
          <Nav/>
          <p className="text-2xl justify-center items-center text-center mt-20">
             LAGU YANG KATA KAMU COCOK BUAT JADI BACKSOUND HARI ORANG YANG LAGI ULANG TAHUN KANN <br />
             (ASTAGHFIRULLAH GET DRUNK ASTAGHFIRULLAH SMOKE WEED)
          </p>
          <div className='flex flex-wrap justify-center gap-20 items-center mt-[50px]'>
                <MusicCard image="/assets/SONG 1.svg" title="Young, Wild & Free ?? (SAFELY)" link="https://open.spotify.com/track/2g7uRZ68eLtv74XrxgdT2q?si=a27e7e1405a84b31"/>
                <MusicCard image="/assets/SONG 2.svg" title="Put Your Records On" link="https://open.spotify.com/track/2nGFzvICaeEWjIrBrL2RAx?si=9693c667832044d6"/>
                <MusicCard image="/assets/SONG 3.svg" title="Just Dance" link="https://open.spotify.com/track/1dzQoRqT5ucxXVaAhTcT0J?si=b91eafc00b8e4e46"/>
          </div>
          {/* Audio untuk Backsound */}
      <audio id="bg-music" loop>
        <source src="/assets/SONG 1.mp3" type="audio/mpeg" />
      </audio>
    </div>
  )
}
