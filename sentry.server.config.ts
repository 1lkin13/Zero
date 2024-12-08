import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://e60e3a4df5f181b49f11a14d5a1efabf@o4507616597835776.ingest.us.sentry.io/4507616599539712",

  tracesSampleRate: 1,

  debug: false,
});
