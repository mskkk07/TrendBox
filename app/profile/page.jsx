"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {
  User,
  Settings,
  ShoppingBag,
  Heart,
  Star,
  MapPin,
  Calendar,
  Mail,
  Phone,
  Edit,
  Camera,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  ShoppingCart,
} from "lucide-react"

const orders = [
  {
    id: "ORD-12345",
    date: "Apr 12, 2023",
    status: "Delivered",
    items: 3,
    total: 129.99,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: "ORD-12344",
    date: "Mar 28, 2023",
    status: "Delivered",
    items: 2,
    total: 79.98,
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d?q=80&w=1926&auto=format&fit=crop",
  },
  {
    id: "ORD-12343",
    date: "Feb 15, 2023",
    status: "Delivered",
    items: 1,
    total: 249.99,
    image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?q=80&w=1964&auto=format&fit=crop",
  },
]

const wishlistItems = [
  {
    id: 1,
    name: "Wireless Noise Cancelling Headphones",
    price: 249.99,
    discountPrice: 199.99,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=2070&auto=format&fit=crop",
    inStock: true,
  },
  {
    id: 2,
    name: "Premium Cotton T-Shirt",
    price: 29.99,
    discountPrice: null,
    image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=1964&auto=format&fit=crop",
    inStock: true,
  },
  {
    id: 3,
    name: "Smart Watch Series 5",
    price: 399.99,
    discountPrice: 349.99,
    image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?q=80&w=1964&auto=format&fit=crop",
    inStock: false,
  },
  {
    id: 4,
    name: "Ceramic Coffee Mug Set",
    price: 39.99,
    discountPrice: null,
    image: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?q=80&w=2070&auto=format&fit=crop",
    inStock: true,
  },
]

const reviews = [
  {
    id: 1,
    productName: "Wireless Noise Cancelling Headphones",
    rating: 5,
    date: "Apr 5, 2023",
    content:
      "These headphones are amazing! The noise cancellation is top-notch and the sound quality is incredible. Battery life is also impressive.",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 2,
    productName: "Premium Cotton T-Shirt",
    rating: 4,
    date: "Mar 22, 2023",
    content:
      "Very comfortable and the material is high quality. Fits as expected. Would buy again in different colors.",
    image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=1964&auto=format&fit=crop",
  },
]

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState("overview")

  const user = {
    name: "John Doe",
    username: "johndoe",
    email: "john.doe@example.com",
    phone: "+1 (555) 123-4567",
    location: "New York, NY",
    bio: "Passionate about shopping and finding great deals. Always on the lookout for the latest tech gadgets and fashion trends.",
    memberSince: "January 2022",
    avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1780&auto=format&fit=crop",
    coverImage: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?q=80&w=2070&auto=format&fit=crop",
  }

  const stats = [
    { label: "Orders", value: 24 },
    { label: "Wishlist", value: 18 },
    { label: "Reviews", value: 12 },
    { label: "Points", value: 1250 },
  ]

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900/50 pb-12">
      {/* Profile Header */}
      <div className="relative">
        <div className="h-48 md:h-64 w-full relative">
          <Image src={user.coverImage || "/placeholder.svg"} alt="Cover image" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        </div>

        <div className="container mx-auto px-4">
          <div className="relative -mt-20 sm:-mt-24 mb-6 flex flex-col sm:flex-row items-center sm:items-end sm:justify-between">
            <div className="flex flex-col sm:flex-row items-center">
              <div className="relative h-32 w-32 sm:h-40 sm:w-40 rounded-full border-4 border-white dark:border-gray-800 overflow-hidden bg-white dark:bg-gray-800 shadow-xl">
                <Image src={user.avatar || "/placeholder.svg"} alt={user.name} fill className="object-cover" />
                <button className="absolute bottom-0 right-0 bg-pink-500 hover:bg-pink-600 text-white p-1.5 rounded-full">
                  <Camera className="h-4 w-4" />
                </button>
              </div>

              <div className="mt-4 sm:mt-0 sm:ml-6 text-center sm:text-left">
                <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">{user.name}</h1>
                <p className="text-gray-500 dark:text-gray-400">@{user.username}</p>
                <div className="mt-2 flex flex-wrap justify-center sm:justify-start gap-2">
                  <Badge
                    variant="outline"
                    className="bg-pink-50 text-pink-500 border-pink-200 dark:bg-pink-900/30 dark:border-pink-800"
                  >
                    Gold Member
                  </Badge>
                  <Badge
                    variant="outline"
                    className="bg-purple-50 text-purple-500 border-purple-200 dark:bg-purple-900/30 dark:border-purple-800"
                  >
                    Top Reviewer
                  </Badge>
                </div>
              </div>
            </div>

            <div className="mt-4 sm:mt-0 flex gap-2">
              <Link href="/settings">
                <Button variant="outline" className="gap-2">
                  <Settings className="h-4 w-4" />
                  <span className="hidden sm:inline">Edit Profile</span>
                </Button>
              </Link>
              <Button className="gap-2 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700">
                <User className="h-4 w-4" />
                <span className="hidden sm:inline">Follow</span>
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-lg shadow p-4 text-center"
              >
                <p className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-600">
                  {stat.value}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Profile Content */}
      <div className="container mx-auto px-4">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="w-full max-w-2xl mx-auto mb-8 h-auto flex flex-wrap justify-center bg-gradient-to-r from-pink-100 to-purple-100 dark:from-pink-950/30 dark:to-purple-950/30 p-1 rounded-full">
            <TabsTrigger
              value="overview"
              className="rounded-full px-4 py-2 data-[state=active]:bg-gradient-to-r data-[state=active]:from-pink-500 data-[state=active]:to-purple-600 data-[state=active]:text-white"
            >
              Overview
            </TabsTrigger>
            <TabsTrigger
              value="orders"
              className="rounded-full px-4 py-2 data-[state=active]:bg-gradient-to-r data-[state=active]:from-pink-500 data-[state=active]:to-purple-600 data-[state=active]:text-white"
            >
              Orders
            </TabsTrigger>
            <TabsTrigger
              value="wishlist"
              className="rounded-full px-4 py-2 data-[state=active]:bg-gradient-to-r data-[state=active]:from-pink-500 data-[state=active]:to-purple-600 data-[state=active]:text-white"
            >
              Wishlist
            </TabsTrigger>
            <TabsTrigger
              value="reviews"
              className="rounded-full px-4 py-2 data-[state=active]:bg-gradient-to-r data-[state=active]:from-pink-500 data-[state=active]:to-purple-600 data-[state=active]:text-white"
            >
              Reviews
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="md:col-span-2">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">About Me</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">{user.bio}</p>

                  <h4 className="font-medium text-gray-900 dark:text-white mb-3">Contact Information</h4>
                  <div className="space-y-3">
                    <div className="flex items-center text-gray-600 dark:text-gray-300">
                      <Mail className="h-4 w-4 mr-2 text-gray-400" />
                      <span>{user.email}</span>
                    </div>
                    <div className="flex items-center text-gray-600 dark:text-gray-300">
                      <Phone className="h-4 w-4 mr-2 text-gray-400" />
                      <span>{user.phone}</span>
                    </div>
                    <div className="flex items-center text-gray-600 dark:text-gray-300">
                      <MapPin className="h-4 w-4 mr-2 text-gray-400" />
                      <span>{user.location}</span>
                    </div>
                    <div className="flex items-center text-gray-600 dark:text-gray-300">
                      <Calendar className="h-4 w-4 mr-2 text-gray-400" />
                      <span>Member since {user.memberSince}</span>
                    </div>
                  </div>

                  <Separator className="my-6" />

                  <h4 className="font-medium text-gray-900 dark:text-white mb-3">Social Profiles</h4>
                  <div className="flex space-x-4">
                    <Button variant="outline" size="icon" className="rounded-full">
                      <Facebook className="h-4 w-4 text-blue-600" />
                    </Button>
                    <Button variant="outline" size="icon" className="rounded-full">
                      <Twitter className="h-4 w-4 text-blue-400" />
                    </Button>
                    <Button variant="outline" size="icon" className="rounded-full">
                      <Instagram className="h-4 w-4 text-pink-600" />
                    </Button>
                    <Button variant="outline" size="icon" className="rounded-full">
                      <Linkedin className="h-4 w-4 text-blue-700" />
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Recent Activity</h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="h-8 w-8 rounded-full bg-pink-100 flex items-center justify-center text-pink-500 mr-3 flex-shrink-0">
                        <ShoppingBag className="h-4 w-4" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">Purchased Wireless Headphones</p>
                        <p className="text-xs text-gray-500">2 days ago</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="h-8 w-8 rounded-full bg-purple-100 flex items-center justify-center text-purple-500 mr-3 flex-shrink-0">
                        <Heart className="h-4 w-4" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">Added Smart Watch to Wishlist</p>
                        <p className="text-xs text-gray-500">5 days ago</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="h-8 w-8 rounded-full bg-amber-100 flex items-center justify-center text-amber-500 mr-3 flex-shrink-0">
                        <Star className="h-4 w-4" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">Reviewed Premium T-Shirt</p>
                        <p className="text-xs text-gray-500">1 week ago</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center text-green-500 mr-3 flex-shrink-0">
                        <Edit className="h-4 w-4" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">Updated Profile Information</p>
                        <p className="text-xs text-gray-500">2 weeks ago</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="orders" className="space-y-6">
            <h3 className="text-xl font-semibold">My Orders</h3>
            <div className="grid grid-cols-1 gap-4">
              {orders.map((order) => (
                <motion.div
                  key={order.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden"
                >
                  <div className="p-4 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                    <div className="relative h-20 w-20 rounded-md overflow-hidden bg-gray-100 flex-shrink-0">
                      <Image src={order.image || "/placeholder.svg"} alt={order.id} fill className="object-cover" />
                    </div>

                    <div className="flex-grow">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                        <h4 className="font-medium text-gray-900 dark:text-white">{order.id}</h4>
                        <Badge className="mt-1 sm:mt-0 w-fit bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400 border-green-200 dark:border-green-800">
                          {order.status}
                        </Badge>
                      </div>

                      <div className="flex flex-col sm:flex-row sm:items-center text-sm text-gray-500 dark:text-gray-400 gap-2 sm:gap-4">
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          <span>{order.date}</span>
                        </div>
                        <div className="flex items-center">
                          <ShoppingBag className="h-4 w-4 mr-1" />
                          <span>
                            {order.items} {order.items === 1 ? "item" : "items"}
                          </span>
                        </div>
                        <div className="font-medium text-gray-900 dark:text-white">${order.total.toFixed(2)}</div>
                      </div>
                    </div>

                    <Button variant="outline" className="sm:self-center">
                      View Details
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-8">
              <Button variant="outline">View All Orders</Button>
            </div>
          </TabsContent>

          <TabsContent value="wishlist" className="space-y-6">
            <h3 className="text-xl font-semibold">My Wishlist</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {wishlistItems.map((item) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden group"
                >
                  <div className="relative aspect-square overflow-hidden bg-gray-100">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <Button className="bg-white text-gray-900 hover:bg-gray-100">
                        <ShoppingCart className="h-4 w-4 mr-2" />
                        Add to Cart
                      </Button>
                    </div>

                    {!item.inStock && (
                      <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                        <Badge className="bg-red-500 text-white border-none">Out of Stock</Badge>
                      </div>
                    )}
                  </div>

                  <div className="p-4">
                    <h4 className="font-medium text-gray-900 dark:text-white line-clamp-1 group-hover:text-pink-500 transition-colors">
                      {item.name}
                    </h4>

                    <div className="mt-2 flex items-center">
                      {item.discountPrice ? (
                        <>
                          <span className="font-bold text-pink-500">${item.discountPrice.toFixed(2)}</span>
                          <span className="ml-2 text-sm text-gray-500 line-through">${item.price.toFixed(2)}</span>
                        </>
                      ) : (
                        <span className="font-bold text-gray-900 dark:text-white">${item.price.toFixed(2)}</span>
                      )}
                    </div>

                    <div className="mt-4 flex space-x-2">
                      <Button variant="outline" className="flex-1" disabled={!item.inStock}>
                        <ShoppingCart className="h-4 w-4 mr-2" />
                        Add
                      </Button>
                      <Button variant="outline" size="icon" className="text-red-500 hover:text-white hover:bg-red-500">
                        <Heart className="h-4 w-4 fill-current" />
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="reviews" className="space-y-6">
            <h3 className="text-xl font-semibold">My Reviews</h3>
            <div className="grid grid-cols-1 gap-4">
              {reviews.map((review) => (
                <motion.div
                  key={review.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden"
                >
                  <div className="p-4 sm:p-6">
                    <div className="flex items-start gap-4">
                      <div className="relative h-16 w-16 rounded-md overflow-hidden bg-gray-100 flex-shrink-0">
                        <Image
                          src={review.image || "/placeholder.svg"}
                          alt={review.productName}
                          fill
                          className="object-cover"
                        />
                      </div>

                      <div className="flex-grow">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                          <h4 className="font-medium text-gray-900 dark:text-white">{review.productName}</h4>
                          <div className="flex items-center mt-1 sm:mt-0">
                            <div className="flex">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`h-4 w-4 ${i < review.rating ? "text-amber-500 fill-amber-500" : "text-gray-300"}`}
                                />
                              ))}
                            </div>
                            <span className="ml-2 text-sm text-gray-500">{review.date}</span>
                          </div>
                        </div>

                        <p className="text-gray-600 dark:text-gray-300 text-sm">{review.content}</p>

                        <div className="mt-4 flex justify-end">
                          <Button variant="ghost" size="sm" className="text-gray-500 hover:text-pink-500">
                            <Edit className="h-4 w-4 mr-1" />
                            Edit
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
