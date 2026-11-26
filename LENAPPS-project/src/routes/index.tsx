import {
  ArrowDown,
  ArrowUpRight,
  BarChart3,
  Code2,
  Headset,
  Layers3,
  Lightbulb,
  ShoppingCart,
} from "lucide-react";
import { createFileRoute } from "@tanstack/react-router";

import lenappsHero from "@/assets/lenapps-pos-hero.jpg";

const products = [
  {
    number: "01",
    icon: ShoppingCart,
    title: "POS System",
    description: "Make your business operations more efficient with our advanced POS system.",
    features: ["Sales Management", "Inventory Management", "Reporting and Analytics"],
  },
  {
    number: "02",
    icon: Code2,
    title: "Custom Software",
    description: "Custom software development tailored to your specific business needs.",
    features: ["Web Applications", "Mobile Applications", "Enterprise Solutions"],
  },
];

const services = [
  {
    number: "01",
    icon: Layers3,
    title: "Software Development",
    description: "We create high-quality software solutions that meet your business requirements.",
  },
  {
    number: "02",
    icon: Lightbulb,
    title: "IT Consulting",
    description:
      "Our experts provide strategic IT consulting to help you make informed technology decisions.",
  },
  {
    number: "03",
    icon: BarChart3,
    title: "System Integration",
    description:
      "We ensure seamless integration of various systems to enhance your business processes.",
  },
  {
    number: "04",
    icon: Headset,
    title: "Technical Support",
    description: "Our dedicated support team is available to assist you with any technical issues.",
  },
];

const navigation = [
  { label: "Products", href: "#products" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "LENAPPS | Software Solutions" },
      {
        name: "description",
        content:
          "LENAPPS creates POS systems, custom software, and technology services that help businesses grow and innovate.",
      },
      { property: "og:title", content: "LENAPPS | Software Solutions" },
      {
        property: "og:description",
        content:
          "POS systems, custom software, and expert technology services for growing businesses.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>

      <header className="site-header">
        <a className="brand" href="#home" aria-label="LENAPPS home">
          <span className="brand-mark" aria-hidden="true">
            L
          </span>
          <span>LENAPPS</span>
        </a>

        <nav className="site-nav" aria-label="Main navigation">
          {navigation.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <a className="header-contact" href="#contact">
          <span>Let&apos;s talk</span>
          <ArrowUpRight aria-hidden="true" size={17} />
        </a>
      </header>

      <main id="main-content">
        <section className="hero" id="home" aria-labelledby="hero-title">
          <img
            className="hero-image"
            src={lenappsHero}
            alt="Touchscreen point-of-sale setup at a modern retail counter"
            width={1600}
            height={1024}
            fetchPriority="high"
          />
          <div className="hero-shade" aria-hidden="true" />

          <div className="hero-content">
            <p className="eyebrow">
              <span className="eyebrow-mark" aria-hidden="true" />
              Software solutions
            </p>
            <h1 id="hero-title">
              Welcome to <span>LENAPPS</span>
            </h1>
            <p className="hero-description">
              As LENAPPS, we are dedicated to providing cutting-edge software solutions that drive
              business growth and innovation.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#products">
                Explore our solutions
                <ArrowDown aria-hidden="true" size={17} />
              </a>
              <a className="text-link hero-link" href="#contact">
                Talk to our team
                <ArrowUpRight aria-hidden="true" size={17} />
              </a>
            </div>
          </div>

          <div className="hero-caption" aria-hidden="true">
            <span>01 / Business software</span>
            <span>POS systems · Custom software</span>
          </div>
        </section>

        <section className="section section-products" id="products" aria-labelledby="products-title">
          <div className="section-heading">
            <div>
              <p className="eyebrow">What we build</p>
              <h2 id="products-title">Tools for the way business works.</h2>
            </div>
            <p className="section-intro">
              From daily sales to custom digital projects, find software shaped around your
              business needs.
            </p>
          </div>

          <div className="products-grid">
            {products.map((product) => {
              const Icon = product.icon;

              return (
                <article className="product-card" key={product.number}>
                  <div className="product-card-top">
                    <span className="item-number">{product.number}</span>
                    <span className="product-icon" aria-hidden="true">
                      <Icon size={21} strokeWidth={1.8} />
                    </span>
                  </div>
                  <h3>{product.title}</h3>
                  <p>{product.description}</p>
                  <ul className="feature-list">
                    {product.features.map((feature) => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        </section>

        <section className="section section-services" id="services" aria-labelledby="services-title">
          <div className="section-heading section-heading-compact">
            <div>
              <p className="eyebrow">How we help</p>
              <h2 id="services-title">From first idea to everyday support.</h2>
            </div>
          </div>

          <div className="services-grid">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <article className="service-item" key={service.number}>
                  <div className="service-item-top">
                    <span className="item-number">{service.number}</span>
                    <Icon aria-hidden="true" size={20} strokeWidth={1.8} />
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </article>
              );
            })}
          </div>
        </section>

        <section className="about-section" id="about" aria-labelledby="about-title">
          <div className="about-index" aria-hidden="true">
            <span>04</span>
            <span className="about-index-line" />
            <span>LENAPPS</span>
          </div>
          <div className="about-copy">
            <p className="eyebrow">About LENAPPS</p>
            <h2 id="about-title">Technology that moves business forward.</h2>
            <p>
              Learn more about our mission, values, and the team behind LENAPPS, dedicated to
              delivering exceptional software solutions.
            </p>
            <a className="text-link" href="#contact">
              Start a conversation
              <ArrowUpRight aria-hidden="true" size={17} />
            </a>
          </div>
          <div className="about-note" aria-hidden="true">
            <span className="about-note-mark">L</span>
            <span>Ideas into useful software.</span>
          </div>
        </section>

        <section className="contact-section" id="contact" aria-labelledby="contact-title">
          <div className="contact-copy">
            <p className="eyebrow">Get in touch</p>
            <h2 id="contact-title">Let&apos;s build something useful.</h2>
            <p>Tell us what you need to make easier. We&apos;re ready to hear from you.</p>
          </div>
          <div className="contact-options">
            <a className="contact-link" href="mailto:stocklendix2005@gmail.com">
              <span className="contact-label">Email</span>
              <span className="contact-value">
                stocklendix2005@gmail.com
                <ArrowUpRight aria-hidden="true" size={18} />
              </span>
            </a>
            <a className="contact-link" href="tel:254728868339">
              <span className="contact-label">Call</span>
              <span className="contact-value">
                +254 728 868 339
                <ArrowUpRight aria-hidden="true" size={18} />
              </span>
            </a>
            <a
              className="contact-link"
              href="https://wa.me/254728868339"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="contact-label">WhatsApp</span>
              <span className="contact-value">
                Send a message
                <ArrowUpRight aria-hidden="true" size={18} />
              </span>
            </a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <a className="brand brand-footer" href="#home" aria-label="LENAPPS back to top">
          <span className="brand-mark" aria-hidden="true">
            L
          </span>
          <span>LENAPPS</span>
        </a>
        <p>© 2026 LENAPPS. All rights reserved.</p>
        <a className="footer-top-link" href="#home">
          Back to top
          <ArrowUpRight aria-hidden="true" size={16} />
        </a>
      </footer>
    </div>
  );
}