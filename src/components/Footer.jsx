import { UtensilsCrossed, Instagram, Facebook, Twitter } from 'lucide-react'

const quickLinks = [
  { label: 'The Menu', href: '#menu' },
  { label: 'Our Story', href: '#story' },
  { label: 'Find the Truck', href: '#location' },
  { label: 'Order Online', href: '#menu' },
]

const contactInfo = [
  'hello@saufresh.com',
  '+1 (555) 123-4567',
  'Based in Florida, USA',
]

const legalLinks = [
  { label: 'Privacy Policy', href: '#' },
  { label: 'Terms of Service', href: '#' },
]

export default function Footer() {
  return (
    <footer className="bg-background border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-primary p-1.5 rounded-lg">
                <UtensilsCrossed className="text-background w-6 h-6" />
              </div>
              <span className="text-2xl font-bold tracking-tighter text-primary">SAUFRESH</span>
            </div>
            <p className="text-sm text-text-muted mb-6">
              Authentic Argentinian Choripanes and Gourmet Burgers handcrafted with secret family recipes. From our kitchen to your hands.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors text-text-muted">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors text-text-muted">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors text-text-muted">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-text-muted hover:text-primary transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Contact</h4>
            <ul className="space-y-3">
              {contactInfo.map((info) => (
                <li key={info} className="text-text-muted">
                  {info}
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Stay Updated</h4>
            <p className="text-sm text-text-muted mb-4">Get notified about our location and special offers!</p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 bg-white border border-gray-200 rounded-full px-4 py-2 text-sm focus:outline-none focus:border-primary transition-colors"
              />
              <button className="bg-primary hover:bg-primary-dark text-white px-6 py-2 rounded-full font-semibold transition-colors">
                Join
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-text-muted">
            &copy; {new Date().getFullYear()} Saufresh Family Business. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            {legalLinks.map((link) => (
              <a key={link.label} href={link.href} className="text-text-muted hover:text-primary transition-colors">
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
