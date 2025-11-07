export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-transparent text-white fixed w-full z-50">
      <h1 className="text-2xl font-bold">CryptoSphere</h1>
      <button className="bg-gradient-to-r from-indigo-500 to-cyan-500 px-5 py-2 rounded-xl font-semibold">
        Dashboard
      </button>
    </nav>
  );
}
