import { CheckCircle, MapPin, Phone, Mail } from "lucide-react";

const highlights = [
  "Creative & Data-Driven Approach",
  "Dedicated Account Manager",
  "Transparent Reporting & Analytics",
  "ROI-Focused Campaigns",
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative animate-fade-up">
            <img
              src="/images/office-team.jpg"
              alt="Ingenious Group Office"
              className="rounded-2xl shadow-brand w-full object-cover h-[400px] hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
            <img
              src="/images/branding-creative.jpg"
              alt="Ingenious Group Creative"
              className="absolute -bottom-8 -right-8 w-48 h-48 object-cover rounded-2xl shadow-brand border-4 border-background hidden md:block hover:scale-110 transition-transform duration-500"
              loading="lazy"
            />
          </div>

          <div className="animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">About Us</span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mt-2 mb-6">
              Your Growth Partner in <span className="text-gradient">Digital Marketing</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Ingenious Group is a creative digital marketing agency based in Himmatnagar, Gujarat. We specialize in crafting innovative marketing strategies that help businesses grow their online presence and reach new heights.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Founded by Aarush Solanki, our team combines creativity with data-driven insights to deliver measurable results for our clients across social media, paid advertising, branding, and web development.
            </p>

            <div className="grid sm:grid-cols-2 gap-3 mb-8">
              {highlights.map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle className="text-primary shrink-0" size={18} />
                  <span className="text-foreground text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-3 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-primary" />
                F-16, Prabhu Plaza Complex, Bypass Road, Himmatnagar
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} className="text-primary" />
                63538 51656
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} className="text-primary" />
                ingeniousgroupjn@gmail.com
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
