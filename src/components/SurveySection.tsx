import { useEffect } from "react";

const typeformIds = [
  "01M5Z8NZTTHYQT3Y45JGF68H05",
  "01M5ZKCW23PYAVH2830H1BHR0N",
  "01KNJQNEPHS2S7FW1WDTDCEJ21",
  "01M5ZKYM4YQAB9QRHGBKJVT6EF",
];

const SurveySection = () => {
  useEffect(() => {
    const existingScript = document.querySelector<HTMLScriptElement>(
      'script[data-typeform-embed="true"]',
    );

    if (existingScript) return;

    const script = document.createElement("script");
    script.src = "https://embed.typeform.com/next/embed.js";
    script.async = true;
    script.dataset.typeformEmbed = "true";
    document.body.appendChild(script);
  }, []);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-black via-gray-950 to-black py-16 sm:py-20">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-orange-500/40 to-transparent" />
      <div className="container relative mx-auto px-4">
        <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-12">
          <h2 className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
            ¿Ya nos conoces? Cuéntanos cómo podemos ayudarte en tu negocio.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base italic leading-relaxed text-gray-400 sm:text-lg">
            Cada una es diferente, responde esta breve encuesta para que podamos
            ofrecerte una solución personalizada.
          </p>
        </div>

        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-x-8 gap-y-5 sm:grid-cols-2 sm:gap-y-7">
          {typeformIds.map((id) => (
            <div
              key={id}
              data-tf-live={id}
              className="flex justify-center"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SurveySection;
