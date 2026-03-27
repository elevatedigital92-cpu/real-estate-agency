"use client";

import Image from "next/image";

function smoothScrollToSection(sectionId: string) {
  const element = document.getElementById(sectionId);
  if (!element) return;

  const headerOffset = 90;
  const targetPosition =
    element.getBoundingClientRect().top + window.pageYOffset - headerOffset;

  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  const duration = 1200;
  let startTime: number | null = null;

  function easeInOutCubic(t: number) {
    return t < 0.5
      ? 4 * t * t * t
      : 1 - Math.pow(-2 * t + 2, 3) / 2;
  }

  function animation(currentTime: number) {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const progress = Math.min(timeElapsed / duration, 1);
    const ease = easeInOutCubic(progress);

    window.scrollTo({
      top: startPosition + distance * ease,
      behavior: "auto",
    });

    if (timeElapsed < duration) {
      requestAnimationFrame(animation);
    }
  }

  requestAnimationFrame(animation);
}

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <FeaturedProperties />
      <WhyChooseUs />
      <AboutSection />
      <ContactCTA />
      <Footer />
    </main>
  );
}

function Header() {
  return (
    <header
      className="sticky top-0 z-50 border-b backdrop-blur"
      style={{
        borderColor: "var(--border)",
        background: "rgba(255,255,255,0.92)",
      }}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <div className="flex items-center gap-3">
          <div
            className="flex h-11 w-11 items-center justify-center rounded-2xl text-sm font-black"
            style={{
              background: "var(--primary)",
              color: "var(--primary-foreground)",
            }}
          >
            PN
          </div>

          <div>
            <h2 className="m-0 text-xl font-extrabold leading-tight">
              PrimeNest Realty
            </h2>
            <p
              className="text-xs font-medium"
              style={{ color: "var(--muted-foreground)" }}
            >
              Luxury Real Estate Agency
            </p>
          </div>
        </div>

        <nav
          className="hidden items-center gap-6 md:flex"
          style={{ color: "var(--muted-foreground)" }}
        >
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              smoothScrollToSection("home");
            }}
            className="cursor-pointer font-semibold"
          >
            Home
          </a>

          <a
            href="#properties"
            onClick={(e) => {
              e.preventDefault();
              smoothScrollToSection("properties");
            }}
            className="cursor-pointer font-semibold"
          >
            Properties
          </a>

          <a
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              smoothScrollToSection("about");
            }}
            className="cursor-pointer font-semibold"
          >
            About
          </a>

          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              smoothScrollToSection("contact");
            }}
            className="cursor-pointer font-semibold"
          >
            Contact
          </a>
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <div className="text-right">
            <p
              className="text-xs font-semibold"
              style={{ color: "var(--muted-foreground)" }}
            >
              Call Us
            </p>

            <a href="tel:+971501234567" className="text-sm font-extrabold">
              +971 50 123 4567
            </a>
          </div>

          <a
            href="tel:+971501234567"
            className="rounded-xl px-5 py-3 font-bold inline-block"
            style={{
              background: "var(--secondary)",
              color: "var(--secondary-foreground)",
            }}
          >
            Book Viewing
          </a>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="scroll-mt-24 px-5 py-16 md:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-2">
        <div>
          <p
            className="mb-3 text-sm font-extrabold tracking-[0.2em]"
            style={{ color: "var(--secondary)" }}
          >
            TRUSTED REAL ESTATE AGENCY
          </p>

          <h1 className="mb-5 text-4xl font-black leading-tight md:text-6xl">
            Find Luxury Properties That Match Your Lifestyle
          </h1>

          <p
            className="mb-6 max-w-xl text-lg leading-8"
            style={{ color: "var(--muted-foreground)" }}
          >
            We help buyers, investors, and families discover premium homes,
            apartments, and commercial spaces in the most desirable locations.
          </p>

          <div className="mb-8 flex flex-wrap gap-3">
          <a
            href="#properties"
            className="rounded-xl px-6 py-3 font-bold inline-block"
            style={{
            background: "var(--primary)",
            color: "var(--primary-foreground)",
  }}
>
  Browse Listings
</a>

       <a
         href="#contact"
        className="rounded-xl px-6 py-3 font-bold inline-block"
        style={{
        background: "var(--secondary)",
        color: "var(--secondary-foreground)",
  }}
>
  Book Consultation
</a>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div
              className="rounded-2xl border p-4"
              style={{
                background: "var(--card)",
                borderColor: "var(--border)",
              }}
            >
              <h3 className="text-2xl font-black">250+</h3>
              <p
                className="mt-1 text-sm"
                style={{ color: "var(--muted-foreground)" }}
              >
                Premium Listings
              </p>
            </div>

            <div
              className="rounded-2xl border p-4"
              style={{
                background: "var(--card)",
                borderColor: "var(--border)",
              }}
            >
              <h3 className="text-2xl font-black">95+</h3>
              <p
                className="mt-1 text-sm"
                style={{ color: "var(--muted-foreground)" }}
              >
                Happy Clients
              </p>
            </div>

            <div
              className="rounded-2xl border p-4"
              style={{
                background: "var(--card)",
                borderColor: "var(--border)",
              }}
            >
              <h3 className="text-2xl font-black">12+</h3>
              <p
                className="mt-1 text-sm"
                style={{ color: "var(--muted-foreground)" }}
              >
                Years Experience
              </p>
            </div>
          </div>
        </div>

        <div className="relative">
          <div
            className="min-h-[520px] rounded-[28px] border p-5"
            style={{
              background: "var(--muted)",
              borderColor: "var(--border)",
            }}
          >
            <div
              className="mb-5 rounded-2xl border p-4"
              style={{
                background: "var(--card)",
                borderColor: "var(--border)",
              }}
            >
              <div className="grid gap-3 md:grid-cols-3">
                <div>
                  <p
                    className="mb-2 text-sm font-semibold"
                    style={{ color: "var(--muted-foreground)" }}
                  >
                    Location
                  </p>
                  <div className="rounded-xl border px-3 py-3 text-sm"
                    style={{ borderColor: "var(--border)" }}>
                    Dubai Marina
                  </div>
                </div>

                <div>
                  <p
                    className="mb-2 text-sm font-semibold"
                    style={{ color: "var(--muted-foreground)" }}
                  >
                    Property Type
                  </p>
                  <div className="rounded-xl border px-3 py-3 text-sm"
                    style={{ borderColor: "var(--border)" }}>
                    Apartment
                  </div>
                </div>

                <div>
                  <p
                    className="mb-2 text-sm font-semibold"
                    style={{ color: "var(--muted-foreground)" }}
                  >
                    Budget
                  </p>
                  <div className="rounded-xl border px-3 py-3 text-sm"
                    style={{ borderColor: "var(--border)" }}>
                    $500k - $1M
                  </div>
                </div>
              </div>

              <button
                className="mt-4 w-full rounded-xl px-5 py-3 font-bold"
                style={{
                  background: "var(--primary)",
                  color: "var(--primary-foreground)",
                }}
              >
                Search Property
              </button>
            </div>

<div
  className="relative overflow-hidden rounded-[24px] border min-h-[360px]"
  style={{
    background: "var(--card)",
    borderColor: "var(--border)",
  }}
>
  <Image
    src="/images/hero-property.jpg"
    alt="Luxury property"
    fill
    className="object-cover"
  />
</div>

          </div>
        </div>
      </div>
    </section>
  );
}
function FeaturedProperties() {
 const properties = [
  {
    id: 1,
    title: "Elite Palm Villa",
    location: "Palm Jumeirah, Dubai",
    badge: "For Sale",
    details: "4 Beds · 5 Baths · 3200 sqft",
    price: "$850,000",
    image: "/images/property-1.jpg",
  },
  {
    id: 2,
    title: "Modern Downtown Apartment",
    location: "Downtown Dubai",
    badge: "Hot Deal",
    details: "3 Beds · 3 Baths · 1800 sqft",
    price: "$520,000",
    image: "/images/property-2.jpg",
  },
  {
    id: 3,
    title: "Premium Commercial Space",
    location: "Business Bay, Dubai",
    badge: "For Lease",
    details: "2400 sqft",
    price: "$1,100,000",
    image: "/images/property-3.jpg",
  },
  {
    id: 4,
    title: "Beachfront Penthouse",
    location: "Dubai Marina",
    badge: "Luxury",
    details: "5 Beds · 6 Baths · 4200 sqft",
    price: "$2,400,000",
    image: "/images/property-4.jpg",
  },  
];
  return (
    <section id="properties" className="scroll-mt-24 px-5 pb-20 pt-10">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-2 text-3xl font-extrabold md:text-4xl">
          Featured Properties
        </h2>

        <p
          className="mb-8 text-lg"
          style={{ color: "var(--muted-foreground)" }}
        >
          Explore our handpicked premium listings.
        </p>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {properties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </div>
    </section>
  );
}

type Property = {
  id: number;
  title: string;
  location: string;
  badge: string;
  details: string;
  price: string;
  image: string;
};

function PropertyCard({ property }: { property: Property }) {
  return (
    <div
      className="overflow-hidden rounded-3xl border transition hover:-translate-y-1"
      style={{
        background: "var(--card)",
        borderColor: "var(--border)",
      }}
    >
      <div className="relative h-56 overflow-hidden">
  <Image
    src={property.image}
    alt={property.title}
    fill
    className="object-cover"
  />

  <span
    className="absolute left-4 top-4 rounded-full px-3 py-1 text-sm font-bold"
    style={{
      background: "var(--secondary)",
      color: "var(--secondary-foreground)",
    }}
  >
    {property.badge}
  </span>
</div>
      <div className="p-5">
        <p
          className="mb-2 text-sm font-semibold"
          style={{ color: "var(--muted-foreground)" }}
        >
          {property.location}
        </p>

        <h3 className="mb-2 text-2xl font-extrabold">{property.title}</h3>

        <p
          className="mb-4"
          style={{ color: "var(--muted-foreground)" }}
        >
          {property.details}
        </p>

        <div className="flex items-center justify-between gap-3">
          <p
            className="text-2xl font-extrabold"
            style={{ color: "var(--secondary)" }}
          >
            {property.price}  
          </p>

          <button
            className="rounded-xl px-4 py-2 font-bold"
            style={{
              background: "var(--primary)",
              color: "var(--primary-foreground)",
            }}
          >
            Explore Property
          </button>
        </div>
      </div>
    </div>
  );
}

function WhyChooseUs() {
  const features = [
    {
      id: 1,
      icon: "✓",
      title: "Luxury Property Access",
      description:
        "Every property is carefully reviewed so clients get reliable and transparent options.",     
    },
    {
      id: 2,
      icon: "★",
      title: "Market Expertise",
      description:
        "We guide buyers and investors with real market insight, pricing awareness, and location strategy.",       
      },
    {
      id: 3,
      icon: "+",
      title: "Smooth Process",
      description:
        "From discovery to final deal, our team helps make the buying and selling process easier.",
     },
  ];

  return (
    <section
      className="px-5 py-20"
      style={{ background: "var(--muted)" }}
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 max-w-2xl">
          <p
            className="mb-3 text-sm font-extrabold tracking-[0.2em]"
            style={{ color: "var(--secondary)" }}
          >
            WHY CHOOSE US
          </p>

          <h2 className="mb-4 text-3xl font-black md:text-5xl">
            Real Estate Guidance Built on Trust and Results
          </h2>

          <p
            className="text-lg leading-8"
            style={{ color: "var(--muted-foreground)" }}
          >
            We combine local market knowledge, premium property access, and a
            client-focused process to help you make smarter real estate decisions.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="rounded-3xl border p-6"
              style={{
                background: "var(--card)",
                borderColor: "var(--border)",
              }}
            >
              <div
                className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl text-lg font-black"
                style={{
                  background: "var(--primary)",
                  color: "var(--primary-foreground)",
                }}
              >
                {feature.icon}
              </div>

              <h3 className="mb-3 text-2xl font-extrabold">
                {feature.title}
              </h3>

              <p
                className="leading-7"
                style={{ color: "var(--muted-foreground)" }}
              >
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="about" className="scroll-mt-24 px-5 py-20">
      <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-2">
       <div
  className="relative min-h-[420px] overflow-hidden rounded-[28px] border"
  style={{
    borderColor: "var(--border)",
    background: "var(--muted)",
  }}
>
  <Image
    src="/images/agency-team.jpg"
    alt="Real estate agency team"
    fill
    className="object-cover"
  />
</div>


        <div>
          <p
            className="mb-3 text-sm font-extrabold tracking-[0.2em]"
            style={{ color: "var(--secondary)" }}
          >
            ABOUT OUR AGENCY
          </p>

          <h2 className="mb-5 text-3xl font-black leading-tight md:text-5xl">
            We Help Clients Buy, Sell, and Invest With Confidence
          </h2>

          <p
            className="mb-6 text-lg leading-8"
            style={{ color: "var(--muted-foreground)" }}
          >
            Our team connects buyers, investors, and families with high-value
            real estate opportunities. We focus on trusted guidance, premium
            listings, and a smoother client experience from first inquiry to
            final deal.
          </p>

          <div className="mb-6 space-y-3">
            <div className="flex items-center gap-3">
              <div
                className="flex h-10 w-10 items-center justify-center rounded-xl font-black"
                style={{
                  background: "var(--primary)",
                  color: "var(--primary-foreground)",
                }}
              >
                ✓
              </div>
              <p className="font-semibold">Personalized property consultation</p>
            </div>

            <div className="flex items-center gap-3">
              <div
                className="flex h-10 w-10 items-center justify-center rounded-xl font-black"
                style={{
                  background: "var(--primary)",
                  color: "var(--primary-foreground)",
                }}
              >
                ✓
              </div>
              <p className="font-semibold">Trusted listings in top locations</p>
            </div>

            <div className="flex items-center gap-3">
              <div
                className="flex h-10 w-10 items-center justify-center rounded-xl font-black"
                style={{
                  background: "var(--primary)",
                  color: "var(--primary-foreground)",
                }}
              >
                ✓
              </div>
              <p className="font-semibold">Support from search to closing</p>
            </div>
          </div>

          <button
            className="rounded-xl px-6 py-3 font-bold"
            style={{
              background: "var(--secondary)",
              color: "var(--secondary-foreground)",
            }}
          >
            Learn More About Us
          </button>
        </div>
      </div>
    </section>
  );
}


function ContactCTA() {
  return (
    <section id="contact" className="scroll-mt-24 px-5 pb-20">
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          background: "var(--primary)",
          color: "var(--primary-foreground)",
          borderRadius: "28px",
          padding: "50px 30px",
          textAlign: "center",
        }}
      >
        <h2 style={{ fontSize: "40px", fontWeight: "900", marginBottom: "14px" }}>
          Ready to Find Your Next Property?
        </h2>
        <p
          style={{
            maxWidth: "700px",
            margin: "0 auto 22px",
            opacity: 0.9,
            fontSize: "18px",
          }}
        >
          Speak with our team today and get expert guidance for your next real
          estate decision.
        </p>

        <a
          href="https://wa.me/923152112570"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-xl border px-6 py-3 font-bold inline-block"
          style={{
    borderColor: "rgba(255,255,255,0.25)",
    color: "var(--primary-foreground)",
  }}
>
  Talk on WhatsApp
</a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer
      className="border-t"
      style={{
        borderColor: "var(--border)",
        background: "var(--card)",
      }}
    >
      <div className="mx-auto max-w-6xl px-5 py-14">
        <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-4">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <div
                className="flex h-11 w-11 items-center justify-center rounded-2xl text-sm font-black"
                style={{
                  background: "var(--primary)",
                  color: "var(--primary-foreground)",
                }}
              >
                PN
              </div>

              <div>
                <h3 className="text-xl font-extrabold">PrimeNest Realty</h3>
                <p
                  className="text-sm"
                  style={{ color: "var(--muted-foreground)" }}
                >
                  Luxury Real Estate Agency
                </p>
              </div>
            </div>

            <p
              className="max-w-sm leading-7"
              style={{ color: "var(--muted-foreground)" }}
            >
              We help clients buy, sell, and invest in premium real estate with
              trusted guidance, verified listings, and a smooth experience.
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-lg font-extrabold">Quick Links</h4>
            <div
              className="space-y-3"
              style={{ color: "var(--muted-foreground)" }}
            >
              <p>Home</p>
              <p>Properties</p>
              <p>About Us</p>
              <p>Contact</p>
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-lg font-extrabold">Properties</h4>
            <div
              className="space-y-3"
              style={{ color: "var(--muted-foreground)" }}
            >
              <p>Apartments</p>
              <p>Luxury Villas</p>
              <p>Commercial Spaces</p>
              <p>Investment Deals</p>
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-lg font-extrabold">Contact Info</h4>
            <div
              className="space-y-3"
              style={{ color: "var(--muted-foreground)" }}
            >
              <p>Dubai Marina, Dubai, UAE</p>
              <p>+971 50 123 4567</p>
              <p>info@primenestrealty.com</p>
              <p>Mon - Sat | 9:00 AM - 7:00 PM</p>
            </div>
          </div>
        </div>

        <div
          className="mt-10 flex flex-col gap-3 border-t pt-6 text-sm md:flex-row md:items-center md:justify-between"
          style={{
            borderColor: "var(--border)",
            color: "var(--muted-foreground)",
          }}
        >
          <p>© 2026 PrimeNest Realty. All rights reserved.</p>
          <p>Designed for premium property experiences.</p>
        </div>
      </div>
    </footer>
  );
}
