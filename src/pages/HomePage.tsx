import texts from "@/texts.ts";
import { Language } from "@/types/language";

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
  </>;
}

export default HomePage;