import BirthdayGIF from "../atoms/BirthdayGIF";
import Nav from "../organisms/Nav";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('/src/assets/Background.svg')" }}>
      <Nav/>
      <BirthdayGIF/>
      <div className="justify-center items-center mt-[50px] text-center">
        <p className='animate-pulse text-[24px] md:text-[36px]'>SELAMAT ULANG TAHUN YANG KE-20 COY <br /> SUDAH DEWASA HOHOHO!!</p>
      </div>
    </div>
  );
}