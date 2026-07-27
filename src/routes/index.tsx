import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  ArrowRight,
  Mail,
  Linkedin,
  Instagram,
  Shield,
  Code2,
  TestTube2,
  Workflow,
  MapPin,
  GraduationCap,
  Award,
  ChevronRight,
} from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";

export const Route = createFileRoute("/")({
  component: Portfolio,
});

const NAV = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#community", label: "Community" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

function Portfolio() {
  useReveal();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      {/* Nav */}
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all ${
          scrolled
            ? "backdrop-blur-md bg-background/70 border-b border-border"
            : "bg-transparent"
        }`}
      >
        <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
          <a href="#top" className="font-mono text-sm font-bold tracking-tight">
            <span className="text-primary">~/</span>alwin
          </a>
          <ul className="hidden md:flex items-center gap-7 text-sm text-muted-foreground">
            {NAV.map((n) => (
              <li key={n.href}>
                <a
                  href={n.href}
                  className="hover:text-foreground transition-colors"
                >
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            className="text-sm font-mono px-3 py-1.5 rounded-md border border-border hover:border-primary hover:text-primary transition-colors"
          >
            Get in touch
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section
        id="top"
        className="relative min-h-screen flex items-center overflow-hidden"
      >
        <div className="absolute inset-0 grid-bg opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/40 to-background" />
        <div className="absolute top-1/3 -left-32 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />

        <div className="relative max-w-6xl mx-auto px-6 pt-32 pb-20 w-full">
          <p
            data-reveal
            className="font-mono text-sm text-primary mb-6 flex items-center gap-2"
          >
            <span className="inline-block h-2 w-2 rounded-full bg-primary animate-pulse" />
            Available for opportunities
          </p>
          <h1
            data-reveal
            className="text-5xl sm:text-7xl md:text-8xl font-bold tracking-tighter mb-6"
            style={{ animationDelay: "0.1s" }}
          >
            Hi, I'm <span className="text-gradient">Alwin</span>.
          </h1>
          <p
            data-reveal
            className="font-mono text-lg sm:text-xl text-muted-foreground mb-4"
            style={{ animationDelay: "0.2s" }}
          >
            B.Tech CSE (AI) Student{" "}
            <span className="text-primary mx-1">/</span> Security Testing
          </p>
          <p
            data-reveal
            className="max-w-xl text-base sm:text-lg text-muted-foreground/90 mb-10"
            style={{ animationDelay: "0.3s" }}
          >
            Learning how systems break, so I can help build ones that don't.
          </p>
          <div
            data-reveal
            className="flex flex-wrap gap-4"
            style={{ animationDelay: "0.4s" }}
          >
            <a
              href="#experience"
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-md bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-all shadow-lg shadow-primary/20"
            >
              View Projects
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md border border-border hover:border-primary hover:text-primary transition-colors font-medium"
            >
              Contact Me
            </a>
          </div>
        </div>
      </section>

      {/* About */}
      <Section id="about" label="01" title="About">
        <div className="grid md:grid-cols-3 gap-8 items-start">
          <div className="md:col-span-2 space-y-4 text-lg text-muted-foreground leading-relaxed">
            <p>
              Currently pursuing a{" "}
              <span className="text-foreground font-medium">
                B.Tech in Computer Science Engineering (AI specialization)
              </span>{" "}
              at Karunya Institute of Technology and Sciences, Coimbatore.
            </p>
            <p>
              Previously worked as a part-time{" "}
              <span className="text-foreground font-medium">
                Software & Security Tester
              </span>{" "}
              at a US-based company. I'm drawn to application security and how
              systems fail — the messy edges where assumptions break.
            </p>
            <p className="flex items-center gap-2 text-sm font-mono text-primary pt-2">
              <MapPin className="h-4 w-4" />
              Based in Kerala, India
            </p>
          </div>
          <div className="rounded-xl border border-border bg-card p-6 font-mono text-sm">
            <p className="text-muted-foreground mb-3">// current focus</p>
            <ul className="space-y-2">
              <li className="flex gap-2">
                <ChevronRight className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                Application security
              </li>
              <li className="flex gap-2">
                <ChevronRight className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                Automated testing
              </li>
              <li className="flex gap-2">
                <ChevronRight className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                AI + secure systems
              </li>
            </ul>
          </div>
        </div>
      </Section>

      {/* Experience */}
      <Section id="experience" label="02" title="Experience">
        <div data-reveal className="relative">
          <div className="absolute left-0 md:left-4 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/40 to-transparent" />
          <div className="relative pl-8 md:pl-16">
            <div className="absolute left-[-6px] md:left-[10px] top-2 h-3 w-3 rounded-full bg-primary shadow-[0_0_0_4px] shadow-primary/20" />

            <div className="rounded-2xl border border-border bg-card p-6 sm:p-8 hover:border-primary/40 transition-colors">
              <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                <div>
                  <h3 className="text-2xl font-bold">Software Testing Intern</h3>
                  <p className="text-primary font-mono text-sm mt-1">
                    Data Repo LLC · Houston, Texas
                  </p>
                </div>
                <span className="font-mono text-xs px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                  Two months · Concluded Jul 15, 2026
                </span>
              </div>
              <p className="text-sm text-muted-foreground mb-6 italic">
                Joined immediately after completing Higher Secondary Education
                (Plus 2).
              </p>

              <ul className="space-y-3 text-muted-foreground">
                {[
                  <>
                    Developed and executed{" "}
                    <span className="text-foreground">
                      automated test scripts using Selenium
                    </span>{" "}
                    for functional and UI testing workflows.
                  </>,
                  <>
                    Conducted{" "}
                    <span className="text-foreground">
                      API testing and server endpoint validation using Postman
                    </span>
                    .
                  </>,
                  <>
                    Worked within{" "}
                    <span className="text-foreground">Scrum/Agile sprint cycles</span>{" "}
                    — standups, planning, reviews — across production
                    applications including{" "}
                    <span className="font-mono text-foreground">JVCRM</span>,{" "}
                    <span className="font-mono text-foreground">MYCDirectory</span>,
                    and <span className="font-mono text-foreground">Bell POS</span>.
                  </>,
                  <>
                    Collaborated with the Testing Team to discover, log, and
                    track defects and review edge-case criteria.
                  </>,
                  <>
                    Worked directly with the{" "}
                    <span className="text-foreground">
                      Application Security Team
                    </span>
                    , gaining hands-on exposure to SSDLC and secure deployment
                    practices.
                  </>,
                  <>
                    Identified and documented security-relevant issues:{" "}
                    <span className="text-foreground">
                      IDOR patterns, rate-limiting gaps, HSTS misconfigurations,
                      and file upload validation weaknesses
                    </span>
                    — escalated via Jira for engineering follow-up.
                  </>,
                  <>
                    Authored a formal{" "}
                    <span className="text-foreground">
                      Mobile APK Security Test Walkthrough
                    </span>{" "}
                    document outlining methodology and findings.
                  </>,
                ].map((item, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="text-primary font-mono text-sm mt-1">
                      ▹
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 pt-6 border-t border-border flex gap-3 items-start rounded-lg">
                <Award className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <p className="text-sm text-muted-foreground">
                  <span className="text-foreground font-medium">
                    Recognition:
                  </span>{" "}
                  Received a formal letter of appreciation from Data Repo's
                  Director of Operations — commending strong analytical
                  thinking, quick learning, and reliable delivery within
                  fast-paced engineering sprints.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Skills */}
      <Section id="skills" label="03" title="Skills">
        <div className="grid sm:grid-cols-2 gap-5">
          {[
            {
              icon: Code2,
              title: "Languages",
              items: ["Java"],
            },
            {
              icon: TestTube2,
              title: "Testing Tools",
              items: ["Selenium (Automated / UI)", "Postman (API testing)"],
            },
            {
              icon: Shield,
              title: "Security Testing",
              items: [
                "IDOR detection",
                "Rate limiting analysis",
                "HSTS / config auditing",
                "File upload vulnerabilities",
                "Mobile APK security testing",
                "OWASP-style vuln categorization",
              ],
            },
            {
              icon: Workflow,
              title: "Process",
              items: ["Scrum / Agile", "Jira"],
            },
          ].map((cat) => (
            <div
              key={cat.title}
              data-reveal
              className="group rounded-xl border border-border bg-card p-6 hover:border-primary/50 transition-all"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="h-10 w-10 rounded-lg bg-primary/10 grid place-items-center text-primary group-hover:bg-primary/20 transition-colors">
                  <cat.icon className="h-5 w-5" />
                </div>
                <h3 className="font-mono text-lg">{cat.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((it) => (
                  <span
                    key={it}
                    className="text-sm font-mono px-3 py-1 rounded-md bg-muted text-muted-foreground border border-border"
                  >
                    {it}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Community */}
      <Section id="community" label="04" title="Community & Leadership">
        <div className="grid md:grid-cols-2 gap-5">
          <div
            data-reveal
            className="rounded-xl border border-border bg-card p-6 hover:border-primary/40 transition-colors"
          >
            <p className="font-mono text-xs text-primary mb-2">SECRETARY</p>
            <h3 className="text-xl font-bold mb-2">
              PYPA — Youth Ministry
            </h3>
            <p className="text-sm text-muted-foreground mb-3">
              IPC Hebron Manjanikkara
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Delivered youth talks, managed social media presence (Instagram,
              YouTube, website), and helped get the church website indexed on
              Google Search Console.
            </p>
          </div>
          <div
            data-reveal
            className="rounded-xl border border-border bg-card p-6 hover:border-primary/40 transition-colors"
          >
            <p className="font-mono text-xs text-primary mb-2">LEVEL 4+</p>
            <h3 className="text-xl font-bold mb-2">Google Local Guides</h3>
            <p className="text-sm text-muted-foreground mb-3">
              Community Contributor
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Active contributor mapping and reviewing local places — reviews,
              photos, and edits to keep local information accurate.
            </p>
          </div>
        </div>
      </Section>

      {/* Education */}
      <Section id="education" label="05" title="Education">
        <div className="space-y-4">
          {[
            {
              school: "Karunya Institute of Technology and Sciences",
              degree: "B.Tech CSE (AI)",
              location: "Coimbatore",
              period: "2026 — Present",
            },
            {
              school: "Seventh Day Adventist School",
              degree: "ISC Class 12 · CS & Mathematics",
              location: "Pathanamthitta",
              period: "Completed",
            },
          ].map((e) => (
            <div
              key={e.school}
              data-reveal
              className="flex flex-wrap justify-between gap-4 rounded-xl border border-border bg-card p-6 hover:border-primary/40 transition-colors"
            >
              <div className="flex gap-4">
                <div className="h-10 w-10 shrink-0 rounded-lg bg-primary/10 grid place-items-center text-primary">
                  <GraduationCap className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">{e.school}</h3>
                  <p className="text-muted-foreground text-sm mt-0.5">
                    {e.degree} · {e.location}
                  </p>
                </div>
              </div>
              <span className="font-mono text-xs text-primary self-start">
                {e.period}
              </span>
            </div>
          ))}
        </div>
      </Section>

      {/* Contact */}
      <Section id="contact" label="06" title="Get in Touch">
        <div className="grid md:grid-cols-5 gap-8">
          <div data-reveal className="md:col-span-2 space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Open to internships, security-testing collaborations, or a good
              conversation about breaking (and building) systems.
            </p>
            <div className="space-y-3 font-mono text-sm">
              <a
                href="#"
                className="flex items-center gap-3 group hover:text-primary transition-colors"
              >
                <Linkedin className="h-4 w-4" />
                linkedin.com/in/alwin
              </a>
              <a
                href="#"
                className="flex items-center gap-3 group hover:text-primary transition-colors"
              >
                <Instagram className="h-4 w-4" />
                @alwin
              </a>
              <a
                href="mailto:hello@example.com"
                className="flex items-center gap-3 group hover:text-primary transition-colors"
              >
                <Mail className="h-4 w-4" />
                hello@example.com
              </a>
            </div>
          </div>

          <form
            data-reveal
            onSubmit={(e) => {
              e.preventDefault();
            }}
            className="md:col-span-3 rounded-xl border border-border bg-card p-6 space-y-4"
          >
            <div>
              <label className="font-mono text-xs text-muted-foreground mb-1.5 block">
                NAME
              </label>
              <input
                type="text"
                className="w-full bg-background border border-border rounded-md px-3 py-2.5 text-sm focus:outline-none focus:border-primary transition-colors"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="font-mono text-xs text-muted-foreground mb-1.5 block">
                EMAIL
              </label>
              <input
                type="email"
                className="w-full bg-background border border-border rounded-md px-3 py-2.5 text-sm focus:outline-none focus:border-primary transition-colors"
                placeholder="you@domain.com"
              />
            </div>
            <div>
              <label className="font-mono text-xs text-muted-foreground mb-1.5 block">
                MESSAGE
              </label>
              <textarea
                rows={4}
                className="w-full bg-background border border-border rounded-md px-3 py-2.5 text-sm focus:outline-none focus:border-primary transition-colors resize-none"
                placeholder="What's on your mind?"
              />
            </div>
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-all shadow-lg shadow-primary/20"
            >
              Send message
              <ArrowRight className="h-4 w-4" />
            </button>
          </form>
        </div>
      </Section>

      <footer className="border-t border-border py-8 mt-20">
        <div className="max-w-6xl mx-auto px-6 flex flex-wrap justify-between gap-4 text-sm text-muted-foreground font-mono">
          <p>© {new Date().getFullYear()} Alwin. All rights reserved.</p>
          <p>
            Built with <span className="text-primary">React</span> · Designed
            with care
          </p>
        </div>
      </footer>
    </div>
  );
}

function Section({
  id,
  label,
  title,
  children,
}: {
  id: string;
  label: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="py-24 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-6">
        <div data-reveal className="flex items-center gap-4 mb-12">
          <span className="font-mono text-sm text-primary">{label}.</span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            {title}
          </h2>
          <div className="flex-1 h-px bg-border" />
        </div>
        {children}
      </div>
    </section>
  );
}
