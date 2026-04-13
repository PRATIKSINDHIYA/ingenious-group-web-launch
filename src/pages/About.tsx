import { useNavigate } from "react-router-dom";
import { Award, Lightbulb, Users, Target } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedCard from "@/components/AnimatedCard";

const About = () => {
  const navigate = useNavigate();
  const values = [
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We stay ahead of digital trends to bring cutting-edge solutions to our clients.",
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Your success is our success. We work closely with you as true partners.",
    },
    {
      icon: Target,
      title: "Results-Driven",
      description: "Every strategy is backed by data and focused on delivering measurable results.",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We hold ourselves to the highest standards in every project we undertake.",
    },
  ];

  const team = [
    {
      name: "Priyanka Singh",
      role: "Founder & Marketing Director",
      image: "/images/office-team.jpg",
    },
    {
      name: "Raj Patel",
      role: "Social Media Manager",
      image: "/images/services-social-media.jpg",
    },
    {
      name: "Maya Sharma",
      role: "Content Strategist",
      image: "/images/branding-creative.jpg",
    },
    {
      name: "Dev Kumar",
      role: "Analytics Specialist",
      image: "/images/results-analytics.jpg",
    },
  ];

  const stats = [
    { number: "50+", label: "Happy Clients" },
    { number: "200+", label: "Projects Delivered" },
    { number: "3+", label: "Years Experience" },
    { number: "100%", label: "Satisfaction Rate" },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 bg-gradient-to-b from-secondary to-background">
        <div className="container mx-auto">
          <AnimatedCard animation="fade-up">
            <h1 className="font-heading text-5xl lg:text-6xl font-bold text-foreground text-center mb-6">
              About <span className="text-gradient">Ingenious Group</span>
            </h1>
            <p className="text-muted-foreground text-center text-lg max-w-2xl mx-auto">
              A creative digital marketing agency dedicated to transforming businesses through innovative strategies and authentic connections.
            </p>
          </AnimatedCard>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <AnimatedCard animation="fade-up" className="flex items-center">
              <img
                src="/images/office-team.jpg"
                alt="Our Team"
                className="w-full rounded-xl hover:scale-105 transition-transform duration-500"
              />
            </AnimatedCard>

            <AnimatedCard animation="slide-left" delay={0.2}>
              <h2 className="font-heading text-4xl font-bold text-foreground mb-4">
                Our Story
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Founded in 2021, Ingenious Group emerged from a passion for helping local businesses thrive in the digital age. What started as a small team of creative professionals has grown into a trusted partner for over 50+ businesses across Himmatnagar and beyond.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We believe that every business has a unique story to tell. Our mission is to help you tell that story in a way that resonates with your audience and drives tangible results.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Today, we&apos;re proud to be recognized as a leading digital marketing agency, known for our innovative approaches, data-driven strategies, and most importantly, our clients&apos; success.
              </p>
            </AnimatedCard>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 bg-gradient-brand">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <AnimatedCard
                key={idx}
                animation="zoom-in"
                delay={0.1 * (idx + 1)}
                className="text-center"
              >
                <div className="font-heading text-4xl font-bold text-primary-foreground mb-2">
                  {stat.number}
                </div>
                <div className="text-primary-foreground/80 font-medium">
                  {stat.label}
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <AnimatedCard animation="fade-up">
            <h2 className="font-heading text-4xl font-bold text-center text-foreground mb-12">
              Our Values
            </h2>
          </AnimatedCard>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, idx) => {
              const Icon = value.icon;
              return (
                <AnimatedCard
                  key={idx}
                  animation="fade-up"
                  delay={0.1 * (idx + 1)}
                  className="text-center p-6 bg-secondary rounded-xl hover-lift"
                >
                  <div className="w-12 h-12 bg-gradient-brand rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Icon className="text-primary-foreground" size={24} />
                  </div>
                  <h3 className="font-heading text-lg font-bold text-foreground mb-2">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {value.description}
                  </p>
                </AnimatedCard>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 bg-secondary/50">
        <div className="container mx-auto">
          <AnimatedCard animation="fade-up">
            <h2 className="font-heading text-4xl font-bold text-center text-foreground mb-12">
              Meet Our Team
            </h2>
          </AnimatedCard>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, idx) => (
              <AnimatedCard
                key={idx}
                animation="fade-up"
                delay={0.1 * (idx + 1)}
                className="text-center group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-lg mb-4 aspect-square bg-muted">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-brand opacity-0 group-hover:opacity-90 transition-opacity flex items-center justify-center">
                    <span className="text-primary-foreground font-semibold text-center px-4">
                      Let&apos;s Connect
                    </span>
                  </div>
                </div>
                <h3 className="font-heading text-lg font-bold text-foreground mb-1">
                  {member.name}
                </h3>
                <p className="text-primary text-sm font-medium">
                  {member.role}
                </p>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <AnimatedCard animation="fade-up">
            <h2 className="font-heading text-4xl font-bold text-center text-foreground mb-12">
              Our Approach
            </h2>
          </AnimatedCard>

          <div className="bg-card border border-border rounded-xl p-8 md:p-12">
            <div className="grid md:grid-cols-3 gap-8">
              <AnimatedCard animation="fade-up" delay={0.1}>
                <div className="text-4xl font-heading font-bold text-primary mb-4">Listen</div>
                <p className="text-muted-foreground leading-relaxed">
                  We start by deeply understanding your business goals, challenges, and target audience through detailed discovery sessions.
                </p>
              </AnimatedCard>

              <AnimatedCard animation="fade-up" delay={0.2}>
                <div className="text-4xl font-heading font-bold text-primary mb-4">Create</div>
                <p className="text-muted-foreground leading-relaxed">
                  Our creative team develops strategies and content specifically tailored to your unique needs and market position.
                </p>
              </AnimatedCard>

              <AnimatedCard animation="fade-up" delay={0.3}>
                <div className="text-4xl font-heading font-bold text-primary mb-4">Deliver</div>
                <p className="text-muted-foreground leading-relaxed">
                  We execute with precision, monitor results continuously, and optimize for maximum impact and ROI.
                </p>
              </AnimatedCard>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-brand">
        <div className="container mx-auto text-center">
          <AnimatedCard animation="zoom-in">
            <h2 className="font-heading text-4xl font-bold text-primary-foreground mb-4">
              Let&apos;s Work Together
            </h2>
            <p className="text-primary-foreground/90 text-lg mb-8 max-w-2xl mx-auto">
              Join the 50+ businesses that have transformed their digital presence with Ingenious Group.
            </p>
            <button
              onClick={() => navigate("/contact")}
              className="inline-block bg-primary-foreground text-primary px-8 py-4 rounded-lg font-heading font-semibold hover:scale-105 transition-transform"
            >
              Start a Conversation
            </button>
          </AnimatedCard>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
