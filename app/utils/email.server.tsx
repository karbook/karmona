import { Resend } from "resend";
import { z } from "zod";
import { render } from "@react-email/render";

import { getServerEnv } from "@/utils/env.server";
import { ScheduleFormSchema } from "@/routes/resource/contact-scheme";

import { ScheduleAppointmentEmail } from "./schedule-appointment-email";

export type ScheduleFormValues = z.infer<typeof ScheduleFormSchema>;

export async function sendScheduleEmail(data: ScheduleFormValues) {
  const resendApiKey = getServerEnv().RESEND_API_KEY;

  if (!resendApiKey) {
    throw new Error("RESEND_API_KEY not configured.");
  }

  const resend = new Resend(resendApiKey);

  const emailHtmlContent = await render(
    <ScheduleAppointmentEmail
      fullName={data.fullName}
      email={data.email}
      phone={data.phone}
      date={data.date}
      hour={data.hour}
      minutes={data.minutes}
      carBrand={data.carBrand}
      model={data.model}
      year={data.year}
      description={data.description}
    />
  );

  try {
    const response = await resend.emails.send({
      from: "Citas Karmona <noreply@karbook.com>",
      to: [data.email, "oficina@karmona.mx"],
      subject: `🗓️ Confirmación de Cita: ${data.carBrand} ${data.model} — ${data.date.toLocaleDateString()}`,
      html: emailHtmlContent,
    });

    if (response && "error" in response && response.error) {
      throw new Error(`Resend API Error: ${response.error.message || "Unknown Resend error"}`);
    }

    console.log("Appointment scheduled. Email sent successfully:", response);
  } catch (error) {
    console.error("INTERNAL ERROR IN sendScheduleEmail (Resend):", error);
    throw error;
  }
}
