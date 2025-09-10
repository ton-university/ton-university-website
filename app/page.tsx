import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { BookOpen, Code, Users, Zap, ArrowRight, Star, Play } from 'lucide-react'
import Header from '@/components/header'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Header />
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mb-8">
              <Star className="w-4 h-4 mr-2" />
              最权威的TON区块链学习平台
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              学习
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                TON
              </span>
              区块链开发
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              从零开始掌握TON区块链技术，学习智能合约开发、DApp构建和区块链应用。适合初学者和进阶开发者。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-3">
                <Play className="w-5 h-5 mr-2" />
                开始学习
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-3">
                查看课程
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              为什么选择 TON University？
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              我们提供最全面、最实用的TON区块链学习体验
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle className="text-xl">系统化学习</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  从基础概念到高级开发，循序渐进的学习路径
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Code className="w-6 h-6 text-green-600" />
                </div>
                <CardTitle className="text-xl">实战项目</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  通过真实项目练习，掌握实际开发技能
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6 text-purple-600" />
                </div>
                <CardTitle className="text-xl">社区支持</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  加入开发者社区，分享经验和解决问题
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-6 h-6 text-orange-600" />
                </div>
                <CardTitle className="text-xl">最新技术</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  紧跟TON生态发展，学习最新技术和工具
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              热门课程
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              选择适合你的学习路径，开始TON开发之旅
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader>
                <div className="w-full h-48 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg mb-4 flex items-center justify-center">
                  <BookOpen className="w-16 h-16 text-white" />
                </div>
                <CardTitle className="text-xl">TON基础入门</CardTitle>
                <CardDescription className="text-base">
                  了解TON区块链的基本概念、架构和核心特性
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">初级 · 4小时</span>
                  <Button variant="ghost" className="group-hover:bg-blue-50">
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader>
                <div className="w-full h-48 bg-gradient-to-br from-green-400 to-green-600 rounded-lg mb-4 flex items-center justify-center">
                  <Code className="w-16 h-16 text-white" />
                </div>
                <CardTitle className="text-xl">智能合约开发</CardTitle>
                <CardDescription className="text-base">
                  学习使用FunC和Tolk语言开发TON智能合约
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">中级 · 8小时</span>
                  <Button variant="ghost" className="group-hover:bg-green-50">
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader>
                <div className="w-full h-48 bg-gradient-to-br from-purple-400 to-purple-600 rounded-lg mb-4 flex items-center justify-center">
                  <Zap className="w-16 h-16 text-white" />
                </div>
                <CardTitle className="text-xl">DApp开发实战</CardTitle>
                <CardDescription className="text-base">
                  构建完整的去中心化应用，集成钱包和智能合约
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">高级 · 12小时</span>
                  <Button variant="ghost" className="group-hover:bg-purple-50">
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button size="lg" variant="outline" className="text-lg px-8 py-3">
              查看所有课程
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-4">
            准备好开始TON开发之旅了吗？
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            加入数千名开发者，一起探索TON区块链的无限可能
          </p>
          <Button size="lg" variant="secondary" className="text-lg px-8 py-3">
            立即开始学习
          </Button>
        </div>
      </section>
      <Footer />
    </div>
  )
}
