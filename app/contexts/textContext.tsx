import { createContext } from "react";
import en from "../locales/en.json";
import es from "../locales/es.json";

interface ITextContent {
  en: ITextContext;
  es: ITextContext;
}

export const TextContent: ITextContent = { en, es };
Object.freeze(TextContent);

export type Language = keyof typeof TextContent;

function isSupportedLanguage(language: string) {
  return Object.keys(TextContent).some((x) => x == language);
}

export interface ITextContext {}

const defaultLang = navigator.language?.substring(0, 2);

const langKey = (
  isSupportedLanguage(defaultLang ?? "en") ? defaultLang : "en"
) as keyof typeof TextContent;

const TextContext = createContext<ITextContext>(TextContent[langKey]);

export const TextProvider = (children: any) => {
  return (
    <TextContext.Provider value={TextContext}>
      {children as React.ReactNode}
    </TextContext.Provider>
  );
};
