type FeatureCardProps = {
  title: string;
  description: string;
  icon: string;
};

export default function FeatureCard({
  title,
  description,
  icon,
}: FeatureCardProps) {
  return (
    <article className="group rounded-2xl border border-white/[0.07] bg-white/[0.025] p-6 transition duration-300 hover:-translate-y-1 hover:border-violet-400/20 hover:bg-white/[0.04]">
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-500/10 text-xl">
        {icon}
      </div>

      <h3 className="mt-6 font-semibold text-white">
        {title}
      </h3>

      <p className="mt-3 text-sm leading-6 text-white/40">
        {description}
      </p>
    </article>
  );
}