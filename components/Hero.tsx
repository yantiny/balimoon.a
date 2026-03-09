export default function Hero() {
  return (
    <section className="flex justify-between items-center py-20 px-60">
      <div className="max-w-md">
        <h1>
          Create Your <br />
          Dream Bouquets
        </h1>

        <p className="mt-4">Unique is Beautiful</p>

        <button className="border px-4 py-2 mt-6">View catalogue</button>
      </div>

      <div>
        <img src="/foto1.jpeg" width={300} height={300} />
      </div>
    </section>
  );
}
