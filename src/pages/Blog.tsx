import { Calendar, User, ArrowRight } from "lucide-react";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedCard from "@/components/AnimatedCard";

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const articles = [
    {
      id: 1,
      title: "The Ultimate Guide to Social Media Marketing in 2024",
      excerpt: "Learn the latest strategies and tools to maximize your social media presence and engagement.",
      content: "Social media has become the backbone of digital marketing...",
      author: "Priyanka Singh",
      date: "March 15, 2024",
      category: "Social Media",
      image: "/images/services-social-media.jpg",
      readTime: "5 min read",
    },
    {
      id: 2,
      title: "Mastering Meta Ads: Strategies for Maximum ROI",
      excerpt: "Discover proven techniques to create high-converting Meta ad campaigns that drive real results.",
      content: "Meta ads are one of the most powerful advertising platforms...",
      author: "Dev Kumar",
      date: "March 10, 2024",
      category: "Advertising",
      image: "/images/results-analytics.jpg",
      readTime: "7 min read",
    },
    {
      id: 3,
      title: "Brand Design Essentials: Creating a Memorable Identity",
      excerpt: "Everything you need to know about building a strong brand identity that resonates with your audience.",
      content: "A strong brand identity is crucial for business success...",
      author: "Maya Sharma",
      date: "March 5, 2024",
      category: "Branding",
      image: "/images/branding-creative.jpg",
      readTime: "6 min read",
    },
    {
      id: 4,
      title: "Content Marketing Trends That Will Dominate in 2024",
      excerpt: "Stay ahead of the curve with these emerging content marketing trends and strategies.",
      content: "Content marketing continues to evolve rapidly...",
      author: "Raj Patel",
      date: "February 28, 2024",
      category: "Content",
      image: "/images/hero-digital-marketing.jpg",
      readTime: "5 min read",
    },
    {
      id: 5,
      title: "Analytics Deep Dive: Understanding Your Marketing Metrics",
      excerpt: "Learn how to interpret marketing data and make data-driven decisions for your business.",
      content: "Numbers tell a story - if you know how to read them...",
      author: "Dev Kumar",
      date: "February 20, 2024",
      category: "Analytics",
      image: "/images/results-analytics.jpg",
      readTime: "8 min read",
    },
    {
      id: 6,
      title: "Influencer Marketing: Building Authentic Brand Partnerships",
      excerpt: "Explore how to find the right influencers and create campaigns that feel genuine.",
      content: "Influencer marketing has transformed the digital landscape...",
      author: "Priyanka Singh",
      date: "February 15, 2024",
      category: "Marketing",
      image: "/images/office-team.jpg",
      readTime: "6 min read",
    },
  ];

  const categories = ["All", "Social Media", "Advertising", "Branding", "Content", "Analytics", "Marketing"];

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 bg-gradient-to-b from-secondary to-background">
        <div className="container mx-auto">
          <AnimatedCard animation="fade-up">
            <h1 className="font-heading text-5xl lg:text-6xl font-bold text-foreground text-center mb-6">
              Our <span className="text-gradient">Blog</span>
            </h1>
            <p className="text-muted-foreground text-center text-lg max-w-2xl mx-auto">
              Stay updated with the latest digital marketing trends, tips, and insights from our team of experts.
            </p>
          </AnimatedCard>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 px-4 bg-secondary/50 sticky top-16 z-40">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category, idx) => (
              <AnimatedCard key={idx} animation="fade-up" delay={0.05 * idx}>
                <button className={`px-4 py-2 rounded-full font-medium transition-all ${
                  category === "All"
                    ? "bg-gradient-brand text-primary-foreground"
                    : "bg-card border border-border text-foreground hover:border-primary"
                }`}>
                  {category}
                </button>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <AnimatedCard animation="scale-in" className="bg-card border border-border rounded-xl overflow-hidden">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="relative overflow-hidden aspect-square md:aspect-auto md:h-full">
                <img
                  src={articles[0].image}
                  alt={articles[0].title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-8">
                <div className="flex flex-wrap gap-3 mb-4">
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                    {articles[0].category}
                  </span>
                  <span className="px-3 py-1 bg-secondary text-foreground rounded-full text-sm font-medium">
                    Featured
                  </span>
                </div>
                <h2 className="font-heading text-3xl font-bold text-foreground mb-3">
                  {articles[0].title}
                </h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {articles[0].excerpt}
                </p>
                <div className="flex flex-wrap items-center gap-4 mb-6 text-muted-foreground text-sm">
                  <div className="flex items-center gap-2">
                    <User size={16} />
                    {articles[0].author}
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar size={16} />
                    {articles[0].date}
                  </div>
                  <span>{articles[0].readTime}</span>
                </div>
                <button className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all">
                  Read Article <ArrowRight size={20} />
                </button>
              </div>
            </div>
          </AnimatedCard>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-20 px-4 bg-secondary/50">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.slice(1).map((article, idx) => (
              <AnimatedCard
                key={article.id}
                animation="fade-up"
                delay={0.1 * (idx + 1)}
                className="bg-card border border-border rounded-xl overflow-hidden hover-lift flex flex-col"
              >
                <div className="relative overflow-hidden aspect-video">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="px-2 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">
                      {article.category}
                    </span>
                  </div>
                  <h3 className="font-heading text-lg font-bold text-foreground mb-2 line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 flex-grow">
                    {article.excerpt}
                  </p>
                  <div className="flex flex-wrap items-center gap-2 text-muted-foreground text-xs mb-4">
                    <span className="flex items-center gap-1">
                      <User size={14} /> {article.author}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar size={14} /> {article.date}
                    </span>
                  </div>
                  <button className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:gap-3 transition-all">
                    Read More <ArrowRight size={16} />
                  </button>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <AnimatedCard animation="scale-in" className="bg-gradient-brand rounded-xl p-8 md:p-12 text-center max-w-2xl mx-auto">
            <h2 className="font-heading text-3xl font-bold text-primary-foreground mb-3">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-primary-foreground/90 mb-8">
              Get the latest marketing tips and industry insights delivered straight to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-primary-foreground/10 text-primary-foreground placeholder:text-primary-foreground/50 border border-primary-foreground/20 focus:outline-none focus:border-primary-foreground/50 transition-all"
              />
              <button
                type="submit"
                className="px-8 py-3 bg-primary-foreground text-primary rounded-lg font-semibold hover:scale-105 transition-transform whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
            <p className="text-primary-foreground/70 text-sm mt-4">
              No spam, just great content. Unsubscribe anytime.
            </p>
          </AnimatedCard>
        </div>
      </section>

      {/* Related Resources */}
      <section className="py-20 px-4 bg-secondary/50">
        <div className="container mx-auto">
          <AnimatedCard animation="fade-up">
            <h2 className="font-heading text-4xl font-bold text-center text-foreground mb-12">
              Additional Resources
            </h2>
          </AnimatedCard>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                title: "Marketing Toolkit",
                description: "Free tools and templates for your digital marketing campaigns",
                icon: "📦",
              },
              {
                title: "Case Studies",
                description: "Detailed analysis of our most successful client projects",
                icon: "📊",
              },
              {
                title: "Webinars",
                description: "Join us for live sessions on digital marketing topics",
                icon: "🎥",
              },
            ].map((resource, idx) => (
              <AnimatedCard
                key={idx}
                animation="fade-up"
                delay={0.1 * (idx + 1)}
                className="bg-card border border-border rounded-xl p-6 text-center hover-lift"
              >
                <div className="text-4xl mb-3">{resource.icon}</div>
                <h3 className="font-heading font-bold text-foreground mb-2">
                  {resource.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {resource.description}
                </p>
                <button className="inline-block text-primary font-semibold text-sm hover:underline">
                  Explore →
                </button>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
