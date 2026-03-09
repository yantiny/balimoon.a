
export default function BestSelling() {
  return (
    <section className="py-16 px-20">
      <h2>Best Selling Bouquets</h2>

      <div className="grid grid-cols-3 gap-8 mt-8">
        <div className="border p-4 justify-center items-center">
          <img src="/foto3.jpeg" width={300} height={300} />
          <p>Bouquet 1</p>
        </div>

        <div className="border p-4">
          <img src="/foto2.jpeg" width={300} height={300} />
          <p>Bouquet 2</p>
        </div>

        <div className="border p-4">
          <img src="/foto3.jpeg" width={300} height={300} />
          <p>Bouquet 3</p>
        </div>
      </div>
    </section>
  );
}