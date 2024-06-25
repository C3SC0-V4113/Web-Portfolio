import { IconButton } from "@/components/ui/icon-button";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IconType } from "react-icons/lib";

const socialMedias: {
  id: number;
  Icon: IconType;
  name: string;
  linkAddress: string;
}[] = [
  {
    id: 1,
    Icon: FaGithub,
    name: "GitHub",
    linkAddress: "https://github.com/C3SC0-V4113",
  },
  {
    id: 2,
    Icon: FaLinkedin,
    name: "LinkedIn",
    linkAddress:
      "https://www.linkedin.com/in/francisco-jos%C3%A9-valle-cornejo/",
  },
  {
    id: 3,
    Icon: FaXTwitter,
    name: "X",
    linkAddress: "https://twitter.com/c3_sc0",
  },
];

export const SocialMedia = () => {
  return (
    <div className="flex flex-row gap-4 align-middle justify-evenly md:flex-col md:h-full">
      {socialMedias.map(({ Icon, id, linkAddress, name }) => (
        <a
          key={id}
          href={linkAddress}
          target="_blank"
          className="flex flex-col gap-2 text-center md:flex-row md:gap-5 md:self-center md:w-40 hover:underline"
        >
          <IconButton
            icon={Icon}
            className="mx-auto md:mx-0 hover:bg-secondary"
            iconClass="md:w-12 md:h-12"
          />
          <p className="text-lg md:text-xl md:my-auto">{name}</p>
        </a>
      ))}
    </div>
  );
};
