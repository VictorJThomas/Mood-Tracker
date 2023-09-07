import { UserButton } from '@clerk/nextjs'
import Link from 'next/link'

const links = [
  { href: '/', label: 'Home' },
  { href: '/journal', label: 'Journal' },
  { href: '/history', label: 'History' },
]
const DashboardLayout = ({ children }) => {
  return (
    <div className="w-full h-full relative">
      <aside className="absolute left-0 top-0 h-auto w-[200px] border-r border-black/10">
        <div className='px-4 my-4'>
          <span className='text-3xl'>MOOD</span>
        </div>
        <ul className='px-4'>
          {links.map((link) => (
            <li key={link.href} className="my-4 text-xl">
              <Link href={link.href}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </aside>
      <div className="ml-[200px] h-auto ">
        <header className="h-[60px] border-b border-black/10">
          <nav className="px-4 h-full">
            <div className="flex items-center justify-end h-full">
              <UserButton afterSignOutUrl="/" />
            </div>
          </nav>
        </header>
        <div className="h-[calc(100vh-60px)]">{children}</div>
      </div>
    </div>
  )
}

export default DashboardLayout
