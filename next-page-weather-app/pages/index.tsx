import AuthForm from "@/components/AuthForm";
import Layout from "@/components/Layout";
import WelcomeContent from "@/components/WelcomeContent";
import { Inter } from "next/font/google";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Layout>
        <WelcomeContent></WelcomeContent>
        <AuthForm />
      </Layout>
    </>
  );
}
