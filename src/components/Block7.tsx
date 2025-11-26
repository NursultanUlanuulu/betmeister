
const Block7 = () => {
  return (
    <div className="bg-white p-10 h-70 pt-20  ">
      
      <div className="flex flex-wrap justify-center gap-8 md:gap-12 pb-6 pl-80 pr-80">
        
        <div className=" flex-1   min-w-[200px]">
          <div className="text-4xl font-bold text-purple-700 ">
            betmeister
          </div>
          <p className="text-xl text-gray-600 mt-10">
            Data místo náhody. Výhry místo tipů.
          </p>
        </div>

        <div className="flex flex-col md:w-auto ">
          {/* Навигация шилтемелери - бир катарда */}
          <ul className="flex space-x-6 text-3xl font-medium gap-15">
            <li><a href="#" className="text-gray-800 hover:text-purple-600 whitespace-nowrap">Domů</a></li>
            <li><a href="#" className="text-gray-800 hover:text-purple-600 whitespace-nowrap">Jak to funguje</a></li>
            <li><a href="#" className="text-gray-800 hover:text-purple-600 whitespace-nowrap">Členství</a></li>
          </ul>
          
          <div className="mt-4 text-3xl font-medium pl-30">
            <a href="#" className="text-gray-800 hover:text-purple-600 whitespace-nowrap">Obchodní podmínky</a>
          </div>
        </div>

        <div className="flex-1 max-w-45">
          <div className="text-3xl font-medium text-gray-800">Náš systém</div>
          <p className="text-xl text-gray-600 mt-2 leading-relaxed">
            Vše přehledně, včas a bez zbytečností. Každý tip má hlavu a patu – žádné "možná to vyjde".
          </p>
        </div>
      </div>

    
     
    </div>
  );
}

export default Block7;