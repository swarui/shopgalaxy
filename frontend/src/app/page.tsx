'use client'; // if you're using any client-side interactivity

import Navbar from '../components/Navbar';

export default function Page() {
  return (
    <>
      <Navbar />
      <main className="p-8">
        <h1 className="text-2xl font-bold">Welcome to Kikapu!</h1>
        <p className="mt-4 text-gray-600">Your one-stop shop for everything awesome.</p>
      </main>
    </>
  );
}
