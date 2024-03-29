import { getEnvVariables } from "@/lib/getEnvVariables";
import emailjs from "@emailjs/browser";

interface sendEmailInputs {
  name: string;
  email: string;
  body: string;
}

const sendEmail = async (
  emailInputs: sendEmailInputs,
  captchaResponse: string
) => {
  const { VITE_EMAIL } = getEnvVariables();

  const params = {
    user_email: emailInputs.email,
    user_name: emailInputs.name,
    message: emailInputs.body,
    "g-recaptcha-response": captchaResponse,
  };

  await emailjs.send("contact_service", "contact_form", params, {
    publicKey: VITE_EMAIL,
  });
};

export default sendEmail;
