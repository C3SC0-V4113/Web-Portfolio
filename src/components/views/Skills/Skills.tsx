import { Container } from "@/components/ui/container";
import { Progress } from "@/components/ui/progress";
import { useTranslation } from "react-i18next";

export const Skills = () => {
  const { t } = useTranslation(["skills"]);

  const skills = [
    {
      id: "1",
      department: t("categories.webdev"),
      skillName: "React",
      proficiency: 90 /**From 1 to 100 */,
    },
    {
      id: "2",
      department: t("categories.webdev"),
      skillName: "NextJS",
      proficiency: 70 /**From 1 to 100 */,
    },
    {
      id: "4",
      department: t("categories.webdes"),
      skillName: "Tailwind",
      proficiency: 90 /**From 1 to 100 */,
    },
    {
      id: "5",
      department: t("categories.backdev"),
      skillName: "NodeJS",
      proficiency: 40 /**From 1 to 100 */,
    },
    {
      id: "6",
      department: t("categories.serworker"),
      skillName: "Workbox",
      proficiency: 60 /**From 1 to 100 */,
    },
    {
      id: "7",
      department: t("categories.mobile"),
      skillName: "React Native",
      proficiency: 70 /**From 1 to 100 */,
    },
  ];
  return (
    <Container
      id="skills"
      className="flex flex-col bg-primary text-primary-foreground"
    >
      <div className="flex flex-col gap-0.5 text-center">
        <span className="text-sm font-light">{t("subtitle")}</span>
        <h1 className="text-2xl font-bold text-background">{t("title")}</h1>
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
