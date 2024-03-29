import { FC } from "react";
import array from "../assets/data.json";

const Reviews: FC = () => {
  const tags = {
    start: "<Review>",
    end: "</review>",
  };
  return (
    <div className="review container pt-2">
      <div className="grid grid-rows-1 p-8 md:p-12 gap-8 ">
        {array.testimonials.map((value, index) => {
          return (
            <div
              key={index}
              className="reviews container mx-auto rounded-xl bg-gradient-to-r  from-purple-400 to-red-400"
            >
              <div className="p-2">
                <div
                  key={index}
                  className="rounded-lg text-cream text-2xl md:text-3xl ring py-4 px-4 bg-black"
                >
                  <div className="font-brd text-2xl text-gry">{tags.start}</div>
                  {value.review}
                  <div className="text-3xl md:text-4xl text-gry font-bold pt-2">
                    {value.name}
                  </div>
                  <div className="text-xl text-prime font-sora pt-2">
                    {value.post}
                  </div>
                  <div className="font-brd text-2xl text-gry">{tags.end}</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Reviews;
