import RegiserForm from "@/app/_forms/RegisterForm";
import { getDictionary } from "@/get-dictionary";
import { Locale } from "@/i18n-config";

export default async function Page({
  params: { lang },
}: {
  params: { lang: Locale }
}
) {
  const dictionary = await getDictionary(lang)


  return <>
    <main>
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-6 mx-auto">
            <div className="card">
              <div className="card-body">
                <RegiserForm translates={dictionary.auth} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </>
}