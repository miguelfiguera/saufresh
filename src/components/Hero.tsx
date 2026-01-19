import { motion } from 'framer-motion'
import { ArrowRight, Star } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-background">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/wood-pattern.png')]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="flex flex-col gap-8"
        >
          <div className="flex items-center gap-2 bg-primary/10 self-start px-4 py-2 rounded-full text-primary font-bold text-sm tracking-widest uppercase">
            <Star className="w-4 h-4 fill-primary" />
            <span>Family-Owned & Artisanal</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.9] tracking-tighter text-foreground">
            Home-made heart,<br />
            <span className="text-primary italic">street-food soul.</span>
          </h1>

          <p className="text-xl text-text-muted max-w-lg leading-relaxed">
            Experience the true taste of Argentina with our handcrafted Choripanes and gourmet burgers.
            Made with love, secret family recipes, and the freshest ingredients.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#menu"
              className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white rounded-full px-10 py-4 text-xl font-semibold group transition-all"
            >
              See the Menu
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#location"
              className="inline-flex items-center justify-center border-2 border-primary text-primary hover:bg-primary/5 rounded-full px-10 py-4 text-xl font-semibold transition-all"
            >
              Find the Truck
            </a>
          </div>

          <div className="flex items-center gap-6 mt-4">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-12 h-12 rounded-full border-4 border-background overflow-hidden bg-gray-200">
                  <img
                    src={`https://i.pravatar.cc/100?img=${i + 10}`}
                    alt="Customer"
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
            <div>
              <div className="flex text-primary">
                {[1, 2, 3, 4, 5].map((i) => <Star key={i} className="w-4 h-4 fill-primary" />)}
              </div>
              <p className="text-sm font-medium">500+ Happy Foodies</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="relative aspect-square md:aspect-[4/5] lg:aspect-square"
        >
          {/* Choripan Image */}
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute top-0 right-0 w-[80%] h-[80%] z-20 rounded-3xl overflow-hidden shadow-2xl border-8 border-white rotate-3"
          >
            <img
              src="https://images.unsplash.com/photo-1550507992-eb63ffee0847?auto=format&fit=crop&w=800&q=80"
              alt="Dripping Choripan"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-6">
              <span className="text-white font-bold text-2xl">Authentic Choripan</span>
            </div>
          </motion.div>

          {/* Burger Image */}
          <motion.div
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            className="absolute bottom-0 left-0 w-[65%] h-[65%] z-30 rounded-3xl overflow-hidden shadow-2xl border-8 border-white -rotate-6"
          >
            <img
              src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80"
              alt="Juicy Burger"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-6">
              <span className="text-white font-bold text-2xl">Secret Recipe Burger</span>
            </div>
          </motion.div>

          {/* Decorative elements */}
          <div className="absolute -top-10 -left-10 w-32 h-32 bg-secondary/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-primary/20 rounded-full blur-3xl" />
        </motion.div>
      </div>
    </section>
  )
}
