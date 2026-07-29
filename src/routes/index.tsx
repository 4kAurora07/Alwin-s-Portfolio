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
  Sun,
  Moon,
  Copy,
  Check,
  Menu,
  X,
  Sparkles,
  ExternalLink,
  Cpu,
  Layers,
  CheckCircle2,
  Briefcase,
  Globe,
  FileCheck,
} from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";
import { SecurityShowcase } from "@/components/security-showcase";
import { Toaster, toast } from "sonner";

export const Route = createFileRoute("/")({
  component: Portfolio,
});

const NAV = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#case-studies", label: "Case Studies" },
  { href: "#skills", label: "Skills" },
  { href: "#community", label: "Community" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

function Portfolio() {
  useReveal();
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [skillCategory, setSkillCategory] = useState<string>("All");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Theme switcher
  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [theme]);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("hello@example.com");
    setCopiedEmail(true);
    toast.success("Email copied to clipboard!");
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name");
    toast.success(`Thank you ${name || ""}! Message sent successfully.`);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-sans transition-colors duration-300 relative selection:bg-primary/20">
      <Toaster position="bottom-right" theme={theme === "dark" ? "dark" : "light"} />

      {/* Navigation Header */}
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled
            ? "backdrop-blur-xl bg-background/85 border-b border-border/80 shadow-sm py-3.5"
            : "bg-transparent py-5"
        }`}
      >
        <nav className="max-w-6xl mx-auto flex items-center justify-between px-6">
          <a
            href="#top"
            className="flex items-center gap-2.5 font-sans font-bold tracking-tight text-base group"
          >
            <div className="h-8 w-8 rounded-lg bg-primary grid place-items-center text-primary-foreground font-extrabold shadow-sm">
              A
            </div>
            <span className="text-foreground">Alwin</span>
          </a>

          {/* Desktop Nav Links */}
          <ul className="hidden md:flex items-center gap-7 text-sm font-medium text-muted-foreground">
            {NAV.map((n) => (
              <li key={n.href}>
                <a
                  href={n.href}
                  className="hover:text-foreground transition-colors relative py-1"
                >
                  {n.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            {/* Theme Toggle Button */}
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              title="Toggle Theme"
              className="p-2 rounded-xl border border-border bg-secondary/50 text-foreground hover:bg-secondary transition-colors"
            >
              {theme === "dark" ? (
                <Sun className="h-4 w-4 text-amber-400" />
              ) : (
                <Moon className="h-4 w-4 text-slate-700" />
              )}
            </button>

            <a
              href="#contact"
              className="hidden sm:inline-flex text-xs font-medium px-4 py-2 rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 transition-all shadow-sm font-sans"
            >
              Get in touch
            </a>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-foreground rounded-xl border border-border"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border px-6 py-6 space-y-3">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-base font-medium text-foreground hover:text-primary transition-colors py-1"
              >
                {n.label}
              </a>
            ))}
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="top" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl space-y-6">


            <h1
              data-reveal
              className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-[1.1]"
              style={{ animationDelay: "0.1s" }}
            >
              Software & <span className="pro-gradient-blue">Security Engineer</span>
            </h1>

            <p
              data-reveal
              className="text-lg sm:text-xl text-muted-foreground font-medium"
              style={{ animationDelay: "0.2s" }}
            >
              B.Tech CSE (AI) Student at Karunya Institute <span className="text-primary">•</span> Ex-Software Testing Intern at Data Repo LLC
            </p>

            <p
              data-reveal
              className="text-base sm:text-lg text-muted-foreground/90 leading-relaxed max-w-2xl"
              style={{ animationDelay: "0.3s" }}
            >
              Specializing in software test automation, API endpoint validation, and application security auditing.
              Dedicated to identifying edge-case vulnerabilities early and building resilient software systems.
            </p>

            <div
              data-reveal
              className="flex flex-wrap gap-4 pt-2"
              style={{ animationDelay: "0.4s" }}
            >
              <a
                href="#experience"
                className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all shadow-md"
              >
                View Experience
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#case-studies"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border border-border bg-secondary/40 hover:bg-secondary text-foreground font-semibold transition-all"
              >
                Explore Case Studies
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border border-border bg-background hover:bg-secondary/40 text-muted-foreground hover:text-foreground font-medium transition-all"
              >
                Contact Me
              </a>
            </div>

            {/* Impact Metric Cards */}
            <div data-reveal className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 border-t border-border/80">
              <div className="p-4 rounded-xl pro-card">
                <span className="text-2xl font-bold text-primary block">2+ Mos</span>
                <span className="text-xs text-muted-foreground font-medium">US Testing Internship</span>
              </div>
              <div className="p-4 rounded-xl pro-card">
                <span className="text-2xl font-bold text-foreground block">5 Audit</span>
                <span className="text-xs text-muted-foreground font-medium">Domains Covered</span>
              </div>
              <div className="p-4 rounded-xl pro-card">
                <span className="text-2xl font-bold text-foreground block">100%</span>
                <span className="text-xs text-muted-foreground font-medium">Agile Delivery</span>
              </div>
              <div className="p-4 rounded-xl pro-card">
                <span className="text-2xl font-bold text-primary block">Award</span>
                <span className="text-xs text-muted-foreground font-medium">Formal Director Recognition</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <Section id="about" label="01" title="About Profile">
        <div className="grid md:grid-cols-12 gap-8 items-start">
          <div className="md:col-span-7 space-y-5 text-base sm:text-lg text-muted-foreground leading-relaxed">
            <p>
              I am currently pursuing a{" "}
              <span className="text-foreground font-semibold">
                B.Tech in Computer Science Engineering with a specialization in Artificial Intelligence
              </span>{" "}
              at Karunya Institute of Technology and Sciences, Coimbatore.
            </p>
            <p>
              Prior to my current coursework, I gained valuable practical experience as a part-time{" "}
              <span className="text-foreground font-semibold">Software & Security Testing Intern</span> at Data Repo LLC, a US-based company in Houston, Texas.
            </p>
            <p>
              I focus on application resilience — analyzing where software assumptions break, identifying authorization gaps, and establishing robust test automation pipelines.
            </p>
            <div className="flex flex-wrap items-center gap-3 pt-2 text-xs font-sans">
              <span className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-secondary border border-border text-foreground font-medium">
                <MapPin className="h-3.5 w-3.5 text-primary" /> Based in Kerala, India
              </span>
              <span className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-secondary border border-border text-foreground font-medium">
                <Globe className="h-3.5 w-3.5 text-primary" /> Remote Collaboration Ready
              </span>
            </div>
          </div>

          <div className="md:col-span-5 pro-card rounded-2xl p-6 space-y-4">
            <h3 className="text-base font-bold text-foreground flex items-center gap-2">
              <Layers className="h-4 w-4 text-primary" /> Core Competencies
            </h3>
            <div className="space-y-3">
              {[
                { title: "Test Automation", desc: "Selenium WebDriver UI & functional regression workflows" },
                { title: "API Validation", desc: "Postman endpoint auditing, assertions, and runner execution" },
                { title: "Application Security", desc: "IDOR, rate-limiting thresholds, HSTS, and file upload audits" },
                { title: "Mobile Security Audits", desc: "Android APK static analysis via MobSF & ADB logcat monitoring" },
              ].map((item, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-secondary/50 border border-border/60 space-y-0.5">
                  <h4 className="text-sm font-semibold text-foreground">{item.title}</h4>
                  <p className="text-xs text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Experience Section */}
      <Section id="experience" label="02" title="Work Experience">
        <div data-reveal className="pro-card rounded-2xl p-6 sm:p-8 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-6 border-b border-border">
            <div>
              <span className="text-xs font-mono text-primary font-semibold uppercase tracking-wider">
                US Internship Experience
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-foreground mt-1">Software Testing Intern</h3>
              <p className="text-sm font-medium text-muted-foreground mt-0.5">
                Data Repo LLC • Houston, Texas (Remote)
              </p>
            </div>
            <span className="px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-medium self-start sm:self-center">
              May 2026 – July 2026
            </span>
          </div>

          <p className="text-sm text-muted-foreground leading-relaxed">
            Joined immediately following Higher Secondary Education (Plus 2), delivering QA automation, API validation, and application security audits across active production software applications including <span className="font-semibold text-foreground">JVCRM</span>, <span className="font-semibold text-foreground">MYCDirectory</span>, and <span className="font-semibold text-foreground">Bell POS</span>.
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            {[
              {
                title: "Automated Selenium Test Suites",
                desc: "Authored and executed automated test scripts using Selenium for UI and functional regression testing across core platforms.",
              },
              {
                title: "Postman API Endpoint Validation",
                desc: "Conducted server endpoint testing and API validation using Postman within active Scrum/Agile sprint cycles.",
              },
              {
                title: "Application Security Auditing",
                desc: "Collaborated directly with the AppSec team to test IDOR vulnerability patterns, rate-limiting thresholds, HSTS rules, and file upload handlers.",
              },
              {
                title: "Mobile APK Walkthrough Document",
                desc: "Authored a formal Mobile APK Security Test Walkthrough document detailing static and dynamic audit steps for QA teams.",
              },
            ].map((achievement, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-secondary/30 border border-border/70 space-y-1">
                <h4 className="text-sm font-semibold text-foreground flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                  {achievement.title}
                </h4>
                <p className="text-xs text-muted-foreground leading-relaxed pl-6">{achievement.desc}</p>
              </div>
            ))}
          </div>

          {/* Director Appreciation Award Highlight Card */}
          <div className="p-5 rounded-xl bg-primary/5 border border-primary/20 flex flex-col sm:flex-row gap-4 items-start">
            <div className="h-10 w-10 rounded-xl bg-primary/10 grid place-items-center text-primary shrink-0 border border-primary/20">
              <Award className="h-5 w-5" />
            </div>
            <div className="space-y-1">
              <h4 className="text-sm font-bold text-foreground">Formal Letter of Appreciation & Recognition</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Received a formal letter of appreciation from Data Repo LLC's Director of Operations — commending analytical problem-solving, rapid mastery of automated testing tools, and consistent delivery during fast-paced engineering sprints.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Featured Case Studies Section */}
      <Section id="case-studies" label="03" title="Featured Case Studies">
        <div data-reveal>
          <SecurityShowcase />
        </div>
      </Section>

      {/* Skills Matrix Section */}
      <Section id="skills" label="04" title="Skills & Technical Tooling">
        <div className="space-y-6">
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 border-b border-border pb-4 font-sans text-xs">
            {["All", "Security Auditing", "QA Automation", "Languages & Tooling", "Process & Delivery"].map((cat) => (
              <button
                key={cat}
                onClick={() => setSkillCategory(cat)}
                className={`px-4 py-2 rounded-xl transition-all font-medium ${
                  skillCategory === cat
                    ? "bg-primary text-primary-foreground font-bold shadow-sm"
                    : "bg-secondary/50 text-muted-foreground hover:bg-secondary hover:text-foreground border border-border"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Skill Cards Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                icon: Shield,
                title: "Security Auditing",
                category: "Security Auditing",
                skills: [
                  "IDOR Detection",
                  "Rate-Limiting Audits",
                  "HSTS & Transport Rules",
                  "File Upload Security",
                  "Mobile APK Auditing",
                  "OWASP Risk Categorization",
                ],
              },
              {
                icon: TestTube2,
                title: "QA & Test Automation",
                category: "QA Automation",
                skills: [
                  "Selenium WebDriver",
                  "Postman API Testing",
                  "UI Regression Workflows",
                  "Endpoint Assertions",
                  "Defect Reproduction",
                ],
              },
              {
                icon: Code2,
                title: "Languages & Specs",
                category: "Languages & Tooling",
                skills: ["Java (Core)", "JSON / REST Specs", "HTML5 & JavaScript", "SQL Fundamentals"],
              },
              {
                icon: Workflow,
                title: "Security & QA Toolset",
                category: "Languages & Tooling",
                skills: ["Docker", "MobSF", "ADB Platform Tools", "Burp Proxy Basics"],
              },
              {
                icon: Layers,
                title: "Process & Delivery",
                category: "Process & Delivery",
                skills: ["Agile / Scrum Sprints", "Jira Defect Management", "Git Version Control"],
              },
            ]
              .filter((c) => skillCategory === "All" || c.category === skillCategory)
              .map((cat) => (
                <div key={cat.title} data-reveal className="pro-card-interactive rounded-2xl p-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-xl bg-primary/10 grid place-items-center text-primary border border-primary/20">
                      <cat.icon className="h-5 w-5" />
                    </div>
                    <h3 className="font-bold text-base text-foreground">{cat.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((s) => (
                      <span
                        key={s}
                        className="text-xs font-medium px-3 py-1.5 rounded-lg bg-secondary text-muted-foreground border border-border hover:text-foreground transition-colors"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
          </div>
        </div>
      </Section>

      {/* Community & Leadership Section */}
      <Section id="community" label="05" title="Community & Leadership">
        <div className="grid md:grid-cols-2 gap-6">
          <div data-reveal className="pro-card-interactive rounded-2xl p-6 sm:p-8 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                Secretary
              </span>
              <span className="text-xs text-muted-foreground font-mono">Youth Leadership</span>
            </div>
            <h3 className="text-xl font-bold text-foreground">PYPA — Youth Ministry</h3>
            <p className="text-xs text-primary font-medium">IPC Hebron Manjanikkara</p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Delivered youth presentations, managed digital media presence, and successfully verified and indexed the church website on Google Search Console.
            </p>
          </div>

          <div data-reveal className="pro-card-interactive rounded-2xl p-6 sm:p-8 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                Level 4+ Contributor
              </span>
              <span className="text-xs text-muted-foreground font-mono">Community Mapping</span>
            </div>
            <h3 className="text-xl font-bold text-foreground">Google Local Guides</h3>
            <p className="text-xs text-emerald-600 dark:text-emerald-400 font-medium">Community Contributor</p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Active contributor updating local business listings, writing reviews, and publishing geographic edits to maintain community map accuracy.
            </p>
          </div>
        </div>
      </Section>

      {/* Education Section */}
      <Section id="education" label="06" title="Education">
        <div className="space-y-4">
          {[
            {
              school: "Karunya Institute of Technology and Sciences",
              degree: "B.Tech Computer Science Engineering (AI)",
              location: "Coimbatore, Tamil Nadu",
              period: "2026 — Present",
              details: "Focusing on Artificial Intelligence, Software Engineering, and Secure System Design",
            },
            {
              school: "Seventh Day Adventist School",
              degree: "ISC Class 12 • CS & Mathematics",
              location: "Pathanamthitta, Kerala",
              period: "Completed",
              details: "Completed Higher Secondary Education with focus on Computer Science and Mathematics",
            },
          ].map((edu) => (
            <div
              key={edu.school}
              data-reveal
              className="pro-card-interactive rounded-2xl p-6 flex flex-wrap justify-between items-start gap-4"
            >
              <div className="flex gap-4">
                <div className="h-12 w-12 shrink-0 rounded-xl bg-primary/10 grid place-items-center text-primary border border-primary/20">
                  <GraduationCap className="h-6 w-6" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-bold text-lg text-foreground">{edu.school}</h3>
                  <p className="text-sm text-primary font-medium">
                    {edu.degree} <span className="text-muted-foreground">•</span> {edu.location}
                  </p>
                  <p className="text-xs text-muted-foreground">{edu.details}</p>
                </div>
              </div>
              <span className="text-xs font-semibold px-3 py-1.5 rounded-full bg-secondary border border-border text-foreground">
                {edu.period}
              </span>
            </div>
          ))}
        </div>
      </Section>

      {/* Contact Section */}
      <Section id="contact" label="07" title="Get in Touch">
        <div className="grid lg:grid-cols-5 gap-8">
          <div data-reveal className="lg:col-span-2 space-y-6">
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              Open to software testing roles, security auditing collaborations, or technical discussions.
            </p>

            <div className="space-y-3 font-sans text-sm">
              <button
                onClick={handleCopyEmail}
                className="w-full flex items-center justify-between p-4 rounded-xl border border-border bg-secondary/40 hover:bg-secondary transition-all text-foreground group"
              >
                <div className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-primary" />
                  <span className="font-medium">hello@example.com</span>
                </div>
                {copiedEmail ? (
                  <Check className="h-4 w-4 text-emerald-500" />
                ) : (
                  <Copy className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                )}
              </button>

              <a
                href="#"
                className="flex items-center gap-3 p-4 rounded-xl border border-border bg-secondary/40 hover:bg-secondary transition-all text-foreground font-medium"
              >
                <Linkedin className="h-4 w-4 text-primary" />
                <span>linkedin.com/in/alwin</span>
              </a>

              <a
                href="#"
                className="flex items-center gap-3 p-4 rounded-xl border border-border bg-secondary/40 hover:bg-secondary transition-all text-foreground font-medium"
              >
                <Instagram className="h-4 w-4 text-primary" />
                <span>@alwin</span>
              </a>
            </div>
          </div>

          <form
            data-reveal
            onSubmit={handleFormSubmit}
            className="lg:col-span-3 pro-card rounded-2xl p-6 sm:p-8 space-y-5"
          >
            <div>
              <label className="text-xs font-bold text-muted-foreground mb-2 block uppercase tracking-wider">
                Your Name
              </label>
              <input
                required
                name="name"
                type="text"
                className="w-full bg-secondary/50 border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                placeholder="Jane Doe"
              />
            </div>
            <div>
              <label className="text-xs font-bold text-muted-foreground mb-2 block uppercase tracking-wider">
                Email Address
              </label>
              <input
                required
                name="email"
                type="email"
                className="w-full bg-secondary/50 border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                placeholder="you@domain.com"
              />
            </div>
            <div>
              <label className="text-xs font-bold text-muted-foreground mb-2 block uppercase tracking-wider">
                Message
              </label>
              <textarea
                required
                name="message"
                rows={4}
                className="w-full bg-secondary/50 border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none"
                placeholder="How can I help you?"
              />
            </div>
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all shadow-md"
            >
              Send Message
              <ArrowRight className="h-4 w-4" />
            </button>
          </form>
        </div>
      </Section>

      {/* Footer */}
      <footer className="border-t border-border/80 py-10 mt-20 bg-secondary/20">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-muted-foreground font-sans">
          <p>© {new Date().getFullYear()} Alwin. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span>Built with React & TanStack</span>
            <span>•</span>
            <a href="#top" className="hover:text-primary transition-colors font-medium">
              Back to Top ↑
            </a>
          </div>
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
    <section id={id} className="py-20 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-6">
        <div data-reveal className="flex items-center gap-4 mb-12">
          <span className="font-mono text-sm text-primary font-bold">{label}.</span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">{title}</h2>
          <div className="flex-1 h-px bg-gradient-to-r from-border to-transparent" />
        </div>
        {children}
      </div>
    </section>
  );
}
