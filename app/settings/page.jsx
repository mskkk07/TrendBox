"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Separator } from "@/components/ui/separator"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { User, Bell, Lock, CreditCard, Globe, Trash2, Save, Moon, Sun } from "lucide-react"
import Image from "next/image"

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("account")
  const router = useRouter()
  const [wishlistCount, setWishlistCount] = useState(5)
  const [settings, setSettings] = useState({
    account: {
      name: "John Doe",
      email: "john.doe@example.com",
      bio: "Passionate about shopping and finding great deals.",
      username: "johndoe",
    },
    appearance: {
      theme: "system",
      fontSize: "medium",
      reducedMotion: false,
      reducedTransparency: false,
    },
    notifications: {
      email: {
        marketing: true,
        orderUpdates: true,
        newProducts: true,
        accountActivity: true,
      },
      push: {
        marketing: false,
        orderUpdates: true,
        newProducts: false,
        accountActivity: true,
      },
    },
    privacy: {
      profileVisibility: "public",
      activityVisibility: "friends",
      searchable: true,
      dataCollection: true,
    },
    security: {
      twoFactorAuth: false,
      sessionTimeout: "30m",
      loginNotifications: true,
    },
  })

  const handleChange = (section, field, value) => {
    setSettings({
      ...settings,
      [section]: {
        ...settings[section],
        [field]: value,
      },
    })
  }

  const handleNestedChange = (section, subsection, field, value) => {
    setSettings({
      ...settings,
      [section]: {
        ...settings[section],
        [subsection]: {
          ...settings[section][subsection],
          [field]: value,
        },
      },
    })
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-10 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-600 rounded-xl overflow-hidden">
        <div className="relative h-48 md:h-64">
          <div className="absolute inset-0 bg-black/20 z-10"></div>
          <Image
            src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?q=80&w=2070&auto=format&fit=crop"
            alt="Profile background"
            fill
            className="object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 flex justify-center z-20">
            <div className="relative -mb-16 h-32 w-32 rounded-full border-4 border-white overflow-hidden bg-white">
              <Image
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1780&auto=format&fit=crop"
                alt="Profile picture"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
        <div className="bg-white dark:bg-gray-900 pt-20 pb-6 px-6 text-center">
          <h2 className="text-2xl font-bold">{settings.account.name}</h2>
          <p className="text-muted-foreground">{settings.account.email}</p>
          <p className="mt-2 max-w-md mx-auto">{settings.account.bio}</p>
          <div className="flex justify-center gap-4 mt-4">
            <div className="text-center">
              <p className="text-xl font-bold">24</p>
              <p className="text-xs text-muted-foreground">Orders</p>
            </div>
            <div className="text-center">
              <p className="text-xl font-bold">{wishlistCount}</p>
              <p className="text-xs text-muted-foreground">Wishlist</p>
            </div>
            <div className="text-center">
              <p className="text-xl font-bold">12</p>
              <p className="text-xs text-muted-foreground">Reviews</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0 mb-8">
        <div>
          <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-600">
            Settings
          </h1>
          <p className="text-muted-foreground">Manage your account settings and preferences</p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/4">
          <Card className="sticky top-20">
            <CardContent className="p-4">
              <Tabs orientation="vertical" value={activeTab} onValueChange={setActiveTab} className="w-full">
                <TabsList className="flex flex-col h-auto bg-transparent space-y-1">
                  <TabsTrigger
                    value="account"
                    className="justify-start w-full data-[state=active]:bg-gradient-to-r data-[state=active]:from-pink-500 data-[state=active]:to-purple-600 data-[state=active]:text-white"
                  >
                    <User className="h-4 w-4 mr-2" />
                    Account
                  </TabsTrigger>
                  <TabsTrigger
                    value="appearance"
                    className="justify-start w-full data-[state=active]:bg-gradient-to-r data-[state=active]:from-pink-500 data-[state=active]:to-purple-600 data-[state=active]:text-white"
                  >
                    <Sun className="h-4 w-4 mr-2" />
                    Appearance
                  </TabsTrigger>
                  <TabsTrigger
                    value="notifications"
                    className="justify-start w-full data-[state=active]:bg-gradient-to-r data-[state=active]:from-pink-500 data-[state=active]:to-purple-600 data-[state=active]:text-white"
                  >
                    <Bell className="h-4 w-4 mr-2" />
                    Notifications
                  </TabsTrigger>
                  <TabsTrigger
                    value="privacy"
                    className="justify-start w-full data-[state=active]:bg-gradient-to-r data-[state=active]:from-pink-500 data-[state=active]:to-purple-600 data-[state=active]:text-white"
                  >
                    <Globe className="h-4 w-4 mr-2" />
                    Privacy
                  </TabsTrigger>
                  <TabsTrigger
                    value="security"
                    className="justify-start w-full data-[state=active]:bg-gradient-to-r data-[state=active]:from-pink-500 data-[state=active]:to-purple-600 data-[state=active]:text-white"
                  >
                    <Lock className="h-4 w-4 mr-2" />
                    Security
                  </TabsTrigger>
                  <TabsTrigger
                    value="billing"
                    className="justify-start w-full data-[state=active]:bg-gradient-to-r data-[state=active]:from-pink-500 data-[state=active]:to-purple-600 data-[state=active]:text-white"
                  >
                    <CreditCard className="h-4 w-4 mr-2" />
                    Billing
                  </TabsTrigger>
                </TabsList>
              </Tabs>
            </CardContent>
          </Card>
        </div>

        <div className="md:w-3/4">
          <TabsContent value="account" className="mt-0">
            <Card>
              <CardHeader>
                <CardTitle>Account Settings</CardTitle>
                <CardDescription>Manage your account information and profile details</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Personal Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        value={settings.account.name}
                        onChange={(e) => handleChange("account", "name", e.target.value)}
                        className="transition-all focus:ring-2 focus:ring-pink-500/50"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="username">Username</Label>
                      <Input
                        id="username"
                        value={settings.account.username}
                        onChange={(e) => handleChange("account", "username", e.target.value)}
                        className="transition-all focus:ring-2 focus:ring-pink-500/50"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      value={settings.account.email}
                      onChange={(e) => handleChange("account", "email", e.target.value)}
                      className="transition-all focus:ring-2 focus:ring-pink-500/50"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="bio">Bio</Label>
                    <textarea
                      id="bio"
                      value={settings.account.bio}
                      onChange={(e) => handleChange("account", "bio", e.target.value)}
                      className="w-full min-h-[100px] rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all focus:ring-2 focus:ring-pink-500/50"
                    />
                    <p className="text-sm text-muted-foreground">
                      Brief description for your profile. URLs are hyperlinked.
                    </p>
                  </div>
                </div>

                <Separator />

                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Social Profiles</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="twitter">Twitter</Label>
                      <div className="relative">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-muted-foreground">
                          @
                        </span>
                        <Input
                          id="twitter"
                          placeholder="username"
                          className="pl-8 transition-all focus:ring-2 focus:ring-pink-500/50"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="instagram">Instagram</Label>
                      <div className="relative">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-muted-foreground">
                          @
                        </span>
                        <Input
                          id="instagram"
                          placeholder="username"
                          className="pl-8 transition-all focus:ring-2 focus:ring-pink-500/50"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <Separator />

                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Account Management</h3>
                  <div className="space-y-2">
                    <Button
                      variant="outline"
                      className="w-full sm:w-auto group transition-all hover:bg-pink-50 dark:hover:bg-pink-950/30"
                    >
                      <Lock className="h-4 w-4 mr-2 group-hover:text-pink-500" />
                      <span className="group-hover:text-pink-500">Change Password</span>
                    </Button>
                  </div>
                  <div className="space-y-2">
                    <Button variant="destructive" className="w-full sm:w-auto group transition-all">
                      <Trash2 className="h-4 w-4 mr-2" />
                      Delete Account
                    </Button>
                    <p className="text-sm text-muted-foreground">
                      Permanently delete your account and all of your content.
                    </p>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button
                  variant="outline"
                  onClick={() => router.push("/profile")}
                  className="transition-all hover:bg-pink-50 dark:hover:bg-pink-950/30"
                >
                  Cancel
                </Button>
                <Button className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-600 hover:from-pink-600 hover:via-purple-600 hover:to-indigo-700 transition-all">
                  <Save className="h-4 w-4 mr-2" />
                  Save Changes
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="appearance" className="mt-0">
            <Card>
              <CardHeader>
                <CardTitle>Appearance</CardTitle>
                <CardDescription>Customize how ShopEase looks and feels</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label>Theme</Label>
                    <div className="grid grid-cols-3 gap-4">
                      <div
                        className={`border rounded-lg p-4 cursor-pointer transition-all ${
                          settings.appearance.theme === "light"
                            ? "border-pink-500 bg-pink-50 dark:bg-pink-950/30"
                            : "hover:border-pink-200 dark:hover:border-pink-800"
                        }`}
                        onClick={() => handleChange("appearance", "theme", "light")}
                      >
                        <div className="flex justify-center mb-2">
                          <Sun className="h-6 w-6 text-amber-500" />
                        </div>
                        <p className="text-center text-sm font-medium">Light</p>
                      </div>
                      <div
                        className={`border rounded-lg p-4 cursor-pointer transition-all ${
                          settings.appearance.theme === "dark"
                            ? "border-pink-500 bg-pink-50 dark:bg-pink-950/30"
                            : "hover:border-pink-200 dark:hover:border-pink-800"
                        }`}
                        onClick={() => handleChange("appearance", "theme", "dark")}
                      >
                        <div className="flex justify-center mb-2">
                          <Moon className="h-6 w-6 text-indigo-500" />
                        </div>
                        <p className="text-center text-sm font-medium">Dark</p>
                      </div>
                      <div
                        className={`border rounded-lg p-4 cursor-pointer transition-all ${
                          settings.appearance.theme === "system"
                            ? "border-pink-500 bg-pink-50 dark:bg-pink-950/30"
                            : "hover:border-pink-200 dark:hover:border-pink-800"
                        }`}
                        onClick={() => handleChange("appearance", "theme", "system")}
                      >
                        <div className="flex justify-center mb-2">
                          <div className="flex">
                            <Sun className="h-6 w-6 text-amber-500" />
                            <Moon className="h-6 w-6 text-indigo-500 -ml-2" />
                          </div>
                        </div>
                        <p className="text-center text-sm font-medium">System</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="fontSize">Font Size</Label>
                    <Select
                      value={settings.appearance.fontSize}
                      onValueChange={(value) => handleChange("appearance", "fontSize", value)}
                    >
                      <SelectTrigger id="fontSize">
                        <SelectValue placeholder="Select font size" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="small">Small</SelectItem>
                        <SelectItem value="medium">Medium</SelectItem>
                        <SelectItem value="large">Large</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Accessibility</h3>
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="reducedMotion">Reduced Motion</Label>
                        <p className="text-sm text-muted-foreground">Reduce the amount of animations and transitions</p>
                      </div>
                      <Switch
                        id="reducedMotion"
                        checked={settings.appearance.reducedMotion}
                        onCheckedChange={(checked) => handleChange("appearance", "reducedMotion", checked)}
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="reducedTransparency">Reduced Transparency</Label>
                        <p className="text-sm text-muted-foreground">Reduce the transparency and blur effects</p>
                      </div>
                      <Switch
                        id="reducedTransparency"
                        checked={settings.appearance.reducedTransparency}
                        onCheckedChange={(checked) => handleChange("appearance", "reducedTransparency", checked)}
                      />
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button
                  variant="outline"
                  onClick={() => router.push("/profile")}
                  className="transition-all hover:bg-pink-50 dark:hover:bg-pink-950/30"
                >
                  Cancel
                </Button>
                <Button className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-600 hover:from-pink-600 hover:via-purple-600 hover:to-indigo-700 transition-all">
                  <Save className="h-4 w-4 mr-2" />
                  Save Changes
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="notifications" className="mt-0">
            <Card>
              <CardHeader>
                <CardTitle>Notification Settings</CardTitle>
                <CardDescription>Manage how and when you receive notifications</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <Tabs defaultValue="email">
                  <TabsList className="grid w-full grid-cols-2 mb-6 bg-gradient-to-r from-pink-100 to-purple-100 dark:from-pink-950/30 dark:to-purple-950/30">
                    <TabsTrigger
                      value="email"
                      className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-pink-500 data-[state=active]:to-purple-600 data-[state=active]:text-white"
                    >
                      Email Notifications
                    </TabsTrigger>
                    <TabsTrigger
                      value="push"
                      className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-pink-500 data-[state=active]:to-purple-600 data-[state=active]:text-white"
                    >
                      Push Notifications
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="email" className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label>Marketing Emails</Label>
                        <p className="text-sm text-muted-foreground">
                          Receive emails about new products, features, and more
                        </p>
                      </div>
                      <Switch
                        checked={settings.notifications.email.marketing}
                        onCheckedChange={(checked) =>
                          handleNestedChange("notifications", "email", "marketing", checked)
                        }
                      />
                    </div>
                    <Separator />
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label>Order Updates</Label>
                        <p className="text-sm text-muted-foreground">
                          Receive emails about your order status and shipping updates
                        </p>
                      </div>
                      <Switch
                        checked={settings.notifications.email.orderUpdates}
                        onCheckedChange={(checked) =>
                          handleNestedChange("notifications", "email", "orderUpdates", checked)
                        }
                      />
                    </div>
                    <Separator />
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label>New Products</Label>
                        <p className="text-sm text-muted-foreground">
                          Receive emails about new product launches and restocks
                        </p>
                      </div>
                      <Switch
                        checked={settings.notifications.email.newProducts}
                        onCheckedChange={(checked) =>
                          handleNestedChange("notifications", "email", "newProducts", checked)
                        }
                      />
                    </div>
                    <Separator />
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label>Account Activity</Label>
                        <p className="text-sm text-muted-foreground">
                          Receive emails about your account activity and security
                        </p>
                      </div>
                      <Switch
                        checked={settings.notifications.email.accountActivity}
                        onCheckedChange={(checked) =>
                          handleNestedChange("notifications", "email", "accountActivity", checked)
                        }
                      />
                    </div>
                  </TabsContent>

                  <TabsContent value="push" className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label>Marketing Notifications</Label>
                        <p className="text-sm text-muted-foreground">
                          Receive push notifications about new products, features, and more
                        </p>
                      </div>
                      <Switch
                        checked={settings.notifications.push.marketing}
                        onCheckedChange={(checked) => handleNestedChange("notifications", "push", "marketing", checked)}
                      />
                    </div>
                    <Separator />
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label>Order Updates</Label>
                        <p className="text-sm text-muted-foreground">
                          Receive push notifications about your order status and shipping updates
                        </p>
                      </div>
                      <Switch
                        checked={settings.notifications.push.orderUpdates}
                        onCheckedChange={(checked) =>
                          handleNestedChange("notifications", "push", "orderUpdates", checked)
                        }
                      />
                    </div>
                    <Separator />
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label>New Products</Label>
                        <p className="text-sm text-muted-foreground">
                          Receive push notifications about new product launches and restocks
                        </p>
                      </div>
                      <Switch
                        checked={settings.notifications.push.newProducts}
                        onCheckedChange={(checked) =>
                          handleNestedChange("notifications", "push", "newProducts", checked)
                        }
                      />
                    </div>
                    <Separator />
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label>Account Activity</Label>
                        <p className="text-sm text-muted-foreground">
                          Receive push notifications about your account activity and security
                        </p>
                      </div>
                      <Switch
                        checked={settings.notifications.push.accountActivity}
                        onCheckedChange={(checked) =>
                          handleNestedChange("notifications", "push", "accountActivity", checked)
                        }
                      />
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button
                  variant="outline"
                  onClick={() => router.push("/profile")}
                  className="transition-all hover:bg-pink-50 dark:hover:bg-pink-950/30"
                >
                  Cancel
                </Button>
                <Button className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-600 hover:from-pink-600 hover:via-purple-600 hover:to-indigo-700 transition-all">
                  <Save className="h-4 w-4 mr-2" />
                  Save Changes
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="privacy" className="mt-0">
            <Card>
              <CardHeader>
                <CardTitle>Privacy Settings</CardTitle>
                <CardDescription>Manage your privacy preferences and data settings</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="profileVisibility">Profile Visibility</Label>
                    <Select
                      value={settings.privacy.profileVisibility}
                      onValueChange={(value) => handleChange("privacy", "profileVisibility", value)}
                    >
                      <SelectTrigger id="profileVisibility">
                        <SelectValue placeholder="Select visibility" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="public">Public</SelectItem>
                        <SelectItem value="friends">Friends Only</SelectItem>
                        <SelectItem value="private">Private</SelectItem>
                      </SelectContent>
                    </Select>
                    <p className="text-sm text-muted-foreground">Control who can see your profile information</p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="activityVisibility">Activity Visibility</Label>
                    <Select
                      value={settings.privacy.activityVisibility}
                      onValueChange={(value) => handleChange("privacy", "activityVisibility", value)}
                    >
                      <SelectTrigger id="activityVisibility">
                        <SelectValue placeholder="Select visibility" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="public">Public</SelectItem>
                        <SelectItem value="friends">Friends Only</SelectItem>
                        <SelectItem value="private">Private</SelectItem>
                      </SelectContent>
                    </Select>
                    <p className="text-sm text-muted-foreground">
                      Control who can see your activity, such as reviews and purchases
                    </p>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="searchable">Searchable Profile</Label>
                      <p className="text-sm text-muted-foreground">Allow your profile to appear in search results</p>
                    </div>
                    <Switch
                      id="searchable"
                      checked={settings.privacy.searchable}
                      onCheckedChange={(checked) => handleChange("privacy", "searchable", checked)}
                    />
                  </div>

                  <Separator />

                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Data & Personalization</h3>
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="dataCollection">Data Collection</Label>
                        <p className="text-sm text-muted-foreground">
                          Allow us to collect data to improve your shopping experience
                        </p>
                      </div>
                      <Switch
                        id="dataCollection"
                        checked={settings.privacy.dataCollection}
                        onCheckedChange={(checked) => handleChange("privacy", "dataCollection", checked)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Button variant="outline">Download Your Data</Button>
                      <p className="text-sm text-muted-foreground">
                        Download a copy of your personal data in a machine-readable format
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button
                  variant="outline"
                  onClick={() => router.push("/profile")}
                  className="transition-all hover:bg-pink-50 dark:hover:bg-pink-950/30"
                >
                  Cancel
                </Button>
                <Button className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-600 hover:from-pink-600 hover:via-purple-600 hover:to-indigo-700 transition-all">
                  <Save className="h-4 w-4 mr-2" />
                  Save Changes
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="security" className="mt-0">
            <Card>
              <CardHeader>
                <CardTitle>Security Settings</CardTitle>
                <CardDescription>Manage your account security and authentication methods</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="twoFactorAuth">Two-Factor Authentication</Label>
                      <p className="text-sm text-muted-foreground">Add an extra layer of security to your account</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Switch
                        id="twoFactorAuth"
                        checked={settings.security.twoFactorAuth}
                        onCheckedChange={(checked) => handleChange("security", "twoFactorAuth", checked)}
                      />
                      {settings.security.twoFactorAuth ? (
                        <Badge className="bg-green-500">Enabled</Badge>
                      ) : (
                        <Badge variant="outline" className="text-amber-500">
                          Disabled
                        </Badge>
                      )}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="sessionTimeout">Session Timeout</Label>
                    <Select
                      value={settings.security.sessionTimeout}
                      onValueChange={(value) => handleChange("security", "sessionTimeout", value)}
                    >
                      <SelectTrigger id="sessionTimeout">
                        <SelectValue placeholder="Select timeout" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="15m">15 minutes</SelectItem>
                        <SelectItem value="30m">30 minutes</SelectItem>
                        <SelectItem value="1h">1 hour</SelectItem>
                        <SelectItem value="4h">4 hours</SelectItem>
                        <SelectItem value="1d">1 day</SelectItem>
                      </SelectContent>
                    </Select>
                    <p className="text-sm text-muted-foreground">Automatically log out after a period of inactivity</p>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="loginNotifications">Login Notifications</Label>
                      <p className="text-sm text-muted-foreground">
                        Receive notifications when someone logs into your account
                      </p>
                    </div>
                    <Switch
                      id="loginNotifications"
                      checked={settings.security.loginNotifications}
                      onCheckedChange={(checked) => handleChange("security", "loginNotifications", checked)}
                    />
                  </div>

                  <Separator />

                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Password</h3>
                    <div className="space-y-2">
                      <Button variant="outline">Change Password</Button>
                      <p className="text-sm text-muted-foreground">Update your password to keep your account secure</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Device Management</h3>
                    <div className="space-y-2">
                      <Button variant="outline">Manage Devices</Button>
                      <p className="text-sm text-muted-foreground">
                        View and manage devices that are currently logged into your account
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button
                  variant="outline"
                  onClick={() => router.push("/profile")}
                  className="transition-all hover:bg-pink-50 dark:hover:bg-pink-950/30"
                >
                  Cancel
                </Button>
                <Button className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-600 hover:from-pink-600 hover:via-purple-600 hover:to-indigo-700 transition-all">
                  <Save className="h-4 w-4 mr-2" />
                  Save Changes
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="billing" className="mt-0">
            <Card>
              <CardHeader>
                <CardTitle>Billing Settings</CardTitle>
                <CardDescription>Manage your payment methods and billing preferences</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Payment Methods</h3>
                  <div className="border rounded-lg p-4">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-4">
                        <div className="h-12 w-16 bg-muted rounded flex items-center justify-center">
                          <CreditCard className="h-6 w-6" />
                        </div>
                        <div>
                          <p className="font-medium">Visa ending in 4242</p>
                          <p className="text-sm text-muted-foreground">Expires 12/2025</p>
                        </div>
                      </div>
                      <Badge>Default</Badge>
                    </div>
                  </div>
                  <Button variant="outline">
                    <CreditCard className="h-4 w-4 mr-2" />
                    Add Payment Method
                  </Button>
                </div>

                <Separator />

                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Billing Address</h3>
                  <div className="border rounded-lg p-4">
                    <p className="font-medium">John Doe</p>
                    <p className="text-sm text-muted-foreground">
                      123 Main Street
                      <br />
                      Apt 4B
                      <br />
                      New York, NY 10001
                      <br />
                      United States
                    </p>
                  </div>
                  <Button variant="outline">Edit Billing Address</Button>
                </div>

                <Separator />

                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Billing History</h3>
                  <div className="border rounded-lg divide-y">
                    <div className="p-4 flex justify-between items-center">
                      <div>
                        <p className="font-medium">Order #12345</p>
                        <p className="text-sm text-muted-foreground">June 15, 2023</p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">$129.99</p>
                        <Badge
                          variant="outline"
                          className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100"
                        >
                          Paid
                        </Badge>
                      </div>
                    </div>
                    <div className="p-4 flex justify-between items-center">
                      <div>
                        <p className="font-medium">Order #12344</p>
                        <p className="text-sm text-muted-foreground">May 28, 2023</p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">$79.99</p>
                        <Badge
                          variant="outline"
                          className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100"
                        >
                          Paid
                        </Badge>
                      </div>
                    </div>
                  </div>
                  <Button variant="outline">View All Transactions</Button>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button
                  variant="outline"
                  onClick={() => router.push("/profile")}
                  className="transition-all hover:bg-pink-50 dark:hover:bg-pink-950/30"
                >
                  Cancel
                </Button>
                <Button className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-600 hover:from-pink-600 hover:via-purple-600 hover:to-indigo-700 transition-all">
                  <Save className="h-4 w-4 mr-2" />
                  Save Changes
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </div>
      </div>
    </div>
  )
}
