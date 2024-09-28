import { Button } from "@/components/ui/button";

export default function AreaOfWork() {
  return (
    <section id="work" className="py-20 lg:py-35 bg-gray-100">
      <div className="sm:w-3/4 lg:5/12 mx-auto px-2">
        <h2 className="text-3xl font-bold mb-6 text-bookmark-blue text-center">Areas of Work</h2>
        <p className="text-center text-bookmark-grey">In your role as a procurement consultant, you will be responsible for researching and analysing the supply marketplace of your given industry.</p>
      </div>
      <div className="container mx-auto text-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-white shadow-md">
            <h3 className="text-xl font-bold mb-2">Public Policy</h3>
            <p>Providing strategic advice in public and government sectors.</p>
            <Button variant="outline">Outline</Button>
          </div>
          <div className="p-6 bg-white shadow-md">
            <h3 className="text-xl font-bold mb-2">Corporate Strategy</h3>
            <p>Helping businesses achieve growth and profitability.</p>
          </div>
          <div className="p-6 bg-white shadow-md">
            <h3 className="text-xl font-bold mb-2">Sustainability</h3>
            <p>Driving sustainability initiatives for long-term impact.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
