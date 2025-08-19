export default function Card({ children, className = "" }) {
  return (
    <div
      className={`bg-white/80 rounded-xl border border-gray-200 shadow p-5 ${className}`}
    >
      {children}
    </div>
  );
}
