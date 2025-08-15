import PropTypes from "prop-types";

const SectionHeading = ({ title }) => {
  return (
    <div className="flex flex-col items-center text-center px-4 sm:px-4 mt-8 mb-10">
      <h2 className="text-4xl sm:text-5xl font-serif tracking-tight text-zinc-800">
        {title}
      </h2>
    </div>
  );
};

SectionHeading.defaultProps = {
  title: "Default Heading",
};

SectionHeading.propTypes = {
  title: PropTypes.string,
};

export default SectionHeading;
