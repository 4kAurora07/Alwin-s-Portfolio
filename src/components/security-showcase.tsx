import { useState } from "react";
import {
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  ShieldAlert,
  Wifi,
  Lock,
  Upload,
  Smartphone,
  Target,
  TrendingUp,
  Wrench,
  BookOpen,
} from "lucide-react";

interface CaseStudy {
  id: string;
  icon: React.ElementType;
  tag: string;
  tagColor: string;
  title: string;
  category: string;
  targetApp: string;
  summary: string;
  objectives: string[];
  impactResults: string[];
  toolsUsed: string[];
  methodologyOverview: string;
}

const CASE_STUDIES: CaseStudy[] = [
  {
    id: "idor-auth",
    icon: ShieldAlert,
    tag: "API Security",
    tagColor: "bg-red-500/10 text-red-500 border-red-500/20",
    title: "Authorization & IDOR Vulnerability Audit",
    category: "API Security",
    targetApp: "JVCRM & MYCDirectory",
    summary:
      "Evaluated API authorization logic across tenant boundaries to identify direct object reference flaws and privilege escalation risks in production CRM and directory systems.",
    objectives: [
      "Audit parameter tampering resilience across account record endpoints.",
      "Verify access control boundary enforcement between user roles.",
      "Document structured reproduction steps for backend engineering remediation.",
    ],
    impactResults: [
      "Identified and logged IDOR patterns on customer profile endpoints.",
      "Prevented potential cross-tenant record disclosure prior to release.",
      "Established authorization header validation standards in Jira.",
    ],
    toolsUsed: ["Postman API Suite", "Burp Proxy Inspection", "Jira"],
    methodologyOverview:
      "Simulated multi-role API interactions by manipulating path parameters and authorization headers, systematically mapping endpoint resilience against tenant boundary violations.",
  },
  {
    id: "rate-limit-audit",
    icon: Wifi,
    tag: "API Security",
    tagColor: "bg-orange-500/10 text-orange-500 border-orange-500/20",
    title: "API Rate-Limiting & Endpoint Resilience Testing",
    category: "API Security",
    targetApp: "Bell POS Endpoint Suite",
    summary:
      "Conducted high-volume endpoint resilience testing on authentication and password reset services under burst conditions to identify threshold misconfigurations.",
    objectives: [
      "Simulate concurrent automated traffic spikes on sensitive endpoints.",
      "Audit HTTP response status codes and server rate-limiting thresholds.",
      "Recommend API gateway throttling policies for authentication routes.",
    ],
    impactResults: [
      "Flagged missing HTTP 429 (Too Many Requests) rate-limiting controls.",
      "Helped engineering implement token bucket rate-limiting algorithms.",
      "Improved authentication API resilience under automated load conditions.",
    ],
    toolsUsed: ["Postman Collection Runner", "Selenium Automated Scripts"],
    methodologyOverview:
      "Executed automated script suites to send burst requests across authentication routes, evaluating server response stability, header policies, and rate-limiting limits.",
  },
  {
    id: "hsts-header-hardening",
    icon: Lock,
    tag: "Web Security",
    tagColor: "bg-violet-500/10 text-violet-500 border-violet-500/20",
    title: "Transport Layer & HSTS Security Hardening",
    category: "Web Security",
    targetApp: "MYCDirectory Web Platform",
    summary:
      "Audited HTTP response headers to ensure SSL/TLS enforcement and prevent protocol downgrade attacks, cookie leaks, and man-in-the-middle exposure.",
    objectives: [
      "Verify Strict-Transport-Security (HSTS) max-age and sub-domain coverage.",
      "Audit Content Security Policy (CSP) and clickjacking protection headers.",
      "Formulate header configuration guidelines for deployment pipelines.",
    ],
    impactResults: [
      "Enforced HSTS preloading and sub-domain coverage across production subdomains.",
      "Remediated missing transport security directives before deployment.",
      "Integrated automated header checks into QA acceptance criteria.",
    ],
    toolsUsed: ["Postman Header Inspector", "Browser DevTools Audit"],
    methodologyOverview:
      "Conducted comprehensive header inspection across production domains, identifying missing security directives and documenting standard Nginx/Cloudflare header rules.",
  },
  {
    id: "file-validation",
    icon: Upload,
    tag: "Web Security",
    tagColor: "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20",
    title: "Media Upload & MIME Validation Testing",
    category: "Web Security",
    targetApp: "JVCRM Media Portal",
    summary:
      "Tested server-side media parsing pipelines against MIME-type spoofing, double extensions, and file validation bypasses that could allow malicious upload execution.",
    objectives: [
      "Test client vs server file validation consistency across upload handlers.",
      "Audit file extension parsing logic against non-standard MIME headers.",
      "Ensure uploaded assets are safely isolated from execution contexts.",
    ],
    impactResults: [
      "Identified file extension validation weaknesses in upload handlers.",
      "Escalated fixes for server-side MIME-type and extension whitelist checks.",
      "Protected user avatar upload pipelines from malicious payload uploads.",
    ],
    toolsUsed: ["Postman", "Selenium UI Automation", "Custom Test Vectors"],
    methodologyOverview:
      "Automated multipart file upload submissions with modified Content-Type headers and filename structures to verify server-side validation rigor.",
  },
  {
    id: "mobile-apk-audit",
    icon: Smartphone,
    tag: "Mobile Audit",
    tagColor: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20",
    title: "Mobile APK Security Test Walkthrough",
    category: "Mobile Audit",
    targetApp: "Android Production Client",
    summary:
      "Authored a formal Mobile APK Security Test Walkthrough document establishing static and dynamic analysis guidelines adopted by the internal QA team.",
    objectives: [
      "Establish static analysis procedures for decompiled APK packages.",
      "Monitor Android runtime logs (logcat) for sensitive data leakage.",
      "Train internal QA team members on mobile testing methodologies.",
    ],
    impactResults: [
      "Created internal Mobile APK Security Audit Walkthrough reference guide.",
      "Conducted MobSF static scans to identify hardcoded test configuration keys.",
      "Standardized mobile security testing protocols for ongoing releases.",
    ],
    toolsUsed: ["MobSF Static Analyzer", "ADB (Android Debug Bridge)", "Jira Knowledge Base"],
    methodologyOverview:
      "Combined static APK package analysis using MobSF with dynamic logcat monitoring on physical Android devices to audit runtime data storage and memory security.",
  },
];

export function SecurityShowcase() {
  const [selectedId, setSelectedId] = useState<string>("idor-auth");
  const currentCase = CASE_STUDIES.find((c) => c.id === selectedId) || CASE_STUDIES[0];

  return (
    <div className="space-y-6">
      {/* Tab Strip */}
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-2">
        {CASE_STUDIES.map((item) => {
          const isSelected = item.id === selectedId;
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              onClick={() => setSelectedId(item.id)}
              className={`group text-left p-4 rounded-2xl border transition-all duration-200 ${
                isSelected
                  ? "bg-primary text-primary-foreground border-primary shadow-lg scale-[1.02]"
                  : "bg-card border-border hover:border-primary/40 hover:bg-secondary/50 text-foreground"
              }`}
            >
              <div className={`h-8 w-8 rounded-xl grid place-items-center mb-3 ${
                isSelected ? "bg-white/20" : "bg-primary/10"
              }`}>
                <Icon className={`h-4 w-4 ${isSelected ? "text-primary-foreground" : "text-primary"}`} />
              </div>
              <p className={`text-xs font-bold leading-snug line-clamp-2 ${
                isSelected ? "text-primary-foreground" : "text-foreground"
              }`}>
                {item.title}
              </p>
              <span className={`text-[11px] mt-1.5 block font-medium ${
                isSelected ? "text-primary-foreground/70" : "text-muted-foreground"
              }`}>
                {item.category}
              </span>
            </button>
          );
        })}
      </div>

      {/* Detail Panel */}
      <div className="pro-card rounded-2xl overflow-hidden">
        {/* Panel Header Banner */}
        <div className="p-6 sm:p-8 border-b border-border bg-secondary/30 flex flex-col sm:flex-row sm:items-start gap-5">
          <div className={`h-12 w-12 rounded-2xl grid place-items-center shrink-0 border ${currentCase.tagColor.replace("text-", "text-").replace("bg-", "bg-")} bg-primary/10 border-primary/20`}>
            <currentCase.icon className="h-6 w-6 text-primary" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-bold border ${currentCase.tagColor}`}>
                {currentCase.tag}
              </span>
              <span className="text-[11px] text-muted-foreground font-mono border border-border bg-secondary px-2.5 py-0.5 rounded-full">
                {currentCase.targetApp}
              </span>
            </div>
            <h4 className="text-xl sm:text-2xl font-bold text-foreground leading-snug">
              {currentCase.title}
            </h4>
            <p className="text-sm text-muted-foreground mt-2 leading-relaxed max-w-2xl">
              {currentCase.summary}
            </p>
          </div>
        </div>

        {/* Methodology */}
        <div className="px-6 sm:px-8 py-5 border-b border-border">
          <div className="flex items-center gap-2 mb-3">
            <BookOpen className="h-4 w-4 text-primary" />
            <h5 className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
              Audit Methodology & Approach
            </h5>
          </div>
          <p className="text-sm text-foreground/80 leading-relaxed">
            {currentCase.methodologyOverview}
          </p>
        </div>

        {/* Objectives & Impact */}
        <div className="grid sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-border">
          {/* Objectives */}
          <div className="p-6 sm:p-8 space-y-4">
            <div className="flex items-center gap-2">
              <Target className="h-4 w-4 text-primary" />
              <h5 className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                Core Objectives
              </h5>
            </div>
            <ul className="space-y-3">
              {currentCase.objectives.map((obj, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                  <span className="text-sm text-foreground/80 leading-relaxed">{obj}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Impact */}
          <div className="p-6 sm:p-8 space-y-4">
            <div className="flex items-center gap-2">
              <TrendingUp className="h-4 w-4 text-emerald-500" />
              <h5 className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                Key Impact & Deliverables
              </h5>
            </div>
            <ul className="space-y-3">
              {currentCase.impactResults.map((res, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground/80 leading-relaxed">{res}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Tools Footer */}
        <div className="px-6 sm:px-8 py-4 bg-secondary/30 border-t border-border">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <div className="flex items-center gap-2 shrink-0">
              <Wrench className="h-3.5 w-3.5 text-muted-foreground" />
              <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                Tools Used
              </span>
            </div>
            <div className="flex flex-wrap gap-2">
              {currentCase.toolsUsed.map((tool) => (
                <span
                  key={tool}
                  className="px-3 py-1 rounded-lg bg-background border border-border text-xs font-medium text-foreground"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
