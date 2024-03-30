import { getEnvVariables } from "@/lib/getEnvVariables";
import emailjs from "@emailjs/browser";

interface sendEmailInputs {
  name: string;
  email: string;
  body: string;
  lng: string;
}

const sendEmail = async (
  emailInputs: sendEmailInputs,
  captchaResponse: string
) => {
  const { VITE_EMAIL } = getEnvVariables();

  const params = {
    ...emailInputs,
    "g-recaptcha-response": captchaResponse,
  };

  await emailjs.send("contact_service", "contact_form", params, {
    publicKey: VITE_EMAIL,
  });
};

export default sendEmail;
