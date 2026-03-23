'use client'

import { createContext, useContext, useState, useEffect, type ReactNode } from 'react'
import { NextIntlClientProvider } from 'next-intl'
import en from './en.json'
import zh from './zh.json'

type Locale = 'en' | 'zh'

const messages = { en, zh } as const

interface LocaleContextValue {
  locale: Locale
  setLocale: (l: Locale) => void
}

const LocaleContext = createContext<LocaleContextValue>({
  locale: 'en',
  setLocale: () => {},
})

export function useLocaleContext() {
  return useContext(LocaleContext)
}

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>('en')

  useEffect(() => {
    const saved = localStorage.getItem('xh-locale') as Locale
    if (saved === 'en' || saved === 'zh') setLocaleState(saved)
  }, [])

  function setLocale(l: Locale) {
    setLocaleState(l)
    localStorage.setItem('xh-locale', l)
  }

  return (
    <LocaleContext.Provider value={{ locale, setLocale }}>
      <NextIntlClientProvider locale={locale} messages={messages[locale]}>
        {children}
      </NextIntlClientProvider>
    </LocaleContext.Provider>
  )
}
