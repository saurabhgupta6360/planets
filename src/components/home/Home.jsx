import React from "react";

const Home = () => {
  print('home')
  return (
    <>
      <div className="container mx-auto grid lg:grid-cols-2 lg:h-screen xs:h-50v md:grid-cols-2 sm:h-70v ">
        <div className="heading lg:col-span-1 flex flex-col justify-center">
          <h2 className="text-white lg:text-5xl lg:font-bold lg:my-8 md:text-5xl md:font-bold md:my-8  xs:text-center xs:text-3xl xs:my-5 lg:text-start xs:font-bold sm:text-5xl sm:text-center md:text-left ">
            Get to know our <br /> neighbourhood better
          </h2>
          <p className="lg:font-normal text-white lg:leading-tight md:leading-tight md:font-normal xs:text-center lg:text-left md:text-left ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            porta, diam quis <br /> semper tincidunt, ante ante pellentesque
            lectus, vitae mollis tellus massa non risus. <br /> Nullam non eros
            auctor, viverra erat eget, condimentum nibh.
          </p>
          <button className="blue-btn rounded-lg text-white hover:sepia font-normal lg:m-0 py-3 md:mt-5 md:m-0 lg:mt-5 px-10 text-lg brightness-100 lg:w-[30%] md:w-[40%] xs:w-[62%] xs:m-auto xs:mt-5 xs:mb-5 sm:w-[40%]">
            Start exploring
          </button>
        </div>
        {/* end heading */}

        <div className="rgt-img lg:col-span-1 flex flex-col justify-center lg:opacity-100 lg:w-2/4 lg:relative md:top-0 md:col-span-1 md:opacity-100 md:w-2/4 md:relative xs:absolute xs:opacity-25 xs:-z-10 xs:top-36 xs:w-3/4 md:-right-36">
          <div className="big-circle rounded-full xs:min-w-full "></div>
          <div className="small-circle rounded-full lg:relative lg:left-96  md:relative md:-top-64 xs:absolute lg:-top-96 xs:inset-y-0 xs:inset-x-0 xs-w-3/4 xs:left-64 sm:left-[31rem] md:left-[14rem]   "></div>
        </div>
      </div>
      {/* end container */}

      <section className="fing pt-4 pb-20 bg-darkblue">
        <div className="container mx-auto ">
          <h2 className="text-center text-white lg:font-medium lg:text-4xl lg:m-20 xs:text-2xl xs:font-semibold xs:my-10 md:text-3xl sm:text-3xl">
            Knowledge right at your fingertips
          </h2>
          <div className="fgr grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-3 ">
            <div className="cr-one text-center">
              <div className=" text-white circle-one lg:col-span-1 inline-block lg:mb-4 rounded-full max-w-full	"></div>
              <p className="text-white text-center text-base">
                Lorem ipsum dolor sit amet, consectetur
                <br /> adipiscing elit.
              </p>
            </div>
            <div className="cr-two text-center xs:my-8 lg:my-0 md:my-0 sm:my-0">
              <div className=" text-white lg:col-span-1 circle-two inline-block lg:mb-4 rounded-full max-w-full	"></div>
              <p className="text-white text-center text-base">
                Lorem ipsum dolor sit amet, consectetur
                <br /> adipiscing elit.
              </p>
            </div>
            <div className="cr-three text-center">
              <div className=" text-white lg:col-span-1 circle-three inline-block lg:mb-4 rounded-full max-w-full"></div>
              <p className="text-white text-center text-base">
                Lorem ipsum dolor sit amet, consectetur
                <br /> adipiscing elit.
              </p>
            </div>
          </div>
        </div>
        {/* end container */}
      </section>

      <div className="container mx-auto grid lg:grid-cols-2 lg:h-screen xs:h-70v md:grid-cols-2 ">
        <div className="heading lg:col-span-1 flex flex-col justify-center xs:text-center">
          <h2 className="text-white text-2xl font-bold my-5 xs:text-center xs:text-2xl text-start lg:text-start lg:mb-5 xs:font-semibold xs:my-5 md:text-left md:font-bold md:text-xl">
            Gether information about Mars and its two moons,
            <br /> Phobos and Deimos
          </h2>
          <p className="font-normal text-white  leading-tight xs:text-center lg:text-start md:text-left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <button className="orange-btn rounded-lg text-white hover:sepia lg:m-0 font-normal py-2 lg:mt-5 md:mt-5 md:m-0 px-5 text-lg lg:w-[30%] md:w-[40%] xs:w-[46%] sm:w-[40%] xs:m-auto xs:mt-5 xs:mb-5">
            Explore Mars
          </button>
        </div>
        {/* end heading */}

        <div className="rgt-img lg:col-span-1 flex flex-col justify-center lg:relative md:-right-36 md:top-0 md:col-span-1 md:opacity-100 md:w-2/4 md:relative xs:mt-20 xs:absolute xs:opacity-25 xs:-z-10  xs:w-3/4">
          <div className="big-circle-org rounded-full xs:min-w-full"></div>
          <div className="small-circle-grey rounded-full lg:relative md:relative md:-top-64 xs:absolute lg:-top-96 lg:left-96 xs:inset-y-0 xs:inset-x-0 xs-w-3/4 xs:left-[17rem] sm:left-[32rem] md:left-[15rem]"></div>
          <div className="grey-circle rounded-full lg:relative "></div>
        </div>
      </div>
      {/* end container */}
    </>
  );
};

export default Home;
