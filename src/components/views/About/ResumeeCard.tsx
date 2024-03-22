import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { IconButton } from "@/components/ui/icon-button";
import { FaFileDownload } from "react-icons/fa";
import { FaFilePdf } from "react-icons/fa6";

interface Props {
  pdfUrl: string;
  title: string;
}

export const ResumeeCard = ({ pdfUrl, title }: Props) => {
  return (
    <Card className="flex flex-col justify-center gap-1 p-2 align-middle sm:basis-1/2">
      <FaFilePdf className="w-20 h-20 p-4 m-auto" />
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
