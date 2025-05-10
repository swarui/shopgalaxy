import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md p-4">
      <ul className="flex space-x-6 text-lg font-medium text-gray-800">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/products">Products</Link>
        </li>
        <li>
          <Link href="/cart">Cart</Link>
        </li>
        <li>
          <Link href="/checkout">Checkout</Link>
        </li>
      </ul>
    </nav>
  );
}
