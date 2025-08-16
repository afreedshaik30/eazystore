import React, { useMemo } from "react";
import FilterIcon from "../components/icons/FilterIcon";
import content from "../data/content.json";

const ProductListPage = ({ categoryType }) => {
  const categories = content?.categories;

  const categoryContent = useMemo(() => {
    return categories?.find((category) => category.code === categoryType);
  }, [categoryType]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Sidebar / Filters */}
        <div className="w-full lg:w-[25%] p-5 border rounded-lg bg-gray-50">
          <div className="flex justify-between items-center mb-6">
            <p className="text-lg font-medium text-gray-700">Filter</p>
            <FilterIcon />
          </div>

          <div>
            <p className="text-md font-semibold text-gray-800 mb-3">
              Categories
            </p>
            <ul className="space-y-2">
              {categoryContent?.types?.map((type) => (
                <li
                  key={type.id || type.code}
                  className="text-gray-600 hover:text-gray-900 cursor-pointer transition"
                >
                  {type.name}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-5 bg-white rounded-lg shadow-sm">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            {categoryContent?.description}
          </h2>

          {/* Products will go here */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {/* Example placeholder products */}
            {[...Array(8)].map((_, idx) => (
              <div
                key={idx}
                className="border rounded-lg p-4 text-center hover:shadow-lg transition"
              >
                Product {idx + 1}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductListPage;
