import Link from 'next/link'
import { Github, Twitter, Mail, MessageCircle } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">TU</span>
              </div>
              <span className="text-xl font-bold">TON University</span>
            </Link>
            <p className="text-gray-400 mb-6 max-w-md">
              TON University是学习TON区块链开发的权威平台。我们致力于为开发者提供最优质的学习资源和社区支持。
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Mail className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Learning */}
          <div>
            <h3 className="text-lg font-semibold mb-4">学习资源</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/courses" className="text-gray-400 hover:text-white transition-colors">
                  所有课程
                </Link>
              </li>
              <li>
                <Link href="/path/beginner" className="text-gray-400 hover:text-white transition-colors">
                  初学者路径
                </Link>
              </li>
              <li>
                <Link href="/path/intermediate" className="text-gray-400 hover:text-white transition-colors">
                  进阶路径
                </Link>
              </li>
              <li>
                <Link href="/path/advanced" className="text-gray-400 hover:text-white transition-colors">
                  高级路径
                </Link>
              </li>
              <li>
                <Link href="/docs" className="text-gray-400 hover:text-white transition-colors">
                  技术文档
                </Link>
              </li>
            </ul>
          </div>

          {/* Community */}
          <div>
            <h3 className="text-lg font-semibold mb-4">社区</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/community" className="text-gray-400 hover:text-white transition-colors">
                  开发者社区
                </Link>
              </li>
              <li>
                <Link href="/discussions" className="text-gray-400 hover:text-white transition-colors">
                  讨论区
                </Link>
              </li>
              <li>
                <Link href="/events" className="text-gray-400 hover:text-white transition-colors">
                  活动
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-white transition-colors">
                  博客
                </Link>
              </li>
              <li>
                <Link href="/newsletter" className="text-gray-400 hover:text-white transition-colors">
                  订阅更新
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 TON University. 保留所有权利。
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
                隐私政策
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
                服务条款
              </Link>
              <Link href="/cookies" className="text-gray-400 hover:text-white text-sm transition-colors">
                Cookie政策
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
