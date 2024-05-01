export default async function Introduce() {
  const introduce = {
    
    title : 'Easy To Maintain Work',
    app : "Wha'do",
    description:
      '"Introducing our innovative To-Do List Application, the ultimate productivity tool designed to streamline your daily tasks."',
  };
  return (
    <section
      id="introduce"
      className="h-fit w-full pb-24 flex flex-col gap-y-10 md:gap-y-20"
    >
      <h1 className="text-3xl sm:text-4xl md:text-5xl text-center font-semibold text-[#102C57]">
      {introduce.title}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 place-content-center gap-y-4">
        <div className="md:pl-6">
          <img src="/easy-maintain.png" alt="" />
        </div>
        <div className="relative ml-auto md:mt-4 group md:hover:w-[100%] lg:mt-14 md:rounded-l-full transition-all flex md:pl-20 pl-4 pr-4 py-8 md:py-4 md:pr-4 flex-col justify-center items-center w-full md:w-[90%] lg:w-[80%] h-[80%] bg-[#DAC0A3]">
          <span className="md:group-hover:opacity-100 opacity-0 text-5xl font-semibold text-[#102C57] absolute top-10 transition-all">
            Wha'do
          </span>
          <p className="font-semibold text-[#102C57] text-center text-lg lg:text-2xl xl:text-3xl">
            {introduce.description}
          </p>
        </div>
      </div>
    </section>
  );
}
