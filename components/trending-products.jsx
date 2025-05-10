"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Heart, ShoppingCart, Star, Eye, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const categories = [
  { id: "all", name: "All" },
  { id: "clothing", name: "Clothing" },
  { id: "electronics", name: "Electronics" },
  { id: "home", name: "Home & Kitchen" },
  { id: "beauty", name: "Beauty" },
]

const products = [
  {
    id: 1,
    name: "Wireless Noise Cancelling Headphones",
    price: 249.99,
    discountPrice: 199.99,
    rating: 4.8,
    reviews: 342,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=2070&auto=format&fit=crop",
    category: "electronics",
    badge: "Sale",
    badgeColor: "bg-red-500",
    isNew: true,
  },
  {
    id: 2,
    name: "Premium Cotton T-Shirt",
    price: 29.99,
    discountPrice: null,
    rating: 4.5,
    reviews: 128,
    image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=1964&auto=format&fit=crop",
    category: "clothing",
    badge: null,
    isNew: false,
  },
  {
    id: 3,
    name: "Smart Watch Series 5",
    price: 399.99,
    discountPrice: 349.99,
    rating: 4.9,
    reviews: 201,
    image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?q=80&w=1964&auto=format&fit=crop",
    category: "electronics",
    badge: "Hot",
    badgeColor: "bg-amber-500",
    isNew: true,
  },
  {
    id: 4,
    name: "Ceramic Coffee Mug Set",
    price: 39.99,
    discountPrice: null,
    rating: 4.3,
    reviews: 87,
    image: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?q=80&w=2070&auto=format&fit=crop",
    category: "home",
    badge: null,
    isNew: false,
  },
  {
    id: 5,
    name: "Organic Face Serum",
    price: 59.99,
    discountPrice: 49.99,
    rating: 4.7,
    reviews: 156,
    image: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?q=80&w=1976&auto=format&fit=crop",
    category: "beauty",
    badge: "Organic",
    badgeColor: "bg-green-500",
    isNew: true,
  },
  {
    id: 6,
    name: "Slim Fit Jeans",
    price: 79.99,
    discountPrice: null,
    rating: 4.4,
    reviews: 112,
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d?q=80&w=1926&auto=format&fit=crop",
    category: "clothing",
    badge: null,
    isNew: false,
  },
  {
    id: 7,
    name: "Stainless Steel Water Bottle",
    price: 24.99,
    discountPrice: 19.99,
    rating: 4.6,
    reviews: 98,
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?q=80&w=1974&auto=format&fit=crop",
    category: "home",
    badge: "Eco",
    badgeColor: "bg-green-500",
    isNew: false,
  },
  {
    id: 8,
    name: "Wireless Earbuds",
    price: 129.99,
    discountPrice: 99.99,
    rating: 4.7,
    reviews: 187,
    image: "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?q=80&w=1970&auto=format&fit=crop",
    category: "electronics",
    badge: "Sale",
    badgeColor: "bg-red-500",
    isNew: true,
  },
]

export function TrendingProducts() {
  const [activeCategory, setActiveCategory] = useState("all")
  const [hoveredProduct, setHoveredProduct] = useState(null)

  const filteredProducts =
    activeCategory === "all" ? products : products.filter((product) => product.category === activeCategory)

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-600 mb-2">
              Trending Right Now
            </h2>
            <p className="text-muted-foreground max-w-2xl">
              Discover our most popular products that everyone is loving this season
            </p>
          </div>
          <Link href="/products" className="mt-4 md:mt-0">
            <Button variant="outline" className="group">
              View All Products
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>

        <Tabs defaultValue="all" value={activeCategory} onValueChange={setActiveCategory} className="w-full">
          <TabsList className="w-full max-w-md mx-auto mb-8 h-auto flex flex-wrap justify-center bg-gradient-to-r from-pink-100 to-purple-100 dark:from-pink-950/30 dark:to-purple-950/30 p-1 rounded-full">
            {categories.map((category) => (
              <TabsTrigger
                key={category.id}
                value={category.id}
                className="rounded-full px-4 py-2 data-[state=active]:bg-gradient-to-r data-[state=active]:from-pink-500 data-[state=active]:to-purple-600 data-[state=active]:text-white"
              >
                {category.name}
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value={activeCategory} className="mt-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  whileHover={{ y: -5 }}
                  onMouseEnter={() => setHoveredProduct(product.id)}
                  onMouseLeave={() => setHoveredProduct(null)}
                >
                  <Card className="overflow-hidden h-full border-0 shadow-lg hover:shadow-xl transition-all group">
                    <div className="relative aspect-square overflow-hidden bg-muted">
                      <Image
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />

                      {product.badge && (
                        <div
                          className={`absolute top-2 left-2 ${product.badgeColor} text-white text-xs font-bold px-2 py-1 rounded-full`}
                        >
                          {product.badge}
                        </div>
                      )}

                      {product.isNew && (
                        <div className="absolute top-2 right-2 bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                          New
                        </div>
                      )}

                      <div
                        className={`absolute inset-0 bg-black/40 flex items-center justify-center gap-2 transition-opacity duration-300 ${hoveredProduct === product.id ? "opacity-100" : "opacity-0"}`}
                      >
                        <Button
                          size="icon"
                          variant="secondary"
                          className="rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/40"
                        >
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button
                          size="icon"
                          variant="secondary"
                          className="rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/40"
                        >
                          <Heart className="h-4 w-4" />
                        </Button>
                        <Button
                          size="icon"
                          variant="secondary"
                          className="rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/40"
                        >
                          <ShoppingCart className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>

                    <CardContent className="p-4">
                      <div className="flex items-center mb-2">
                        <div className="flex items-center text-amber-500">
                          <Star className="h-4 w-4 fill-current" />
                          <span className="ml-1 text-sm font-medium">{product.rating}</span>
                        </div>
                        <span className="mx-2 text-muted-foreground text-xs">•</span>
                        <span className="text-xs text-muted-foreground">{product.reviews} reviews</span>
                      </div>

                      <h3 className="font-medium line-clamp-1 group-hover:text-pink-500 transition-colors">
                        {product.name}
                      </h3>

                      <div className="mt-2 flex items-center">
                        {product.discountPrice ? (
                          <>
                            <span className="font-bold text-pink-500">${product.discountPrice}</span>
                            <span className="ml-2 text-sm text-muted-foreground line-through">${product.price}</span>
                            <Badge
                              variant="outline"
                              className="ml-auto text-xs bg-pink-50 text-pink-500 border-pink-200"
                            >
                              {Math.round(((product.price - product.discountPrice) / product.price) * 100)}% OFF
                            </Badge>
                          </>
                        ) : (
                          <span className="font-bold">${product.price}</span>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
