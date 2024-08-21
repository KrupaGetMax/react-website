import React, { useRef, useEffect } from "react";
import KeenSlider from "keen-slider";
import "keen-slider/keen-slider.min.css";

const Testimonial = () => {
  const sliderRef = useRef(null);
  const sliderInstance = useRef(null);

  useEffect(() => {
    sliderInstance.current = new KeenSlider(sliderRef.current, {
      loop: true,
      slides: {
        origin: "center",
        perView: 1.25,
        spacing: 16,
      },
      breakpoints: {
        "(min-width: 1024px)": {
          slides: {
            origin: "auto",
            perView: 1.5,
            spacing: 32,
          },
        },
      },
    });

    const prevButton = document.getElementById("keen-slider-previous-desktop");
    const nextButton = document.getElementById("keen-slider-next-desktop");

    if (prevButton && nextButton) {
      prevButton.addEventListener("click", () => sliderInstance.current.prev());
      nextButton.addEventListener("click", () => sliderInstance.current.next());
    }

    // Cleanup to prevent memory leaks
    return () => {
      if (sliderInstance.current) sliderInstance.current.destroy();
    };
  }, []);

  return (
    <section className="bg-gray-50">
      <div className="mx-auto max-w-[1340px] px-4 py-12 sm:px-6 lg:me-0 lg:py-16 lg:pe-0 lg:ps-8 xl:py-24">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:items-center lg:gap-16">
          <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Don't just take our word for it...
            </h2>

            <p className="mt-4 text-gray-700">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas
              veritatis illo placeat harum porro optio fugit a culpa sunt id!
            </p>

            <div className="hidden lg:mt-8 lg:flex lg:gap-4">
              <button
                aria-label="Previous slide"
                id="keen-slider-previous-desktop"
                className="rounded-full border border-rose-600 p-3 text-rose-600 transition hover:bg-rose-600 hover:text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-5 rtl:rotate-180"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 19.5L8.25 12l7.5-7.5"
                  />
                </svg>
              </button>

              <button
                aria-label="Next slide"
                id="keen-slider-next-desktop"
                className="rounded-full border border-rose-600 p-3 text-rose-600 transition hover:bg-rose-600 hover:text-white"
              >
                <svg
                  className="size-5 rtl:rotate-180"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 5l7 7-7 7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div className="-mx-6 lg:col-span-2 lg:mx-0">
            <div ref={sliderRef} className="keen-slider">
              {/* Slides */}

              <div className="keen-slider__slide">
                <div className="bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden lg:flex">
                  {/* Image Section */}
                  <img
                    src="https://www.shutterstock.com/image-photo/portrait-mature-business-woman-smiling-260nw-1593894763.jpg"
                    alt="Testimonial"
                    className="w-full h-56 object-cover lg:h-auto lg:w-1/3"
                  />

                  {/* Content Section */}
                  <blockquote className="flex flex-col justify-between p-6 lg:p-8">
                    {/* Star Rating */}
                    <div className="flex gap-1 text-yellow-400">
                      {[...Array(5)].map((_, idx) => (
                        <svg
                          key={idx}
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>

                    {/* Title and Quote */}
                    <div className="mt-4">
                      <p className="text-2xl font-semibold text-gray-800 sm:text-3xl">
                        Stayin' Alive
                      </p>
                      <p className="mt-4 text-gray-600 leading-relaxed">
                        No, Rose, they are not breathing. And they have no arms
                        or legs … Where are they? You know what? If we come
                        across somebody with no arms or legs, do we bother
                        resuscitating them? I mean, what quality of life do we
                        have there?
                      </p>
                    </div>

                    {/* Footer Section */}
                    <footer className="mt-4 text-sm font-medium text-gray-700">
                      &mdash; Michael Scott
                    </footer>
                  </blockquote>
                </div>
              </div>
              <div className="keen-slider__slide">
                <div className="bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden lg:flex">
                  {/* Image Section */}
                  <img
                    src="https://photoheads.co.uk/wp-content/uploads/2020/05/headshot-with-client-testimonial.jpg"
                    alt="Testimonial"
                    className="w-full h-56 object-cover lg:h-auto lg:w-1/3"
                  />

                  {/* Content Section */}
                  <blockquote className="flex flex-col justify-between p-6 lg:p-8">
                    {/* Star Rating */}
                    <div className="flex gap-1 text-yellow-400">
                      {[...Array(5)].map((_, idx) => (
                        <svg
                          key={idx}
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>

                    {/* Title and Quote */}
                    <div className="mt-4">
                      <p className="text-2xl font-semibold text-gray-800 sm:text-3xl">
                        Stayin' Alive
                      </p>
                      <p className="mt-4 text-gray-600 leading-relaxed">
                        No, Rose, they are not breathing. And they have no arms
                        or legs … Where are they? You know what? If we come
                        across somebody with no arms or legs, do we bother
                        resuscitating them? I mean, what quality of life do we
                        have there?
                      </p>
                    </div>

                    {/* Footer Section */}
                    <footer className="mt-4 text-sm font-medium text-gray-700">
                      &mdash; Michael Scott
                    </footer>
                  </blockquote>
                </div>
              </div>
              <div className="keen-slider__slide">
                <div className="bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden lg:flex">
                  {/* Image Section */}
                  <img
                    src="https://www.shutterstock.com/image-photo/happy-businessman-smiling-sitting-desk-260nw-1640963563.jpg"
                    alt="Testimonial"
                    className="w-full h-56 object-cover lg:h-auto lg:w-1/3"
                  />

                  {/* Content Section */}
                  <blockquote className="flex flex-col justify-between p-6 lg:p-8">
                    {/* Star Rating */}
                    <div className="flex gap-1 text-yellow-400">
                      {[...Array(5)].map((_, idx) => (
                        <svg
                          key={idx}
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>

                    {/* Title and Quote */}
                    <div className="mt-4">
                      <p className="text-2xl font-semibold text-gray-800 sm:text-3xl">
                        Stayin' Alive
                      </p>
                      <p className="mt-4 text-gray-600 leading-relaxed">
                        No, Rose, they are not breathing. And they have no arms
                        or legs … Where are they? You know what? If we come
                        across somebody with no arms or legs, do we bother
                        resuscitating them? I mean, what quality of life do we
                        have there?
                      </p>
                    </div>

                    {/* Footer Section */}
                    <footer className="mt-4 text-sm font-medium text-gray-700">
                      &mdash; Michael Scott
                    </footer>
                  </blockquote>
                </div>
              </div>
              <div className="keen-slider__slide">
                <div className="bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden lg:flex">
                  {/* Image Section */}
                  <img
                    src="https://img.freepik.com/premium-photo/business-expert-handsome-man-ceo-fashion-suit-modern-life-motivated-entrepreneur-formal-male-fashion-classic-style-aesthetic-confident-businessman-business-success-business-man-ceo_474717-74709.jpg"
                    alt="Testimonial"
                    className="w-full h-56 object-cover lg:h-auto lg:w-1/3"
                  />

                  {/* Content Section */}
                  <blockquote className="flex flex-col justify-between p-6 lg:p-8">
                    {/* Star Rating */}
                    <div className="flex gap-1 text-yellow-400">
                      {[...Array(5)].map((_, idx) => (
                        <svg
                          key={idx}
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>

                    {/* Title and Quote */}
                    <div className="mt-4">
                      <p className="text-2xl font-semibold text-gray-800 sm:text-3xl">
                        Stayin' Alive
                      </p>
                      <p className="mt-4 text-gray-600 leading-relaxed">
                        No, Rose, they are not breathing. And they have no arms
                        or legs … Where are they? You know what? If we come
                        across somebody with no arms or legs, do we bother
                        resuscitating them? I mean, what quality of life do we
                        have there?
                      </p>
                    </div>

                    {/* Footer Section */}
                    <footer className="mt-4 text-sm font-medium text-gray-700">
                      &mdash; Michael Scott
                    </footer>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
