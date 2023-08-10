import { getDictionary } from "@/get-dictionary"
import { Locale } from "@/i18n-config"

export default async function Page({
  params: { lang },
}: {
  params: { lang: Locale }
}
) {
  const dictionary = await getDictionary(lang)

  return <>
    <h1>{dictionary["contact-page"].title} </h1>
  </>
}