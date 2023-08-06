import React from "react";

const Contact = () => {
  return (
    <>
      <div className="container mx-auto grid lg:grid-cols-1 sm:grid-cols-2 pt-4 text-white ">
        <h1 className="title md:text-6xl lg:text-6xl xs:text-5xl lg:my-20 sm:my-20 xs:my-10 font-medium	">
          Contact
        </h1>
      </div>
      <div className="container mx-auto grid lg:grid-cols-2 xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-1 pt-4 pb-20 ">
        <form
          action=""
          className="grid lg:grid-cols-2 xs:grid-cols-1 sm:grid-cols-2 justify-start gap-4 [&>*:nth-child(3)]:col-span-full	"
        >
          <label
            for=""
            className="text-sm flex flex-col gap-2 w-full text-white"
          >
            Name:
            <input
              type="text"
              placeholder=""
              required
              name="name"
              autoComplete="off"
              className="ring-1 ring-grey-300 w-flul rounded-sm px-4 py-2 outline-none  text-black"
            />
          </label>

          <label
            for=""
            className="text-sm flex flex-col gap-2 w-full text-white"
          >
            E-mail:
            <input
              type="message"
              placeholder=""
              required
              name="email"
              autoComplete="off"
              className="ring-1 ring-grey-300 w-flul rounded-sm px-4 py-2 outline-none text-black"
            />
          </label>

          <label
            for=""
            className="text-sm grid flex-col gap-2 w-full text-white"
          >
            Message:
            <textarea
              type="text"
              placeholder=""
              name="message"
              autoComplete="off"
              className="ring-1 ring-grey-300 w-flul rounded-sm px-4 py-2 outline-none text-black min-h-[150px]"
            />
          </label>
          <input
            type="submit"
            className="sc-send bg-sndbtn text-white rounded-sm text-base font-normal cursor-pointer px-10 lg:w-[30%] md:w-[30%] sm:w-[40%] py-2"
            value="Send"
          ></input>
        </form>
      </div>
    </>
  );
};

export default Contact;
