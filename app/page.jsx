"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight, ShoppingBag, Truck, CreditCard, LifeBuoy, Zap, Shield, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Testimonials } from "@/components/testimonials"

// Featured categories
const categories = [
  {
    id: 1,
    name: "Fashion",
    image: "https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&w=2071&auto=format&fit=crop",
    count: 120,
    slug: "fashion",
  },
  {
    id: 2,
    name: "Electronics",
    image: "https://images.unsplash.com/photo-1550009158-9ebf69173e03?q=80&w=2101&auto=format&fit=crop",
    count: 85,
    slug: "electronics",
  },
  {
    id: 3,
    name: "Home & Garden",
    image: "https://images.unsplash.com/photo-1616046229478-9901c5536a45?q=80&w=2080&auto=format&fit=crop",
    count: 97,
    slug: "home-garden",
  },
  {
    id: 4,
    name: "Beauty",
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=2080&auto=format&fit=crop",
    count: 76,
    slug: "beauty",
  },
]

// Trending products
const trendingProducts = [
  {
    id: 1,
    name: "Wireless Noise Cancelling Headphones",
    price: 249.99,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=2070&auto=format&fit=crop",
    category: "electronics",
    rating: 4.8,
    reviews: 156,
    isNew: true,
    discount: 15,
  },
  {
    id: 2,
    name: "Premium Leather Crossbody Bag",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=1935&auto=format&fit=crop",
    category: "fashion",
    rating: 4.6,
    reviews: 89,
    isNew: false,
    discount: 0,
  },
  {
    id: 3,
    name: "Smart Watch Series 5",
    price: 399.99,
    image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?q=80&w=2064&auto=format&fit=crop",
    category: "electronics",
    rating: 4.9,
    reviews: 201,
    isNew: true,
    discount: 10,
  },
  {
    id: 4,
    name: "Organic Skincare Set",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?q=80&w=1974&auto=format&fit=crop",
    category: "beauty",
    rating: 4.7,
    reviews: 112,
    isNew: false,
    discount: 20,
  },
  {
    id: 5,
    name: "Modern Ceramic Planter",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?q=80&w=2072&auto=format&fit=crop",
    category: "home-garden",
    rating: 4.5,
    reviews: 78,
    isNew: false,
    discount: 0,
  },
  {
    id: 6,
    name: "Designer Sunglasses",
    price: 159.99,
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=2080&auto=format&fit=crop",
    category: "fashion",
    rating: 4.4,
    reviews: 65,
    isNew: true,
    discount: 5,
  },
  {
    id: 7,
    name: "Smart Home Speaker",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1589003077984-894e133dabab?q=80&w=1964&auto=format&fit=crop",
    category: "electronics",
    rating: 4.6,
    reviews: 92,
    isNew: false,
    discount: 0,
  },
  {
    id: 8,
    name: "Luxury Scented Candle",
    price: 39.99,
    image: "https://images.unsplash.com/photo-1603006905003-be475563bc59?q=80&w=1974&auto=format&fit=crop",
    category: "home-garden",
    rating: 4.3,
    reviews: 47,
    isNew: false,
    discount: 0,
  },
]

// Features
const features = [
  {
    icon: <ShoppingBag className="h-10 w-10" />,
    title: "Easy Shopping",
    description: "Browse thousands of products with our intuitive interface and smart search features.",
    color: "from-pink-500 to-rose-500",
  },
  {
    icon: <Truck className="h-10 w-10" />,
    title: "Fast Delivery",
    description: "Get your orders delivered to your doorstep quickly with our reliable shipping partners.",
    color: "from-purple-500 to-indigo-500",
  },
  {
    icon: <CreditCard className="h-10 w-10" />,
    title: "Secure Payments",
    description: "Shop with confidence using our secure and encrypted payment processing system.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: <LifeBuoy className="h-10 w-10" />,
    title: "24/7 Support",
    description: "Our customer service team is available around the clock to assist you with any issues.",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: <Zap className="h-10 w-10" />,
    title: "Instant Updates",
    description: "Receive real-time notifications about your orders, promotions, and new arrivals.",
    color: "from-amber-500 to-orange-500",
  },
  {
    icon: <Shield className="h-10 w-10" />,
    title: "Buyer Protection",
    description: "Shop with peace of mind knowing that all purchases are covered by our protection policy.",
    color: "from-red-500 to-pink-500",
  },
]

export default function Home() {
  const [activeTab, setActiveTab] = useState("all")
  const [filteredProducts, setFilteredProducts] = useState(trendingProducts)

  useEffect(() => {
    if (activeTab === "all") {
      setFilteredProducts(trendingProducts)
    } else {
      setFilteredProducts(trendingProducts.filter((product) => product.category === activeTab))
    }
  }, [activeTab])

  return (
    <main className="flex-1">
      {/* Featured Categories Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-600 mb-4">
              Featured Categories
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore our wide range of products across various categories to find exactly what you need.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category) => (
              <Link key={category.id} href={`/categories/${category.slug}`}>
                <Card className="overflow-hidden h-[250px] group relative hover:shadow-xl transition-all duration-300 border-none">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20 z-10" />
                  <Image
                    src={category.image || "/placeholder.svg"}
                    alt={category.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <CardContent className="absolute bottom-0 left-0 right-0 z-20 p-6">
                    <h3 className="text-xl font-bold text-white mb-1">{category.name}</h3>
                    <p className="text-white/80 text-sm">{category.count} Products</p>
                    <div className="mt-4 flex items-center text-white/90 text-sm font-medium">
                      <span>Explore Category</span>
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Trending Products Section */}
      <section className="py-16 px-4 bg-gray-50 dark:bg-gray-900/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-600 mb-4">
              Trending Right Now
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Discover our most popular products that customers are loving this season.
            </p>
          </div>

          <Tabs defaultValue="all" className="w-full max-w-3xl mx-auto mb-12">
            <TabsList className="grid grid-cols-5 h-auto p-1 bg-muted/80 backdrop-blur-sm">
              <TabsTrigger
                value="all"
                onClick={() => setActiveTab("all")}
                className="data-[state=active]:bg-white dark:data-[state=active]:bg-gray-800 data-[state=active]:text-pink-500 rounded-md py-2"
              >
                All
              </TabsTrigger>
              <TabsTrigger
                value="electronics"
                onClick={() => setActiveTab("electronics")}
                className="data-[state=active]:bg-white dark:data-[state=active]:bg-gray-800 data-[state=active]:text-pink-500 rounded-md py-2"
              >
                Electronics
              </TabsTrigger>
              <TabsTrigger
                value="fashion"
                onClick={() => setActiveTab("fashion")}
                className="data-[state=active]:bg-white dark:data-[state=active]:bg-gray-800 data-[state=active]:text-pink-500 rounded-md py-2"
              >
                Fashion
              </TabsTrigger>
              <TabsTrigger
                value="home-garden"
                onClick={() => setActiveTab("home-garden")}
                className="data-[state=active]:bg-white dark:data-[state=active]:bg-gray-800 data-[state=active]:text-pink-500 rounded-md py-2"
              >
                Home
              </TabsTrigger>
              <TabsTrigger
                value="beauty"
                onClick={() => setActiveTab("beauty")}
                className="data-[state=active]:bg-white dark:data-[state=active]:bg-gray-800 data-[state=active]:text-pink-500 rounded-md py-2"
              >
                Beauty
              </TabsTrigger>
            </TabsList>
          </Tabs>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="overflow-hidden group relative hover:shadow-xl transition-all duration-300">
                  <div className="relative h-[200px] overflow-hidden bg-gray-100 dark:bg-gray-800">
                    {product.isNew && (
                      <Badge className="absolute top-2 left-2 z-10 bg-green-500 hover:bg-green-600">New</Badge>
                    )}
                    {product.discount > 0 && (
                      <Badge className="absolute top-2 right-2 z-10 bg-red-500 hover:bg-red-600">
                        {product.discount}% OFF
                      </Badge>
                    )}
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                      <div className="flex space-x-2">
                        <Button size="sm" className="rounded-full bg-white text-black hover:bg-white/90">
                          Quick View
                        </Button>
                        <Button size="sm" className="rounded-full bg-pink-500 hover:bg-pink-600">
                          Add to Cart
                        </Button>
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <div className="flex items-center text-amber-500 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className={`h-4 w-4 ${i < Math.floor(product.rating) ? "fill-current" : "text-gray-300"}`}
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                      <span className="text-xs ml-1 text-gray-500">({product.reviews})</span>
                    </div>
                    <h3 className="font-medium text-gray-900 dark:text-gray-100 mb-1 line-clamp-1">{product.name}</h3>
                    <div className="flex items-center justify-between">
                      <div>
                        {product.discount > 0 ? (
                          <div className="flex items-center">
                            <span className="text-lg font-bold text-gray-900 dark:text-white">
                              ${(product.price * (1 - product.discount / 100)).toFixed(2)}
                            </span>
                            <span className="ml-2 text-sm text-gray-500 line-through">${product.price.toFixed(2)}</span>
                          </div>
                        ) : (
                          <span className="text-lg font-bold text-gray-900 dark:text-white">
                            ${product.price.toFixed(2)}
                          </span>
                        )}
                      </div>
                      <Button
                        size="icon"
                        variant="ghost"
                        className="rounded-full hover:bg-pink-100 dark:hover:bg-pink-900/30"
                      >
                        <Heart className="h-5 w-5 text-pink-500" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/products">
              <Button className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white shadow-lg group">
                View All Products
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-600 mb-4">
              Why Shop With Us
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We're committed to providing the best shopping experience with these amazing features.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                  <CardContent className="p-6 flex flex-col items-center text-center h-full">
                    <div
                      className={`p-3 rounded-full bg-gradient-to-r ${feature.color} text-white mb-4 transform transition-transform hover:scale-110`}
                    >
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <Testimonials />

      {/* Newsletter Section */}
      <section className="py-16 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 to-purple-600/10" />
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-pink-500/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl" />

        <div className="container mx-auto relative z-10">
          <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 md:p-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-600 mb-4">
                Subscribe to Our Newsletter
              </h2>
              <p className="text-muted-foreground">
                Stay updated with the latest products, exclusive offers, and shopping tips.
              </p>
            </div>

            <form className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-500 dark:bg-gray-700 dark:text-white"
                required
              />
              <Button className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-6 py-3">
                Subscribe
              </Button>
            </form>

            <div className="mt-6 text-center text-sm text-muted-foreground">
              By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
