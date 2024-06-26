import BuiltBy from "@/components/BuiltBy";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <script
          src="https://beamanalytics.b-cdn.net/beam.min.js"
          data-token="52a61c07-85f9-440d-b47b-e9d0764e3c43"
          async
        />
        <meta name="google-adsense-account" content="ca-pub-5654598090665312" />
      </Head>
      <body className="bg-gray-50">
        <Main />
        <NextScript />
        <BuiltBy />
      </body>
    </Html>
  );
}
