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
          className="inline-block"
        >
          <button className="text-white p-2 rounded-lg hover:bg-blue-600 transition flex items-center">
            <img src="/src/assets/Play.svg" alt="Play" className="w-6 h-6" />
          </button>
        </a>
        <h3 className="text-3xl font-semibold ">{title}</h3>
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
