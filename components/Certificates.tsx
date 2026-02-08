import { Award, Calendar, ExternalLink, Download } from "lucide-react";

type CertColor = "cyan" | "green" | "purple";

type Certificate = {
  title: string;
  issuer: string;
  date: string;
  color: CertColor;
  link?: string; // Google Drive share link (view)
};

const certificates: Certificate[] = [
  {
    title: "The Bits and Bytes of Computer Networking",
    issuer: "Coursera",
    date: "Sep 2024",
    color: "cyan",
    link: "https://drive.google.com/file/d/1n-57yj9HX6OVdYyZGlu4tTzfnnTRO3mw/view?usp=drive_link",
  },
  {
    title: "Network and System Configuration Fundamentals",
    issuer: "Lovely Professional University",
    date: "Jul 2024",
    color: "green",
    link: "https://drive.google.com/file/d/1t0f14StPjJSR4PlvXSDYlVC75yIGEM2l/view?usp=drive_link",
  },
  {
    title: "English Language for Competitive Exams",
    issuer: "NPTEL",
    date: "May 2025",
    color: "purple",
    link: "https://drive.google.com/file/d/1nddq39pYfEFvhsV2Szzc0SCAssWatQz3/view?usp=drive_link",
  },
  {
    title: "Social Network",
    issuer: "NPTEL",
    date: "Jun–Jul 2025",
    color: "cyan",
    link: "https://drive.google.com/file/d/1a1jED1A7BO6rja_fnbh8fLLnNKEkRHo2/view?usp=drive_link",
  },
  {
    title: "Responsive Web Design",
    issuer: "FreeCodeCamp",
    date: "Sep 2023",
    color: "green",
    link: "https://drive.google.com/file/d/1KI46CrGlBJttlY9lDVfkYtJdYLpFNAFc/view?usp=drive_link",
  },
  {
    title: "UAT",
    issuer: "Udemy",
    date: "Feb 2025",
    color: "purple",
    link: "https://drive.google.com/file/d/1HT4A01gA_oV3VMoDM9Q_ndqYnh71MEtd/view?usp=drive_link",
  },
];

// Tailwind-safe mapping (prevents dynamic class issues)
const colorStyles: Record<CertColor, { bg: string; border: string; text: string }> = {
  cyan: {
    bg: "bg-cyber-cyan/10",
    border: "border-cyber-cyan/30",
    text: "text-cyber-cyan",
  },
  green: {
    bg: "bg-cyber-green/10",
    border: "border-cyber-green/30",
    text: "text-cyber-green",
  },
  purple: {
    bg: "bg-cyber-purple/10",
    border: "border-cyber-purple/30",
    text: "text-cyber-purple",
  },
};

/**
 * Extract Google Drive file id from multiple possible link formats.
 */
function getDriveFileId(url: string): string | null {
  if (!url) return null;

  // Format: https://drive.google.com/file/d/<ID>/view
  const m1 = url.match(/\/file\/d\/([a-zA-Z0-9_-]+)/);
  if (m1?.[1]) return m1[1];

  // Format: https://drive.google.com/open?id=<ID>
  const m2 = url.match(/[?&]id=([a-zA-Z0-9_-]+)/);
  if (m2?.[1]) return m2[1];

  // Format: .../uc?export=download&id=<ID>
  const m3 = url.match(/uc\?export=download&id=([a-zA-Z0-9_-]+)/);
  if (m3?.[1]) return m3[1];

  return null;
}

function getDrivePreviewLink(url: string): string {
  const id = getDriveFileId(url);
  return id ? `https://drive.google.com/file/d/${id}/preview` : url;
}

function getDriveDownloadLink(url: string): string {
  const id = getDriveFileId(url);
  return id ? `https://drive.google.com/uc?export=download&id=${id}` : url;
}

export default function Certificates() {
  return (
    <section id="certificates" className="py-20 px-6 bg-cyber-dark/30">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 reveal">
          <span className="inline-block px-4 py-2 glass rounded-full text-cyber-purple text-sm font-semibold uppercase tracking-wider mb-4">
            Certificates
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
            Certifications & Achievements
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Public certificates hosted on Google Drive (open in a new tab).
          </p>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, index) => {
            const styles = colorStyles[cert.color];
            const previewLink = cert.link ? getDrivePreviewLink(cert.link) : "";
            const downloadLink = cert.link ? getDriveDownloadLink(cert.link) : "";

            return (
              <div
                key={index}
                className="glass rounded-xl p-6 hover:border-cyber-cyan hover:shadow-lg hover:shadow-cyber-cyan/10 transition-all duration-300 hover:-translate-y-2 reveal group flex flex-col"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Icon */}
                <div
                  className={[
                    "p-3 rounded-lg border w-fit mb-4 group-hover:scale-110 transition-transform duration-300",
                    styles.bg,
                    styles.border,
                  ].join(" ")}
                >
                  <Award className={["w-6 h-6", styles.text].join(" ")} />
                </div>

                {/* Title */}
                <h3 className="font-display text-lg font-semibold text-white mb-3 leading-tight">
                  {cert.title}
                </h3>

                {/* Meta */}
                <div className="space-y-2 mb-6">
                  <p className="text-cyber-green font-medium text-sm">{cert.issuer}</p>
                  <div className="flex items-center gap-2 text-gray-400 text-sm">
                    <Calendar size={14} />
                    <span>{cert.date}</span>
                  </div>
                </div>

                {/* Buttons */}
                {cert.link && (
                  <div className="mt-auto flex gap-3">
                    {/* View (Preview) */}
                    <a
                      href={previewLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg border border-white/10 bg-cyber-black/40 text-white hover:border-cyber-cyan hover:shadow-md hover:shadow-cyber-cyan/20 transition-all"
                      title="Open certificate"
                    >
                      View <ExternalLink size={16} />
                    </a>

                    {/* Optional Download */}
                    <a
                      href={downloadLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg border border-white/10 bg-cyber-black/40 text-white hover:border-cyber-green hover:shadow-md hover:shadow-cyber-green/20 transition-all"
                      title="Download certificate"
                    >
                      <Download size={16} />
                    </a>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <p className="text-center text-gray-500 text-sm mt-10">
          If any certificate shows “Access denied”, set Google Drive sharing to{" "}
          <span className="text-gray-300">Anyone with the link → Viewer</span>.
        </p>
      </div>
    </section>
  );
}
