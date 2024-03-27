import { getEnvVariables } from "@/lib/getEnvVariables";

interface sendEmailInputs {
  name: string;
  email: string;
  body: string;
}

const sendEmail = async (emailInputs: sendEmailInputs) => {
  const { VITE_EMAIL } = getEnvVariables();
  console.log(VITE_EMAIL, emailInputs);
};

export default sendEmail;
