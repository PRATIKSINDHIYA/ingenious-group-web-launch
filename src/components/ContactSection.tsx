import { useState } from "react";
import { Send, MapPin, Phone, Mail, Instagram, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface FormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

const ContactSection = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast({ title: "Please fill all required fields", variant: "destructive" });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({ title: "Please enter a valid email", variant: "destructive" });
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "YOUR_WEB3FORMS_KEY",
          from_name: "Ingenious Group Website",
          subject: `New Inquiry from ${formData.name}`,
          ...formData,
        }),
      });

      if (response.ok) {
        toast({ title: "Message sent successfully! 🎉", description: "We'll get back to you soon." });
        setFormData({ name: "", email: "", phone: "", service: "", message: "" });
      } else {
        throw new Error("Failed to send");
      }
    } catch {
      toast({ title: "Something went wrong", description: "Please try again or contact us directly.", variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Get In Touch</span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mt-2 mb-4">
            Let's <span className="text-gradient">Work Together</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Ready to take your brand to the next level? Fill out the form and we'll get back to you within 24 hours.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="bg-card p-8 rounded-2xl shadow-card border border-border">
              <div className="grid sm:grid-cols-2 gap-5 mb-5">
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                    maxLength={100}
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    required
                    maxLength={255}
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5 mb-5">
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 XXXXX XXXXX"
                    maxLength={15}
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">Service</label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all"
                  >
                    <option value="">Select a service</option>
                    <option value="social-media">Social Media Marketing</option>
                    <option value="meta-ads">Meta Ads & PPC</option>
                    <option value="branding">Branding & Identity</option>
                    <option value="seo">SEO & Analytics</option>
                    <option value="content">Content Creation</option>
                    <option value="website">Website Development</option>
                  </select>
                </div>
              </div>

              <div className="mb-5">
                <label className="text-sm font-medium text-foreground mb-1.5 block">Message *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project..."
                  required
                  maxLength={1000}
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-brand text-primary-foreground py-4 rounded-lg font-heading font-semibold text-lg hover:opacity-90 transition-opacity disabled:opacity-50 flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <Loader2 className="animate-spin" size={20} />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>

          <div className="lg:col-span-2 flex flex-col gap-6">
            <div className="bg-gradient-brand text-primary-foreground p-8 rounded-2xl">
              <h3 className="font-heading text-xl font-semibold mb-6">Contact Information</h3>
              <div className="flex flex-col gap-5">
                <div className="flex items-start gap-3">
                  <MapPin size={20} className="shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">Office Address</p>
                    <p className="text-primary-foreground/80 text-sm">F-16, Prabhu Plaza Complex, Opp. New Jilla Panchayat, Bypass Road, Himmatnagar</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone size={20} className="shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">Phone</p>
                    <a href="tel:+916353851656" className="text-primary-foreground/80 text-sm hover:text-primary-foreground">+91 63538 51656</a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail size={20} className="shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">Email</p>
                    <a href="mailto:ingeniousgroupjn@gmail.com" className="text-primary-foreground/80 text-sm hover:text-primary-foreground">ingeniousgroupjn@gmail.com</a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Instagram size={20} className="shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">Instagram</p>
                    <a href="https://instagram.com/ingeniousgroup.in" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/80 text-sm hover:text-primary-foreground">@ingeniousgroup.in</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-card p-6 rounded-2xl shadow-card border border-border">
              <h4 className="font-heading font-semibold text-foreground mb-2">Business Hours</h4>
              <div className="text-sm text-muted-foreground space-y-1">
                <p>Monday – Saturday: 10:00 AM – 7:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
