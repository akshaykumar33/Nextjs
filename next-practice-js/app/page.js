'use client'

import { useRouter } from "next/navigation";
import { Roboto } from 'next/font/google'

const roboto = Roboto({ // Move Roboto call to module scope this is important don't keep inside function block
  weight: '900',
  subsets: ['latin'],
  display: 'swap',
})

export default function Home() {
  const router = useRouter(); //1st way
  const navigate = (page) => { //2nd way of using router
    router.push(page);
  }

  return (
    <section>
      <h2 className={roboto.className}>Test Roboto Font</h2>
      <h1>useRouter</h1>
      <button className="border px-2 py-4" onClick={() => router.push('about')}>Go To About Page</button>
      <button className="border px-2 py-4" onClick={() => navigate('portfolio')}>Go To Portfolio Page</button>
      <button className="border px-2 py-4" onClick={() => navigate('login')}>Login</button>
      <button className="border px-2 py-4" onClick={() => navigate('register')}>Register</button>
    </section>
  );
}
