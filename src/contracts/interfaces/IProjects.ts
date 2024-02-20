export interface IProjects {
  id: number;
  name: string;
  description: string;
  features: string[];
  tools: string[];
  tags: string[];
  repository: IRepository;
  link: ILink;
  images: IProjectImages;
}

interface IRepository {
  type: "github" | "gitlab" | "bitbucket" | "none";
  url: string;
}

interface ILink {
  type: "web" | "android" | "ios";
  url: string;
}

interface IProjectImages {
  thumbnail: string;
  gallery: string[];
}
