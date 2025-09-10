import { FcAbout } from "react-icons/fc";
const About = () => {
  return (
    <>
      <section
        id="about"
        className="h-auto prata-regula flex-shrink-0 self-stretch pt-4 md:pt-0"
        aria-labelledby="about-heading"
      >
        <div className="flex gap-1 w-full mb-6 px-2 pl-4">
          <span className=" prata-regula font-bold uppercase tracking-wide text-gray-900">
            About
          </span>
          <FcAbout className="text-2xl" />
        </div>
        <div className="px-4">
          <p className="text-gray-800 text-base prata-regula font-normal leading-[26px] mb-4 max-w-full">
            As a young programmer who loves technology, I want to develop my
            career as a Fullstack Developer.
          </p>
          <p className="text-gray-800 text-base font-normal leading-[26px] mb-4 max-w-full">
            I focus on building products with good user experience and high
            scalability. In the future, I aim to participate in large projects,
            contribute value and develop professional skills. I especially love
            and focus on developing skills with React and Node.js, and am
            willing to learn and improve my knowledge of other technologies to
            meet work requirements.
          </p>
        </div>
      </section>
    </>
  );
};

export default About;
