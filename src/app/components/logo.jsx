import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="inline-flex" aria-label="Cruip">
      <Image src="/logo-4.png" alt="SEPL Logo" width={100} height={100} />
    </Link>
  );
}
