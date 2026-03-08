import Link from "next/link";

interface ServiceCardProps {
  title: string;
  description: string;
  href: string;
  icon: React.ReactNode;
}

export default function ServiceCard({
  title,
  description,
  href,
  icon,
}: ServiceCardProps) {
  return (
    <Link
      href={href}
      className="group block bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-purple/40 hover:bg-purple/5 transition-all duration-300"
    >
      <div className="w-14 h-14 bg-purple/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-purple/20 transition-colors">
        {icon}
      </div>
      <h3 className="text-white font-heading font-bold text-xl mb-3">
        {title}
      </h3>
      <p className="text-gray text-sm leading-relaxed mb-4">{description}</p>
      <span className="text-purple text-sm font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all">
        Learn more
        <svg
          className="w-4 h-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 8l4 4m0 0l-4 4m4-4H3"
          />
        </svg>
      </span>
    </Link>
  );
}
