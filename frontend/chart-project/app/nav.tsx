'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation'
import { IoHomeSharp } from "react-icons/io5";
import { LuCandlestickChart } from "react-icons/lu";
import { FaChartLine, FaChartBar, FaChartPie } from "react-icons/fa";

export default function Nav() {
  const pathname = usePathname()
  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <nav className="p-4 md:p-10 text-gray-200 flex flex-wrap items-center justify-center bg-gray-900">
      <ul className="flex flex-wrap gap-8 md:gap-16">
        <li className={isActive('/') ? 'text-cyan-400' : ''}>
          <Link href="/" className={isActive('/') ? 'hover:text-teal-700 text-teal-500' : 'hover:text-teal-700'}>
            <IoHomeSharp className='text-4xl md:text-5xl' />
          </Link>
        </li>
        <li className={isActive('/candlestick') ? 'text-teal-500' : ''}>
          <Link href="/candlestick" className={isActive('/candlestick') ? 'hover:text-teal-700 text-teal-500' : 'hover:text-teal-700'}>
            <LuCandlestickChart className='text-4xl md:text-5xl' />
          </Link>
        </li>
        <li className={isActive('/line') ? 'text-teal-500' : ''}>
          <Link href="/line" className={isActive('/line') ? 'hover:text-teal-700 text-teal-500' : 'hover:text-teal-700'}>
            <FaChartLine className='text-4xl md:text-5xl' />
          </Link>
        </li>
        <li className={isActive('/bar') ? 'text-teal-500' : ''}>
          <Link href="/bar" className={isActive('/bar') ? 'hover:text-teal-700 text-teal-500' : 'hover:text-teal-700'}>
            <FaChartBar className='text-4xl md:text-5xl' />
          </Link>
        </li>
        <li className={isActive('/pie') ? 'text-teal-500' : ''}>
          <Link href="/pie" className={isActive('/pie') ? 'hover:text-teal-700 text-teal-500' : 'hover:text-teal-700'}>
            <FaChartPie className='text-4xl md:text-5xl' />
          </Link>
        </li>
      </ul>
    </nav>
  );
}
