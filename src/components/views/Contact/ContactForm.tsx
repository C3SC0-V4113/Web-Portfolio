import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import ReCAPTCHA from "react-google-recaptcha";
import { FaCircleNotch } from "react-icons/fa";

import { useContactForm } from "./useContactForm";

export const ContactForm = () => {
  const {
    captchaRef,
    control,
    form,
    isSending,
    language,
    t,
    themeCaptcha,
    VITE_CAPTCHA_PUBLIC_KEY,
    handleSubmit,
    onSubmit,
  } = useContactForm();

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
        <ReCAPTCHA
          className="hidden"
          theme={themeCaptcha}
          size="invisible"
          ref={captchaRef}
          hl={language}
          sitekey={VITE_CAPTCHA_PUBLIC_KEY}
        />
        <Button type="submit" disabled={isSending} variant={"secondary"}>
          {t("submitButton")}
          {isSending! ? <FaCircleNotch className="ml-2 animate-spin" /> : <></>}
        </Button>
      </form>
    </Form>
  );
};
