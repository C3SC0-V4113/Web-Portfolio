import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { SubmitHandler } from "react-hook-form";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

export const ContactForm = () => {
  const { t } = useTranslation(["contact"]);

  const formSchema = z.object({
    name: z.string().min(2).max(50),
    email: z.string().email().min(5),
    body: z.string().min(2).max(50),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      body: "",
    },
  });
  const { handleSubmit, control } = form;
  const onSubmit: SubmitHandler<z.infer<typeof formSchema>> = (values) =>
    console.log(values);

  return (
    <Form {...form}>
      <form className="flex flex-col gap-3" onSubmit={handleSubmit(onSubmit)}>
        <FormField
          control={control}
          name={"name"}
          render={({ field }) => (
            <FormItem className="space-y-1">
              <FormLabel>{t("labels.name")}</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  className="bg-secondary text-secondary-foreground"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name={"email"}
          render={({ field }) => (
            <FormItem className="space-y-1">
              <FormLabel>{t("labels.email")}</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  type="email"
                  className="bg-secondary text-secondary-foreground"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name={"body"}
          render={({ field }) => (
            <FormItem className="space-y-1">
              <FormLabel>{t("labels.body")}</FormLabel>
              <FormControl>
                <Textarea
                  {...field}
                  className="bg-secondary text-secondary-foreground"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" variant={"secondary"}>
          Send Email
        </Button>
      </form>
    </Form>
  );
};
