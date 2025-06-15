import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* 头部区域 */}
      <header className="relative h-screen">
        <div className="absolute inset-0">
          <Image
            src="/images/hero.jpg"
            alt="YJIM Fashion"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
          <h1 className="text-6xl font-brand mb-4">YJIM</h1>
          <h2 className="text-2xl">时尚潮流基地</h2>
        </div>
      </header>

      {/* 导航栏 */}
      <nav className="sticky top-0 bg-white shadow-md z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex space-x-8">
              <Link href="/whats-new" className="text-gray-700 hover:text-brand-blue">
                What's New
              </Link>
              <Link href="/clothing" className="text-gray-700 hover:text-brand-blue">
                Clothing
              </Link>
              <Link href="/beauty" className="text-gray-700 hover:text-brand-blue">
                Beauty
              </Link>
              <Link href="/decor" className="text-gray-700 hover:text-brand-blue">
                Décor
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* 页脚 */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">关于我们</h3>
              <p className="text-gray-400">YJIM时尚潮流基地，引领时尚潮流，展现独特魅力。</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">客户服务</h3>
              <ul className="space-y-2 text-gray-400">
                <li>联系我们</li>
                <li>配送信息</li>
                <li>退换政策</li>
                <li>常见问题</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">关注我们</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">微信</a>
                <a href="#" className="text-gray-400 hover:text-white">微博</a>
                <a href="#" className="text-gray-400 hover:text-white">抖音</a>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">法律信息</h3>
              <ul className="space-y-2 text-gray-400">
                <li>隐私政策</li>
                <li>使用条款</li>
                <li>Cookie政策</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
} 