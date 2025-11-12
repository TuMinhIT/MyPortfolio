import About from "./About";
import Projects from "./Projects";
import Skills from "./Skills";
import Strengths from "./Strengths";
import OtherInfo from "./OthetrInfo";
const MySkill = ({ dart }) => {
  return (
    <>
      <div
        className={`flex-col flex w-full md:pl-[340px] xl:pl-[540px] ${
          dart ? "dart-mode" : "bg-white "
        } `}
      >
        <main
          id="main"
          className={`max-w-3xl mx-auto px-2 sm:px-6 py-12 sm:py-12 flex flex-col items-start gap-10 flex-shrink-0 `}
        >
          <About />
          <Skills />
          <Projects />
          <Strengths />
          <OtherInfo />
        </main>
      </div>
    </>
  );
};

export default MySkill;
