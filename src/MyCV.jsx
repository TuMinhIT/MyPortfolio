import { useState } from "react";
import MySkill from "./component/MySkill";
import PersonInfo from "./component/PersonInfo";

const MyCV = () => {
  const [dart, setDart] = useState(true);
  return (
    <>
      <div className="">
        <PersonInfo dart={dart} setDart={setDart} />
        <MySkill dart={dart} />
      </div>
    </>
  );
};

export default MyCV;
