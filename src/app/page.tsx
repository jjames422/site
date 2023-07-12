import Image from 'next/image'

export default function Home() {
  return (
    <nav>
      <div className="flex items-center justify-between p-8">
        <div className="flex items-center justify-between">
          <Image src="/logo.svg" alt="Logo" width={40} height={40} />
          <h1 className="ml-2 text-2xl font-bold">Next.js</h1>
        </div>
        <div className="flex items-center justify-between">
          <a href='#'></a>
          </div>
          </div>
    </nav>
   
  )
}
