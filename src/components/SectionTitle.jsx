export default function SectionTitle({
  children,
  className = "",
  size = "default",
  showUnderline = true,
  underlineColor = "bg-red1",
  underlineWidth = "w-20",
}) {
  const sizeClasses = {
    small: "text-xl md:text-2xl",
    default: "text-2xl md:text-3xl",
    large: "text-3xl md:text-4xl lg:text-5xl",
  };

  return (
    <div className="flex flex-col items-center">
      <h2
        className={`font-title ${sizeClasses[size]} mb-2 text-center ${className}`}
      >
        {children}
      </h2>
      {showUnderline && (
        <div
          className={`${underlineWidth} h-[3px] ${underlineColor} mb-4 rounded`}
        />
      )}
    </div>
  );
}
