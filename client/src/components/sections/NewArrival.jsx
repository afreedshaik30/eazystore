import SectionHeading from "./SectionHeading";
import Card from "./Card";

import dresses from "../../assets/img/dresses.jpg";
import jeans from "../../assets/img/jeans.jpeg";
// import joggers from "../../assets/img/joggers.jpg";
import kurtis from "../../assets/img/kurtis.jpg";
import shirts from "../../assets/img/shirts.jpg";
// import tshirts from "../../assets/img/tshirts.jpeg";

const products = [
  { id: 1, img: dresses, name: " Half Sleeve Dresses" },
  { id: 5, img: shirts, name: "Shirts" },
  { id: 2, img: jeans, name: "Jeans" },
  //   { id: 3, img: joggers, name: "Joggers" },
  { id: 4, img: kurtis, name: "Kurtis" },
  //   { id: 6, img: tshirts, name: "T-Shirts" },
];

const NewArrival = () => {
  return (
    <div className="px-4 md:px-10 mt-12 mb-8">
      <SectionHeading title="New Arrivals" />

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <Card key={product.id} imagePath={product.img} title={product.name} />
        ))}
      </div>
    </div>
  );
};

export default NewArrival;
