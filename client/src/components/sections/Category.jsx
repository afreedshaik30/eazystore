import SectionHeading from "./SectionHeading";
import Card from "./Card";

const Category = ({ title, data }) => {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Section heading */}
      <SectionHeading title={title} />

      {/* Cards container */}
      <div className="flex flex-wrap justify-center gap-18 mt-6">
        {data?.map((item, index) => (
          <Card
            key={index}
            title={item?.title}
            description={item?.description}
            imagePath={item?.image}
            actionArrow={true}
            height="240px"
            width="200px"
          />
        ))}
      </div>
    </section>
  );
};

export default Category;
