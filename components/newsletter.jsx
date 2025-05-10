"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, ArrowRight, Check } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function Newsletter() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!email) return

    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      setIsSubmitted(true)
      setEmail("")

      // Reset after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false)
      }, 3000)
    }, 1500)
  }

  return (
    <section className="py-16 px-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex justify-center mb-6">
              <div className="h-12 w-12 rounded-full bg-white/20 flex items-center justify-center">
                <Mail className="h-6 w-6" />
              </div>
            </div>

            <h2 className="text-3xl font-bold mb-4">Stay Updated with ShopEase</h2>
            <p className="text-white/80 mb-8 max-w-xl mx-auto">
              Subscribe to our newsletter to receive updates on new products, special offers, and exclusive discounts.
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <div className="relative flex-grow">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/60 h-12 pr-12"
                  disabled={isLoading || isSubmitted}
                  required
                />
                <div className="absolute right-3 top-3 text-white/40">
                  <Mail className="h-5 w-5" />
                </div>
              </div>

              <Button
                type="submit"
                className={`h-12 px-6 transition-all ${
                  isSubmitted ? "bg-green-500 hover:bg-green-600" : "bg-white text-pink-600 hover:bg-white/90"
                }`}
                disabled={isLoading || isSubmitted}
              >
                {isLoading ? (
                  <span className="flex items-center">
                    <svg
                      className="animate-spin -ml-1 mr-2 h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Processing...
                  </span>
                ) : isSubmitted ? (
                  <span className="flex items-center">
                    <Check className="h-4 w-4 mr-2" />
                    Subscribed!
                  </span>
                ) : (
                  <span className="flex items-center">
                    Subscribe
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
