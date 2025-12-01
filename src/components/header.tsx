import Logo from "./logo";

export default function Header() {
  return (
    <header className="flex w-full items-center justify-between p-6">
      <div className="flex items-center gap-4">
        <Logo className="w-16 h-auto text-blue-900" />
      </div>
    </header>
  );
}