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
import API from "@/api/apiServices";
import { useState } from "react";
import { FaCircleNotch } from "react-icons/fa";
import { useToast } from "@/components/ui/use-toast";

export const ContactForm = () => {
  const { toast } = useToast();
  const { t } = useTranslation(["contact"]);
  const [isSending, setIsSending] = useState(false);

  const formSchema = z.object({
    name: z
      .string({
        required_error: t("errors.name.required"),
      })
      .min(5, {
        message: t("errors.name.min"),
      })
      .max(50, { message: t("errors.name.max") }),
    email: z
      .string({
        required_error: t("errors.email.required"),
      })
      .email({
        message: t("errors.email.email"),
      })
      .min(5, { message: t("errors.email.min") }),
    body: z
      .string({
        required_error: t("errors.body.required"),
      })
      .min(2, { message: t("errors.body.min") })
      .max(150, {
        message: t("errors.body.max"),
      }),
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
  const onSubmit: SubmitHandler<z.infer<typeof formSchema>> = (values) => {
    setIsSending(true);
    try {
      setIsSending(false);
      API.services.sendEmail({ ...values });
      toast({
        variant: "destructive",
        title: t("toast.fail.title"),
        description: t("toast.fail.desc"),
      });
    } catch (error) {
      setIsSending(false);
      console.error(error);
      toast({
        variant: "destructive",
        title: t("toast.fail.title"),
        description: t("toast.fail.desc"),
      });
    }
  };

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
        <Button type="submit" disabled={isSending} variant={"secondary"}>
          {t("submitButton")}
          {isSending! ? <FaCircleNotch className="ml-2 animate-spin" /> : <></>}
        </Button>
      </form>
    </Form>
  );
};
