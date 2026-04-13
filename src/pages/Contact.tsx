import { useState } from "react";
import { MapPin, Phone, Mail, MessageSquare, Send, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedCard from "@/components/AnimatedCard";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to a server
    console.log("Form submitted:", formData);
    setSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({ name: "", email: "", phone: "", company: "", service: "", message: "" });
      setSubmitted(false);
    }, 3000);
  };

  const contactMethods = [
    {
      icon: Phone,
      title: "Call Us",
      value: "+91 63538 51656",
      description: "Available Mon-Sat, 10am-6pm IST",
      href: "tel:+916353851656",
    },
    {
      icon: Mail,
      title: "Email Us",
      value: "hello@ingeniousgroup.in",
      description: "We reply within 24 hours",
      href: "mailto:hello@ingeniousgroup.in",
    },
    {
      icon: MessageSquare,
      title: "WhatsApp",
      value: "+91 63538 51656",
      description: "Chat with us directly",
      href: "https://wa.me/916353851656",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      value: "F-16, Prabhu Plaza",
      description: "By Pass Road, Himmatnagar, Gujarat",
      href: "https://maps.google.com",
    },
  ];

  const socialLinks = [
    { icon: Facebook, href: "https://facebook.com/ingeniousgroup", label: "Facebook" },
    { icon: Instagram, href: "https://instagram.com/ingeniousgroup", label: "Instagram" },
    { icon: Linkedin, href: "https://linkedin.com/company/ingeniousgroup", label: "LinkedIn" },
    { icon: Twitter, href: "https://twitter.com/ingeniousgroup", label: "Twitter" },
  ];

  const services = [
    "Social Media Management",
    "Meta Ads Management",
    "Brand Design",
    "Content Creation",
    "Performance Marketing",
    "Influencer Marketing",
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 bg-gradient-to-b from-secondary to-background">
        <div className="container mx-auto">
          <AnimatedCard animation="fade-up">
            <h1 className="font-heading text-5xl lg:text-6xl font-bold text-foreground text-center mb-6">
              Get in <span className="text-gradient">Touch</span>
            </h1>
            <p className="text-muted-foreground text-center text-lg max-w-2xl mx-auto">
              Ready to transform your digital presence? Let&apos;s connect and discuss how we can help your business grow.
            </p>
          </AnimatedCard>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method, idx) => {
              const Icon = method.icon;
              return (
                <AnimatedCard
                  key={idx}
                  animation="fade-up"
                  delay={0.1 * (idx + 1)}
                >
                  <a
                    href={method.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-card border border-border rounded-xl p-6 hover-lift block group"
                  >
                    <div className="w-12 h-12 bg-gradient-brand rounded-lg flex items-center justify-center mb-4 group-hover:animate-pulse-glow">
                      <Icon className="text-primary-foreground" size={24} />
                    </div>
                    <h3 className="font-heading text-lg font-bold text-foreground mb-2">
                      {method.title}
                    </h3>
                    <p className="font-semibold text-primary mb-1">
                      {method.value}
                    </p>
                    <p className="text-muted-foreground text-sm">
                      {method.description}
                    </p>
                  </a>
                </AnimatedCard>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 px-4 bg-secondary/50">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto">
            <AnimatedCard animation="fade-up">
              <h2 className="font-heading text-4xl font-bold text-center text-foreground mb-12">
                Send us a Message
              </h2>
            </AnimatedCard>

            <AnimatedCard animation="scale-in" delay={0.2} className="bg-card border border-border rounded-xl p-8 md:p-12">
              {submitted ? (
                <div className="text-center py-12 animate-scale-in">
                  <div className="w-16 h-16 bg-gradient-brand rounded-full flex items-center justify-center mx-auto mb-4">
                    <Send className="text-primary-foreground" size={32} />
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-foreground mb-2">
                    Thank You!
                  </h3>
                  <p className="text-muted-foreground">
                    We&apos;ve received your message and will get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-foreground font-medium mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-foreground font-medium mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-foreground font-medium mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                        placeholder="+91 9876543210"
                      />
                    </div>
                    <div>
                      <label className="block text-foreground font-medium mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                        placeholder="Your company"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-foreground font-medium mb-2">
                      Service Interested In *
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                    >
                      <option value="">Select a service</option>
                      {services.map((service) => (
                        <option key={service} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-foreground font-medium mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary transition-all resize-none"
                      placeholder="Tell us about your project and goals..."
                    />
                  </div>

                  <div className="flex items-center gap-2 text-muted-foreground text-sm">
                    <span>*</span>
                    <span>Required fields</span>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-brand text-primary-foreground px-8 py-3 rounded-lg font-heading font-semibold hover:opacity-90 transition-all flex items-center justify-center gap-2 group"
                  >
                    Send Message
                    <Send size={20} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
              )}
            </AnimatedCard>
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <AnimatedCard animation="fade-up">
            <h2 className="font-heading text-4xl font-bold text-center text-foreground mb-12">
              Connect With Us on Social
            </h2>
          </AnimatedCard>

          <div className="flex justify-center gap-8 flex-wrap">
            {socialLinks.map((social, idx) => {
              const Icon = social.icon;
              return (
                <AnimatedCard
                  key={idx}
                  animation="fade-up"
                  delay={0.1 * (idx + 1)}
                >
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-14 h-14 bg-gradient-brand rounded-full flex items-center justify-center text-primary-foreground hover:scale-125 transition-transform"
                    title={social.label}
                  >
                    <Icon size={24} />
                  </a>
                </AnimatedCard>
              );
            })}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 px-4 bg-secondary/50">
        <div className="container mx-auto">
          <AnimatedCard animation="fade-up">
            <h2 className="font-heading text-4xl font-bold text-center text-foreground mb-12">
              Find Us on the Map
            </h2>
          </AnimatedCard>

          <AnimatedCard animation="scale-in" delay={0.2} className="rounded-xl overflow-hidden">
            <iframe
              title="Ingenious Group Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3667.8215566244377!2d72.76456!3d23.18329!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395c2f8f8f8f8f8f%3A0x8f8f8f8f8f8f8f8f!2sHimmatnagar!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </AnimatedCard>

          <AnimatedCard animation="fade-up" delay={0.3} className="mt-8 bg-card border border-border rounded-xl p-8 text-center">
            <p className="text-foreground font-medium mb-2">
              F-16, Prabhu Plaza
            </p>
            <p className="text-foreground font-medium mb-2">
              Opp. New Jilla Panchayat, By Pass Road
            </p>
            <p className="text-muted-foreground">
              Himmatnagar, Gujarat
            </p>
          </AnimatedCard>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <AnimatedCard animation="fade-up">
            <h2 className="font-heading text-4xl font-bold text-center text-foreground mb-12">
              Frequently Asked Questions
            </h2>
          </AnimatedCard>

          <div className="max-w-2xl mx-auto space-y-6">
            {[
              {
                q: "What is your typical response time?",
                a: "We aim to respond to all inquiries within 24 hours during business days.",
              },
              {
                q: "Do you offer free consultation?",
                a: "Yes! We offer a free 30-minute consultation to understand your needs and discuss potential solutions.",
              },
              {
                q: "What is the minimum project duration?",
                a: "Projects can start from 1 month. We customize packages based on your specific needs and budget.",
              },
              {
                q: "How do you measure campaign success?",
                a: "We provide detailed monthly reports with KPIs, analytics, and insights specific to your goals.",
              },
            ].map((faq, idx) => (
              <AnimatedCard
                key={idx}
                animation="fade-up"
                delay={0.1 * (idx + 1)}
                className="bg-card border border-border rounded-xl p-6 hover-lift"
              >
                <h3 className="font-heading font-bold text-foreground mb-2">
                  {faq.q}
                </h3>
                <p className="text-muted-foreground">{faq.a}</p>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
