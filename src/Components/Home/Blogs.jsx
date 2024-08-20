import React from "react";

const Blogs = () => {
  return (
    <>
      <section className=" pb-10 pt-20 dark:bg-dark  px-4 md:px-14">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto mb-[60px] max-w-[510px] text-center lg:mb-20">
                <span className="mb-2 block text-lg font-semibold text-primary">
                  Our Blogs
                </span>
                <h2 className="mb-4 text-3xl font-bold text-dark dark:text-white sm:text-4xl md:text-[40px]">
                  Our Recent News
                </h2>
                <p className="text-base text-body-color dark:text-dark-6">
                  There are many variations of passages of Lorem Ipsum available
                  but the majority have suffered alteration in some form.
                </p>
              </div>
            </div>
          </div>

          <div className="-mx-4 flex flex-wrap">
            <BlogCard
              date="Dec 22, 2023"
              CardTitle="Meet AutoManage, the best AI management tools"
              CardDescription="AutoManage is the AI-powered tool to streamline operations and boost productivity with seamless automation and smart decision-making."
              image="https://i.ibb.co/Cnwd4q6/image-01.jpg"
            />
            <BlogCard
              date="Jan 1, 2024"
              CardTitle="Unlocking the Future: How AI is Shaping Tomorrow"
              CardDescription="Unlocking the Future: How AI is Shaping Tomorrow explores how AI is transforming industries driving innovation and redefining possibilities."
              image="https://i.ibb.co/Y23YC07/image-02.jpg"
            />
            <BlogCard
              date="April 22, 2024"
              CardTitle="The Evolution of AI: Trends and Predictions for the Future"
              CardDescription="The Evolution of AI: Trends and Predictions explores key AI advancements and forecasts its future transformative impact."
              image="https://i.ibb.co/7jdcnwn/image-03.jpg"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Blogs;

const BlogCard = ({ image, date, CardTitle, CardDescription }) => {
  return (
    <>
      <div className="w-full px-4 md:w-1/2 lg:w-1/3">
        <div className="mb-10 w-full">
          <div className="mb-8 overflow-hidden rounded">
            <img src={image} alt="" className="w-full" />
          </div>
          <div>
            {date && (
              <span className=" inline-block rounded bg-primary px-4 py-1 text-center text-xs font-semibold leading-loose text-black">
                {date}
              </span>
            )}
            <h3>
              <a
                href="/#"
                className="mb-4 inline-block text-xl font-semibold text-dark hover:text-primary dark:text-white sm:text-2xl lg:text-xl xl:text-2xl"
              >
                {CardTitle}
              </a>
            </h3>
            <p className="text-base text-body-color dark:text-dark-6">
              {CardDescription}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
