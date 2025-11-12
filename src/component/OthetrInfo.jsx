import { RiPsychotherapyFill } from "react-icons/ri";
const OtherInfo = () => {
  const info = [
    "Languages: Vietnamese (native), English (good at reading technical documents).",
    "Interests: Learn new web technologies, participate in project source code expansion, learn about system architecture and application prioritization.",
  ];

  return (
    <section
      id="other-info"
      className="flex flex-col items-start self-stretch px-4"
    >
      <div className="flex items-center gap-2 mb-6">
        <span className="text-base font-bold uppercase tracking-wide text-gray-900">
          Other Information
        </span>
        <RiPsychotherapyFill className="text-blue-600 text-2xl" />
      </div>

      <ul className="space-y-2 text-gray-700 text-base leading-relaxed">
        {info.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </section>
  );
};

export default OtherInfo;
