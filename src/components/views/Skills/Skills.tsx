import { Container } from "@/components/ui/container";
import { Progress } from "@/components/ui/progress";

export const Skills = () => {
  const skills = [
    {
      id: "1",
      department: "Web Development",
      skillName: "React",
      proficiency: 90 /**From 1 to 100 */,
    },
    {
      id: "2",
      department: "Web Development",
      skillName: "NextJS",
      proficiency: 70 /**From 1 to 100 */,
    },
    {
      id: "4",
      department: "Web Design",
      skillName: "Tailwind",
      proficiency: 90 /**From 1 to 100 */,
    },
    {
      id: "5",
      department: "Backend Development",
      skillName: "NodeJS",
      proficiency: 40 /**From 1 to 100 */,
    },
    {
      id: "6",
      department: "Service Worker Tool",
      skillName: "Workbox",
      proficiency: 60 /**From 1 to 100 */,
    },
    {
      id: "7",
      department: "Mobile Development",
      skillName: "React Native",
      proficiency: 70 /**From 1 to 100 */,
    },
  ];
  return (
    <Container className="flex flex-col bg-primary text-primary-foreground">
      <div className="flex flex-col gap-0.5 text-center">
        <span className="text-sm font-light">Why Choose Me</span>
        <h1 className="text-2xl font-bold text-background">Skills</h1>
      </div>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-x-12 lg:gap-16">
        {skills.map((skill) => (
          <div key={skill.id} className="flex flex-col col-span-1 gap-3">
            <div className="flex flex-col gap-1">
              <p className="text-lg font-semibold">{skill.department}</p>
              <div className="flex justify-between">
                <p className="font-medium">{skill.skillName}</p>
                <p className="font-semibold text-accent">
                  {skill.proficiency}%
                </p>
              </div>
            </div>
            <Progress className="w-full" value={skill.proficiency} />
          </div>
        ))}
      </div>
    </Container>
  );
};
