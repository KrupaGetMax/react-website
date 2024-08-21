import React from "react";

const Gallary = () => {
  return (
    <>
      <section class="py-24 relative">
        <div class="w-full max-w-7xl px-6 lg:px-8 mx-auto">
          <div class="flex items-center justify-center flex-col gap-5 mb-14">
            <span class="bg-indigo-50 text-indigo-500 text-xs font-medium px-3.5 py-1 rounded-full">
              Portfolio
            </span>
            <h2 class="font-manrope font-bold text-4xl text-gray-900 text-center">
              Structural Elegance
            </h2>
            <p class="text-lg font-normal text-gray-500 max-w-3xl mx-auto text-center">
              {" "}
              In the world of architecture or organization, structure provides
              the backbone for a purposeful and harmonious existence.
            </p>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-14">
            <div
              class="sm:col-span-2 bg-cover bg-center max-md:h-80 rounded-lg flex justify-end flex-col px-7 py-6"
              style={{
                backgroundImage:
                  "url(https://media.istockphoto.com/id/1436951314/photo/business-woman-talking-to-her-colleagues-during-a-meeting-in-a-boardroom.webp?b=1&s=612x612&w=0&k=20&c=HAPUokbOMBOn0-Eb8daYFGeOKP5xGVUXFFI3R19L7gg=)",
              }}
            >
              <h6 class="font-medium text-xl leading-8 mb-4">
                Architecture Designer
              </h6>
              <p class="text-base font-normal ">
                where knowledge meets innovation, and success is sculpted
                through a blend of skill and vision.
              </p>
            </div>
            <div class="block">
              <img
                src="https://cdn.create.vista.com/api/media/small/732798964/stock-photo-startup-team-works-together-laptop-one-person-looking-presentation"
                alt="Building structure image"
                class="w-full rounded-lg"
              />
            </div>
            <div class="block">
              <img
                src="https://st4.depositphotos.com/1037987/29424/i/450/depositphotos_294243968-stock-photo-four-female-creatives-working-computer.jpg"
                alt="Building structure image"
                class="w-full rounded-lg"
              />
            </div>
            <div class="block">
              <img
                src="https://media.istockphoto.com/id/687685546/photo/business-people-discussing-strategy-with-a-financial-analyst.jpg?s=612x612&w=0&k=20&c=W7eZYHmA2bZVM-wxwiRCOA8p1UBUiRfXtE5dePX3Jx4="
                alt="Building structure image"
                class="w-full rounded-lg"
              />
            </div>
            <div
              class=" bg-cover rounded-lg max-sm:h-80 flex justify-start flex-col px-7 py-6"
              style={{
                backgroundImage:
                  "url(https://media.istockphoto.com/id/1475370849/photo/three-young-entrepreneurs-seen-in-a-meeting-room-during-working-hours.jpg?s=612x612&w=0&k=20&c=I6SqE3Phy_24-Fa_99Xgc9R-qctn1PsLvc_BgGNfmoE=)",
              }}
            >
              <h6 class="font-medium text-xl leading-8  mb-4">
                Interior Designer
              </h6>
              <p class="text-base font-normal ">
                Crafting exceptional interiors, where aesthetics meet
                functionality for spaces that inspire and elevate.
              </p>
            </div>
            <div class="block">
              <img
                src="https://media.istockphoto.com/id/1325338765/photo/portrait-of-a-group-of-businesspeople-working-together-in-a-modern-office.jpg?s=612x612&w=0&k=20&c=d8IaTpJ86A1kNWI0ZfSVHPLK060brHStNLbFeBGsGDI="
                alt="Building structure image"
                class="w-full rounded-lg"
              />
            </div>
            <div
              class=" bg-cover rounded-lg max-sm:h-80 flex justify-end flex-col px-7 py-6"
              style={{
                backgroundImage:
                  "url(https://media.istockphoto.com/id/1308639642/photo/meeting-on-it-development-team-in-office.jpg?s=612x612&w=0&k=20&c=1lYZBc2Zh24ATF-OxX8U1RWpKASwUrhcmTSB-3w8PAQ=)",
              }}
            >
              <h6 class="font-medium text-xl leading-8 text-white mb-4">
                Business Building
              </h6>
              <p class="text-base font-normal text-white/70">
                Architecting business success through innovation, resilience,
                and strategic leadership.
              </p>
            </div>
          </div>
          <button class="w-full rounded-lg py-4 px-6 text-center bg-indigo-100 text-lg font-medium text-indigo-600 transition-all duration-300 hover:text-white hover:bg-indigo-600">
            Load More
          </button>
        </div>
      </section>
    </>
  );
};

export default Gallary;
