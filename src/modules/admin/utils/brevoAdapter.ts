import axios from "axios";
import { EmailAdapter, SendEmailOptions } from "payload";

const brevoAdapter = (): EmailAdapter => {
  return () => ({
    name: "brevo",
    defaultFromName: process.env.BREVO_SENDER_NAME as string,
    defaultFromAddress: process.env.BREVO_SENDER_EMAIL as string,
    sendEmail: async (message: SendEmailOptions): Promise<void> => {
      if (process.env.BREVO_EMAILS_ACTIVE !== "true") {
        console.log("Brevo emails are not active");
        console.log(message);
        return;
      }
      try {
        const res = await axios({
          method: "POST",
          url: "https://api.brevo.com/v3/smtp/email",
          headers: {
            "api-key": process.env.BREVO_API_KEY as string,
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          data: {
            sender: {
              name: process.env.BREVO_SENDER_NAME as string,
              email: process.env.BREVO_SENDER_EMAIL as string
            },
            to: [{ email: message.to }],
            subject: message.subject,
            htmlContent: message.html
          }
        });

        return res.data;
      } catch (e) {
        console.error("Error sending email Brevo", e);
      }
    }
  });
};

export default brevoAdapter;
