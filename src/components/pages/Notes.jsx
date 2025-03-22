import Nav from "../organisms/Nav";
import NotesPage from "../organisms/Note";
import { useEffect } from "react";

export default function Notes() {
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
          <NotesPage/>

          <audio id="bg-music" loop>
        <source src="/assets/SONG 3.mp3" type="audio/mpeg" />
      </audio>
        </div>
  )
}
