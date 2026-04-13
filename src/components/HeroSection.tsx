import { ArrowRight, Rocket } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0 bg-gradient-hero opacity-85" />
      </div>

      <div className="relative container mx-auto px-4 py-32">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm text-primary-foreground px-4 py-2 rounded-full text-sm font-medium mb-6 animate-fade-up">
            <Rocket size={16} />
            Creative Digital Marketing Agency
          </div>

          <h1 className="font-heading text-4xl sm:text-5xl lg:text-7xl font-bold text-primary-foreground leading-tight mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Think <span className="text-brand-glow">Ingenious</span>,<br />
            Think Us.
          </h1>

          <p className="text-primary-foreground/80 text-lg sm:text-xl max-w-xl mb-8 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            We craft powerful digital strategies that transform your brand's online presence. From social media to Meta Ads — we drive results.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 bg-primary-foreground text-primary px-8 py-4 rounded-lg font-heading font-semibold text-lg hover:opacity-90 transition-opacity"
            >
              Get Started <ArrowRight size={20} />
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 border-2 border-primary-foreground/30 text-primary-foreground px-8 py-4 rounded-lg font-heading font-semibold text-lg hover:bg-primary-foreground/10 transition-colors"
            >
              Our Services
            </a>
          </div>

          <div className="flex gap-8 mt-12 animate-fade-up" style={{ animationDelay: "0.4s" }}>
            {[
              { num: "50+", label: "Clients Served" },
              { num: "200+", label: "Projects Done" },
              { num: "3+", label: "Years Experience" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl font-heading font-bold text-primary-foreground">{stat.num}</div>
                <div className="text-primary-foreground/60 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
