import type { NextPage } from "next";
import SEO from "../components/seo";
import { useState } from "react";

const Home: NextPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex min-h-screen flex-col text-white bg-background">
      <SEO />
      <nav className="mt-8 mb-28">
        <div className="mx-auto max-w-4xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="flex items-center space-x-4">
              <img src="/logo.svg" alt="Larou Logo" />
              <h1 className="font-extrabold text-4xl text-secondary tracking-wider">
                LAROU
              </h1>
            </div>

            <div className="items-center space-x-8 text-primary hidden lg:flex">
              <a className="hover:underline" href="#about">
                About
              </a>
              <a className="hover:underline" href="#services">
                Services
              </a>
              <a className="hover:underline" href="#partners">
                Partners
              </a>
            </div>
            <a
              href="#contact"
              className="border border-black rounded-md py-2 px-4 text-primary hidden lg:block"
            >
              Contact
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden mr-4"
            >
              <img src="./menu.svg" alt="Menu" />
            </button>
          </div>
        </div>
      </nav>
      {isOpen && (
        <nav className="min-h-screen bg-background z-50 w-full text-primary">
          <div
            className="items-start text-primary flex flex-col w-full text-xl font-bold space-y-4 mx-4"
            onClick={() => setIsOpen(false)}
          >
            <a className="hover:underline " href="#about">
              About
            </a>
            <a className="hover:underline" href="#services">
              Services
            </a>
            <a className="hover:underline" href="#partners">
              Partners
            </a>
          </div>
          <a
            href="#contact"
            className="border border-black rounded-md py-2 px-4 text-primary hidden lg:block"
          >
            Contact
          </a>
        </nav>
      )}

      <section
        style={{ backgroundImage: "url(/laptop.png)" }}
        className="bg-cover rounded-t-[40px] bg-primary"
      >
        <div className="bg-primary/80 rounded-t-[40px] h-[397px] p-4 md:p-16 px-24 relative">
          <img src="./boxes.svg" className="absolute bottom-2" alt="Boxes" />
          <img
            src="./boxes.svg"
            className="absolute right-[20%] -top-4"
            alt="Boxes"
          />
          <div className="max-w-[1440px] hidden lg:flex justify-between mx-auto">
            <div>
              <h2 className="text-5xl font-bold text-white">
                We Are A Digital <br /> Marketing Agency
              </h2>
            </div>
            <div>
              <blockquote className="mt-24 text-[20px]">
                <i>
                  "Ignoring online marketing is like opening <br /> a business
                  but not telling anyone"
                </i>
              </blockquote>
            </div>
          </div>
          <div className="lg:hidden flex flex-col">
            <h2 className="text-5xl font-bold text-white">
              We Are A Digital Marketing Agency
            </h2>
            <blockquote className="mt-8 text-[20px] mx-auto font-light">
              <i>
                "Ignoring online marketing is like opening <br /> a business but
                not telling anyone"
              </i>
            </blockquote>
          </div>
        </div>
      </section>

      <section
        id="about"
        className="my-24 mx-auto text-primary max-w-[1268px] relative"
      >
        <div className="flex items-center space-x-12 mx-4">
          <hr className="my-4 h-[3px] bg-primary border-0  w-[64px]" />
          <div className="text-primary font-bold">KNOW ABOUT US</div>
        </div>
        <div className="flex-col lg:flex-row flex justify-between">
          <div className="max-w-[607px]">
            <h2 className="text-primary text-4xl font-bold mt-4 mx-4">
              We help improve your <br /> company's performance
            </h2>
            <p className="mt-16 mx-4">
              Our company selects producers who grow, collect and transform
              aromatic and medicinal plants by adopting professional
              agricultural methods. Our goal is to help people by providing
              high-quality products following the latest agricultural technics
              that meet the standards of the European market.
              <br />
              <br />
              We are committed to supplying our services and need to enhance and
              reinforce our relationships. Our network and expertise enable us
              to access new markets..
            </p>
          </div>
          <img
            className="max-h-[314px] mx-4 lg:max-w-[479px] lg:ml-16 z-20 lg:mx-auto mt-8 lg:mt-0"
            src="./handshake.png"
            alt="Handshake"
          />
        </div>
        <div className="flex justify-center lg:justify-start">
          <button className="bg-primary px-4 py-2 mt-8 text-background rounded-[4px]">
            Learn More
          </button>
        </div>
        <img
          className="absolute -top-20 -right-20 z-10 hidden lg:block"
          src="./boxesdark.svg"
          alt="Boxes"
        />
      </section>
      <section id="services" className="bg-special rounded-[30px]">
        <div className="my-24 mx-auto max-w-[1168px]">
          <div className="flex items-center space-x-12 mx-4 lg:mx-0">
            <hr className="my-4 h-[3px] bg-primary border-0 w-[64px]" />
            <div className="text-primary font-bold">WHAT WE DO</div>
          </div>
          <h2 className="text-primary text-4xl font-bold mt-4 ml-8 lg:ml-16">
            A highly experienced team that <br />
            provides multiple services
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 mt-12 mx-4 lg:mx-0">
            <div className="flex items-center space-x-8 flex-shrink-0">
              <div className="bg-secondary rounded-full flex self-start">
                <img
                  src="./graph.svg"
                  className="max-w-[36px]"
                  height="64"
                  width="64"
                  alt="Graph"
                />
              </div>
              <div>
                <h3 className="text-primary font-bold text-2xl">
                  Promotional Campaign
                </h3>
                <p className="text-primary">
                  We will create, execute and monitor the performance of
                  campaigns and provide all the resources required to meet sales
                  targets.
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-8 flex-shrink-0 ">
              <div className="bg-secondary rounded-full flex self-start">
                <img
                  src="./steam.svg"
                  height="64"
                  width="64"
                  alt="Steam"
                  className="max-w-[36px]"
                />
              </div>
              <div>
                <h3 className="text-primary font-bold text-2xl">
                  Business Development
                </h3>
                <p className="text-primary">
                  We help to make your business better by building partnerships
                  and making strategic decisions.
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-8 flex-shrink-0 ">
              <div className="bg-secondary rounded-full flex self-start">
                <img
                  src="./eye.svg"
                  height="64"
                  width="64"
                  alt="Eye"
                  className="max-w-[36px]"
                />
              </div>
              <div>
                <h3 className="text-primary font-bold text-2xl">
                  Event Representation
                </h3>
                <p className="text-primary">
                  Our communication experts will promote your company to
                  customers, and maintain positive client and partner relations.
                </p>
              </div>
            </div>
          </div>

          <div className="mx-auto">
            <div className="flex justify-between lg:w-[1082px] mt-[127px] relative">
              <img
                src="./boxesdark.svg"
                className="absolute -top-[120px] right-[55%] z-10"
                alt="Boxes"
              />
              <img
                src="./boxesdark.svg"
                className="absolute -top-[120px] -right-20 z-10 overflow-hidden hidden lg:block"
                alt="Boxes"
              />
              <img
                src="./business-man.png"
                className="w-[386px] h-[254px] z-20 mx-auto lg:mx-0"
                width="386"
                height="254"
                alt="Business Man"
              />
              <img
                src="./world-map-connection.png"
                className="w-[386px] h-[254px] z-20 hidden lg:block"
                width="386"
                height="254"
                alt="World Map Connection"
              />
            </div>
          </div>
        </div>
      </section>
      <section id="partners" className="mb-32">
        <div className="mx-auto mt-[59px]">
          <div className="flex items-center lg:max-w-[1230px] mx-auto">
            <div className="text-primary font-medium lg:mr-[68px] whitespace-nowrap mx-4">
              OUR PARTNERS
            </div>
            <hr className="my-4 h-[2px] bg-primary border-0 w-[50%] lg:w-full" />
          </div>
          <div className="flex items-center flex-wrap space-x-16 justify-center">
            <img src="./airsorted.png" alt="Airsorted" />
            <img src="./houst.png" alt="Houst" />
            <img src="./230media.png" alt="2-30 Media" />
            <img src="./laurasims.png" alt="Laura Sims" />
            <img src="./entrus.png" alt="Entrus" />
          </div>
          <div
            id="contact"
            className="bg-secondary rounded-[40px] mx-auto max-w-[1102px] h-[779px] mt-[108px] p-16  relative"
          >
            <div className="flex items-center space-x-12">
              <hr className="my-4 h-[3px] bg-background border-0 w-[64px]" />
              <div className="text-background font-bold text-[40px]">
                CONTACT
              </div>
            </div>
            <form className="mx-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-16">
                <div>
                  <label
                    htmlFor="first-name"
                    className="block text-sm font-medium text-background mb-4"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="first-name"
                    id="first-name"
                    className="mt-1 block w-full h-12 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm text-black px-2"
                  />
                </div>
                <div>
                  <label
                    htmlFor="first-name"
                    className="block text-sm font-medium text-background mb-4"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="example@gmail.com"
                    className="mt-1 block w-full h-12 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm text-black px-2"
                  />
                </div>
                <div>
                  <label
                    htmlFor="first-name"
                    className="block text-sm font-medium text-background mb-4"
                  >
                    Subject
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Subject"
                    className="mt-1 block w-full h-12 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm text-black px-2"
                  />
                </div>
                <div className="hidden lg:block"></div>
                <div className="col-span-full">
                  <label
                    htmlFor="first-name"
                    className="block text-sm font-medium text-background mb-4"
                  >
                    Message
                  </label>
                  <textarea
                    name="email"
                    id="email"
                    placeholder="Subject"
                    className="mt-1 block h-64 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm text-black p-2"
                  />
                </div>
              </div>
              <div className="flex justify-center pt-8">
                <button className="bg-primary text-background rounded-md h-[62px] w-[176px] border border-background">
                  SEND MESSAGE
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <footer className=" rounded-t-[20px] bg-primary ">
        <div className="max-w-[1060px] grid grid-cols-4 mx-auto mt-8">
          <div className="mx-auto lg:mx-0 col-span-full lg:col-span-1">
            <div className="flex items-center space-x-4">
              <img src="/logolight.svg" className="w-24" alt="Larou Logo" />
              <h1 className="font-extrabold text-4xl text-background tracking-wider">
                LAROU
              </h1>
            </div>
          </div>
          <div className="lg:flex-row flex-col-reverse flex items-center justify-end mt-16 text-background col-span-full lg:col-span-3 lg:space-x-8 mx-auto">
            <div className="mt-8 lg:mt-0 mr-auto lg:mr-0">
              <div>
                <div className="flex items-center space-x-2">
                  <img src="./location.svg" alt="Location Icon" />
                  <div className="font-bold">Address</div>
                </div>
                <p className="font-thin text-background ml-4 text-sm my-2">
                  City Ennour - 3200 Tataouine <br /> Tunisia
                </p>
              </div>
              <div>
                <div className="flex items-center space-x-2">
                  <img src="./phone.svg" alt="Phone" />
                  <div>Call Us</div>
                </div>
                <p className="font-thin text-background ml-4 text-sm my-2">
                  +1 234 567 8900
                </p>
              </div>
              <div>
                <div className="flex items-center space-x-2">
                  <img src="./sms.svg" alt="SMS" />
                  <div>Email</div>
                </div>
                <p className="font-thin text-background ml-4 text-sm mt-2">
                  commercial@larou.fr
                </p>
              </div>
            </div>
            <div className="text-background max-w-[346px]">
              <div className="flex items-center mb-2">
                <img src="./calendar.svg" alt="Calendar" />
                <div>We're Available</div>
              </div>
              <div className="grid grid-cols-2">
                <div className="flex justify-between max-w-[120px]">
                  <div>Monday</div>
                  <div>-</div>
                </div>
                <div className="font-thin">9:00 AM to 8:00 PM</div>
                <div className="flex justify-between max-w-[120px]">
                  <div>Tuesday</div>
                  <div>-</div>
                </div>
                <div className="font-thin">9:00 AM to 8:00 PM</div>
                <div className="flex justify-between max-w-[120px]">
                  <div>Wednesday</div>
                  <div>-</div>
                </div>
                <div className="font-thin">9:00 AM to 8:00 PM</div>
                <div className="flex justify-between max-w-[120px]">
                  <div>Thursday</div>
                  <div>-</div>
                </div>
                <div className="font-thin">9:00 AM to 8:00 PM</div>
                <div className="flex justify-between max-w-[120px]">
                  <div>Friday</div>
                  <div>-</div>
                </div>
                <div className="font-thin">9:00 AM to 8:00 PM</div>
                <div className="flex justify-between max-w-[120px]">
                  <div>Saturday</div>
                  <div>-</div>
                </div>
                <div className="font-thin">9:00 AM to 8:00 PM</div>
                <div className="flex justify-between max-w-[120px]">
                  <div>Sunday</div>
                  <div>-</div>
                </div>
                <div className="font-thin">Closed</div>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-[1060px] mx-auto text-center lg:text-left my-8">
          <span>&#169; 2020-2022 Larou. All rights reserved.</span>
        </div>
      </footer>
    </div>
  );
};

export default Home;
