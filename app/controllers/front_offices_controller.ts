import type { HttpContext } from '@adonisjs/core/http'

export default class FrontOfficesController {
  public async homePage({ view }: HttpContext) {
    return view.render('pages/frontoffice/home', {
      pageTitle: 'Wellcom to Blogoss kinshasa',
      pageDescription: 'Blogoss the best trip blog in kinshasa',
    })
  }
  public async aboutPage({ view }: HttpContext) {
    return view.render('pages/frontoffice/about', {
      pageTitle: 'About Blogoss kinshasa',
      pageDescription: 'Blogoss the best trip blog in kinshasa',
    })
  }
  public async servicesPage({ view }: HttpContext) {
    return view.render('pages/frontoffice/services', {
      pageTitle: 'Blogoss kinshasa services',
      pageDescription: 'Blogoss the best trip blog in kinshasa',
    })
  }
  public async blogPage({ view }: HttpContext) {
    return view.render('pages/frontoffice/blog', {
      pageTitle: 'visit our Blogoss kinshasa',
      pageDescription: 'Blogoss the best trip blog in kinshasa',
    })
  }
  public async contactPage({ view }: HttpContext) {
    return view.render('pages/frontoffice/contact', {
      pageTitle: 'Contact Blogoss kinshasa',
      pageDescription: 'Blogoss the best trip blog in kinshasa',
    })
  }
}
