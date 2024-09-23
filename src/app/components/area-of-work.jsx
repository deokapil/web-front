export default function AreaOfWork() {
  return (
    <section id="work" className="py-16 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Areas of Work</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-white shadow-md">
            <h3 className="text-xl font-bold mb-2">Public Policy</h3>
            <p>Providing strategic advice in public and government sectors.</p>
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
