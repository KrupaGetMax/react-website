import React from "react";
const posts = [
  {
    title: "What is SaaS? Software as a Service Explained",
    desc: "Going into this journey, I had a standard therapy regimen, based on looking at the research literature. After I saw the movie, I started to ask other people.",
    img: "https://images.unsplash.com/photo-1556155092-490a1ba16284?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    date: "Jan 4 2024",
    href: "javascript:void(0)",
  },
  {
    title: "A Quick Guide to WordPress Hosting",
    desc: "According to him, â€œI'm still surprised that this has happened. But we are surprised because we are so surprised.â€More revelations.",
    img: "https://images.unsplash.com/photo-1620287341056-49a2f1ab2fdc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    date: "Feb 10 2024",
    href: "javascript:void(0)",
  },
  {
    title: "7 Promising VS Code Extensions Introduced in 2022",
    desc: "I hope I remembered all the stuff that they needed to know. They're like, 'okay,' and write it in their little reading notebooks.",
    img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    date: "March 14 2024",
    href: "javascript:void(0)",
  },
  {
    title: "How to Use Root C++ Interpreter Shell to Write C++ Programs",
    desc: "The powerful gravity waves resulting from the impact of the planets' moons â€” four in total â€” were finally resolved in 2015 when gravitational.",
    img: "https://images.unsplash.com/photo-1617529497471-9218633199c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    date: "April 4 2024",
    href: "javascript:void(0)",
  },
  {
    title: "Exploring the Future of Cloud Technology",
    desc: "Discover how cloud computing is shaping the next generation of digital infrastructure, providing unparalleled scalability and security for businesses worldwide.",
    img: "https://images.unsplash.com/photo-1556155092-490a1ba16284?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    date: "May 14 2024",
    href: "javascript:void(0)",
  },
  {
    title: "A Complete Guide to Web Hosting Services",
    desc: "Uncover the important factors to consider when choosing the right web hosting service for your website. From uptime to security, make the best choice for your online platform.",
    img: "https://images.unsplash.com/photo-1620287341056-49a2f1ab2fdc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    date: "Jun 10 2024",
    href: "javascript:void(0)",
  },
];


const Card = () => {
  return (
    <section className="py-10">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="space-y-5 sm:text-center sm:max-w-md md:max-w-2xl sm:mx-auto">
          <h1 className="text-3xl md:text-4xl font-semibold sm:text-4xl">
            Our Premium Services
          </h1>
          <p className="text-gray-700 mt-2 sm:text-lg">
            Discover tailored solutions designed to meet your unique business
            needs. Let’s drive success together!
          </p>
        </div>
        <ul className="grid gap-x-8 gap-y-10 mt-16 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((items, key) => (
            <li className="w-full mx-auto group sm:max-w-sm" key={key}>
              <a href={items.href}>
                <img
                  src={items.img}
                  loading="lazy"
                  alt={items.title}
                  className="w-full rounded-lg"
                />
                <div className="mt-3 space-y-2">
                  <span className="block text-indigo-600 text-sm">
                    {items.date}
                  </span>
                  <h3 className="text-lg text-gray-800 duration-150 group-hover:text-indigo-600 font-semibold">
                    {items.title}
                  </h3>
                  <p className="text-gray-600 text-sm duration-150 group-hover:text-gray-800">
                    {items.desc}
                  </p>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Card;
