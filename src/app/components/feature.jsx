import { cn } from "@/lib/utils";
import Image from "next/image";

const Feature = ({ feature }) => {
  console.log(feature);
  const { title, description, image, orientation } = feature;
  const roundedClass =
    "hidden lg:block overflow-hidden bg-bookmark-purple absolute h-64 w-2/4 -bottom-24";
  const orientationClass =
    orientation === "left"
      ? cn(roundedClass, "rounded-r-full -left-36")
      : cn(roundedClass, "rounded-l-full -right-36");

  const imgOrientationClass =
    orientation === "left" ? "lg:flex-row" : "lg:flex-row-reverse";

  return (
    <div className="relative mt-20 lg:mt-24">
      <div
        className={cn(
          imgOrientationClass,
          "container flex flex-col items-center justify-center gap-x-24"
        )}
      >
        <div className="flex flex-1 justify-center z-10 mb-10 lg:mb-0">
          <Image
            width={500}
            height={500}
            className="w-4/6 h-4/6 sm:w-3/4 sm:h-3/4 md:w-full md:h-full"
            src={image}
            alt=""
          />
        </div>
        <div className="flex flex-1 flex-col items-center lg:items-start">
          <h1 className="text-3xl text-center text-bookmark-blue">{title}</h1>
          <p className="text-bookmark-grey my-4 text-center lg:text-left sm:w-3/4 lg:w-full">
            {description}
          </p>
          <button
            type="button"
            className="btn btn-purple hover:bg-bookmark-white hover:text-black"
          >
            More Info
          </button>
        </div>
      </div>
      <div className={orientationClass}></div>
    </div>
  );
};

export default Feature;
