import React from "react";
import FbIcon from "../components/icons/FbIcon";
import InstaIcon from "../components/icons/InstaIcon";

const Footer = ({ content }) => {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Top Footer Sections */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {content?.items?.map((item, idx) => (
          <div key={idx} className="space-y-4">
            {item?.title && (
              <h4 className="text-lg font-bold tracking-wide uppercase text-white">
                {item.title}
              </h4>
            )}

            {item?.list?.length > 0 && (
              <ul className="space-y-2">
                {item.list.map((listItem, i) => (
                  <li key={i}>
                    <a
                      href={listItem?.path}
                      className="text-gray-400 hover:text-blue-500 transition-colors duration-300"
                    >
                      {listItem?.label}
                    </a>
                  </li>
                ))}
              </ul>
            )}

            {item?.description && (
              <p className="text-gray-500 text-sm">{item.description}</p>
            )}
          </div>
        ))}
      </div>

      {/* Social Icons (no line, animated) */}
      <div className="flex justify-center gap-6 py-4">
        <a
          href="/fb"
          aria-label="Facebook"
          className="p-3 rounded-full bg-gray-800 hover:bg-blue-600 transition transform hover:scale-110"
        >
          <FbIcon />
        </a>
        <a
          href="/insta"
          aria-label="Instagram"
          className="p-3 rounded-full bg-gray-800 hover:bg-pink-500 transition transform hover:scale-110"
        >
          <InstaIcon />
        </a>
      </div>

      {/* Bottom Copyright */}
      <div className="py-4 bg-gray-900 border-t border-gray-800">
        <p className="text-xs text-center text-gray-500">
          {content?.copyright}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
