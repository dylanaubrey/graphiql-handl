import { PreLoadedState } from "../types";

export default function htmlTemplate(preLoadedState: PreLoadedState): string {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>GraphiQLHandl</title>
        <style>
          body {
            font-family: 'Consolas', 'Inconsolata', 'Droid Sans Mono', 'Monaco', monospace;
            height: 100%;
            margin: 0;
            width: 100%;
            overflow: hidden;
          }

          #root {
            height: 100vh;
          }

          .graphiql-handl {
            height: 100%;
          }
        </style>
        <link href="/assets/graphiql-styles.css" rel="stylesheet">
      </head>
      <body>
        <section id="root"></section>
      </body>
      <script>
        window.__preLoadedState__ = ${JSON.stringify(preLoadedState)};
      </script>
      <script src="/assets/graphiql-handl.js"></script>
    </html>
  `;
}
