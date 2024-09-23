export default function Expertise() {
  return (
    <section id="expertise" className="py-16 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Our Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-gray-100">
            <h3 className="text-xl font-bold mb-2">Industry Insights</h3>
            <p>Deep understanding of various industry verticals.</p>
          </div>
          <div className="p-6 bg-gray-100">
            <h3 className="text-xl font-bold mb-2">Innovative Solutions</h3>
            <p>Cutting-edge solutions tailored to your needs.</p>
          </div>
          <div className="p-6 bg-gray-100">
            <h3 className="text-xl font-bold mb-2">Strategic Planning</h3>
            <p>Creating strategic roadmaps for success.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
