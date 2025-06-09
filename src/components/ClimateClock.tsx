// src/components/ClimateClock.ts

const ClimateClock = () => {
  return (
    <section className="w-full bg-gradient-to-r from-green-900 via-green-700 to-green-900 text-white py-12 px-6 flex flex-col items-center rounded-lg shadow-lg max-w-5xl mx-auto">
      <h2 className="text-2xl md:text-4xl font-extrabold mb-4 text-center tracking-wide uppercase drop-shadow-lg">
        Time left to limit global warming to a maximum of 2°C
      </h2>

      {/* Carbon Clock iframe or embed placeholder */}
      <div className="mt-6 w-full max-w-4xl aspect-[16/9] rounded-lg overflow-hidden shadow-xl border-4 border-green-400">
        {/* 
          Replace this div with actual embed, e.g. iframe from novocarbo or
          a custom React clock component that you may want to create.
        */}
        <iframe
          src="https://www.novocarbo.com/embed" // hypothetical embed URL; replace with actual
          title="Carbon Clock"
          className="w-full h-full"
          frameBorder="0"
          allowFullScreen
          loading="lazy"
        />
      </div>

      <p className="mt-6 text-sm md:text-base text-green-300 italic">
        Source:{" "}
        <a
          href="https://www.novocarbo.com"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-green-100"
        >
          novocarbo.com
        </a>
      </p>
    </section>
  );
};

export default ClimateClock;
