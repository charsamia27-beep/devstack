export default function Hero() {
  return (
    <section id="home" className="mx-auto flex max-w-7xl flex-col-reverse items-center gap-10 px-5 py-14 md:flex-row md:gap-16 md:px-8 md:py-24">
      <div className="max-w-xl text-center md:text-left">
        <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-ink sm:text-5xl">
          Build Your Ideal
          <br />
          <span className="text-brand-gradient">Development Stack</span>
        </h1>
        <p className="mt-5 text-base leading-relaxed text-slate-600 sm:text-lg">
          Explore frontend, backend, database, and tooling options, compare them
          side by side, and put together the stack that fits your next project.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row md:justify-start">
          <a
            href="#technologies"
            className="rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:opacity-90"
          >
            Explore Technologies
          </a>
          <a
            href="#about"
            className="rounded-full border border-slate-200 px-6 py-3 text-sm font-semibold text-ink transition hover:border-slate-300"
          >
            Learn More
          </a>
        </div>
      </div>

      <div className="w-full max-w-sm md:max-w-md">
        <img
          src="/images/banner-stack.png"
          alt="Layered isometric illustration of a development stack"
          className="w-full"
        />
      </div>
    </section>
  )
}
