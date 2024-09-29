import { Button } from "@/components/ui/button";
import Feature from "./feature";
import { features } from "@/data/features";

export default function AreaOfWork() {
  return (
    <section className="bg-bookmark-white py-20 relative">
      <div className="sm:w-3/4 lg:w-5/12 mx-auto px-2">
        <h1 className="text-3xl text-center text-bookmark-blue">
          Areas of Work
        </h1>
        <p className="text-center text-bookmark-grey mt-4">
          Our aim is to make it quick and easy for you to access your favourite
          websites. Your bookmarks sync between your devices so you can access
          them on the go.
        </p>
      </div>
      {features.map((feature) => (
        <Feature key={feature.title} feature={feature} />
      ))}
    </section>
  );
}
