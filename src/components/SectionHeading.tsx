type Props = {
  title: string;
  subtitle?: string;
};

export default function SectionHeading({
  title,
  subtitle,
}: Props) {
  return (
    <div className="mb-16">
      <h2 className="text-4xl font-bold">{title}</h2>

      {subtitle && (
        <p className="mt-4 max-w-2xl text-gray-400">
          {subtitle}
        </p>
      )}
    </div>
  );
}