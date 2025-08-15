const Card = ({ imagePath, title }) => {
  return (
    <div className="flex flex-col p-2">
      {/* Image wrapper */}
      <div className="relative overflow-hidden rounded-sm shadow-md hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300 ease-out">
        {/* Overlay Badge */}
        <span className="absolute top-3 left-3 bg-black/70 text-white text-xs font-medium px-2 py-1 rounded-full z-10">
          New
        </span>

        {/* Image */}
        <img
          src={imagePath}
          alt={title}
          className="w-full h-56 sm:h-64 md:h-72 lg:h-80 object-cover"
        />
      </div>

      {/* Title outside card */}
      <p className="mt-3 text-gray-900 font-semibold text-lg text-center">
        {title}
      </p>
    </div>
  );
};

export default Card;
