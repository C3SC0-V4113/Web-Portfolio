import API from "@/api/apiServices";
import { useToast } from "@/components/ui/use-toast";
import { useUiStore } from "@/hooks/useUiStore";
import { getEnvVariables } from "@/lib/getEnvVariables";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { SubmitHandler, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { z } from "zod";

export const useContactForm = () => {
  const { toast } = useToast();
  const { theme, language } = useUiStore();
  const { t } = useTranslation(["contact"]);
  const [isSending, setIsSending] = useState(false);
  const { VITE_CAPTCHA_PUBLIC_KEY } = getEnvVariables();

  const [themeCaptcha, setThemeCaptcha] = useState<"light" | "dark">("light");

  useEffect(() => {
    if (theme === "system") {
      setThemeCaptcha("light");
    } else {
      setThemeCaptcha(theme);
    }
  }, [theme, themeCaptcha]);

  const captchaRef = useRef<ReCAPTCHA>(null);

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
  const { handleSubmit, control, reset } = form;
  const onSubmit: SubmitHandler<z.infer<typeof formSchema>> = async (
    values
  ) => {
    setIsSending(true);
    const token = await captchaRef.current?.executeAsync();

    if (!token) {
      setIsSending(false);
      toast({
        variant: "destructive",
        title: t("toast.captcha.title"),
        description: t("toast.captcha.desc"),
      });
      return;
    }

    try {
      await API.services.sendEmail(
        { ...values, lng: language },
        token ? token : ""
      );
      captchaRef.current?.reset();
      toast({
        title: t("toast.success.title"),
        description: t("toast.success.desc"),
      });
      reset();
      setIsSending(false);
    } catch (error) {
      toast({
        variant: "destructive",
        title: t("toast.fail.title"),
        description: t("toast.fail.desc"),
      });
      setIsSending(false);
    }
  };

  return {
    control,
    form,
    isSending,
    language,
    t,
    captchaRef,
    themeCaptcha,
    VITE_CAPTCHA_PUBLIC_KEY,
    handleSubmit,
    onSubmit,
  };
};
