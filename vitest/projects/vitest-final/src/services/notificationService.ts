export async function sendEmail(to: string, message: string) {
  // Imagine this calls SendGrid/Mailgun
  console.log(`Email sent to ${to}: ${message}`);
  return { success: true };
}
