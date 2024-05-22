import Link from "next/link";
export default function Nav() {
  return (
    <nav>
      <ul className="nav">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/users">Users</Link>
        </li>
        <li>
          <Link href="/users/orders">Orders</Link>
        </li>
      </ul>
    </nav>
  );
}
