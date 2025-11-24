import ProfileCard from "@/components/core/card/ProfileCard";
import User1 from "@public/assets/images/user-1.png";

const teamMembers = [
  {
    name: "Kevin Jeppesen",
    role: "Web Project Manager",
    avatar: User1,
    linkedInUrl: "https://www.linkedin.com/",
    email: "kevin@dacode.se",
  },
  {
    name: "Kevin Jeppesen",
    role: "Web Project Manager",
    avatar: User1,
    linkedInUrl: "https://www.linkedin.com/",
    email: "kevin@dacode.se",
  },
  {
    name: "Kevin Jeppesen",
    role: "Web Project Manager",
    avatar: User1,
    linkedInUrl: "https://www.linkedin.com/",
    email: "kevin@dacode.se",
  },
  {
    name: "Kevin Jeppesen",
    role: "Web Project Manager",
    avatar: User1,
    linkedInUrl: "https://www.linkedin.com/",
    email: "kevin@dacode.se",
  },
  {
    name: "Kevin Jeppesen",
    role: "Web Project Manager",
    avatar: User1,
    linkedInUrl: "https://www.linkedin.com/",
    email: "kevin@dacode.se",
  },
  {
    name: "Kevin Jeppesen",
    role: "Web Project Manager",
    avatar: User1,
    linkedInUrl: "https://www.linkedin.com/",
    email: "kevin@dacode.se",
  },
  {
    name: "Kevin Jeppesen",
    role: "Web Project Manager",
    avatar: User1,
    linkedInUrl: "https://www.linkedin.com/",
    email: "kevin@dacode.se",
  },
  {
    name: "Kevin Jeppesen",
    role: "Web Project Manager",
    avatar: User1,
    linkedInUrl: "https://www.linkedin.com/",
    email: "kevin@dacode.se",
  },
  {
    name: "Kevin Jeppesen",
    role: "Web Project Manager",
    avatar: User1,
    linkedInUrl: "https://www.linkedin.com/",
    email: "kevin@dacode.se",
  },
  {
    name: "Kevin Jeppesen",
    role: "Web Project Manager",
    avatar: User1,
    linkedInUrl: "https://www.linkedin.com/",
    email: "kevin@dacode.se",
  },
  {
    name: "Kevin Jeppesen",
    role: "Web Project Manager",
    avatar: User1,
    linkedInUrl: "https://www.linkedin.com/",
    email: "kevin@dacode.se",
  },
  {
    name: "Kevin Jeppesen",
    role: "Web Project Manager",
    avatar: User1,
    linkedInUrl: "https://www.linkedin.com/",
    email: "kevin@dacode.se",
  },
];

export default function TeamSection() {
  return (
    <section>
      <div className="container">
        {/* Wrapper */}
        <div className="xs:grid-cols-2 grid grid-cols-1 gap-6 md:grid-cols-3 lg:gap-x-6 lg:gap-y-16 xl:grid-cols-4">
          {teamMembers.map((member, index) => (
            <ProfileCard
              key={index}
              name={member.name}
              role={member.role}
              avatar={member.avatar}
              linkedInUrl={member.linkedInUrl}
              email={member.email}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
