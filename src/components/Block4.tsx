import form1 from "../assets/form.jpeg";
import form2 from "../assets/6.jpeg";
import fudbol from "../assets/fotbal-1536x1024.jpg";

const Block4 = () => {
  return (
    <section className="container overflow-hidden h-190 w-100% mx-auto ">
      <div className="grid md:grid-cols-2 gap-12 md:gap-90 items-center">
        <div className="md:order-1 order-2 max-w-lg mx-auto w-full relative h-[650px] md:h-[750px] flex items-center justify-center ml-40">
          <div className=" inset-0 z-0 p-0">
            <img
              src={fudbol}
              alt="Футбол стадионунун фону"
              className="w-full h-full object-cover rounded-3xl shadow-2xl"
              style={{ filter: "brightness(0.5)", objectPosition: "center" }}
            />
          </div>

          <div className="absolute bottom-1/20 left-1/8 transform -translate-x-1/2 -translate-y-[55%] w-[80%] md:w-[53%] z-10 space-y-2">
            <div className="bg-white p-3 rounded-xl shadow-2xl transform  origin-bottom-left -ml-8 z-20 relative">
              <img
                src={form1}
                alt="Коюм карточкасынын сүрөтү 1"
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
          </div>
          <div className="absolute top-1/3 left-2/2 transform -translate-x-1/2 -translate-y-[55%] w-[80%] md:w-[60%] z-10 space-y-2">
            <div className="bg-white p-3 rounded-xl shadow-2xl transform  origin-top-right ml-10 -mt-16 z-30 relative">
              <img
                src={form2}
                alt="Коюм карточкасынын сүрөтү 2"
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
          </div>
        </div>

        <div className="md:order-2 order-1 md:pt-16 self-center">
          <h2 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight text-gray-900">
           Nauč se sázet
            <br />
            chytře
          </h2>
          <p className="text-gray-700 text-lg mb-6 max-w-lg">
            Sázení může být výdělečné – pokud máš správné informace. Většina
            lidí prohrává, protože sází bez dat, bez strategie a bez plánu. My
            to děláme jinak.
          </p>
          <p className="text-gray-700 text-lg max-w-lg">
            Získej přístup k ověřeným tipům, které vycházejí z analýz, statistik
            a aktuálních událostí. Bez zbytečných řečí. Jen to, co opravdu
            funguje.
          </p>

          
          
        </div>
      </div>
    </section>
  );
};

export default Block4;
