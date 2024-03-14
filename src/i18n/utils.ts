import type { CollectionEntry } from "astro:content";
import { ui, defaultLang } from "./ui";

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split("/");
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

export function getPosts(
  posts: CollectionEntry<"posts">[],
  lang: keyof typeof ui
) {
  return posts.filter((post) => post.id.startsWith(lang));
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  };
}
