import { useState } from 'react'
import { motion } from 'framer-motion'
import { Utensils, Flame, Droplets } from 'lucide-react'

const choriCorner = [
  {
    name: 'The Classic Argentino',
    description: 'Handcrafted chorizo, fresh chimichurri, and salsa criolla on a toasted baguette.',
    price: '$12.00',
    tag: 'Best Seller',
  },
  {
    name: 'The Cheesy Chori',
    description: 'Our signature chorizo topped with melted provolone and roasted peppers.',
    price: '$14.00',
    tag: 'Must Try',
  },
  {
    name: 'Spicy Gaucho',
    description: "Spicy chorizo blend, jalapeños, and our secret 'Saufresh' hot sauce.",
    price: '$13.50',
  },
]

const signatureBurgers = [
  {
    name: 'The Saufresh Burger',
    description: 'Secret family blend patty, artisanal cheddar, crispy onions, and Saufresh sauce.',
    price: '$15.00',
    tag: 'Signature',
  },
  {
    name: 'Rustic Truffle',
    description: 'Gourmet beef, truffle aioli, sautéed mushrooms, and baby arugula.',
    price: '$17.50',
  },
  {
    name: 'Pampa BBQ',
    description: 'Double patty, smoked bacon, BBQ sauce, and pickled cucumbers.',
    price: '$16.50',
  },
]

const sauces = [
  { name: 'Traditional Chimichurri', description: 'The soul of the choripan. Parsley, garlic, and oil blend.' },
  { name: 'Saufresh Special Sauce', description: 'Our secret family recipe. Creamy, tangy, and addictive.' },
  { name: 'Salsa Criolla', description: 'Fresh tomato, onion, and bell pepper relish.' },
  { name: 'Chili-Infused Honey', description: 'Sweet with a slow-burn kick.' },
]

const tabs = [
  { id: 'chori', label: 'Chori Corner', icon: Utensils },
  { id: 'burgers', label: 'Signature Burgers', icon: Flame },
  { id: 'sauces', label: 'Handmade Sauces', icon: Droplets },
]

interface MenuItemProps {
  name: string
  description: string
  price?: string
  tag?: string
}

function MenuItem({ name, description, price, tag }: MenuItemProps) {
  return (
    <div className="bg-white border-none shadow-md hover:shadow-xl transition-all hover:-translate-y-1 rounded-2xl p-6">
      <div className="flex justify-between items-start mb-4">
        <div>
          {tag && (
            <span className="inline-block bg-secondary text-white text-xs font-semibold px-3 py-1 rounded-full mb-2">
              {tag}
            </span>
          )}
          <h3 className="text-xl font-bold">{name}</h3>
        </div>
        <span className="text-primary font-bold text-xl">{price}</span>
      </div>
      <p className="text-text-muted text-sm italic">{description}</p>
    </div>
  )
}

export default function Menu() {
  const [activeTab, setActiveTab] = useState('chori')

  return (
    <section id="menu" className="py-24 bg-background/50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">The Saufresh Experience</h2>
          <p className="text-lg text-text-muted max-w-2xl mx-auto">
            Every item is a tribute to our heritage. Handcrafted, fresh, and bursting with flavor.
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-3 mb-12 bg-white p-1 rounded-full shadow-lg">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-4 rounded-full flex items-center justify-center gap-2 font-medium transition-all ${
                  activeTab === tab.id
                    ? 'bg-primary text-white'
                    : 'text-text hover:bg-gray-100'
                }`}
              >
                <tab.icon className="w-4 h-4" />
                <span className="hidden sm:inline">{tab.label}</span>
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {activeTab === 'chori' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                {choriCorner.map((item, i) => (
                  <MenuItem key={i} {...item} />
                ))}
              </div>
            )}

            {activeTab === 'burgers' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                {signatureBurgers.map((item, i) => (
                  <MenuItem key={i} {...item} />
                ))}
              </div>
            )}

            {activeTab === 'sauces' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-left">
                {sauces.map((sauce, i) => (
                  <div
                    key={i}
                    className="bg-white shadow-md hover:shadow-xl transition-shadow overflow-hidden group rounded-2xl"
                  >
                    <div className="h-2 bg-secondary group-hover:bg-primary transition-colors" />
                    <div className="p-6">
                      <h4 className="font-bold text-lg mb-2">{sauce.name}</h4>
                      <p className="text-sm text-text-muted">{sauce.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
