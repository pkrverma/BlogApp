export default function Button({
  children,
  onClick,
  type = "button",
  variant = "muted",
  disabled = false,
  className = "",
}) {
  const baseClasses =
    "px-4 py-1 rounded font-medium shadow-sm focus:outline-none transition-colors";
  const variantClasses = {
    muted: "bg-gray-200 text-gray-700 hover:bg-gray-300",
    accent: "bg-green-500 text-white hover:bg-green-600",
    outline:
      "border border-gray-400 text-gray-700 bg-transparent hover:bg-gray-100",
  };

  const finalClasses = `${baseClasses} ${variantClasses[variant]} ${
    disabled ? "opacity-50 cursor-not-allowed" : ""
  } ${className}`;

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={finalClasses}
    >
      {children}
    </button>
  );
}
