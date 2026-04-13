import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedCard from "@/components/AnimatedCard";
import ImageGallery from "@/components/ImageGallery";

const Portfolio = () => {
  const navigate = useNavigate();
  const portfolioItems = [
    {
      id: "1",
      src: "/images/hero-digital-marketing.jpg",
      alt: "E-commerce Brand Growth",
      title: "E-commerce Brand Growth",
    },
    {
      id: "2",
      src: "/images/services-social-media.jpg",
      alt: "Social Media Campaign",
      title: "Social Media Campaign",
    },
    {
      id: "3",
      src: "/images/branding-creative.jpg",
      alt: "Brand Identity Design",
      title: "Brand Identity Design",
    },
    {
      id: "4",
      src: "/images/results-analytics.jpg",
      alt: "Influencer Marketing",
      title: "Influencer Marketing",
    },
    {
      id: "5",
      src: "/images/office-team.jpg",
      alt: "Content Marketing Strategy",
      title: "Content Marketing",
    },
    {
      id: "6",
      src: "/images/hero-digital-marketing.jpg",
      alt: "Paid Advertising Campaign",
      title: "Paid Ads Campaign",
    },
  ];

  const caseStudies = [
    {
      title: "Local Business Growth",
      description: "Increased online visibility for a local restaurant chain by 300%",
      metrics: ["300% Traffic Growth", "150% Social Followers", "2x Revenue"],
      delay: 0.1,
    },
    {
      title: "E-Commerce Success",
      description: "Boosted sales for an online retail business through targeted campaigns",
      metrics: ["250% Sales Increase", "45% ROAS", "10k New Customers"],
      delay: 0.2,
    },
    {
      title: "Brand Launch",
      description: "Successfully launched and established brand presence for a startup",
      metrics: ["50k Social Followers", "1M+ Impressions", "Strong Brand Recall"],
      delay: 0.3,
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 bg-gradient-to-b from-secondary to-background">
        <div className="container mx-auto">
          <AnimatedCard animation="fade-up">
            <h1 className="font-heading text-5xl lg:text-6xl font-bold text-foreground text-center mb-6">
              Our <span className="text-gradient">Portfolio</span>
            </h1>
            <p className="text-muted-foreground text-center text-lg max-w-2xl mx-auto">
              Explore our successful projects and the results we&apos;ve delivered for our clients across various industries.
            </p>
          </AnimatedCard>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <AnimatedCard animation="fade-up">
            <h2 className="font-heading text-4xl font-bold text-center mb-12 text-foreground">
              Featured Projects
            </h2>
          </AnimatedCard>
          
          <ImageGallery items={portfolioItems} columns={3} />
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20 px-4 bg-secondary/50">
        <div className="container mx-auto">
          <AnimatedCard animation="fade-up">
            <h2 className="font-heading text-4xl font-bold text-center mb-12 text-foreground">
              Case Studies
            </h2>
          </AnimatedCard>

          <div className="grid md:grid-cols-3 gap-8">
            {caseStudies.map((study, idx) => (
              <AnimatedCard
                key={idx}
                animation="fade-up"
                delay={study.delay}
                className="bg-card border border-border rounded-xl p-8 hover-lift"
              >
                <h3 className="font-heading text-2xl font-bold text-foreground mb-3">
                  {study.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {study.description}
                </p>
                <div className="space-y-2">
                  {study.metrics.map((metric, midx) => (
                    <div key={midx} className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-primary rounded-full" />
                      <span className="font-semibold text-foreground">{metric}</span>
                    </div>
                  ))}
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <AnimatedCard animation="fade-up">
            <h2 className="font-heading text-4xl font-bold text-center mb-12 text-foreground">
              Our Creative Process
            </h2>
          </AnimatedCard>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Discovery", description: "Understanding your goals and target audience" },
              { step: "02", title: "Strategy", description: "Creating a tailored marketing plan" },
              { step: "03", title: "Execution", description: "Bringing the plan to life with precision" },
              { step: "04", title: "Optimization", description: "Continuous improvement and scaling" },
            ].map((item, idx) => (
              <AnimatedCard
                key={idx}
                animation="fade-up"
                delay={0.1 * (idx + 1)}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-brand rounded-full mb-4 mx-auto">
                  <span className="font-heading text-2xl font-bold text-primary-foreground">
                    {item.step}
                  </span>
                </div>
                <h3 className="font-heading text-xl font-bold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {item.description}
                </p>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-brand">
        <div className="container mx-auto text-center">
          <AnimatedCard animation="zoom-in">
            <h2 className="font-heading text-4xl font-bold text-primary-foreground mb-4">
              Ready for Your Success Story?
            </h2>
            <p className="text-primary-foreground/90 text-lg mb-8 max-w-2xl mx-auto">
              Let&apos;s create something amazing together. Get in touch with our team today.
            </p>
            <button
              onClick={() => navigate("/contact")}
              className="inline-block bg-primary-foreground text-primary px-8 py-4 rounded-lg font-heading font-semibold hover:scale-105 transition-transform"
            >
              Start Your Project
            </button>
          </AnimatedCard>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Portfolio;
