'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Menu, X, BookOpen, Code, Users, ChevronDown } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  return (
    <header className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">TU</span>
            </div>
            <span className="text-xl font-bold text-gray-900">TON University</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/courses" className="text-gray-700 hover:text-blue-600 transition-colors">
              课程
            </Link>
            
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center text-gray-700 hover:text-blue-600 transition-colors"
              >
                学习路径
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              
              {isDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2">
                  <Link href="/path/beginner" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">
                    初学者路径
                  </Link>
                  <Link href="/path/intermediate" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">
                    进阶路径
                  </Link>
                  <Link href="/path/advanced" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">
                    高级路径
                  </Link>
                </div>
              )}
            </div>
            
            <Link href="/docs" className="text-gray-700 hover:text-blue-600 transition-colors">
              文档
            </Link>
            <Link href="/community" className="text-gray-700 hover:text-blue-600 transition-colors">
              社区
            </Link>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost">登录</Button>
            <Button>开始学习</Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">
            <nav className="flex flex-col space-y-4">
              <Link href="/courses" className="text-gray-700 hover:text-blue-600 transition-colors">
                课程
              </Link>
              <Link href="/path/beginner" className="text-gray-700 hover:text-blue-600 transition-colors">
                初学者路径
              </Link>
              <Link href="/path/intermediate" className="text-gray-700 hover:text-blue-600 transition-colors">
                进阶路径
              </Link>
              <Link href="/path/advanced" className="text-gray-700 hover:text-blue-600 transition-colors">
                高级路径
              </Link>
              <Link href="/docs" className="text-gray-700 hover:text-blue-600 transition-colors">
                文档
              </Link>
              <Link href="/community" className="text-gray-700 hover:text-blue-600 transition-colors">
                社区
              </Link>
              <div className="pt-4 border-t border-gray-200">
                <Button variant="ghost" className="w-full justify-start mb-2">
                  登录
                </Button>
                <Button className="w-full">开始学习</Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
