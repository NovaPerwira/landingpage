import { getRequestConfig } from "next-intl/server"

export default getRequestConfig(async ({ locale }) => {
  // Ensure locale is a valid string, default to 'en' if undefined
  const validLocale = locale && typeof locale === "string" ? locale : "en"

  // Load messages for the determined locale
  const messages = (await import(`./messages/${validLocale}.json`)).default

  // Return both locale and messages as required by next-intl
  return {
    locale: validLocale,
    messages,
    // You can also specify timeZone if needed
    timeZone: "Asia/Jakarta",
    // Add any other configuration options as needed
    // defaultTranslationValues: {},
    // formats: {},
  }
})
