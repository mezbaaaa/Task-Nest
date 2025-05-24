import React from 'react';
import Slider from "react-slick";   
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import bannerImage1 from '../../assets/10172825_8401.jpg';
import bannerImage2 from  '../../assets/young-man-home-sitting-chair-working-computer-remote-working-home-office-self-isolation-concept-flat-style-illustration-isolated-white-background_285336-1159.jpg';
import bannerImage3 from '../../assets/web-devices-concept-illustration_114360-31157.jpg'

const Banner = () => {
    const banners = [
        {
            id: 1,
            image: bannerImage1,
            caption: "Connect with Top Freelancers",
            sub: "Get your tasks done effortlessly with trusted talent."
        },
        {
            id: 2,
            image: bannerImage2,
            caption: "Work Remotely, Work Smart",
            sub: "Discover flexible projects and grow your freelance journey."
        },
        {
            id: 3,
            image: bannerImage3,
            caption: "Turn Ideas Into Reality",
            sub: "Collaborate, create, and succeed together on TaskNest."
        }
    ];
    const settings = {
        dots: true,
        infinite: true,
        speed: 400,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3500,
        arrows: false
    };

    return (
        <div className="w-full mx-auto overflow-hidden rounded-xl max-sm:mx-4 shadow-lg sm:rounded-lg md:rounded-xl">
            <Slider {...settings}>
                {banners.map((banner) => (
                    <div key={banner.id} className="relative h-64 sm:h-96 md:h-[420px] lg:h-[520px]">
                        {/* Image */}
                        <img
                            src={banner.image}
                            alt={`Banner ${banner.id}`}
                            className="w-full h-full object-cover rounded-xl sm:rounded-lg md:rounded-xl"
                        />
                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-pink-400/10 to-transparent rounded-xl"></div>
                            {/* Caption */}
                            <div className="absolute left-0 right-0 bottom-0 px-6 py-8 sm:px-12 md:px-20 flex flex-col items-start z-10">
                                <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold mb-2 bg-gradient-to-r from-pink-400 via-blue-400 to-yellow-400 bg-clip-text text-transparent drop-shadow-lg">
                                    {banner.caption}
                                </h2>
                                <p className="text-base sm:text-lg md:text-2xl font-medium text-white/90 mb-4 drop-shadow">
                                    {banner.sub}
                                </p>
                                {banner.id === 1 && (
                                    <button className="bg-pink-500 hover:bg-pink-600 text-white cursor-pointer font-semibold px-6 py-2 rounded-full shadow transition-all duration-200">
                                        Get Started
                                    </button>
                                )}
                                {banner.id === 2 && (
                                    <button className="bg-blue-500 hover:bg-blue-600 text-white cursor-pointer font-semibold px-6 py-2 rounded-full shadow transition-all duration-200">
                                        Find Projects
                                    </button>
                                )}
                                {banner.id === 3 && (
                                    <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 cursor-pointer font-semibold px-6 py-2 rounded-full shadow transition-all duration-200">
                                        Join Community
                                    </button>
                                )}
                            </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Banner;