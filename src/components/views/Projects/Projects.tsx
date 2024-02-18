import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Tabs } from "@/components/ui/tabs";
import { TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";

export const Projects = () => {
  return (
    <Container className="flex flex-col">
      <div className="flex flex-col gap-0.5 text-center">
        <span className="text-sm font-light">What Can I Do</span>
        <h1 className="text-2xl font-bold">Projects</h1>
      </div>
      <Tabs defaultValue="all" className="w-full">
        <TabsList className="flex gap-3">
          <TabsTrigger value="all">
            <Button variant={"ghost"}>All</Button>
          </TabsTrigger>
          <TabsTrigger value="web">
            <Button variant={"ghost"}>Web Development</Button>
          </TabsTrigger>
        </TabsList>
        <TabsContent value="all">
          <div>All</div>
        </TabsContent>
        <TabsContent value="web">
          <div>Web Dev</div>
        </TabsContent>
      </Tabs>
    </Container>
  );
};
