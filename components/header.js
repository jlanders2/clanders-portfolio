import Image from 'next/image';

export default function Header() {
  return (
    <div className="container mx-auto flex justify-around items-center align-middle py-5">
      <h4 className="nav-text">Projects</h4>
      <h4 className="nav-text">Resume</h4>
      <Image
        src="/developer-white/developer-100.png"
        alt="icon"
        width={64}
        height={64}
      />
      <h4 className="nav-text">About</h4>
      <h4 className="nav-text">Contact</h4>
    </div>
  );
}
