type SectionTitleProps = {
  title: string;
  description?: string;
};

export function SectionTitle({ title, description }: SectionTitleProps) {
  return (
    <div className="section-title mx-auto mb-9 max-w-6xl">
      <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">{title}</h2>
      {description ? <p className="mt-3 max-w-2xl text-base leading-7 text-slate-400">{description}</p> : null}
    </div>
  );
}
