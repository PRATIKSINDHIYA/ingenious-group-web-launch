import { Zap, Share2, Palette, TrendingUp, Users, Megaphone } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";
import AnimatedCard from "@/components/AnimatedCard";
import ImageGallery from "@/components/ImageGallery";

const Services = () => {
  const services = [
    {
      icon: Share2,
      title: "Social Media Management",
      description: "Strategic content creation and community engagement across all major platforms.",
      features: ["Content Strategy", "Daily Posting", "Community Engagement", "Analytics Reports"],
      delay: 0.1,
    },
    {
      icon: Megaphone,
      title: "Meta Ads Management",
      description: "Targeted advertising campaigns on Facebook and Instagram to reach your ideal customers.",
      features: ["Campaign Setup", "Audience Targeting", "Budget Optimization", "Performance Tracking"],
      delay: 0.2,
    },
    {
      icon: Palette,
      title: "Brand Design & Identity",
      description: "Complete branding solutions from logo design to brand guidelines.",
      features: ["Logo Design", "Brand Guidelines", "Color Palette", "Typography Selection"],
      delay: 0.3,
    },
    {
      icon: TrendingUp,
      title: "Performance Marketing",
      description: "Data-driven marketing strategies focused on measurable results and ROI.",
      features: ["Conversion Optimization", "A/B Testing", "Performance Analytics", "ROI Tracking"],
      delay: 0.4,
    },
    {
      icon: Zap,
      title: "Content Creation",
      description: "Professional video, photography, and copywriting for all your marketing needs.",
      features: ["Video Production", "Photography", "Copywriting", "Social Graphics"],
      delay: 0.5,
    },
    {
      icon: Users,
      title: "Influencer Marketing",
      description: "Connect your brand with relevant influencers for authentic engagement.",
      features: ["Influencer Outreach", "Campaign Management", "Content Collaboration", "Performance Metrics"],
      delay: 0.6,
    },
  ];

  const galleryItems = [
    { id: "1", src: "/images/hero-digital-marketing.jpg", alt: "Digital Marketing Strategy", title: "Digital Marketing" },
    { id: "2", src: "/images/services-social-media.jpg", alt: "Social Media Marketing", title: "Social Media" },
    { id: "3", src: "/images/branding-creative.jpg", alt: "Branding & Creative", title: "Branding" },
    { id: "4", src: "/images/results-analytics.jpg", alt: "Analytics & Results", title: "Analytics" },
    { id: "5", src: "/images/office-team.jpg", alt: "Our Team at Work", title: "Our Team" },
    { id: "6", src: "/images/hero-digital-marketing.jpg", alt: "Strategy Session", title: "Strategy" },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 bg-gradient-to-b from-secondary to-background">
        <div className="container mx-auto">
          <AnimatedCard animation="fade-up">
            <h1 className="font-heading text-5xl lg:text-6xl font-bold text-foreground text-center mb-6">
              Our <span className="text-gradient">Services</span>
            </h1>
            <p className="text-muted-foreground text-center text-lg max-w-2xl mx-auto">
              Comprehensive digital marketing solutions tailored to help your business grow and thrive in the digital landscape.
            </p>
          </AnimatedCard>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <ServiceCard
                key={idx}
                icon={service.icon}
                title={service.title}
                description={service.description}
                features={service.features}
                delay={service.delay}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Image Gallery Section */}
      <section className="py-20 px-4 bg-secondary/50">
        <div className="container mx-auto">
          <AnimatedCard animation="fade-up">
            <h2 className="font-heading text-4xl font-bold text-center mb-4 text-foreground">
              Our Work in Action
            </h2>
            <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
              See how we bring digital marketing strategies to life through creative execution and data-driven results.
            </p>
          </AnimatedCard>
          
          <ImageGallery items={galleryItems} columns={3} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-brand">
        <div className="container mx-auto text-center">
          <AnimatedCard animation="zoom-in">
            <h2 className="font-heading text-4xl font-bold text-primary-foreground mb-4">
              Ready to Grow Your Business?
            </h2>
            <p className="text-primary-foreground/90 text-lg mb-8 max-w-2xl mx-auto">
              Let&apos;s discuss which services are right for your unique business needs.
            </p>
            <a
              href="/contact"
              className="inline-block bg-primary-foreground text-primary px-8 py-4 rounded-lg font-heading font-semibold hover:scale-105 transition-transform"
            >
              Schedule a Consultation
            </a>
          </AnimatedCard>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
