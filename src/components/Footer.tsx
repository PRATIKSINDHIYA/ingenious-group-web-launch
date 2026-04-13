import { Instagram, Mail, Phone } from "lucide-react";
import logo from "@/assets/logo.jpg";

const Footer = () => {
  return (
    <footer className="bg-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Ingenious Group" className="w-10 h-10 rounded-lg" />
            <div>
              <span className="font-heading font-bold text-primary-foreground">INGENIOUS</span>
              <span className="font-heading font-light text-primary-foreground/60"> GROUP</span>
            </div>
          </div>

          <p className="text-primary-foreground/50 text-sm text-center">
            © {new Date().getFullYear()} Ingenious Group. All rights reserved.
          </p>

          <div className="flex items-center gap-4 md:justify-end">
            <a href="https://instagram.com/ingeniousgroup.in" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center text-primary-foreground/60 hover:text-primary-foreground hover:bg-primary-foreground/20 transition-colors">
              <Instagram size={18} />
            </a>
            <a href="mailto:ingeniousgroupjn@gmail.com" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center text-primary-foreground/60 hover:text-primary-foreground hover:bg-primary-foreground/20 transition-colors">
              <Mail size={18} />
            </a>
            <a href="tel:+916353851656" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center text-primary-foreground/60 hover:text-primary-foreground hover:bg-primary-foreground/20 transition-colors">
              <Phone size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
