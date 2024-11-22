import texts from "@/texts.ts";
import { Language } from "@/types/language";
import Chat from "@/components/Chat";

interface HomePageProps
{
  language: Language;
}

function HomePage({ language }: HomePageProps)
{
  return <>
    <h1>{texts.welcome[language]}</h1>
    <p>{texts.homePageCopy[language]}</p>
    <br />

    <Chat />
  </>;
}

export default HomePage;