import { z } from "zod";
import { ScheduleFormSchema } from '@/routes/resource/contact-scheme';
import { sendScheduleEmail } from '@/utils/email.server';

export async function action({ request }: { request: Request }) {
    if (request.method !== 'POST') {
        return new Response(
            JSON.stringify({ message: 'Method Not Allowed' }),
            {
                status: 405,
                headers: { 'Content-Type': 'application/json' },
            }
        );
    }

    try {
        const formData = await request.formData();
        const raw = Object.fromEntries(formData.entries());

        const adapted = {
            ...raw,
            year: raw.year ? Number(raw.year) : undefined,
            termsAccepted: raw.termsAccepted === "true",
            date: raw.date ? new Date(raw.date as string) : undefined,
            fullTime: `${String(raw.hour).padStart(2, "0")}:${String(raw.minutes).padStart(2, "0")}`,
        };


        const validatedData = ScheduleFormSchema.parse(adapted);

        await sendScheduleEmail(validatedData);

        return new Response(
            JSON.stringify({
                success: true,
                message: 'Cita agendada con éxito. Recibirás una confirmación por email y WhatsApp.',
            }),
            {
                status: 200,
                headers: { 'Content-Type': 'application/json' },
            }
        );

    } catch (error: unknown) {
        if (error instanceof z.ZodError) {
            const fieldErrors: Record<string, string> = {};
            for (const err of error.errors) {
                const fieldName = err.path[0];
                if (typeof fieldName === "string" || typeof fieldName === "number") {
                    fieldErrors[fieldName] = err.message;
                }
            }
            return new Response(
                JSON.stringify({
                    success: false,
                    message: 'Errores de validación en el formulario de la cita.',
                    errors: fieldErrors,
                }),
                {
                    status: 400,
                    headers: { 'Content-Type': 'application/json' },
                }
            );
        }

        const errorMessage = error instanceof Error
            ? `Error: ${error.message}`
            : 'Ocurrió un error interno del servidor al agendar la cita.';

        return new Response(
            JSON.stringify({ success: false, message: errorMessage }),
            {
                status: 500,
                headers: { 'Content-Type': 'application/json' },
            }
        );
    }
}
