import Image from "next/image";
import Link from "next/link";

export default function Logo({ light }) {
  return (
    <Link href="/" className="inline-flex" aria-label="Cruip">
      {light ? (
        <Image src="/logo-4.png" alt="SEPL Logo" width={100} height={100} />
      ) : (
        <Image src="/logo.png" alt="SEPL Logo" width={100} height={100} />
      )}
    </Link>
  );
}
