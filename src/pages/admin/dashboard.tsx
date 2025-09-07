import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import MenuEditor from "@/components/admin/MenuEditor";
import {
  ChevronRight,
  Home,
  Image,
  LayoutDashboard,
  Menu,
  Settings,
  Users,
} from "lucide-react";

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("menu");

  return (
    <div className="flex h-screen bg-background">
      {/* Sidebar */}
      <div className="hidden md:flex w-64 flex-col border-r bg-card">
        <div className="flex h-14 items-center border-b px-4">
          <h2 className="text-lg font-semibold">Coastal Plates</h2>
        </div>
        <div className="flex-1 overflow-auto py-2">
          <nav className="grid gap-1 px-2">
            <Button
              variant="ghost"
              className="justify-start"
              onClick={() => setActiveTab("dashboard")}
            >
              <LayoutDashboard className="mr-2 h-4 w-4" />
              Dashboard
            </Button>
            <Button
              variant={activeTab === "menu" ? "secondary" : "ghost"}
              className="justify-start"
              onClick={() => setActiveTab("menu")}
            >
              <Menu className="mr-2 h-4 w-4" />
              Menu Management
            </Button>
            <Button
              variant="ghost"
              className="justify-start"
              onClick={() => setActiveTab("content")}
            >
              <Home className="mr-2 h-4 w-4" />
              Content Management
            </Button>
            <Button
              variant="ghost"
              className="justify-start"
              onClick={() => setActiveTab("media")}
            >
              <Image className="mr-2 h-4 w-4" />
              Media Management
            </Button>
            <Button
              variant="ghost"
              className="justify-start"
              onClick={() => setActiveTab("users")}
            >
              <Users className="mr-2 h-4 w-4" />
              User Management
            </Button>
            <Button
              variant="ghost"
              className="justify-start"
              onClick={() => setActiveTab("settings")}
            >
              <Settings className="mr-2 h-4 w-4" />
              Settings
            </Button>
          </nav>
        </div>
        <div className="mt-auto p-4 border-t">
          <div className="flex items-center gap-3">
            <Avatar>
              <AvatarImage
                src="https://api.dicebear.com/7.x/avataaars/svg?seed=admin"
                alt="Admin"
              />
              <AvatarFallback>AD</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm font-medium">Admin User</p>
              <p className="text-xs text-muted-foreground">
                admin@coastalplates.com
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="flex h-14 items-center gap-4 border-b bg-card px-4 lg:px-6">
          <Button variant="outline" size="icon" className="md:hidden">
            <Menu className="h-4 w-4" />
            <span className="sr-only">Toggle Menu</span>
          </Button>
          <div className="flex-1">
            <h1 className="text-lg font-semibold md:hidden">Coastal Plates</h1>
            <div className="hidden md:flex items-center gap-2">
              <Button variant="ghost" size="sm" className="h-8 gap-1">
                <Home className="h-4 w-4" />
                <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                  Dashboard
                </span>
              </Button>
              <ChevronRight className="h-4 w-4 text-muted-foreground" />
              <Button variant="ghost" size="sm" className="h-8 gap-1">
                {activeTab === "menu" && <Menu className="h-4 w-4" />}
                {activeTab === "content" && <Home className="h-4 w-4" />}
                {activeTab === "media" && <Image className="h-4 w-4" />}
                {activeTab === "users" && <Users className="h-4 w-4" />}
                {activeTab === "settings" && <Settings className="h-4 w-4" />}
                <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                  {activeTab === "menu" && "Menu Management"}
                  {activeTab === "content" && "Content Management"}
                  {activeTab === "media" && "Media Management"}
                  {activeTab === "users" && "User Management"}
                  {activeTab === "settings" && "Settings"}
                  {activeTab === "dashboard" && "Overview"}
                </span>
              </Button>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Badge variant="outline" className="hidden md:inline-flex">
              Admin
            </Badge>
            <Button variant="outline" size="sm">
              View Website
            </Button>
          </div>
        </header>

        {/* Content Area */}
        <main className="flex-1 overflow-auto p-4 lg:p-6">
          {activeTab === "menu" && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold tracking-tight">
                    Menu Management
                  </h2>
                  <p className="text-muted-foreground">
                    Manage your restaurant's menu items, categories, and
                    pricing.
                  </p>
                </div>
                <Button>Add New Item</Button>
              </div>
              <Separator />
              <MenuEditor />
            </div>
          )}

          {activeTab === "content" && (
            <div className="space-y-4">
              <div>
                <h2 className="text-2xl font-bold tracking-tight">
                  Content Management
                </h2>
                <p className="text-muted-foreground">
                  Update website content, pages, and sections.
                </p>
              </div>
              <Separator />
              <Tabs defaultValue="homepage">
                <TabsList>
                  <TabsTrigger value="homepage">Homepage</TabsTrigger>
                  <TabsTrigger value="about">About</TabsTrigger>
                  <TabsTrigger value="contact">Contact</TabsTrigger>
                  <TabsTrigger value="location">Location</TabsTrigger>
                </TabsList>
                <TabsContent value="homepage" className="space-y-4 pt-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>Hero Section</CardTitle>
                      <CardDescription>
                        Update the main hero section of your homepage
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="hero-title">Title</Label>
                        <Input
                          id="hero-title"
                          defaultValue="Fresh Seafood Daily"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="hero-subtitle">Subtitle</Label>
                        <Input
                          id="hero-subtitle"
                          defaultValue="Ocean to Table Experience"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="hero-image">Background Image</Label>
                        <div className="flex items-center gap-2">
                          <Input id="hero-image" type="file" />
                          <Button variant="outline" size="sm">
                            Select from Media
                          </Button>
                        </div>
                      </div>
                      <Button>Save Changes</Button>
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="about" className="pt-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>About Page Content</CardTitle>
                      <CardDescription>
                        Update your restaurant's story and information
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="about-title">Page Title</Label>
                          <Input id="about-title" defaultValue="Our Story" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="about-content">Content</Label>
                          <textarea
                            id="about-content"
                            className="w-full min-h-[200px] rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm"
                            defaultValue="Coastal Plates was founded in 2010 with a simple mission: to bring the freshest seafood from our local waters directly to your table. Our chef has over 20 years of experience..."
                          />
                        </div>
                        <Button>Save Changes</Button>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="contact" className="pt-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>Contact Information</CardTitle>
                      <CardDescription>
                        Update your restaurant's contact details
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone Number</Label>
                          <Input id="phone" defaultValue="(555) 123-4567" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email Address</Label>
                          <Input
                            id="email"
                            defaultValue="info@coastalplates.com"
                          />
                        </div>
                        <Button>Save Changes</Button>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="location" className="pt-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>Location & Hours</CardTitle>
                      <CardDescription>
                        Update your restaurant's address and operating hours
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="address">Address</Label>
                          <Input
                            id="address"
                            defaultValue="123 Oceanview Drive, Seaside, CA 90210"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="hours">Hours of Operation</Label>
                          <textarea
                            id="hours"
                            className="w-full min-h-[100px] rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm"
                            defaultValue="Monday - Thursday: 11am - 9pm\nFriday - Saturday: 11am - 10pm\nSunday: 10am - 8pm"
                          />
                        </div>
                        <Button>Save Changes</Button>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          )}

          {activeTab === "media" && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold tracking-tight">
                    Media Management
                  </h2>
                  <p className="text-muted-foreground">
                    Upload and manage images for your website.
                  </p>
                </div>
                <Button>Upload New Image</Button>
              </div>
              <Separator />
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {Array.from({ length: 8 }).map((_, i) => (
                  <Card key={i} className="overflow-hidden">
                    <div className="aspect-square relative">
                      <img
                        src={`https://images.unsplash.com/photo-${1570000000000 + i * 1000}?w=400&q=80`}
                        alt="Food item"
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <CardContent className="p-3">
                      <div className="flex items-center justify-between">
                        <p className="text-sm truncate">
                          food-image-{i + 1}.jpg
                        </p>
                        <Button variant="ghost" size="sm">
                          ⋮
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {activeTab === "users" && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold tracking-tight">
                    User Management
                  </h2>
                  <p className="text-muted-foreground">
                    Manage staff accounts and permissions.
                  </p>
                </div>
                <Button>Add New User</Button>
              </div>
              <Separator />
              <div className="border rounded-md">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-3">Name</th>
                      <th className="text-left p-3">Email</th>
                      <th className="text-left p-3">Role</th>
                      <th className="text-left p-3">Status</th>
                      <th className="text-right p-3">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      {
                        name: "Admin User",
                        email: "admin@coastalplates.com",
                        role: "Administrator",
                        status: "Active",
                      },
                      {
                        name: "John Smith",
                        email: "john@coastalplates.com",
                        role: "Manager",
                        status: "Active",
                      },
                      {
                        name: "Sarah Johnson",
                        email: "sarah@coastalplates.com",
                        role: "Editor",
                        status: "Active",
                      },
                    ].map((user, i) => (
                      <tr key={i} className="border-b last:border-0">
                        <td className="p-3">
                          <div className="flex items-center gap-2">
                            <Avatar className="h-8 w-8">
                              <AvatarImage
                                src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${user.name}`}
                                alt={user.name}
                              />
                              <AvatarFallback>
                                {user.name
                                  .split(" ")
                                  .map((n) => n[0])
                                  .join("")}
                              </AvatarFallback>
                            </Avatar>
                            <span>{user.name}</span>
                          </div>
                        </td>
                        <td className="p-3">{user.email}</td>
                        <td className="p-3">{user.role}</td>
                        <td className="p-3">
                          <Badge
                            variant="outline"
                            className="bg-green-50 text-green-700 border-green-200"
                          >
                            {user.status}
                          </Badge>
                        </td>
                        <td className="p-3 text-right">
                          <Button variant="ghost" size="sm">
                            Edit
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === "settings" && (
            <div className="space-y-4">
              <div>
                <h2 className="text-2xl font-bold tracking-tight">Settings</h2>
                <p className="text-muted-foreground">
                  Configure your website settings.
                </p>
              </div>
              <Separator />
              <Card>
                <CardHeader>
                  <CardTitle>General Settings</CardTitle>
                  <CardDescription>
                    Basic configuration for your website
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="site-name">Restaurant Name</Label>
                    <Input id="site-name" defaultValue="Coastal Plates" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="site-tagline">Tagline</Label>
                    <Input
                      id="site-tagline"
                      defaultValue="Fresh Seafood Daily"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="site-logo">Logo</Label>
                    <div className="flex items-center gap-2">
                      <Input id="site-logo" type="file" />
                      <Button variant="outline" size="sm">
                        Select from Media
                      </Button>
                    </div>
                  </div>
                  <Button>Save Changes</Button>
                </CardContent>
              </Card>
            </div>
          )}

          {activeTab === "dashboard" && (
            <div className="space-y-4">
              <div>
                <h2 className="text-2xl font-bold tracking-tight">Dashboard</h2>
                <p className="text-muted-foreground">
                  Overview of your restaurant website.
                </p>
              </div>
              <Separator />
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      Total Menu Items
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">24</div>
                    <p className="text-xs text-muted-foreground">
                      12 seafood, 8 sides, 4 desserts
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      Media Files
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">36</div>
                    <p className="text-xs text-muted-foreground">
                      28 images, 8 documents
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      User Accounts
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">3</div>
                    <p className="text-xs text-muted-foreground">
                      1 admin, 1 manager, 1 editor
                    </p>
                  </CardContent>
                </Card>
              </div>
              <Card>
                <CardHeader>
                  <CardTitle>Recent Updates</CardTitle>
                  <CardDescription>
                    Latest changes to your website
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      {
                        action: "Updated menu item",
                        user: "Admin User",
                        time: "2 hours ago",
                      },
                      {
                        action: "Added new image to gallery",
                        user: "Sarah Johnson",
                        time: "5 hours ago",
                      },
                      {
                        action: "Updated contact information",
                        user: "John Smith",
                        time: "1 day ago",
                      },
                      {
                        action: "Added new menu category",
                        user: "Admin User",
                        time: "2 days ago",
                      },
                    ].map((item, i) => (
                      <div
                        key={i}
                        className="flex items-center justify-between border-b last:border-0 pb-2 last:pb-0"
                      >
                        <div>
                          <p className="font-medium">{item.action}</p>
                          <p className="text-sm text-muted-foreground">
                            By {item.user}
                          </p>
                        </div>
                        <Badge variant="outline">{item.time}</Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
