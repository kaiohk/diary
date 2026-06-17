export function Quote({ children }: { children: React.ReactNode }) {
  return (
    <span className="border-l-2 border-white pl-2 italic opacity-70">
      {children}
    </span>
  );
}
