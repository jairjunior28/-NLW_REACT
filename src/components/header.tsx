import Logo from "../assets/img/logo.svg";
export function Header() {
  return (
    <div className="flex items-center gap-5 py-2">
      <img src={Logo} />
      <nav className="flex items-center gap-5 text-zinc-300">
        <a href="" className="font-medium text-sm">
          Events
        </a>
        <a href="" className="font-medium text-sm">
          Participantes
        </a>
      </nav>
    </div>
  );
}
