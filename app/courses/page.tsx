import { Metadata } from 'next'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { BookOpen, Clock, Users, Star, ArrowRight } from 'lucide-react'
import Header from '@/components/header'
import Footer from '@/components/footer'

export const metadata: Metadata = {
  title: '课程 - TON University',
  description: '探索TON区块链开发的完整课程体系，从基础入门到高级应用开发。',
}

const courses = [
  {
    id: 'ton-basics',
    title: 'TON基础入门',
    description: '了解TON区块链的基本概念、架构和核心特性，为深入学习打下坚实基础。',
    level: '初级',
    duration: '4小时',
    students: 1200,
    rating: 4.8,
    image: '/courses/ton-basics.jpg',
    tags: ['区块链基础', 'TON架构', '核心概念'],
    price: '免费'
  },
  {
    id: 'smart-contracts',
    title: '智能合约开发',
    description: '学习使用FunC和Tact语言开发TON智能合约，掌握合约部署和交互技术。',
    level: '中级',
    duration: '8小时',
    students: 800,
    rating: 4.9,
    image: '/courses/smart-contracts.jpg',
    tags: ['FunC', 'Tact', '智能合约', '部署'],
    price: '免费'
  },
  {
    id: 'dapp-development',
    title: 'DApp开发实战',
    description: '构建完整的去中心化应用，学习前端集成、钱包连接和用户交互。',
    level: '高级',
    duration: '12小时',
    students: 500,
    rating: 4.7,
    image: '/courses/dapp-development.jpg',
    tags: ['DApp', '前端开发', '钱包集成', '用户体验'],
    price: '免费'
  },
  {
    id: 'defi-protocols',
    title: 'DeFi协议开发',
    description: '深入DeFi协议开发，学习流动性池、借贷、交易等核心功能的实现。',
    level: '高级',
    duration: '16小时',
    students: 300,
    rating: 4.6,
    image: '/courses/defi-protocols.jpg',
    tags: ['DeFi', '流动性池', '借贷协议', '交易协议'],
    price: '免费'
  },
  {
    id: 'nft-marketplace',
    title: 'NFT市场开发',
    description: '构建NFT交易市场，实现铸造、交易、拍卖等核心功能。',
    level: '中级',
    duration: '10小时',
    students: 600,
    rating: 4.8,
    image: '/courses/nft-marketplace.jpg',
    tags: ['NFT', '市场开发', '铸造', '交易'],
    price: '免费'
  },
  {
    id: 'security-audit',
    title: '智能合约安全审计',
    description: '学习智能合约安全审计技术，识别和修复常见的安全漏洞。',
    level: '高级',
    duration: '14小时',
    students: 200,
    rating: 4.9,
    image: '/courses/security-audit.jpg',
    tags: ['安全审计', '漏洞检测', '最佳实践', '代码审查'],
    price: '免费'
  }
]

export default function CoursesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              TON开发课程
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-8">
              从基础概念到高级应用，掌握TON区块链开发的完整技能体系
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                <BookOpen className="w-4 h-4 mr-1" />
                6门课程
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                <Clock className="w-4 h-4 mr-1" />
                64小时内容
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                <Users className="w-4 h-4 mr-1" />
                3600+ 学员
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course) => (
              <Card key={course.id} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                <CardHeader className="pb-4">
                  <div className="w-full h-48 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg mb-4 flex items-center justify-center">
                    <BookOpen className="w-16 h-16 text-white" />
                  </div>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline" className="text-xs">
                      {course.level}
                    </Badge>
                    <div className="flex items-center text-sm text-gray-500">
                      <Star className="w-4 h-4 text-yellow-400 mr-1" />
                      {course.rating}
                    </div>
                  </div>
                  <CardTitle className="text-xl group-hover:text-blue-600 transition-colors">
                    {course.title}
                  </CardTitle>
                  <CardDescription className="text-base">
                    {course.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {course.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {course.duration}
                    </div>
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-1" />
                      {course.students} 学员
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-semibold text-blue-600">
                      {course.price}
                    </span>
                    <Button variant="ghost" className="group-hover:bg-blue-50">
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            找不到合适的课程？
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            我们提供定制化学习路径，根据你的需求和基础量身定制学习计划
          </p>
          <Button size="lg" className="text-lg px-8 py-3">
            联系我们定制课程
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
