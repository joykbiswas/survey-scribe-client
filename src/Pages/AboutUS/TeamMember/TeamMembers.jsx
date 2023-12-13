import { useEffect, useState } from "react";
import MembersCard from "./MembersCard";

const TeamMembers = () => {
  const [Members, setMembers] = useState([]);
  useEffect(() => {
    fetch("/author.json")
      .then((res) => res.json())
      .then((data) => {
        setMembers(data);
        console.log(data);
      });
  }, []);
  return (
    <div>
      <div data-aos="fade-up" data-aos-offset="300">
        <div>
          <h3
            className="text-4xl font-bold mt-10 mb-6"
            data-aos="fade-right"
            data-aos-offset="200"
          >
            Meet Our professionals
          </h3>
          <hr className="w-14 border-2 mb-6 border-zinc-950" />
        </div>

        <div className="grid grid-cols-2  gap-4 m-4">
          {Members.map((member) => (
            <MembersCard key={member.id} member={member}></MembersCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamMembers;
