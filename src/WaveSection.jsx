export default function WaveSection() {
  return (
    <section className="relative w-full h-screen overflow-hidden flex justify-center items-center min-h-screen">
      <div className="wave absolute left-0 w-full h-full bg-blue-600 shadow-inner">
        <span className="wave1"></span>
        <span className="wave2"></span>
        <span className="wave3"></span>
      </div>
      <div className="content relative z-10 text-white text-5xl tracking-wider">
        <h2>Wavy Animation</h2>
      </div>
    </section>
  );
}