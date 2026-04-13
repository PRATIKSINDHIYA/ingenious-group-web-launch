const portfolioItems = [
  { img: "/images/branding-creative.jpg", title: "Brand Identity Design", category: "Branding" },
  { img: "/images/services-social-media.jpg", title: "Social Media Campaign", category: "Digital Marketing" },
  { img: "/images/results-analytics.jpg", title: "Analytics Dashboard", category: "Performance Marketing" },
];

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our Work</span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mt-2 mb-4">
            Recent <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Take a look at some of our recent work that showcases our creative capabilities.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {portfolioItems.map((item, idx) => (
            <div
              key={item.title}
              className="group relative overflow-hidden rounded-2xl shadow-card hover:shadow-brand transition-all duration-300 animate-fade-up"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div>
                  <span className="text-primary-foreground/70 text-xs font-medium uppercase tracking-wider">{item.category}</span>
                  <h3 className="text-primary-foreground font-heading font-semibold text-lg">{item.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
