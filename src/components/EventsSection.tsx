import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Calendar, MapPin, Clock, ArrowRight } from "lucide-react";

const events = [
  {
    title: "ACM SIGGRAPH 2025",
    date: "August 10-14, 2025",
    location: "Vancouver, Canada",
    type: "Conference",
    color: "bg-primary",
    borderColor: "border-grass-light",
  },
  {
    title: "ACM CHI Conference",
    date: "May 11-16, 2025",
    location: "Yokohama, Japan",
    type: "Conference",
    color: "bg-accent",
    borderColor: "border-accent",
  },
  {
    title: "Code Jam Workshop",
    date: "March 5, 2025",
    location: "Online",
    type: "Workshop",
    color: "bg-gold",
    borderColor: "border-gold",
  },
  {
    title: "Research Symposium",
    date: "April 20, 2025",
    location: "New York, USA",
    type: "Symposium",
    color: "bg-secondary",
    borderColor: "border-secondary",
  },
];

const EventCard = ({ 
  event, 
  index 
}: { 
  event: typeof events[0]; 
  index: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      className={`minecraft-card bg-card border-4 ${event.borderColor} group cursor-pointer`}
      initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.4 }}
      whileHover={{ scale: 1.02, y: -4 }}
    >
      {/* Type badge */}
      <div className={`inline-block px-3 py-1 ${event.color} border-2 border-border mb-4`}>
        <span className="font-pixel text-[10px] text-primary-foreground uppercase">
          {event.type}
        </span>
      </div>

      {/* Title */}
      <h3 className="font-pixel text-sm md:text-base text-card-foreground mb-4 leading-relaxed">
        {event.title}
      </h3>

      {/* Details */}
      <div className="space-y-2 mb-4">
        <div className="flex items-center gap-2 font-mono text-sm text-card-foreground/80">
          <Calendar size={16} className="text-accent" />
          {event.date}
        </div>
        <div className="flex items-center gap-2 font-mono text-sm text-card-foreground/80">
          <MapPin size={16} className="text-primary" />
          {event.location}
        </div>
      </div>

      {/* Learn more link */}
      <motion.div 
        className="flex items-center gap-2 font-mono text-sm text-accent group-hover:gap-3 transition-all"
        whileHover={{ x: 4 }}
      >
        Learn more <ArrowRight size={16} />
      </motion.div>
    </motion.div>
  );
};

const EventsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="events" className="relative py-24 bg-gradient-to-b from-sky-bottom to-background overflow-hidden">
      {/* Block pattern */}
      <div className="absolute inset-0 block-pattern opacity-20" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex gap-1 mb-6">
            <div className="w-8 h-8 bg-primary border-2 border-border" />
            <div className="w-8 h-8 bg-accent border-2 border-border" />
            <div className="w-8 h-8 bg-gold border-2 border-border" />
          </div>
          <h2 className="section-title text-foreground mb-4">
            Upcoming Events
          </h2>
          <p className="font-mono text-muted-foreground max-w-xl mx-auto">
            Join our conferences, workshops, and community gatherings. 
            Connect with computing professionals worldwide.
          </p>
        </motion.div>

        {/* Events grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {events.map((event, index) => (
            <EventCard key={event.title} event={event} index={index} />
          ))}
        </div>

        {/* View all CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
        >
          <motion.a
            href="#"
            className="minecraft-btn bg-card text-card-foreground border-border hover:bg-muted inline-flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Calendar size={16} />
            View All Events
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default EventsSection;
