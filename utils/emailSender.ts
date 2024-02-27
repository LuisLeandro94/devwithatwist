import { FormData } from '@/app/contact';

export async function sendEmail(data: FormData) {
  const apiEndpoint = '/api/email';

  return await fetch(apiEndpoint, {
    method: 'POST',
    body: JSON.stringify(data),
  });
}
