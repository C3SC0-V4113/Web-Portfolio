import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

export const About = () => {
  return (
    <div className="flex flex-col gap-3 px-4 py-5 md:py-8 md:px-6 bg-primary text-primary-foreground">
      <div className="flex flex-col gap-0.5 text-center ">
        <span className="text-sm">Who Am I?</span>
        <h1 className="text-2xl font-bold">About Me</h1>
      </div>
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
        <div className="flex justify-center align-middle max-h-64">
          <Avatar className="w-40 h-40 bg-secondary">
            <AvatarImage
              src="/public/practice_4__1_-removebg.png"
              alt="about-me_img"
            />
            <AvatarFallback>FV</AvatarFallback>
          </Avatar>
        </div>
        <div className="flex flex-col gap-3">
          <h2 className="text-lg font-bold text-justify">
            Soy un desarrollador web
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
            dignissimos fugiat hic voluptate et harum quam fuga, suscipit
            aperiam optio deleniti atque consequuntur ab? Architecto a non
            repellendus tempora sit?
          </p>
        </div>
      </div>
    </div>
  );
};
