import MusicCard from "../organisms/MusicCards";
import Nav from "../organisms/Nav";

export default function Music() {
  return (
    <div className="flex flex-col min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('/src/assets/Background.svg')" }}>
          <Nav/>
          <p className='text-2xl justify-center items-center text-center mt-20'>
             HAI INI LAGU YANG COCOK BUAT JADI BACKSOUND HARI ORANG YANG LAGI ULANG TAHUN KANN
          </p>
          <div className='flex flex-wrap justify-center gap-20 items-center mt-[50px]'>
                <MusicCard image="/src/assets/SONG 1.svg" title="Young, Wild & Free" link="https://open.spotify.com/track/2g7uRZ68eLtv74XrxgdT2q?si=a27e7e1405a84b31"/>
                <MusicCard image="/src/assets/SONG 2.svg" title="Put Your Records On" link="https://open.spotify.com/track/2nGFzvICaeEWjIrBrL2RAx?si=9693c667832044d6"/>
                <MusicCard image="/src/assets/SONG 3.svg" title="Just Dance" link="https://open.spotify.com/track/1dzQoRqT5ucxXVaAhTcT0J?si=b91eafc00b8e4e46"/>
          </div>
    </div>
  )
}
