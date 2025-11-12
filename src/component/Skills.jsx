import { GiSkills } from "react-icons/gi";

const Skills = () => {
  return (
    <section id="skills" className="h-auto flex-shrink-0 self-stretch  px-4">
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
          <strong>Frontend:</strong> React.js, HTML5, CSS3, JavaScript (ES6+),
          Tailwind CSS, Axios, React Query ...
        </li>
        <li>
          <strong>Backend:</strong> Node.js (Express.js), FastAPI (Python), Java
          (Spring Boot), C# (ASP.NET Core basic)
        </li>
        <li>
          <strong>Mobile:</strong> Flutter, React Native
        </li>
        <li>
          <strong>Programming Languages:</strong> JavaScript, Java, Python , C#
          ..
        </li>
        <li>
          <strong>Databases:</strong> MySQL, PostgreSQL, MongoDB ...
        </li>
        <li>
          <strong>DevOps & Tools:</strong> Git/GitHub, Docker, Postman, Swagger
          (OpenAPI), VS Code, IntelliJ IDEA
        </li>
        <li>
          <strong>Architecture & System Design:</strong>
          Microservices, RESTful API, authentication & authorization (JWT,
          OAuth2), message queue (RabbitMQ)..
        </li>

        <li>
          <strong>Deployment & Cloud:</strong> Vercel, Netlify, Docker Compose,
          CI/CD pipelines (GitHub Actions)
        </li>
        <li>
          <strong>Others:</strong> WebSocket (realtime chat), API Gateway, Load
          Balancing
        </li>
      </ul>
    </section>
  );
};

export default Skills;
