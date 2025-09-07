import React from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Separator } from "./ui/separator";
import {
  CalendarIcon,
  MapPinIcon,
  Clock,
  Instagram,
  Facebook,
  Twitter,
} from "lucide-react";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[80vh] bg-blue-50">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1579684947550-22e945225d9a?w=1200&q=80')",
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="relative h-full flex flex-col items-center justify-center text-center px-4 md:px-8 lg:px-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4"
          >
            Coastal Delights
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl"
          >
            Experience the finest seafood cuisine with breathtaking ocean views
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white"
            >
              View Menu
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white/20"
            >
              Make Reservation
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Featured Dishes Section */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Dishes
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover our chef's selection of exquisite seafood creations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredDishes.map((dish, index) => (
              <Card
                key={index}
                className="overflow-hidden border-none shadow-lg"
              >
                <div className="h-64 overflow-hidden">
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{dish.name}</h3>
                  <p className="text-gray-600 mb-4">{dish.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-blue-600 font-medium">
                      ${dish.price}
                    </span>
                    <Button variant="outline" size="sm">
                      Order Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              View Full Menu
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Founded in 2010, Coastal Delights has been serving the finest
                seafood cuisine to locals and visitors alike. Our commitment to
                quality, sustainability, and exceptional dining experiences has
                made us a beloved destination for seafood enthusiasts.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                We source our ingredients from local fishermen and sustainable
                suppliers, ensuring that every dish not only tastes incredible
                but also supports our community and environment.
              </p>
              <Button
                variant="outline"
                className="border-blue-600 text-blue-600 hover:bg-blue-50"
              >
                Learn More About Us
              </Button>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&q=80"
                alt="Restaurant interior"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Reservation CTA Section */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Reserve Your Table
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Experience the perfect dining atmosphere with ocean views and
            exceptional service
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              size="lg"
              className="bg-white text-blue-900 hover:bg-blue-50"
            >
              <CalendarIcon className="mr-2 h-5 w-5" /> Make Reservation
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-blue-800"
            >
              <Clock className="mr-2 h-5 w-5" /> View Hours
            </Button>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Find Us
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Located on the beautiful coastline with stunning ocean views
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-gray-200 rounded-lg overflow-hidden h-[400px]">
              {/* This would be replaced with an actual map component */}
              <div
                className="w-full h-full bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?w=800&q=80')",
                }}
              ></div>
            </div>
            <div className="flex flex-col justify-center">
              <h3 className="text-2xl font-semibold mb-6">
                Coastal Delights Restaurant
              </h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPinIcon className="h-6 w-6 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">
                    123 Oceanview Drive
                    <br />
                    Seaside, CA 93955
                  </p>
                </div>
                <div className="flex items-start">
                  <Clock className="h-6 w-6 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-700 font-medium">Hours:</p>
                    <p className="text-gray-700">
                      Monday - Thursday: 11am - 10pm
                    </p>
                    <p className="text-gray-700">
                      Friday - Sunday: 11am - 11pm
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                  Get Directions
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Coastal Delights</h3>
              <p className="text-gray-400 mb-4">
                Experience the finest seafood cuisine with breathtaking ocean
                views
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <Twitter className="h-5 w-5" />
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Menu
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Reservations
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <address className="not-italic text-gray-400">
                123 Oceanview Drive
                <br />
                Seaside, CA 93955
                <br />
                <a href="tel:+15551234567" className="hover:text-white">
                  +1 (555) 123-4567
                </a>
                <br />
                <a
                  href="mailto:info@coastaldelights.com"
                  className="hover:text-white"
                >
                  info@coastaldelights.com
                </a>
              </address>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Hours</h3>
              <ul className="text-gray-400">
                <li className="mb-2">Monday - Thursday: 11am - 10pm</li>
                <li className="mb-2">Friday - Sunday: 11am - 11pm</li>
                <li>Happy Hour: Daily 4pm - 6pm</li>
              </ul>
            </div>
          </div>

          <Separator className="my-8 bg-gray-800" />

          <div className="text-center text-gray-500 text-sm">
            <p>
              &copy; {new Date().getFullYear()} Coastal Delights. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

// Sample data for featured dishes
const featuredDishes = [
  {
    name: "Grilled Atlantic Salmon",
    description:
      "Fresh Atlantic salmon grilled to perfection, served with seasonal vegetables and lemon butter sauce.",
    price: "24.99",
    image:
      "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=800&q=80",
  },
  {
    name: "Lobster Linguine",
    description:
      "Tender lobster meat tossed with linguine pasta in a rich garlic cream sauce with fresh herbs.",
    price: "29.99",
    image:
      "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=800&q=80",
  },
  {
    name: "Seafood Paella",
    description:
      "Traditional Spanish rice dish with shrimp, mussels, clams, and fish, seasoned with saffron.",
    price: "27.99",
    image:
      "https://images.unsplash.com/photo-1515443961218-a51367888e4b?w=800&q=80",
  },
];

export default HomePage;
