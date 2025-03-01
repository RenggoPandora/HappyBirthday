export default function BirthdayGIF() {
    return (
        <div className="flex justify-center items-center gap-4 mt-[50px]">
          <iframe
            src="https://giphy.com/embed/1DTBGm5Rfgymk"
            width="361"
            height="380"
            frameBorder="0"
            allowFullScreen
            className="rounded-lg shadow-lg bg-[#EE8700]"
          ></iframe>
          
          <iframe 
            src="https://giphy.com/embed/mZwyH37L7ZDLq" 
            width="361" 
            height="380"  
            frameBorder="0" 
            allowFullScreen
            className="rounded-lg shadow-lg bg-[#EE8700]"
          ></iframe>
        </div>
    );
}
