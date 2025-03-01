export default function BirthdayGIF() {
  return (
    <div className="flex flex-wrap justify-center items-center gap-4 mt-[50px]">
      <iframe
        src="https://giphy.com/embed/1DTBGm5Rfgymk"
        className="rounded-lg shadow-lg bg-[#EE8700] max-w-[300px] w-[90%] sm:w-[40%] md:w-[35%] h-[350px] aspect-[1/1.1]"
        frameBorder="0"
        allowFullScreen
      ></iframe>

      <iframe
        src="https://giphy.com/embed/mZwyH37L7ZDLq"
        className="rounded-lg shadow-lg bg-[#EE8700] max-w-[300px] w-[90%] sm:w-[40%] md:w-[35%] h-[350px] aspect-[1/1.1]"
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>
  );
}
