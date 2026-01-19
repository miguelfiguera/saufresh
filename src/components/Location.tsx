import { motion } from 'framer-motion'
import { MapPin, Clock, Phone, Calendar } from 'lucide-react'

const schedule = [
  { day: 'Mon - Tue', location: 'Brewery District', time: '11:00 AM - 8:00 PM' },
  { day: 'Wed - Thu', location: 'Downtown Tech Plaza', time: '11:00 AM - 3:00 PM' },
  { day: 'Friday', location: 'Sunset Park Waterfront', time: '4:00 PM - 10:00 PM' },
  { day: 'Saturday', location: "Farmer's Market Central", time: '9:00 AM - 4:00 PM' },
  { day: 'Sunday', location: 'Family Fun Fair', time: '10:00 AM - 6:00 PM' },
]

export default function Location() {
  return (
    <section id="location" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-primary rounded-[2rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row">
          <div className="lg:w-1/2 p-12 lg:p-20 text-white">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-8">Catch the Flavor.</h2>
              <p className="text-xl opacity-90 mb-12 italic">
                Our truck is always on the move, bringing fresh choripanes to your neighborhood.
                Check our weekly schedule or follow us for real-time updates!
              </p>

              <div className="space-y-6">
                {schedule.map((item, i) => (
                  <div key={i} className="flex justify-between items-center border-b border-white/20 pb-4">
                    <div>
                      <span className="font-bold block">{item.day}</span>
                      <span className="text-sm opacity-80 flex items-center gap-1">
                        <MapPin className="w-3 h-3" /> {item.location}
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="text-sm flex items-center gap-1 justify-end">
                        <Clock className="w-3 h-3" /> {item.time}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12 flex flex-wrap gap-4">
                <button className="bg-white text-primary hover:bg-background rounded-full px-8 py-4 font-bold transition-colors">
                  Track in Real-Time
                </button>
                <button className="border-2 border-white text-white hover:bg-white/10 rounded-full px-8 py-4 font-semibold flex items-center gap-2 transition-colors">
                  <Phone className="w-4 h-4" /> Book for Events
                </button>
              </div>
            </motion.div>
          </div>

          <div className="lg:w-1/2 relative min-h-[400px] bg-zinc-200">
            {/* Map Placeholder */}
            <div
              className="absolute inset-0 bg-cover bg-center grayscale contrast-125"
              style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=1200&q=80')"
              }}
            >
              <div className="absolute inset-0 bg-primary/20 mix-blend-multiply" />
            </div>

            {/* Pulsing Pin */}
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
            >
              <div className="bg-primary p-4 rounded-full shadow-2xl border-4 border-white">
                <MapPin className="text-white w-8 h-8" />
              </div>
              <div className="absolute -inset-4 bg-primary/30 rounded-full blur-xl -z-10 animate-pulse" />
            </motion.div>

            {/* Location Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="absolute bottom-8 left-8 right-8 bg-white p-6 rounded-2xl shadow-xl z-30 flex items-center gap-4"
            >
              <div className="bg-secondary/10 p-3 rounded-full">
                <Calendar className="text-secondary w-6 h-6" />
              </div>
              <div>
                <p className="text-xs text-text-muted uppercase tracking-widest font-bold">Currently At</p>
                <p className="font-bold text-lg">Brewery District, 5th Ave</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
