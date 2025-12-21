import { motion } from "framer-motion";
import { Github, Twitter, Linkedin, Youtube, Mail, MapPin } from "lucide-react";

const socialLinks = [
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Youtube, href: "#", label: "YouTube" },
];

const footerLinks = {
  "About ACM": ["History", "Leadership", "ACM Chapters", "Governance"],
  "Resources": ["Digital Library", "Publications", "Careers", "Computing Reviews"],
  "Membership": ["Join ACM", "Renew", "Benefits", "Student Membership"],
  "Connect": ["Contact Us", "FAQ", "Press Room", "Advertise"],
};

const Footer = () => {
  return (
    <footer id="contact" className="relative bg-obsidian pt-16 pb-8">
      {/* Top border */}
      <div className="absolute top-0 left-0 right-0 h-4 bg-secondary" />
      <div className="absolute top-4 left-0 right-0 h-2 bg-primary" />

      <div className="container mx-auto px-4">
        {/* Main footer content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <motion.div
              className="flex items-center gap-3 mb-4"
              whileHover={{ scale: 1.02 }}
            >
              <div className="w-12 h-12 bg-primary border-4 border-grass-light block-shadow-sm flex items-center justify-center">
                <span className="font-pixel text-xs text-primary-foreground">ACM</span>
              </div>
            </motion.div>
            <p className="font-mono text-sm text-obsidian-foreground/70 mb-4">
              Advancing Computing as a Science & Profession since 1947.
            </p>
            
            {/* Social links */}
            <div className="flex gap-2">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 bg-card/20 border-2 border-border flex items-center justify-center text-obsidian-foreground/70 hover:bg-primary hover:text-primary-foreground transition-colors"
                  whileHover={{ y: -2, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-pixel text-xs text-accent mb-4">{title}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <motion.a
                      href="#"
                      className="font-mono text-sm text-obsidian-foreground/70 hover:text-primary transition-colors"
                      whileHover={{ x: 4 }}
                    >
                      {link}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact info */}
        <div className="flex flex-wrap justify-center gap-6 mb-8 py-6 border-y-2 border-border/50">
          <div className="flex items-center gap-2 font-mono text-sm text-obsidian-foreground/60">
            <Mail size={16} className="text-accent" />
            <span>acmhelp@acm.org</span>
          </div>
          <div className="flex items-center gap-2 font-mono text-sm text-obsidian-foreground/60">
            <MapPin size={16} className="text-primary" />
            <span>New York, NY, USA</span>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-mono text-xs text-obsidian-foreground/50">
            © 2025 Association for Computing Machinery. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a href="#" className="font-mono text-xs text-obsidian-foreground/50 hover:text-accent transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="font-mono text-xs text-obsidian-foreground/50 hover:text-accent transition-colors">
              Terms of Use
            </a>
            <a href="#" className="font-mono text-xs text-obsidian-foreground/50 hover:text-accent transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>

        {/* Decorative blocks */}
        <div className="flex justify-center gap-1 mt-8">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className={`w-4 h-4 border border-border/30 ${
                i === 2 ? "bg-accent/30" : i % 2 === 0 ? "bg-primary/30" : "bg-secondary/30"
              }`}
              whileHover={{ scale: 1.5, rotate: 45 }}
            />
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
