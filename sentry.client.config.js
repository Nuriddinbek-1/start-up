import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://78114da5759e3a97bf8d622b4f9c3c3f@o4510185985867776.ingest.de.sentry.io/4510185989144656",
  integrations: [
    Sentry.feedbackIntegration({
      // Additional SDK configuration goes in here, for example:
      colorScheme: "system",
    }),
  ],
});
