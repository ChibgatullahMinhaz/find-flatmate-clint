import { Fade } from "react-awesome-reveal";
import { reasons, tips } from "../Utilities/utilities";
import {motion} from 'framer-motion'
const InfoSections = () => {
  return (
    <>
      {/* Roommate Tips */}

      <motion.section
      initial={{y:50, opacity: 0}}
      whileInView={{y:0, opacity: 1}}
      transition={{duration: 0.2}}
      viewport={{once:false, amount:0}}
       className="py-16">
        <Fade cascade>
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold  mb-4">
                Tips for Living with a Roommate
              </h2>
              <p className="text-lg text-blue-400 max-w-2xl mx-auto">
                Make your roommate experience harmonious with these helpful
                guidelines.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {tips.map((tip) => (
                <div
                  key={tip.id}
                  className=" rounded-lg shadow-lg hover:shadow-xl transition-shadow p-6 text-center"
                >
                  <div className="mb-4 text-purple-600">
                    <i className={tip.icon}></i>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{tip.title}</h3>
                  <p className="text-gray-600">{tip.description}</p>
                </div>
              ))}
            </div>
          </div>
        </Fade>
      </motion.section>

      {/* Why Choose Us */}

      <section className="py-16 ">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
              <Fade>
                <h2 className="text-3xl font-bold  mb-4">
                  Why Choose Roommate Finder?
                </h2>
              </Fade>
              <Fade>
                <p className="text-lg text-gray-500 mb-6">
                  We're dedicated to making your roommate search experience
                  smooth, safe, and successful.
                </p>
              </Fade>
              <ul className="space-y-4">
                {reasons.map((reason, index) => (
                  <li key={index} className="flex">
                    <Fade>
                      <div className="flex-shrink-0 mr-3 mt-1">
                        <svg
                          className="h-5 w-5 text-purple-600"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                    </Fade>
                    <div>
                      <h4 className="text-lg font-semibold">{reason.title}</h4>
                      <p className="text-gray-600">{reason.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="md:w-1/2">
              <div className=" rounded-lg shadow-xl overflow-hidden">
                <Fade>
                  <img
                    src="https://i.ibb.co/7NSBBzmh/roommate-finder.png"
                    alt="Happy roommates"
                    className="w-full h-auto"
                  />
                </Fade>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default InfoSections;
