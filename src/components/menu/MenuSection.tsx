import React, { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  dietary?: string[];
}

interface MenuSectionProps {
  title?: string;
  categories?: string[];
  items?: MenuItem[];
}

const MenuSection = ({
  title = "Our Menu",
  categories = [
    "Seafood Specialties",
    "Bar Offerings",
    "Appetizers",
    "Desserts",
  ],
  items = [
    {
      id: "1",
      name: "Grilled Atlantic Salmon",
      description:
        "Fresh Atlantic salmon grilled to perfection, served with seasonal vegetables and lemon butter sauce.",
      price: 24.99,
      image:
        "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=500&q=80",
      category: "Seafood Specialties",
      dietary: ["Gluten-Free"],
    },
    {
      id: "2",
      name: "Lobster Tail",
      description:
        "Succulent lobster tail steamed and served with drawn butter and garlic mashed potatoes.",
      price: 32.99,
      image:
        "https://images.unsplash.com/photo-1599021419847-d8a7a6aba5b3?w=500&q=80",
      category: "Seafood Specialties",
    },
    {
      id: "3",
      name: "Shrimp Scampi",
      description:
        "Jumbo shrimp sautéed in a garlic butter white wine sauce, served over linguine pasta.",
      price: 22.99,
      image:
        "https://images.unsplash.com/photo-1625943553852-781c6dd46faa?w=500&q=80",
      category: "Seafood Specialties",
    },
    {
      id: "4",
      name: "Coastal Margarita",
      description:
        "Premium tequila, fresh lime juice, and a salt rim with a splash of blue curaçao.",
      price: 12.99,
      image:
        "https://images.unsplash.com/photo-1556855810-ac404aa91e85?w=500&q=80",
      category: "Bar Offerings",
    },
    {
      id: "5",
      name: "Ocean Breeze Mojito",
      description:
        "White rum, fresh mint, lime juice, and a hint of blue curaçao topped with soda water.",
      price: 11.99,
      image:
        "https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=500&q=80",
      category: "Bar Offerings",
    },
    {
      id: "6",
      name: "Calamari",
      description:
        "Lightly battered and fried calamari served with marinara sauce and lemon wedges.",
      price: 14.99,
      image:
        "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=500&q=80",
      category: "Appetizers",
    },
    {
      id: "7",
      name: "Key Lime Pie",
      description:
        "Traditional key lime pie with a graham cracker crust and whipped cream.",
      price: 8.99,
      image:
        "https://images.unsplash.com/photo-1519915028121-7d3463d20b13?w=500&q=80",
      category: "Desserts",
      dietary: ["Vegetarian"],
    },
  ],
}: MenuSectionProps) => {
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  return (
    <div className="w-full bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
        </div>

        <Tabs defaultValue={categories[0]} className="w-full">
          <TabsList className="w-full flex justify-center mb-8 overflow-x-auto">
            {categories.map((category) => (
              <TabsTrigger
                key={category}
                value={category}
                onClick={() => setActiveCategory(category)}
                className="px-4 py-2 text-sm md:text-base"
              >
                {category}
              </TabsTrigger>
            ))}
          </TabsList>

          {categories.map((category) => (
            <TabsContent key={category} value={category} className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {items
                  .filter((item) => item.category === category)
                  .map((item) => (
                    <Card
                      key={item.id}
                      className="overflow-hidden hover:shadow-lg transition-shadow duration-300"
                    >
                      <div className="relative h-48 w-full">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <CardContent className="p-5">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="text-lg font-semibold text-gray-900">
                            {item.name}
                          </h3>
                          <span className="text-lg font-medium text-blue-600">
                            ${item.price.toFixed(2)}
                          </span>
                        </div>
                        <p className="text-gray-600 text-sm mb-4">
                          {item.description}
                        </p>
                        {item.dietary && item.dietary.length > 0 && (
                          <div className="flex flex-wrap gap-2">
                            {item.dietary.map((diet) => (
                              <Badge
                                key={diet}
                                variant="outline"
                                className="text-xs"
                              >
                                {diet}
                              </Badge>
                            ))}
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
};

export default MenuSection;
