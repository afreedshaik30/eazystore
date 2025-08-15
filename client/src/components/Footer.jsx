import FbIcon from "../components/icons/FbIcon";
import InstaIcon from "../components/icons/InstaIcon";

const Footer = ({ content }) => {
  return (
    <footer className="bg-neutral-900 text-white">
      {/* Footer sections */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 border-b border-neutral-800">
        {content?.items?.map((item, idx) => (
          <div key={idx}>
            <h4 className="text-lg font-semibold mb-4">{item?.title}</h4>
            {item?.list?.map((listItem, i) => (
              <a
                key={i}
                href={listItem?.path}
                className="block text-sm text-gray-400 hover:text-white transition-colors mb-2"
              >
                {listItem?.label}
              </a>
            ))}
            {item?.description && (
              <p className="text-sm text-gray-500 mt-2">{item?.description}</p>
            )}
          </div>
        ))}
      </div>

      {/* Social icons */}
      <div className="flex justify-center gap-6 py-6 border-b border-neutral-800">
        <a
          href="/fb"
          aria-label="Facebook"
          className="p-2 rounded-full bg-neutral-800 hover:bg-neutral-700 transition"
        >
          <FbIcon />
        </a>
        <a
          href="/insta"
          aria-label="Instagram"
          className="p-2 rounded-full bg-neutral-800 hover:bg-neutral-700 transition"
        >
          <InstaIcon />
        </a>
      </div>

      {/* Copyright */}
      <div className="py-4">
        <p className="text-xs text-center text-gray-500">
          {content?.copyright}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
