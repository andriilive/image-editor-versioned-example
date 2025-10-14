'use client';

import {I18N_FALLBACK_LANG, type I18nSupportedLang} from "@/app/(i18n)/index";
import React, { createContext, useContext, useState, ReactNode } from 'react';

// Define the shape of the i18n context
interface I18nContextType {
  language: I18nSupportedLang;
  setLanguage: (lang: I18nSupportedLang) => void;
}

// Create the context with a default value
const I18nContext = createContext<I18nContextType | undefined>(undefined);

// Provider component
export function I18nContextProvider({ children, defaultLanguage = I18N_FALLBACK_LANG }: { children: ReactNode; defaultLanguage?: I18nSupportedLang }) {
  const [language, setLanguage] = useState(defaultLanguage as I18nSupportedLang);

  return (
    <I18nContext.Provider value={{ language, setLanguage }}>
      {children}
    </I18nContext.Provider>
  );
}

// Custom hook for consuming the context
export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error('useI18n must be used within an I18nProvider');
  }
  return context;
}
