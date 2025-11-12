import { GiStrongMan } from "react-icons/gi";
const Strengths = () => {
  const strengths = [
    "Hands-on experience with multiple projects using React and Node.js.",
    "Strong passion for exploring new technologies, especially in web development.",
    "Ability to self-learn quickly, collaborate effectively in teams, and manage small projects.",
    "Hands-on experience with multiple real-world projects using React.js and Node.js (both frontend and backend)",
    "Proficient in developing microservice-based systems, building RESTful APIs, and integrating multiple services",
    "Strong passion for learning and exploring new technologies, especially in Web Development and Cloud Deployment",
    "Quick self-learner with solid problem-solving skills, effective team collaboration, and small project management capabilities",
  ];

  return (
    <section
      id="strengths"
      className="flex flex-col items-start self-stretch px-4"
    >
      <div className="flex items-center gap-2 mb-6">
        <GiStrongMan className="text-3xl" />
        <span className="text-base font-bold uppercase tracking-wide text-gray-900">
          Strengths
        </span>
      </div>

      <ul className="list-disc list-inside space-y-2 text-gray-700 text-base leading-relaxed">
        {strengths.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </section>
  );
};

export default Strengths;
