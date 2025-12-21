import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Gem, Check, Star, Zap, Shield } from "lucide-react";

const benefits = [
  "Access to ACM Digital Library",
  "Member-only events & discounts",
  "Career development resources",
  "Professional networking",
  "ACM TechNews subscription",
  "Special Interest Groups (SIGs)",
];

const membershipTypes = [
  {
    name: "Student",
    price: "$19",
    period: "/year",
    color: "bg-primary",
    borderColor: "border-grass-light",
    icon: Star,
    popular: false,
  },
  {
    name: "Professional",
    price: "$99",
    period: "/year",
    color: "bg-accent",
    borderColor: "border-accent",
    icon: Gem,
    popular: true,
  },
  {
    name: "Distinguished",
    price: "$199",
    period: "/year",
    color: "bg-gold",
    borderColor: "border-gold",
    icon: Shield,
    popular: false,
  },
];

const JoinSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="join" className="relative py-24 bg-obsidian overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 block-pattern opacity-10" />
      
      {/* Animated background blocks */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-8 h-8 bg-primary/20 border-2 border-primary/30"
            style={{
              left: `${10 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
            }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 10, 0],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 3 + i,
              repeat: Infinity,
              delay: i * 0.5,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="inline-block mb-6"
            animate={{ 
              boxShadow: [
                "0 0 0 0 hsl(185 65% 55% / 0)",
                "0 0 20px 10px hsl(185 65% 55% / 0.3)",
                "0 0 0 0 hsl(185 65% 55% / 0)",
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="w-16 h-16 bg-accent border-4 border-border block-shadow-lg flex items-center justify-center">
              <Gem size={32} className="text-accent-foreground" />
            </div>
          </motion.div>
          <h2 className="section-title text-obsidian-foreground mb-4">
            Join ACM Today
          </h2>
          <p className="font-mono text-muted-foreground max-w-xl mx-auto">
            Become part of the world's largest computing community. 
            Unlock exclusive benefits and advance your career.
          </p>
        </motion.div>

        {/* Membership cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16">
          {membershipTypes.map((type, index) => (
            <motion.div
              key={type.name}
              className={`relative minecraft-card ${type.color} ${type.borderColor} border-4`}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.15, duration: 0.4 }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              {type.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-gold border-2 border-border">
                  <span className="font-pixel text-[8px] text-gold-foreground">POPULAR</span>
                </div>
              )}
              
              <div className="w-12 h-12 bg-obsidian/30 border-2 border-border mb-4 flex items-center justify-center mx-auto">
                <type.icon size={24} className="text-primary-foreground" />
              </div>
              
              <h3 className="font-pixel text-base text-primary-foreground text-center mb-2">
                {type.name}
              </h3>
              
              <div className="text-center mb-6">
                <span className="font-pixel text-2xl text-primary-foreground">{type.price}</span>
                <span className="font-mono text-sm text-primary-foreground/70">{type.period}</span>
              </div>
              
              <motion.button
                className="w-full py-3 bg-obsidian/30 border-4 border-b-8 border-obsidian/50 font-pixel text-xs text-primary-foreground hover:border-b-4 hover:translate-y-1 transition-all"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Select
              </motion.button>
            </motion.div>
          ))}
        </div>

        {/* Benefits list */}
        <motion.div
          className="max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <h3 className="font-pixel text-sm text-center text-accent mb-8">
            Member Benefits
          </h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit}
                className="flex items-center gap-3 p-3 bg-obsidian/50 border-2 border-border"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.6 + index * 0.05 }}
              >
                <div className="w-6 h-6 bg-primary flex items-center justify-center flex-shrink-0">
                  <Check size={14} className="text-primary-foreground" />
                </div>
                <span className="font-mono text-sm text-obsidian-foreground">
                  {benefit}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Top grass divider */}
      <div className="absolute top-0 left-0 right-0 pixel-divider" />
    </section>
  );
};

export default JoinSection;
