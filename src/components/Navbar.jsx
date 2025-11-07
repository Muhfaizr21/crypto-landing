export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-10 py-6 border-b border-gray-800 backdrop-blur-md bg-gray-900/60">
      <h1 className="text-2xl font-bold tracking-tight">
        Crypto<span className="text-cyan-400">Flow</span>
      </h1>
      <ul className="flex space-x-8 text-gray-300 font-medium">
        <li><a href="/">Home</a></li>
        <li><a href="/features">Features</a></li>
      </ul>
    </nav>
  );
}
