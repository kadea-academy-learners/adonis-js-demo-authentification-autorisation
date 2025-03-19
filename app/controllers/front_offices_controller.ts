import type { HttpContext } from '@adonisjs/core/http'

export default class FrontOfficesController {
  public async showHomePage({ view }: HttpContext) {
    return view.render('pages/frontoffice/home', {
      pageTitle: 'Wellcom to Blogoss kinshasa',
      pageDescription: 'Blogoss the best trip blog in kinshasa',
    })
  }
  public async showAboutPage({ view }: HttpContext) {
    return view.render('pages/frontoffice/about', {
      pageTitle: 'About Blogoss kinshasa',
      pageDescription: 'Blogoss the best trip blog in kinshasa',
    })
  }
  public async showServicesPage({ view }: HttpContext) {
    return view.render('pages/frontoffice/services', {
      pageTitle: 'Blogoss kinshasa services',
      pageDescription: 'Blogoss the best trip blog in kinshasa',
    })
  }
  public async showBlogPage({ view }: HttpContext) {
    return view.render('pages/frontoffice/blog', {
      pageTitle: 'visit our Blogoss kinshasa',
      pageDescription: 'Blogoss the best trip blog in kinshasa',
    })
  }
  public async showContactPage({ view }: HttpContext) {
    return view.render('pages/frontoffice/contact', {
      pageTitle: 'Contact Blogoss kinshasa',
      pageDescription: 'Blogoss the best trip blog in kinshasa',
    })
  }
}
