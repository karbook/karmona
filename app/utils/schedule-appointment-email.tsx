import { useTranslation } from 'react-i18next';
import { Tailwind } from '@react-email/tailwind';
import { Html, Head, Body, Container, Text, Hr, Heading } from '@react-email/components';

export type ScheduleAppointmentEmailProps = {
  fullName: string;
  email: string;
  phone: string;
  date: Date;
  hour: string;
  minutes: string;
  carBrand: string;
  model: string;
  year: number | undefined;
  description: string;
};

export function ScheduleAppointmentEmail({
  fullName,
  email,
  phone,
  date,
  hour,
  minutes,
  carBrand,
  model,
  year,
  description,
}: ScheduleAppointmentEmailProps) {
  const { t } = useTranslation();

  const formattedDate = date
    ? new Date(date).toLocaleDateString('es-ES', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
    : 'Not specified';

  const getCleanHour = (rawHour: string) => rawHour.split(":")[0] ?? rawHour;
  const formattedTime = `${getCleanHour(hour).padStart(2, '0')}:${minutes.padStart(2, '0')}`;

  return (
    <Html lang="es" dir="ltr">
      <Head />
      <Tailwind>
        <Body className="bg-[#030917] font-sans text-gray-300">
          <div className="bg-[#030917] py-6">
            <a href="https://karmona.mx/" rel="noreferrer" target="_blank" className="no-underline">
              <Text className="text-5xl text-gray-300 mt-2 text-center font-bold">
                {t('Karmona')}
              </Text>
            </a>
          </div>

          <div className="bg-[#020814] py-4 px-4 text-center shadow-sm">
            <Heading className="text-3xl font-bold text-white">
              {t('Hello')}
            </Heading>
            <Text className="text-xl text-gray-300 mt-2">
              {t('Your appointment request has been received')}
            </Text>
          </div>

          <Container className="bg-[#020814] p-8 rounded-lg shadow-lg border border-gray-700 mx-auto max-w-2xl my-8">
            <Heading
              as="h3"
              className="text-xl mb-4 font-semibold text-gray-100 border-b pb-2 border-gray-700"
            >
              {t('Appointment Details')}:
            </Heading>

            <Text className="mb-3 text-base text-gray-300">
              <strong>{t('Full Name')}:</strong> {fullName}
            </Text>
            <Text className="mb-3 text-base text-gray-300">
              <strong>{t('Email')}:</strong> {email}
            </Text>
            <Text className="mb-3 text-base text-gray-300">
              <strong>{t('Phone')}:</strong> {phone}
            </Text>

            <Hr className="border-gray-700 my-4" />

            <Text className="mb-3 text-base text-gray-300">
              <strong>{t('Suggested Date')}:</strong> {formattedDate}
            </Text>
            <Text className="mb-3 text-base text-gray-300">
              <strong>{t("Suggested Time")}:</strong> {formattedTime} hrs
            </Text>
            <Hr className="border-gray-700 my-4" />
            <Text className="mb-3 text-base text-gray-300">
              <strong>{t('Car Brand')}:</strong> {carBrand}
            </Text>
            <Text className="mb-3 text-base text-gray-300">
              <strong>{t('Car Model')}:</strong> {model}
            </Text>
            <Text className="mb-3 text-base text-gray-300">
              <strong>{t('Car Year')}:</strong> {year || 'N/A'}
            </Text>
            <Text className="mb-3 text-base text-gray-300">
              <strong>{t('Problem Description')}:</strong> {description || 'Not provided.'}
            </Text>

            <Hr className="border-gray-700 my-4" />

            <Text className="text-base text-gray-300 mt-4">
              <strong>{t('Important')}:</strong>{' '}
              {t(
                'This date and time are tentative and subject to confirmation by our team. We will contact you shortly to coordinate and confirm your appointment.'
              )}
            </Text>
            <Text className="text-base text-gray-300 mt-2">
              {t('Thank you for choosing Karmona. We look forward to seeing you soon!')}
            </Text>
          </Container>

          <div className="my-8 text-center text-xs text-gray-400">
            <Text className="mt-1">{t('©2025 Karmona. All rights reserved.')}</Text>
          </div>
        </Body>
      </Tailwind>
    </Html>
  );
}
