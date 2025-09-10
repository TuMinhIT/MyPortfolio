import { GiSkills } from "react-icons/gi";

const Skills = () => {
  return (
    <section
      id="skills"
      className="h-auto flex-shrink-0 self-stretch mt-8 sm:mt-20 px-4"
    >
      {/* Header */}
      <div className="flex items-center gap-2 mb-6">
        <GiSkills className="text-xl text-[#E86A24]" />
        <span className="font-bold uppercase tracking-wide text-gray-900 text-lg">
          Technology
        </span>
      </div>

      {/* Skill List */}
      <ul className="list-disc list-inside space-y-2 text-gray-700 text-base leading-relaxed">
        <li>
          <strong>Frontend:</strong> React, HTML, CSS, JavaScript
        </li>
        <li>
          <strong>Backend:</strong> Node.js (Express), Java (Spring Boot), C#
          (ASP.NET basics)
        </li>
        <li>
          <strong>Mobile:</strong> Flutter
        </li>
        <li>
          <strong>Programming Languages:</strong> JavaScript, Java, Python
          (basic data), C# ...
        </li>
        <li>
          <strong>Databases:</strong> MySQL, PostgreSQL, MongoDB ...
        </li>
        <li>
          <strong>Tools & Systems:</strong> Git, Docker, VS Code, Postman ...
        </li>
        <li>
          <strong>Others:</strong> Microservice architecture knowledge, web
          application deployment ...
        </li>
      </ul>
    </section>
  );
};

export default Skills;
