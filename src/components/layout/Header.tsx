import { Server } from "lucide-react";

export function Header() {
  return (
    <nav className="relative z-10 mx-auto flex w-full max-w-7xl items-center justify-between px-5 py-4 md:px-8">
      <a href="#top" className="flex items-center gap-3 text-sm font-semibold text-white">
        <span className="grid size-9 place-items-center rounded-lg border border-cyan-400/20 bg-cyan-400/10 text-cyan-200">
          <Server size={18} />
        </span>
        Matheus Freire
      </a>
      <div className="hidden items-center gap-6 text-sm text-slate-400 md:flex">
        <a href="#sobre" className="nav-link">Sobre</a>
        <a href="#competencias" className="nav-link">Competências</a>
        <a href="#projetos" className="nav-link">Projetos</a>
        <a href="#contato" className="nav-link">Contato</a>
      </div>
    </nav>
  );
}
