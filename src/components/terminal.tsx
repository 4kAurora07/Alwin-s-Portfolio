import { useState, useRef, useEffect } from "react";
import { Terminal as TerminalIcon, Play, RotateCcw, Check, Sparkles } from "lucide-react";

interface CommandLog {
  id: string;
  command: string;
  output: React.ReactNode;
}

const COMMAND_HELP = (
  <div className="space-y-1 text-xs">
    <p className="text-muted-foreground">// Available commands:</p>
    <p><span className="text-primary font-bold">whoami</span> - Displays bio and background summary</p>
    <p><span className="text-primary font-bold">skills</span> - Lists technical capabilities & security tools</p>
    <p><span className="text-primary font-bold">experience</span> - Displays Data Repo LLC internship details</p>
    <p><span className="text-primary font-bold">vulns</span> - Displays security testing findings summary</p>
    <p><span className="text-primary font-bold">contact</span> - Shows reachout channels & email</p>
    <p><span className="text-primary font-bold">clear</span> - Resets terminal console</p>
  </div>
);

const COMMAND_OUTPUTS: Record<string, React.ReactNode> = {
  whoami: (
    <div className="space-y-1 text-xs leading-relaxed">
      <p className="text-emerald-400 font-mono font-bold">Alwin — Software & Security Testing Specialist</p>
      <p>🎓 B.Tech CSE (AI) Student at Karunya Institute of Technology and Sciences</p>
      <p>📍 Location: Kerala, India</p>
      <p>💼 Ex-Software & Security Testing Intern @ Data Repo LLC (Houston, TX)</p>
      <p className="text-muted-foreground pt-1">Focus: Finding edge-case flaws, IDOR vulnerabilities, rate limiting gaps, and APK security audits.</p>
    </div>
  ),
  skills: (
    <div className="font-mono text-xs space-y-1.5">
      <div className="text-cyan-400 font-bold">{"{"}</div>
      <div className="pl-4"><span className="text-primary">"languages"</span>: ["Java"],</div>
      <div className="pl-4"><span className="text-primary">"testing_automation"</span>: ["Selenium WebDriver", "Postman API Suite"],</div>
      <div className="pl-4"><span className="text-primary">"security_vectors"</span>: ["IDOR", "Rate Limiting Gaps", "HSTS Misconfig", "APK Audit", "OWASP Top 10"],</div>
      <div className="pl-4"><span className="text-primary">"toolset"</span>: ["Docker", "MobSF", "ADB Platform Tools", "Jira", "Git"]</div>
      <div className="text-cyan-400 font-bold">{"}"}</div>
    </div>
  ),
  experience: (
    <div className="space-y-1 text-xs">
      <p className="text-emerald-400 font-bold">Role: Software Testing Intern @ Data Repo LLC (Houston, TX)</p>
      <p className="text-muted-foreground">Duration: May 2026 – July 2026</p>
      <ul className="list-disc list-inside text-muted-foreground space-y-0.5 pt-1">
        <li>Automated Selenium test workflows for JVCRM, MYCDirectory & Bell POS.</li>
        <li>Conducted API endpoint audits in Postman within Scrum sprint cycles.</li>
        <li>Identified and reported critical IDOR and APK security vulnerabilities.</li>
        <li>Received formal Letter of Appreciation from Director of Operations.</li>
      </ul>
    </div>
  ),
  vulns: (
    <div className="space-y-1.5 text-xs font-mono">
      <p className="text-amber-400 font-bold">[!] AUDIT REPORT HIGHLIGHTS (Data Repo LLC)</p>
      <div className="p-2 rounded bg-black/40 border border-border space-y-1">
        <p><span className="text-emerald-400">[PASS]</span> Selenium UI Regression Suite Executed</p>
        <p><span className="text-amber-400">[WARN]</span> IDOR Pattern Detected in Endpoint Parameter</p>
        <p><span className="text-amber-400">[WARN]</span> Missing Rate-Limiting Headers on Auth Endpoints</p>
        <p><span className="text-emerald-400">[INFO]</span> Mobile APK Security Audit Walkthrough Authored</p>
      </div>
    </div>
  ),
  contact: (
    <div className="space-y-1 text-xs">
      <p className="text-primary font-bold">📬 Get in Touch:</p>
      <p>Email: <a href="mailto:hello@example.com" className="underline hover:text-primary">hello@example.com</a></p>
      <p>LinkedIn: <span className="text-muted-foreground">linkedin.com/in/alwin</span></p>
      <p>Instagram: <span className="text-muted-foreground">@alwin</span></p>
    </div>
  ),
};

export function InteractiveTerminal() {
  const [input, setInput] = useState("");
  const [logs, setLogs] = useState<CommandLog[]>([
    {
      id: "init-1",
      command: "whoami",
      output: COMMAND_OUTPUTS.whoami,
    },
  ]);
  const [copied, setCopied] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  const runCommand = (cmdStr: string) => {
    const trimmed = cmdStr.trim().toLowerCase();
    if (!trimmed) return;

    if (trimmed === "clear") {
      setLogs([]);
      setInput("");
      return;
    }

    if (trimmed === "help") {
      setLogs((prev) => [
        ...prev,
        { id: Math.random().toString(), command: trimmed, output: COMMAND_HELP },
      ]);
      setInput("");
      return;
    }

    const output = COMMAND_OUTPUTS[trimmed] || (
      <p className="text-destructive text-xs font-mono">
        command not found: '{trimmed}'. Type <span className="text-primary underline cursor-pointer" onClick={() => runCommand("help")}>help</span> for commands.
      </p>
    );

    setLogs((prev) => [
      ...prev,
      { id: Math.random().toString(), command: trimmed, output },
    ]);
    setInput("");
  };

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [logs]);

  return (
    <div className="rounded-xl border border-border/80 bg-black/90 shadow-2xl overflow-hidden font-mono text-sm max-w-2xl w-full mx-auto backdrop-blur-md">
      {/* Header Bar */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-secondary/40 border-b border-border/60">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5">
            <span className="h-3 w-3 rounded-full bg-red-500/80 inline-block" />
            <span className="h-3 w-3 rounded-full bg-yellow-500/80 inline-block" />
            <span className="h-3 w-3 rounded-full bg-emerald-500/80 inline-block" />
          </div>
          <span className="text-xs text-muted-foreground ml-2 flex items-center gap-1.5">
            <TerminalIcon className="h-3.5 w-3.5 text-primary" />
            alwin@sec-node:~ (bash)
          </span>
        </div>
        <div className="flex items-center gap-2 text-xs">
          <button
            onClick={() => {
              setLogs([]);
              runCommand("whoami");
            }}
            title="Reset Terminal"
            className="p-1 text-muted-foreground hover:text-primary transition-colors"
          >
            <RotateCcw className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>

      {/* Preset Command Pills */}
      <div className="flex flex-wrap items-center gap-1.5 px-4 py-2 bg-black/50 border-b border-border/40 text-xs">
        <span className="text-muted-foreground text-[11px] flex items-center gap-1">
          <Sparkles className="h-3 w-3 text-amber-400" /> Quick run:
        </span>
        {["whoami", "skills", "experience", "vulns", "contact"].map((cmd) => (
          <button
            key={cmd}
            onClick={() => runCommand(cmd)}
            className="px-2 py-0.5 rounded text-[11px] bg-secondary/60 hover:bg-primary/20 text-muted-foreground hover:text-primary border border-border/50 transition-colors"
          >
            {cmd}
          </button>
        ))}
      </div>

      {/* Terminal Content Area */}
      <div className="p-4 space-y-3 min-h-[220px] max-h-[320px] overflow-y-auto">
        <p className="text-xs text-muted-foreground">
          Welcome to Alwin's Interactive Console. Type <span className="text-primary">help</span> to view available commands.
        </p>

        {logs.map((log) => (
          <div key={log.id} className="space-y-1.5">
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <span className="text-primary font-bold">alwin@sec-node:~$</span>
              <span className="text-foreground font-medium">{log.command}</span>
            </div>
            <div className="pl-4 text-foreground/90">{log.output}</div>
          </div>
        ))}

        {/* Input prompt line */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            runCommand(input);
          }}
          className="flex items-center gap-2 text-xs pt-1"
        >
          <span className="text-primary font-bold shrink-0">alwin@sec-node:~$</span>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="type command (e.g. skills)..."
            className="flex-1 bg-transparent text-foreground focus:outline-none placeholder:text-muted-foreground/40 font-mono text-xs"
          />
          <button type="submit" className="text-muted-foreground hover:text-primary transition-colors">
            <Play className="h-3 w-3" />
          </button>
        </form>
        <div ref={bottomRef} />
      </div>
    </div>
  );
}
