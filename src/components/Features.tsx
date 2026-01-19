import { motion } from 'framer-motion'
import { Home, Heart, ShieldCheck } from 'lucide-react'

const features = [
  {
    icon: Home,
    title: 'Handcrafted at Home',
    description: "Our chorizos aren't factory-made. We hand-stuff them right in our family kitchen using traditional Argentinian techniques.",
  },
  {
    icon: Heart,
    title: 'Secret Family Recipe',
    description: 'Passed down through generations, our burger blend and seasoning are the heart of every bite you take.',
  },
  {
    icon: ShieldCheck,
    title: 'Fresh & Artisanal',
    description: 'From our homemade sauces to the daily-baked buns, we prioritize quality and freshness above all else.',
  },
]

export default function Features() {
  return (
    <section id="story" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1000&q=80"
                alt="Family cooking together"
                className="object-cover h-[600px] w-full"
              />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-10 -right-10 bg-secondary text-white p-8 rounded-2xl shadow-xl z-20 max-w-xs">
              <p className="text-3xl font-bold mb-2">35+ Years</p>
              <p className="text-sm opacity-90">Of family tradition brought straight to the streets for you to enjoy.</p>
            </div>
            {/* Background decoration */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/5 rounded-full -z-10" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              From our kitchen to <span className="text-primary">your hands.</span>
            </h2>
            <p className="text-lg text-text-muted mb-12 leading-relaxed">
              Saufresh isn't just a food truck; it's a piece of our home. We believe that the best food comes from
              patience, tradition, and a little bit of family magic. Every chorizo is handcrafted,
              every sauce is simmered for hours, and every burger is pressed by hand.
            </p>

            <div className="grid grid-cols-1 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-6 items-start group">
                  <div className="bg-primary/10 p-4 rounded-xl group-hover:bg-primary transition-colors">
                    <feature.icon className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                    <p className="text-text-muted">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
