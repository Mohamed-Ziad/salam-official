import { getDictionary } from "@/get-dictionary"
import { Locale } from "@/i18n-config"
import { Metadata } from "next"

export default async function Page({
  params: { lang },
}: {
  params: { lang: Locale }
}
) {
  const dictionary = await getDictionary(lang)

  return <>
    <h1 className="page-title">{dictionary["pricing-page"].title} </h1>
  </>
}


export async function generateMetadata({
  params: { lang },
}: {
  params: { lang: Locale }
}
): Promise<Metadata> {

  const dictionary = await getDictionary(lang)

  return {
    title: `${dictionary.website_name} - ${dictionary['pricing-page'].title}`,
  }
}