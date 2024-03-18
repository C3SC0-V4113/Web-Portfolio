import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { IconButton } from "@/components/ui/icon-button";
import { FaFileDownload } from "react-icons/fa";

interface Props {
  pdfUrl: string;
  title: string;
}

export const ResumeeCard = ({ pdfUrl, title }: Props) => {
  return (
    <Card className="sm:basis-1/2">
      <img className="w-full" src="/practice 2-min.jpg" />
      <CardHeader className="flex flex-row justify-between align-middle">
        <CardTitle className="my-auto">{title}</CardTitle>
        <IconButton
          icon={FaFileDownload}
          className="rounded-sm"
          href={pdfUrl}
        />
      </CardHeader>
    </Card>
  );
};
