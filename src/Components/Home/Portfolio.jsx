// import React, { useState } from "react";

// const Portfolio = () => {
//   const [filter, setFilter] = useState("All");

//   const portfolioItems = [
//     {
//       title: "Awesome Project 1",
//       category: "App Development",
//       imgSrc:
//         "https://www.simplilearn.com/ice9/free_resources_article_thumb/Building-a-career-in-Mobile-App-Development.jpg",
//     },
//     {
//       title: "Awesome Project 2",
//       category: "Branding",
//       imgSrc:
//         "https://canto-wp-media.s3.amazonaws.com/app/uploads/2019/11/19190943/methods-of-branding-31.jpg",
//     },
//     {
//       title: "Awesome Project 3",
//       category: "Web Design, Branding",
//       imgSrc:
//         "https://business.adobe.com/blog/basics/media_1132acbaaf72680b84753f2d51880603efeae51b7.png?width=750&format=png&optimize=medium",
//     },
//     {
//       title: "Awesome Project 4",
//       category: "Web Design, Branding",
//       imgSrc:
//         "https://business.adobe.com/blog/how-to/media_16841025dcc177524745ed46d1bde00dc618a2cd3.png?width=750&format=png&optimize=medium",
//     },
//     {
//       title: "Awesome Project 5",
//       category: "Web Design, Branding",
//       imgSrc:
//         "https://business.adobe.com/blog/basics/media_1f8581118e3ecac00076b129664cc7ece3dd20009.png?width=750&format=png&optimize=medium",
//     },
//     {
//       title: "Awesome Project 6",
//       category: "Web Design, Branding",
//       imgSrc:
//         "https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/wp-content/uploads/2024/02/image1-6.png",
//     },
//   ];

//   const filteredItems =
//     filter === "All"
//       ? portfolioItems
//       : portfolioItems.filter((item) => item.category.includes(filter));

//   return (
//     <>
//       <section id="portfolio" className="portfolio-section py-16 px-4 md:px-14">
//         <div className="container mx-auto">
//           <div className="text-center mb-12">
//             <h2 className="text-4xl font-bold mb-4">Portfolio Showcase</h2>
//             <p className="text-lg text-indigo-500 font-semibold">
//               Discover our latest projects and success stories
//             </p>
//           </div>
//           <div className="flex flex-col md:flex-row items-center mb-8">
//             <button
//               onClick={() => setFilter("All")}
//               className={`filter-button ${
//                 filter === "All" ? "bg-pink-500" : "bg-indigo-500"
//               } hover:bg-pink-500 px-4 py-2 mr-2 mb-2 text-white rounded`}
//             >
//               All
//             </button>
//             <button
//               onClick={() => setFilter("Web Design")}
//               className={`filter-button ${
//                 filter === "Web Design" ? "bg-pink-500" : "bg-indigo-500"
//               } hover:bg-pink-500 px-4 py-2 mr-2 mb-2 text-white rounded`}
//             >
//               Web Design
//             </button>
//             <button
//               onClick={() => setFilter("App Development")}
//               className={`filter-button ${
//                 filter === "App Development" ? "bg-pink-500" : "bg-indigo-500"
//               } hover:bg-pink-500 px-4 py-2 mr-2 mb-2 text-white rounded`}
//             >
//               App Development
//             </button>
//             <button
//               onClick={() => setFilter("Branding")}
//               className={`filter-button ${
//                 filter === "Branding" ? "bg-pink-500" : "bg-indigo-500"
//               } hover:bg-pink-500 px-4 py-2 mr-2 mb-2 text-white rounded`}
//             >
//               Branding
//             </button>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
//             {filteredItems.map((item, index) => (
//               <div
//                 key={index}
//                 className="group portfolio-item relative hover:shadow-lg shadow-md rounded-lg overflow-hidden"
//               >
//                 <a href={`/project-${index + 1}`}>
//                   <img
//                     className="w-full h-60 object-cover"
//                     src={item.imgSrc}
//                     alt={`Project ${index + 1}`}
//                   />
//                   <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-r from-indigo-500 to-pink-500 opacity-0 transition duration-300 ease-in-out group-hover:opacity-70"></div>
//                   <div className="p-4 flex flex-col items-center justify-between relative z-10">
//                     <h3 className="text-lg font-medium text-txt group-hover:text-gray-dark">
//                       {item.title}
//                     </h3>
//                     <span className="text-sm font-bold text-pink-500 group-hover:text-indigo-500">
//                       {item.category}
//                     </span>
//                   </div>
//                 </a>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Portfolio;

import React, { useState } from "react";

const Portfolio = () => {
  const [showCard, setShowCard] = useState("all");

  const handleProject = (category) => {
    setShowCard(category);
  };

  return (
    <>
      <section className="pt-20 pb-12 lg:pt-[120px] lg:pb-[90px] dark:bg-dark">
        <div className="container mx-auto">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full px-4 md:px-14">
              <div className="mx-auto mb-[60px] max-w-[510px] text-center">
                <span className="text-primary mb-2 block text-lg font-semibold">
                  Our Portfolio
                </span>
                <h2 className="text-dark mb-3 text-3xl leading-[1.208] font-bold sm:text-4xl md:text-[40px]">
                  Our Recent Projects
                </h2>
                <p className="text-body-color text-base dark:text-dark-6">
                  There are many variations of passages of Lorem Ipsum available
                  but the majority have suffered alteration in some form.
                </p>
              </div>
            </div>
          </div>

          <div className="w-full flex flex-wrap justify-center -mx-4">
            <div className="w-full px-4">
              <ul className="flex flex-wrap justify-center mb-12 space-x-1">
                <li className="mb-1">
                  <button
                    onClick={() => handleProject("all")}
                    className={`inline-block rounded-lg py-2 px-5 text-center text-base font-semibold transition md:py-3 lg:px-8 ${
                      showCard === "all"
                        ? "activeClasses bg-primary text-blue-600"
                        : "inactiveClasses text-body-color dark:text-dark-6 hover:bg-primary hover:text-blue-500"

                    }`}
                  >
                    All Projects
                  </button>
                </li>
                <li className="mb-1">
                  <button
                    onClick={() => handleProject("branding")}
                    className={`inline-block rounded-lg py-2 px-5 text-center text-base font-semibold transition md:py-3 lg:px-8 ${
                      showCard === "branding"
                        ? "activeClasses bg-primary text-blue-600"
                        : "inactiveClasses text-body-color dark:text-dark-6 hover:bg-primary hover:text-blue-500"
                    }`}
                  >
                    Branding
                  </button>
                </li>
                <li className="mb-1">
                  <button
                    onClick={() => handleProject("design")}
                    className={`inline-block rounded-lg py-2 px-5 text-center text-base font-semibold transition md:py-3 lg:px-8 ${
                      showCard === "design"
                        ? "activeClasses bg-primary text-blue-600"
                        : "inactiveClasses text-body-color dark:text-dark-6 hover:bg-primary hover:text-blue-500"
                    }`}
                  >
                    Design
                  </button>
                </li>
                <li className="mb-1">
                  <button
                    onClick={() => handleProject("marketing")}
                    className={`inline-block rounded-lg py-2 px-5 text-center text-base font-semibold transition md:py-3 lg:px-8 ${
                      showCard === "marketing"
                        ? "activeClasses bg-primary text-blue-600"
                        : "inactiveClasses text-body-color dark:text-dark-6 hover:bg-primary hover:text-blue-500"
                    }`}
                  >
                    Marketing
                  </button>
                </li>
                <li className="mb-1">
                  <button
                    onClick={() => handleProject("development")}
                    className={`inline-block rounded-lg py-2 px-5 text-center text-base font-semibold transition md:py-3 lg:px-8 ${
                      showCard === "development"
                        ? "activeClasses bg-primary text-blue-600"
                        : "inactiveClasses text-body-color dark:text-dark-6 hover:bg-primary hover:text-blue-500"
                    }`}
                  >
                    Development
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-wrap -mx-4 px-4 md:px-4">
            <PortfolioCard
              ImageHref="https://i.ibb.co/64WfFPt/image-01.jpg"
              category="Branding"
              title="Creative Agency"
              button="View Details"
              buttonHref="#"
              showCard={showCard}
            />
            <PortfolioCard
              ImageHref="https://i.ibb.co/PT7ghRs/image-06.jpg"
              category="marketing"
              title="Creative Agency"
              button="View Details"
              buttonHref="#"
              showCard={showCard}
            />
            <PortfolioCard
              ImageHref="https://i.ibb.co/vkt8C1P/image-02.jpg"
              category="marketing"
              title="Creative Agency"
              button="View Details"
              buttonHref="#"
              showCard={showCard}
            />
            <PortfolioCard
              ImageHref="https://i.ibb.co/3FKqS1G/image-03.jpg"
              category="Development"
              title="Creative Agency"
              button="View Details"
              buttonHref="#"
              showCard={showCard}
            />
            <PortfolioCard
              ImageHref="https://i.ibb.co/m6dq2fX/image-04.jpg"
              category="Design"
              title="Creative Agency"
              button="View Details"
              buttonHref="#"
              showCard={showCard}
            />
            <PortfolioCard
              ImageHref="https://i.ibb.co/mCPjBsH/image-05.jpg"
              category="Marketing"
              title="Creative Agency"
              button="View Details"
              buttonHref="#"
              showCard={showCard}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;

const PortfolioCard = ({
  showCard,
  category,
  ImageHref,
  title,
  button,
  buttonHref,
}) => {
  return (
    <>
      <div
        className={`w-full px-4 md:w-1/2 xl:w-1/3 ${
          showCard === "all" || showCard === category.toLowerCase()
            ? "block"
            : "hidden"
        }`}
      >
        <div className="relative mb-12">
          <div className="overflow-hidden rounded-[10px]">
            <img src={ImageHref} alt="portfolio" className="w-full" />
          </div>
          <div className="relative z-10 mx-7 -mt-20 rounded-lg bg-white dark:bg-dark-2 py-[34px] px-3 text-center shadow-portfolio dark:shadow-box-dark">
            <span className="text-primary mb-2 block text-sm font-medium">
              {category}
            </span>
            <h3 className="text-dark dark:text-white mb-5 text-xl font-bold">
              {title}
            </h3>
            <a
              href={buttonHref}
              className="text-body-color dark:text-dark-6 hover:border-primary hover:bg-primary inline-block rounded-md border border-stroke dark:border-dark-3 py-[10px] px-7 text-sm font-medium transition hover:text-white"
            >
              {button}
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
