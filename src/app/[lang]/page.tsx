import LocaleSwitcher from '@/layout/LocalSwitcher'
import { getDictionary } from '../../get-dictionary'
import { Locale } from '../../i18n-config'

export default async function Home({
  params: { lang },
}: {
  params: { lang: Locale }
}) {

  const dictionary: any = await getDictionary(lang)

  return (
    <main>
      <div>
        {/* {JSON.stringify(dictionary["home-page"].welcome)}
        <LocaleSwitcher />
        <p>Current locale: {lang}</p>
        <p>
          {dictionary["home-page"].welcome}
        </p>
        <Counter dictionary={dictionary.counter} /> */}
      </div>
    </main>
  )
}
