import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { IconButton } from "@/components/ui/icon-button";
import { Tabs } from "@/components/ui/tabs";
import { FaEllipsisH, FaGithub, FaLink } from "react-icons/fa";

import { TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";

export const Projects = () => {
  return (
    <Container className="flex flex-col">
      <div className="flex flex-col gap-0.5 text-center">
        <span className="text-sm font-light">What Can I Do</span>
        <h1 className="text-2xl font-bold">Projects</h1>
      </div>
      <Tabs defaultValue="all" className="w-full">
        <TabsList className="flex gap-3 mb-3">
          <TabsTrigger asChild value="all">
            <Button variant={"ghost"}>All</Button>
          </TabsTrigger>
          <TabsTrigger asChild value="web">
            <Button variant={"ghost"}>Web Development</Button>
          </TabsTrigger>
        </TabsList>
        <TabsContent value="all">
          <div className="grid grid-cols-1 sm:grid-cols-2">
            <Card className="col-span-1">
              <CardHeader>
                <CardTitle>Journal App</CardTitle>
              </CardHeader>
              <CardContent>
                <div>
                  <img
                    src="/journal_app.png"
                    alt="journal-app"
                    className="w-full rounded-lg hover:opacity-50"
                  />
                </div>
              </CardContent>
              <CardFooter className="w-full">
                <div className="flex justify-between w-full">
                  <div className="flex gap-3">
                    <IconButton
                      icon={FaGithub}
                      href="https://github.com/C3SC0-V4113/Journal-App"
                    />
                    <IconButton
                      icon={FaLink}
                      href="https://journal-app-two-eta.vercel.app/"
                    />
                  </div>
                  <div className="flex">
                    <IconButton
                      icon={FaEllipsisH}
                      onClick={() => console.log("click click")}
                    />
                  </div>
                </div>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="web">
          <div>Web Dev</div>
        </TabsContent>
      </Tabs>
    </Container>
  );
};
