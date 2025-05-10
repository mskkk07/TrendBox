"use client"

import { Label } from "@/components/ui/label"

import { useState } from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Star, Edit, Trash2, Filter, Search, ThumbsUp, MessageSquare } from "lucide-react"

// Mock reviews data
const myReviews = [
  {
    id: 1,
    productId: 1,
    productName: "Premium Cotton T-Shirt",
    productImage: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1780&auto=format&fit=crop",
    rating: 5,
    title: "Excellent quality and fit",
    content:
      "This t-shirt is amazing! The fabric is soft and comfortable, and the fit is perfect. I've already ordered two more in different colors.",
    date: "2023-06-15",
    likes: 12,
    comments: 3,
    status: "published",
  },
  {
    id: 2,
    productId: 5,
    productName: "Running Shoes",
    productImage: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070&auto=format&fit=crop",
    rating: 4,
    title: "Great shoes, but sizing runs small",
    content:
      "These shoes are very comfortable and provide good support. However, they run a bit small, so I recommend ordering a half size up.",
    date: "2023-05-28",
    likes: 8,
    comments: 2,
    status: "published",
  },
  {
    id: 3,
    productId: 3,
    productName: "Organic Fruit Basket",
    productImage: "https://images.unsplash.com/photo-1610832958506-aa56368176cf?q=80&w=2070&auto=format&fit=crop",
    rating: 3,
    title: "Fresh fruits, but some were bruised",
    content:
      "The fruits were mostly fresh and tasty, but a few items in the basket were bruised. Delivery was prompt though.",
    date: "2023-04-10",
    likes: 4,
    comments: 1,
    status: "published",
  },
  {
    id: 4,
    productId: 6,
    productName: "Smart Watch",
    productImage: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?q=80&w=2072&auto=format&fit=crop",
    rating: 5,
    title: "Amazing smartwatch with great features",
    content:
      "This smartwatch has exceeded my expectations. The battery life is excellent, and the fitness tracking features are very accurate.",
    date: "2023-03-15",
    likes: 15,
    comments: 5,
    status: "published",
  },
  {
    id: 5,
    productId: 8,
    productName: "Wireless Headphones",
    productImage: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=2070&auto=format&fit=crop",
    rating: 2,
    title: "Poor battery life",
    content:
      "The sound quality is good, but the battery life is terrible. They only last about 2 hours on a full charge, which is disappointing.",
    date: "2023-02-20",
    likes: 3,
    comments: 2,
    status: "published",
  },
]

// Mock draft reviews
const draftReviews = [
  {
    id: 101,
    productId: 11,
    productName: "Designer Sunglasses",
    productImage: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=1980&auto=format&fit=crop",
    rating: 4,
    title: "Stylish and well-made",
    content: "These sunglasses are very stylish and seem well-made. The case is also nice quality.",
    date: "2023-06-10",
    status: "draft",
  },
]

// Mock reviews to write
const toReviewProducts = [
  {
    id: 201,
    productId: 12,
    productName: "Leather Wallet",
    productImage: "https://images.unsplash.com/photo-1627123424574-724758594e93?q=80&w=1974&auto=format&fit=crop",
    purchaseDate: "2023-05-15",
  },
  {
    id: 202,
    productId: 13,
    productName: "Fitness Tracker",
    productImage: "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?q=80&w=2088&auto=format&fit=crop",
    purchaseDate: "2023-06-01",
  },
]

export default function ReviewsPage() {
  const [activeTab, setActiveTab] = useState("my-reviews")
  const [searchTerm, setSearchTerm] = useState("")
  const [sortBy, setSortBy] = useState("newest")
  const [filterRating, setFilterRating] = useState("all")
  const [editingReview, setEditingReview] = useState(null)
  const router = useRouter()

  // Filter reviews based on search term and rating filter
  const filteredReviews = myReviews.filter((review) => {
    const matchesSearch =
      review.productName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      review.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      review.content.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesRating = filterRating === "all" || review.rating === Number.parseInt(filterRating)

    return matchesSearch && matchesRating
  })

  // Sort reviews based on selected sort option
  const sortedReviews = [...filteredReviews].sort((a, b) => {
    switch (sortBy) {
      case "oldest":
        return new Date(a.date) - new Date(b.date)
      case "highest-rating":
        return b.rating - a.rating
      case "lowest-rating":
        return a.rating - b.rating
      case "most-liked":
        return b.likes - a.likes
      default: // newest
        return new Date(b.date) - new Date(a.date)
    }
  })

  const handleEditReview = (review) => {
    setEditingReview(review)
  }

  const handleDeleteReview = (id) => {
    // In a real app, you would delete the review here
    alert(`Deleting review ${id}`)
  }

  const handleCancelEdit = () => {
    setEditingReview(null)
  }

  const handleSaveReview = () => {
    // In a real app, you would save the review here
    alert(`Saving review for ${editingReview.productName}`)
    setEditingReview(null)
  }

  const renderStars = (rating) => {
    return Array(5)
      .fill(0)
      .map((_, i) => (
        <Star key={i} className={`h-5 w-5 ${i < rating ? "fill-amber-400 text-amber-400" : "text-gray-300"}`} />
      ))
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0 mb-8">
        <div>
          <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-600">
            My Reviews
          </h1>
          <p className="text-muted-foreground">Manage your product reviews and feedback</p>
        </div>
      </div>

      <Tabs defaultValue="my-reviews" value={activeTab} onValueChange={setActiveTab} className="space-y-8">
        <TabsList className="bg-gradient-to-r from-pink-100 to-purple-100 dark:from-pink-950/30 dark:to-purple-950/30">
          <TabsTrigger
            value="my-reviews"
            className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-pink-500 data-[state=active]:to-purple-600 data-[state=active]:text-white"
          >
            My Reviews
          </TabsTrigger>
          <TabsTrigger
            value="drafts"
            className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-pink-500 data-[state=active]:to-purple-600 data-[state=active]:text-white"
          >
            Drafts
          </TabsTrigger>
          <TabsTrigger
            value="to-review"
            className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-pink-500 data-[state=active]:to-purple-600 data-[state=active]:text-white"
          >
            To Review
          </TabsTrigger>
        </TabsList>

        <TabsContent value="my-reviews">
          {editingReview ? (
            <Card>
              <CardHeader>
                <CardTitle>Edit Review</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="relative h-16 w-16 rounded-md overflow-hidden bg-muted">
                    <Image
                      src={editingReview.productImage || "/placeholder.svg"}
                      alt={editingReview.productName}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-medium">{editingReview.productName}</h3>
                    <p className="text-sm text-muted-foreground">
                      Purchased on {new Date(editingReview.date).toLocaleDateString()}
                    </p>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="rating">Rating</Label>
                  <div className="flex gap-1">{renderStars(editingReview.rating)}</div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="title">Review Title</Label>
                  <Input
                    id="title"
                    value={editingReview.title}
                    onChange={(e) => setEditingReview({ ...editingReview, title: e.target.value })}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="content">Review Content</Label>
                  <Textarea
                    id="content"
                    rows={5}
                    value={editingReview.content}
                    onChange={(e) => setEditingReview({ ...editingReview, content: e.target.value })}
                  />
                </div>

                <div className="flex justify-end gap-2">
                  <Button variant="outline" onClick={handleCancelEdit}>
                    Cancel
                  </Button>
                  <Button onClick={handleSaveReview}>Save Review</Button>
                </div>
              </CardContent>
            </Card>
          ) : (
            <>
              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search reviews..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-9"
                  />
                </div>
                <div className="flex gap-2">
                  <Select value={filterRating} onValueChange={setFilterRating}>
                    <SelectTrigger className="w-[130px]">
                      <Star className="h-4 w-4 mr-2 text-amber-400" />
                      <SelectValue placeholder="Rating" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Ratings</SelectItem>
                      <SelectItem value="5">5 Stars</SelectItem>
                      <SelectItem value="4">4 Stars</SelectItem>
                      <SelectItem value="3">3 Stars</SelectItem>
                      <SelectItem value="2">2 Stars</SelectItem>
                      <SelectItem value="1">1 Star</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select value={sortBy} onValueChange={setSortBy}>
                    <SelectTrigger className="w-[150px]">
                      <Filter className="h-4 w-4 mr-2" />
                      <SelectValue placeholder="Sort by" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="newest">Newest First</SelectItem>
                      <SelectItem value="oldest">Oldest First</SelectItem>
                      <SelectItem value="highest-rating">Highest Rating</SelectItem>
                      <SelectItem value="lowest-rating">Lowest Rating</SelectItem>
                      <SelectItem value="most-liked">Most Liked</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {sortedReviews.length > 0 ? (
                <div className="space-y-6">
                  {sortedReviews.map((review) => (
                    <Card key={review.id} className="overflow-hidden">
                      <CardContent className="p-6">
                        <div className="flex flex-col sm:flex-row gap-6">
                          <div className="sm:w-1/4">
                            <div className="relative h-32 w-full rounded-md overflow-hidden bg-muted">
                              <Image
                                src={review.productImage || "/placeholder.svg"}
                                alt={review.productName}
                                fill
                                className="object-cover"
                              />
                            </div>
                            <div className="mt-4">
                              <h3 className="font-medium line-clamp-1">{review.productName}</h3>
                              <p className="text-sm text-muted-foreground">
                                Reviewed on {new Date(review.date).toLocaleDateString()}
                              </p>
                            </div>
                          </div>
                          <div className="sm:w-3/4">
                            <div className="flex justify-between items-start">
                              <div>
                                <div className="flex items-center gap-2 mb-2">
                                  <div className="flex">{renderStars(review.rating)}</div>
                                  <h3 className="font-medium">{review.title}</h3>
                                </div>
                                <p className="text-muted-foreground">{review.content}</p>
                              </div>
                              <div className="flex gap-1">
                                <Button
                                  variant="ghost"
                                  size="icon"
                                  className="h-8 w-8 text-muted-foreground hover:text-pink-500"
                                  onClick={() => handleEditReview(review)}
                                >
                                  <Edit className="h-4 w-4" />
                                </Button>
                                <Button
                                  variant="ghost"
                                  size="icon"
                                  className="h-8 w-8 text-muted-foreground hover:text-pink-500"
                                  onClick={() => handleDeleteReview(review.id)}
                                >
                                  <Trash2 className="h-4 w-4" />
                                </Button>
                              </div>
                            </div>
                            <div className="flex items-center gap-4 mt-4">
                              <Button variant="ghost" size="sm" className="gap-1">
                                <ThumbsUp className="h-4 w-4" />
                                <span>{review.likes}</span>
                              </Button>
                              <Button variant="ghost" size="sm" className="gap-1">
                                <MessageSquare className="h-4 w-4" />
                                <span>{review.comments}</span>
                              </Button>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="h-16 w-16 rounded-full bg-muted flex items-center justify-center mb-4">
                    <Star className="h-8 w-8 text-muted-foreground" />
                  </div>
                  <h3 className="text-lg font-medium mb-2">No reviews found</h3>
                  <p className="text-muted-foreground mb-6 max-w-md">
                    {searchTerm || filterRating !== "all"
                      ? "Try adjusting your search or filter to find what you're looking for."
                      : "You haven't written any reviews yet. Start by reviewing your recent purchases."}
                  </p>
                  {searchTerm || filterRating !== "all" ? (
                    <Button
                      onClick={() => {
                        setSearchTerm("")
                        setFilterRating("all")
                      }}
                    >
                      Reset Filters
                    </Button>
                  ) : (
                    <Button onClick={() => setActiveTab("to-review")}>Write a Review</Button>
                  )}
                </div>
              )}
            </>
          )}
        </TabsContent>

        <TabsContent value="drafts">
          {draftReviews.length > 0 ? (
            <div className="space-y-6">
              {draftReviews.map((review) => (
                <Card key={review.id} className="overflow-hidden">
                  <CardContent className="p-6">
                    <div className="flex flex-col sm:flex-row gap-6">
                      <div className="sm:w-1/4">
                        <div className="relative h-32 w-full rounded-md overflow-hidden bg-muted">
                          <Image
                            src={review.productImage || "/placeholder.svg"}
                            alt={review.productName}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="mt-4">
                          <h3 className="font-medium line-clamp-1">{review.productName}</h3>
                          <p className="text-sm text-muted-foreground">
                            Draft saved on {new Date(review.date).toLocaleDateString()}
                          </p>
                        </div>
                      </div>
                      <div className="sm:w-3/4">
                        <div className="flex justify-between items-start">
                          <div>
                            <div className="flex items-center gap-2 mb-2">
                              <div className="flex">{renderStars(review.rating)}</div>
                              <h3 className="font-medium">{review.title}</h3>
                            </div>
                            <p className="text-muted-foreground">{review.content}</p>
                          </div>
                          <Badge variant="outline">Draft</Badge>
                        </div>
                        <div className="flex gap-2 mt-4">
                          <Button variant="outline" onClick={() => handleEditReview(review)}>
                            Continue Editing
                          </Button>
                          <Button
                            onClick={() => {
                              // In a real app, you would publish the review here
                              alert(`Publishing review for ${review.productName}`)
                            }}
                          >
                            Publish Review
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <div className="h-16 w-16 rounded-full bg-muted flex items-center justify-center mb-4">
                <Edit className="h-8 w-8 text-muted-foreground" />
              </div>
              <h3 className="text-lg font-medium mb-2">No draft reviews</h3>
              <p className="text-muted-foreground mb-6 max-w-md">
                You don't have any draft reviews. When you start writing a review but don't publish it, it will appear
                here.
              </p>
              <Button onClick={() => setActiveTab("to-review")}>Write a Review</Button>
            </div>
          )}
        </TabsContent>

        <TabsContent value="to-review">
          {toReviewProducts.length > 0 ? (
            <div className="space-y-6">
              {toReviewProducts.map((product) => (
                <Card key={product.id} className="overflow-hidden">
                  <CardContent className="p-6">
                    <div className="flex flex-col sm:flex-row gap-6 items-center">
                      <div className="sm:w-1/4">
                        <div className="relative h-32 w-full rounded-md overflow-hidden bg-muted">
                          <Image
                            src={product.productImage || "/placeholder.svg"}
                            alt={product.productName}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="mt-4">
                          <h3 className="font-medium line-clamp-1">{product.productName}</h3>
                          <p className="text-sm text-muted-foreground">
                            Purchased on {new Date(product.purchaseDate).toLocaleDateString()}
                          </p>
                        </div>
                      </div>
                      <div className="sm:w-3/4 flex flex-col items-center sm:items-start">
                        <p className="text-center sm:text-left mb-4">
                          Share your thoughts about this product with other customers
                        </p>
                        <Button
                          onClick={() => {
                            // In a real app, you would navigate to a review form
                            alert(`Writing review for ${product.productName}`)
                          }}
                        >
                          Write a Review
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <div className="h-16 w-16 rounded-full bg-muted flex items-center justify-center mb-4">
                <Star className="h-8 w-8 text-muted-foreground" />
              </div>
              <h3 className="text-lg font-medium mb-2">No products to review</h3>
              <p className="text-muted-foreground mb-6 max-w-md">
                You've reviewed all your recent purchases. Check back after your next order.
              </p>
              <Button onClick={() => router.push("/products")}>Shop Now</Button>
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  )
}
