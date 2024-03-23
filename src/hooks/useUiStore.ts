import { Language, Theme, UIState } from "@/contracts/types/TUiStore";
import {
  onCheckingLanguage,
  onCheckingTheme,
  onSetLanguage,
  onSetTheme,
} from "@/store";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

export const useUiStore = () => {
  const dispatch = useDispatch();
  const { theme, language } = useSelector((state: { ui: UIState }) => state.ui);
  const { i18n } = useTranslation();

  const setTheme = (theme: Theme) => {
    const root = window.document.documentElement;
    root.classList.add(theme);
    localStorage.setItem("ui-theme", theme);
    dispatch(onSetTheme(theme));
  };

  const checkTheme = () => {
    const root = window.document.documentElement;
    const themeStorage = localStorage.getItem("ui-theme");

    if (themeStorage) {
      root.classList.remove("light", "dark");
      root.classList.add(theme);
      return dispatch(onSetTheme(themeStorage as Theme));
    }

    dispatch(onCheckingTheme());

    root.classList.remove("light", "dark");

    if (theme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light";

      root.classList.add(systemTheme);
      localStorage.setItem("ui-theme", systemTheme);
      dispatch(onSetTheme(systemTheme));
      return;
    }

    root.classList.add(theme);
    localStorage.setItem("ui-theme", theme);
    dispatch(onSetTheme(theme));
  };

  const setLanguage = (language: Language) => {
    i18n.changeLanguage(language);
    localStorage.setItem("i18nextLng", language);
    dispatch(onSetLanguage(language));
  };

  const checkLanguage = () => {
    dispatch(onCheckingLanguage());
    const languageStorage = localStorage.getItem("i18nextLng");
    if (languageStorage) {
      i18n.changeLanguage(languageStorage);
      return dispatch(onSetLanguage(languageStorage as Language));
    }
    i18n.changeLanguage(language);
    localStorage.setItem("i18nextLng", language);
    dispatch(onSetLanguage(language));
  };

  return {
    theme,
    language,
    setTheme,
    checkTheme,
    setLanguage,
    checkLanguage,
  };
};
