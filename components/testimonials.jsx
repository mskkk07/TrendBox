"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Quote } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Fashion Enthusiast",
    content:
      "ShopEase has completely transformed my online shopping experience. The user interface is intuitive, and the product recommendations are spot on. I've discovered so many amazing brands I wouldn't have found otherwise!",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Tech Reviewer",
    content:
      "As someone who's always looking for the latest tech gadgets, I can confidently say that ShopEase offers the best selection at competitive prices. Their detailed product descriptions and customer reviews help me make informed decisions.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop",
    rating: 5,
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Home Decor Enthusiast",
    content:
      "I've been using ShopEase for all my home decor needs, and I'm consistently impressed by their curation. The checkout process is seamless, and their customer service is exceptional. Highly recommended!",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop",
    rating: 4,
  },
]

export function Testimonials() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-16 px-4 overflow-hidden">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-600 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our customers have to say about their ShopEase experience.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute -top-10 -left-10 text-pink-200 dark:text-pink-900 opacity-50">
            <Quote className="h-20 w-20" />
          </div>

          <div className="relative z-10 bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 md:p-12">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                <div className="flex justify-center mb-6">
                  <div className="relative h-20 w-20 rounded-full overflow-hidden border-4 border-pink-100 dark:border-pink-900/30">
                    <Image
                      src={testimonials[current].avatar || "/placeholder.svg"}
                      alt={testimonials[current].name}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                <div className="flex justify-center mb-6">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`h-5 w-5 ${i < testimonials[current].rating ? "text-amber-500" : "text-gray-300"}`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 italic mb-6">
                  "{testimonials[current].content}"
                </p>

                <h3 className="text-xl font-bold text-gray-900 dark:text-white">{testimonials[current].name}</h3>
                <p className="text-pink-500 dark:text-pink-400">{testimonials[current].role}</p>
              </motion.div>
            </AnimatePresence>

            <div className="flex justify-center mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`h-3 w-3 mx-1 rounded-full transition-all ${
                    current === index
                      ? "bg-pink-500 w-6"
                      : "bg-gray-300 dark:bg-gray-600 hover:bg-pink-300 dark:hover:bg-pink-800"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
