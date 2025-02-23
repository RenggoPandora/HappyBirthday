

export default function Nav() {
  return (
    <div className='flex justify-between text-white w-full h-[180px] items-center bg-[#EE8700]'>
            <div className='text-[36px] ml-[40px] '>
                HAI, SELAMAT ULANG TAHUN!
            </div>
            <div className='items-center'>
                <img src="/src/assets/sunflower.svg" alt="sunflower" />
            </div>
            <div className='gap-7 justify-between flex mr-[149px] cursor-pointer'>
              <img src="/src/assets/Home_Icon.svg" className= 'hover:scale-150'alt="Home"/>
              <img src="/src/assets/Music_Icon.svg" className= 'hover:scale-150' alt="Music"/>
              <img src="/src/assets/Notes_Icon.svg" className= 'hover:scale-150' alt="Notes"/>

            </div>

    </div>
  )
}
