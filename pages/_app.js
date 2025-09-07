import "../styles/globals.css";
import Layout from "../components/layout/layout";

export default function App({ Component, pageProps: { ...pageProps } }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
