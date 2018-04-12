import { GraphiQLHandlArgs } from "../types";

export default function htmlTemplate({ rootDir, ...otherProps }: GraphiQLHandlArgs): string {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>GraphiQLHandl</title>
        <link href="/assets/graphiql-styles.css" rel="stylesheet">
      </head>
      <body>
        <section id="root"></section>
      </body>
      <script>
        window.__preLoadedState__ = ${JSON.stringify(otherProps)};
      </script>
      <script src="/assets/graphiql-handl.js"></script>
    </html>
  `;
}
