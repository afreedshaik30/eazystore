import { useRef, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import hero1 from "../../assets/hero/hero1.jpg";
import hero2 from "../../assets/hero/hero2.jpg";
import hero3 from "../../assets/hero/hero3.jpg";
import hero4 from "../../assets/hero/hero4.jpg";

const slides = [
  {
    image: hero1,
    category: "Kids Wear / Sweaters",
    title: "Cozy Winter Picks",
    subtitle: "Warm / Cute / Comfy",
    buttonText: "Shop Now",
    link: "/kids",
  },
  {
    image: hero2,
    category: "Men's Shirts & Pants",
    title: "Smart & Stylish",
    subtitle: "Classic / Modern / Bold",
    buttonText: "Explore",
    link: "/men",
  },
  {
    image: hero3,
    category: "Women's Wear",
    title: "Elegant Styles",
    subtitle: "Chic / Vibrant / Trendy",
    buttonText: "Discover",
    link: "/women",
  },
  {
    image: hero4,
    category: "Women's T-shirts & Tops",
    title: "Fresh Everyday Looks",
    subtitle: "Casual / Cool / Comfortable",
    buttonText: "Browse",
    link: "/women-tops",
  },
];

const HeroSection = () => {
  const sliderRef = useRef(null);
  const sectionRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    fade: true,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
    dotsClass: "slick-dots custom-dots",
    arrows: false,
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!sliderRef.current) return;
        if (entry.isIntersecting) {
          sliderRef.current.slickPlay();
        } else {
          sliderRef.current.slickPause();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div ref={sectionRef} className="relative w-full overflow-hidden">
      <Slider ref={sliderRef} {...settings} className="hero-slider">
        {slides.map((slide, idx) => (
          <div key={idx}>
            <div
              className="relative w-full h-[70vh] sm:h-[90vh] flex items-center justify-start"
              style={{
                backgroundImage: `url(${slide.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/30" />

              <main className="relative z-10 w-full px-2 sm:px-4 lg:px-8">
                <h2 className="text-sm sm:text-lg uppercase tracking-wide text-gray-200">
                  {slide.category}
                </h2>
                <p className="mt-3 text-white text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight drop-shadow-lg">
                  {slide.title}
                </p>
                <p className="mt-3 text-gray-200 text-base sm:text-lg lg:text-xl">
                  {slide.subtitle}
                </p>
                <a href={slide.link}>
                  <button
                    className="mt-6 px-6 sm:px-8 py-2 sm:py-3 rounded-full bg-white text-blue-600 font-medium hover:bg-blue-700 hover:text-white transition-all duration-300 shadow-lg text-sm sm:text-base"
                    onMouseEnter={() => sliderRef.current?.slickPause()}
                    onMouseLeave={() => sliderRef.current?.slickPlay()}
                  >
                    {slide.buttonText}
                  </button>
                </a>
              </main>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HeroSection;
