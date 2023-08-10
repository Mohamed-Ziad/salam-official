
import { getDictionary } from "@/get-dictionary"
import { Locale } from "@/i18n-config"
import { Metadata } from "next"

export default async function Page(
  {
    params: { lang },
  }: {
    params: { lang: Locale }
  }
) {
  const dictionary = await getDictionary(lang)



  return <>
    <main>
      <div className="container">
        <h1 className="page-title"> {dictionary["products-page"].title} </h1>

        <div className="row">
          {
            ["products/CRD-WHT_2side_ec99f0ad-182c-499c-89d0-b86bd320dc72.png?v=1644532405&width=800",
              "products/CRD-BLK_2side_46ad1bc6-dbb0-409d-9ff1-722b21ace899.png?v=1644532394&width=800",
              "files/crd-gld-product-front-back-shadow_2_38e66a8d-cb38-4b14-bfdf-13aa221e9f47.png?v=1689051783&width=800",
              "files/CRD-PSM_2side_bb89172e-3ce0-4daf-b246-5437946ae410.png?v=1689051713&width=800",
              "products/CRD-WHT_2side_ec99f0ad-182c-499c-89d0-b86bd320dc72.png?v=1644532405&width=800",
              "products/CRD-BLK_2side_46ad1bc6-dbb0-409d-9ff1-722b21ace899.png?v=1644532394&width=800",
              "files/crd-gld-product-front-back-shadow_2_38e66a8d-cb38-4b14-bfdf-13aa221e9f47.png?v=1689051783&width=800",
              "files/CRD-PSM_2side_bb89172e-3ce0-4daf-b246-5437946ae410.png?v=1689051713&width=800"]
              .map((p) => <div key={p} className="col-md-3">
                <div className="card rounded-5 border-0 shadow-sm product-card mb-4">
                  <img src={`https://popl.co/cdn/shop/${p}`} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title text-center">اسم المنتج</h5>
                    <p className="card-text text-center">
                      هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي.</p>
                    <a href="#" className="btn btn-dark w-100 rounded-pill mb-2"> {dictionary["products-page"]["product-card"]["add-to-cart"]} </a>
                    <a href="#" className="btn btn-outline-dark w-100 rounded-pill"> {dictionary["products-page"]["product-card"]["product-details"]} </a>
                  </div>
                </div>
              </div>)}
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
    title: `${dictionary.website_name} - ${dictionary['products-page'].title}`,
  }
}