import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Code2, Users, Calendar, BookOpen, Mail } from "lucide-react";

const navItems = [
  { name: "About", href: "#about", icon: Code2 },
  { name: "Events", href: "#events", icon: Calendar },
  { name: "Resources", href: "#resources", icon: BookOpen },
  { name: "Community", href: "#community", icon: Users },
  { name: "Contact", href: "#contact", icon: Mail },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-obsidian border-b-4 border-primary">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.a
            href="#"
            className="flex items-center gap-3"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="w-10 h-10 bg-primary border-2 border-grass-light flex items-center justify-center block-shadow-sm">
              <span className="font-pixel text-xs text-primary-foreground">ACM</span>
            </div>
            <span className="font-pixel text-sm text-primary-foreground hidden sm:block">
              ACM
            </span>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="px-4 py-2 font-mono text-sm text-obsidian-foreground hover:bg-primary hover:text-primary-foreground transition-colors border-2 border-transparent hover:border-grass-light"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -2 }}
              >
                {item.name}
              </motion.a>
            ))}
            <motion.a
              href="#join"
              className="ml-2 px-6 py-2 bg-accent text-accent-foreground font-pixel text-xs border-4 border-b-8 border-accent hover:border-b-4 hover:translate-y-1 transition-all"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Join
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden p-2 text-obsidian-foreground border-2 border-border"
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{ scale: 0.9 }}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden bg-obsidian border-t-4 border-border"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
          >
            <div className="container mx-auto px-4 py-4 space-y-2">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className="flex items-center gap-3 px-4 py-3 font-mono text-obsidian-foreground hover:bg-primary hover:text-primary-foreground border-2 border-border"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  onClick={() => setIsOpen(false)}
                >
                  <item.icon size={18} />
                  {item.name}
                </motion.a>
              ))}
              <motion.a
                href="#join"
                className="block text-center px-6 py-3 bg-accent text-accent-foreground font-pixel text-xs border-4 border-accent"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navItems.length * 0.05 }}
                onClick={() => setIsOpen(false)}
              >
                Join ACM
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
