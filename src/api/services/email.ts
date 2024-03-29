import { getEnvVariables } from "@/lib/getEnvVariables";
import emailjs from "@emailjs/browser";

interface sendEmailInputs {
  name: string;
  email: string;
  body: string;
}

const sendEmail = async (emailInputs: sendEmailInputs) => {
  const { VITE_EMAIL } = getEnvVariables();

  await emailjs.send(
    "contact_service",
    "contact_form",
    {
      user_email: emailInputs.email,
      user_name: emailInputs.name,
      message: emailInputs.body,
    },
    {
      publicKey: VITE_EMAIL,
    }
  );
};

export default sendEmail;
