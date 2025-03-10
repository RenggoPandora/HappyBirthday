import PropTypes from "prop-types";

const MusicCard = ({ image, title, link }) => {
  return (
    <div className="max-w-sm bg-white rounded-2xl shadow-md overflow-hidden border border-gray-200 px-2 py-2">
      <img className="w-full h-70 object-cover" src={image} alt={title} />
      <div className="p-4 flex items-center space-x-4">
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 p-2 rounded-lg transition cursor-pointer hover:bg-[#FFDA44]"
        >
          <img src="/assets/Play.svg" alt="Play" className="w-6 h-6" />
          <h3 className="text-3xl font-semibold">{title}</h3>
        </a>
      </div>
    </div>
  );
};

MusicCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default MusicCard;
