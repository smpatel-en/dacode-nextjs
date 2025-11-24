import ProfileCard from "@/components/core/card/ProfileCard";
import { teamMembers } from "@/lib/data";

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
