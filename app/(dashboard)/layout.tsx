import { UserButton } from '@clerk/nextjs'
import { Disclosure } from '@headlessui/react'
import Link from 'next/link'

const links = [
  { href: '/', label: 'Home' },
  { href: '/journal', label: 'Journal' },
  { href: '/history', label: 'History' },
]
const DashboardLayout = ({ children }) => {
  return (
    // <div className="w-full h-full relative">
    //   <aside className="absolute left-0 top-0 h-auto w-[200px] border-r border-black/10">
    //     <div className="px-4 my-4">
    //       <span className="text-3xl">MOOD</span>
    //     </div>
    //     <ul className="px-4">
    //       {links.map((link) => (
    //         <li key={link.href} className="my-4 text-xl">
    //           <Link href={link.href}>{link.label}</Link>
    //         </li>
    //       ))}
    //     </ul>
    //   </aside>
    //   <div className="ml-[200px] h-auto ">
    //     <header className="h-[60px] border-b border-black/10">
    //       <nav className="px-4 h-full ">
    //         <div className="flex items-start justify-start h-full">
             
    //         </div>
    //         <div className="flex items-center justify-end h-full">
    //           <UserButton
    //             afterSignOutUrl="/"
    //             appearance={{
    //               elements: {
    //                 userButtonAvatarBox: {
    //                   width: '3rem',
    //                   height: '3rem',
    //                 },
    //               },
    //             }}
    //           />
    //         </div>
    //       </nav>
    //     </header>
    //     <div className="h-[calc(100vh-60px)]">{children}</div>
    //   </div>
    // </div>
    <div className='w-full h-full relative'>
      <div className='ml-[0px] h-auto'>
        <header className="h-[70px] border-b border-black/10">
          <div className='  px-2 sm:px-6 lg:px-8'>
            <div className='relative flex h-16 items-center justify-between'>
              <div className='flex flex-1 items-center justify-center sm:items-stretch sm:justify-start'>
                <div className='flex flex-shrink-0 items-center flex-col '>
                  <span className='text-3xl'>MoodSense</span>
                  <span className='text-sm'>Journal Analyzer</span>
                </div>
                <div className='hidden sm:ml-12 sm:block'>
                  <ul className="flex space-x-3">
                    {links.map((link) => (
                      <li key={link.href} className=" text-xl hover:bg-zinc-400/40 rounded-md px-2 py-2 mt-2">
                        <Link href={link.href}>{link.label}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className='absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0'>
              <UserButton
                    afterSignOutUrl="/"
                    appearance={{
                      elements: {
                        userButtonAvatarBox: {
                          width: '2.6rem',
                          height: '2.6rem',
                        },
                      },
                    }}
                  />
              </div>
            </div>
          </div>
        </header>
        <div className="h-[calc(100vh-60px)]">{children}</div>
      </div>
    </div>



  )
}

export default DashboardLayout
