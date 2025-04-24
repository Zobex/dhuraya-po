import React from "react";

const HomeHero: React.FC = () => {
  return (
    <section className="relative w-full min-h-screen bg-gradient-to-br from-[#402064] to-[#07000b] overflow-hidden text-white">
      {/* Floating blobs */}
      <div className="absolute w-80 h-80 bg-blue-400/30 rounded-full blur-3xl top-[-4rem] left-[-4rem]" />
      <div className="absolute w-64 h-64 bg-blue-300/20 rounded-full blur-2xl bottom-[-3rem] right-[-3rem]" />

      {/* Decorative images */}
      <img
        src="/assets/R.png"
        alt="Decoration"
        className="absolute top-0 right-0 pointer-events-none w-60 h-60"
      />
      <img
        src="/assets/R.png"
        alt="Decoration"
        className="absolute pointer-events-none -top-16 right-48 w-60 h-60"
        style={{ transform: "rotate(-16deg)" }}
      />

      {/* Hero content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-16 text-center sm:px-6 lg:px-8">
        <div className="space-y-4">
          <h2 className="text-xl font-light text-white/90 sm:text-2xl md:text-3xl font-samee animate-fade-in-down">
            AbaHuram
          </h2>
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl font-samee drop-shadow animate-fade-in-up">
            qlaTOP ayarud
          </h1>
        </div>

        <div className="grid w-full max-w-5xl gap-10 px-5 py-5 border shadow-2xl mt-28 bg-white/10 backdrop-blur-xl border-white/20 rounded-3xl sm:px-5 ">
          <div className="flex flex-col justify-center w-full space-y-5 sm:text-right">
            <h2 className="flex justify-center w-full mb-3 text-2xl font-bold text-white sm:text-3xl font-samee drop-shadow">
              qSamulAdOh utAmuWUlam ikewikew ELug Ahab ihevid
            </h2>
            <p className="flex justify-center w-full text-base font-light font-utheemu text-white/80 md:text-lg">
              !ކިޔާލުމަށް ތިރީގައިވާ ފިތް ހިޔާރު ކުރައްވާ
            </p>
            <div className="flex flex-col w-full gap-3 pt-2 sm:flex-row sm:justify-end">
              <a
                href="/lectures"
                className="w-full px-6 py-2 font-semibold text-center text-white transition bg-purple-600 rounded-full shadow font-utheemu hover:bg-purple-700"
              >
                ކިޔާލާ ބަލާލުމަށް
              </a>
              <a
                href="/about"
                className="w-full px-6 py-2 text-center text-white transition border rounded-full font-utheemu border-white/30 hover:bg-white/10"
              >
                ބައްދަލުކޮއްލާ ވާހަކައްކާލުމަށް
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
