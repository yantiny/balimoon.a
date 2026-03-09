export default function Navbar() {
  return (
    <nav className="flex justify-between items-center py-4 border-b px-20">
      <div className="flex items-center gap-2">
        <img src="/logo.png" width={40} />
        <span>Bali Moon</span>
      </div>

      <ul className="flex gap-8">
        <li>Home</li>
        <li>About Us</li>
        <li>Contacts</li>
      </ul>

      <div>
        <span>Profile</span>
      </div>
    </nav>
  );
}
