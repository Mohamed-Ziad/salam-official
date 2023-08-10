'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { i18n } from '../i18n-config'

export default function LocaleSwitcher() {
  const pathName = usePathname();
  const currentLang = pathName.split("/")[1] === "ar" ? 'en' : 'ar';

  return <Link href={currentLang}>Change Language {currentLang}</Link>

  // const redirectedPathName = (locale: string) => {
  //   if (!pathName) return '/'
  //   const segments = pathName.split('/')
  //   segments[1] = locale
  //   return segments.join('/')
  // }

  // return <div>
  //   <p>Locale switcher:</p>
  //   <ul>
  //     {/* {i18n.locales.map((locale) => {
  //       return (
  //         <li key={locale}>
  //           <Link href={redirectedPathName(locale)}>{locale}</Link>
  //         </li>
  //       )
  //     })} */}
  //     <h1>pathname: {JSON.stringify(pathName)}</h1>
  //     <Link href={currentLang}>Change Language {currentLang}</Link>

  //   </ul>
  // </div>
}