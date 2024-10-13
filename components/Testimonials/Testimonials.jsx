"use client"
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Testimonials() {
  const testimonials = [
    {
      name: "Viezh Robert",
      location: "Warsaw, Poland",
      rating: 4.5,
      review:
        "Wow... I am very happy to use this VPN, it turned out to be more than my expectations.",
      imgSrc: "https://via.placeholder.com/50",
      ratingImg: "https://via.placeholder.com/15",
    },
    {
      name: "Yessica Christy",
      location: "Shanxi, China",
      rating: 4.5,
      review: "I like it because I like to travel far and still can connect with high speed.",
      imgSrc: "https://via.placeholder.com/50",
      ratingImg: "https://via.placeholder.com/15",
    },
    {
      name: "Kim Young Jou",
      location: "Seoul, South Korea",
      rating: 4.5,
      review: "This is very unusual for my business that requires a virtual private network with high security.",
      imgSrc: "https://via.placeholder.com/50",
      ratingImg: "https://via.placeholder.com/15",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,          // Enable autoplay
    autoplaySpeed: 3000,     // 3 seconds per slide
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="max-w-[1280px] mx-auto flex flex-col rounded-none">
      <div className="z-10 self-center mt-0 ml-3.5 text-5xl font-extrabold text-center text-slate-900 max-md:text-4xl">
        Trusted by Many
      </div>
      <div className="self-center mt-4 text-base leading-8 text-center text-neutral-900 w-[555px] max-md:w-full">
        These are the stories of our customers who have joined us with great pleasure when using this crazy feature.
      </div>
      <div className="mt-24 w-full max-md:mt-10">
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex flex-col px-8 py-7 mx-6 bg-white rounded-xl border-2 border-red-700 h-[240px] max-w-[420px]"
            >
              <div className="flex gap-12 justify-between">
                <div className="flex gap-6 text-center">
                  <img
                    loading="lazy"
                    src={testimonial.imgSrc}
                    alt={`${testimonial.name}'s avatar`}
                    className="object-contain shrink-0 rounded-full aspect-square w-[50px]"
                  />
                  <div className="flex flex-col my-auto">
                    <div className="text-lg font-medium leading-loose text-slate-900">
                      {testimonial.name}
                    </div>
                    <div className="self-start mt-2.5 text-sm leading-loose text-gray-600">
                      {testimonial.location}
                    </div>
                  </div>
                </div>
                <div className="flex gap-3 my-auto text-base leading-loose text-slate-900">
                  <div className="my-auto">{testimonial.rating}</div>
                  <img
                    loading="lazy"
                    src={testimonial.ratingImg}
                    alt="rating stars"
                    className="object-contain shrink-0 w-4 aspect-square"
                  />
                </div>
              </div>
              <div className="mt-5 text-base leading-8 text-slate-900">
                {testimonial.review}
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Testimonials;
