import BirthdayGIF from "../atoms/BirthdayGIF";
import Nav from "../organisms/Nav";

export default function Home() {
  return (
    <div className='flex flex-col'>
      <Nav/>
      <BirthdayGIF/>
      <div className='justify-center items-center mt-[50px] text-center'>
        <p>SELAMAT ULANG TAHUN YANG KE-20 COY SUDAH DEWASA HOHOHO!!</p>
      </div>
    </div>
  )
}
