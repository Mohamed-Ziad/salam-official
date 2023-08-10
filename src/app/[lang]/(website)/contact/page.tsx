import { getDictionary } from "@/get-dictionary"
import { Locale } from "@/i18n-config"
import { Metadata, ResolvingMetadata } from "next"

export default async function Page({
  params: { lang },
}: {
  params: { lang: Locale }
}
) {
  const dictionary = await getDictionary(lang)
  const contactForm = dictionary["contact-page"]["contact-form"];
  return <>
    <main>
      <div className="container">
        <h1 className="page-title">{dictionary["contact-page"].title} </h1>

        <div className="row">
          <div className="col-md-6">
            <div className="mb-3">
              <label htmlFor="first_name" className="form-label">{contactForm.first_name}</label>
              <input type="text" className="form-control rounded-pill" id="first_name" />
            </div>
            <div className="mb-3">
              <label htmlFor="last_name" className="form-label">{contactForm.last_name}</label>
              <input type="text" className="form-control rounded-pill" id="last_name" />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label"> {contactForm.email} </label>
              <input type="email" className="form-control rounded-pill" id="email" />
            </div>

            <div className="mb-3">
              <label htmlFor="phone" className="form-label">{contactForm.phone_number}</label>
              <input type="tel" className="form-control rounded-pill" id="phone" />
            </div>

            <div className="mb-3">
              <label htmlFor="exampleFormControlTextarea1" className="form-label">{contactForm.how_help_you}</label>
              <textarea style={{ resize: 'none' }} className="form-control rounded-4" id="exampleFormControlTextarea1" rows={5}></textarea>
            </div>
            <div className="mb-3">
              <button className="btn btn-dark rounded-pill w-100">{contactForm.submit}</button>
            </div>
          </div>
        </div>
      </div>
    </main>
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
    title: `${dictionary.website_name} - ${dictionary["contact-page"].title}`,
  }
}