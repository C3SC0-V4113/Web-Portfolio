import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { IconType } from "react-icons/lib";

interface Props {
  Icon: IconType;
  title: string;
  desc: string;
}

export const ServicesCard = ({ Icon, desc, title }: Props) => {
  return (
    <Card className="flex flex-col grow">
      <CardHeader className="flex justify-center h-48 text-center align-middle">
        <Icon className="self-center w-16 h-16 text-primary" />
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex text-left">
          <p className="text-balance">{desc}</p>
        </div>
      </CardContent>
    </Card>
  );
};
