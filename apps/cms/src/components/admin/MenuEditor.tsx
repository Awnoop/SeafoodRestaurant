import React, { useState } from "react";
import { PlusCircle, Pencil, Trash2, Search, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";

interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  isAvailable: boolean;
  dietaryInfo: string[];
}

const MenuEditor = () => {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([
    {
      id: "1",
      name: "Grilled Atlantic Salmon",
      description:
        "Fresh Atlantic salmon grilled to perfection, served with lemon butter sauce and seasonal vegetables.",
      price: 24.99,
      category: "Seafood",
      image:
        "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=500&q=80",
      isAvailable: true,
      dietaryInfo: ["Gluten-Free"],
    },
    {
      id: "2",
      name: "Lobster Bisque",
      description:
        "Creamy soup made with lobster stock, aromatic vegetables, and a touch of brandy.",
      price: 12.99,
      category: "Starters",
      image:
        "https://images.unsplash.com/photo-1583953583483-3b9f0d2764bd?w=500&q=80",
      isAvailable: true,
      dietaryInfo: [],
    },
    {
      id: "3",
      name: "Seafood Platter",
      description:
        "A generous assortment of fresh oysters, shrimp, mussels, and crab claws served with cocktail sauce and mignonette.",
      price: 42.99,
      category: "Platters",
      image:
        "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500&q=80",
      isAvailable: true,
      dietaryInfo: ["Gluten-Free"],
    },
  ]);

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [currentItem, setCurrentItem] = useState<MenuItem | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("All");

  const categories = [
    "All",
    "Seafood",
    "Starters",
    "Platters",
    "Desserts",
    "Drinks",
  ];
  const dietaryOptions = [
    "Vegetarian",
    "Vegan",
    "Gluten-Free",
    "Dairy-Free",
    "Nut-Free",
  ];

  const handleAddNew = () => {
    setCurrentItem({
      id: Date.now().toString(),
      name: "",
      description: "",
      price: 0,
      category: "Seafood",
      image: "",
      isAvailable: true,
      dietaryInfo: [],
    });
    setIsDialogOpen(true);
  };

  const handleEdit = (item: MenuItem) => {
    setCurrentItem({ ...item });
    setIsDialogOpen(true);
  };

  const handleDelete = (id: string) => {
    if (confirm("Are you sure you want to delete this menu item?")) {
      setMenuItems(menuItems.filter((item) => item.id !== id));
    }
  };

  const handleSave = () => {
    if (!currentItem) return;

    if (menuItems.some((item) => item.id === currentItem.id)) {
      setMenuItems(
        menuItems.map((item) =>
          item.id === currentItem.id ? currentItem : item,
        ),
      );
    } else {
      setMenuItems([...menuItems, currentItem]);
    }

    setIsDialogOpen(false);
    setCurrentItem(null);
  };

  const filteredItems = menuItems.filter((item) => {
    const matchesSearch =
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      categoryFilter === "All" || item.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  const toggleDietaryInfo = (option: string) => {
    if (!currentItem) return;

    const updatedDietaryInfo = currentItem.dietaryInfo.includes(option)
      ? currentItem.dietaryInfo.filter((item) => item !== option)
      : [...currentItem.dietaryInfo, option];

    setCurrentItem({ ...currentItem, dietaryInfo: updatedDietaryInfo });
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold text-gray-800">
          Menu Management
        </h1>
        <Button onClick={handleAddNew}>
          <PlusCircle className="mr-2 h-4 w-4" /> Add New Item
        </Button>
      </div>

      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input
            placeholder="Search menu items..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        <div className="w-full md:w-64">
          <Select value={categoryFilter} onValueChange={setCategoryFilter}>
            <SelectTrigger>
              <SelectValue placeholder="Filter by category" />
            </SelectTrigger>
            <SelectContent>
              {categories.map((category) => (
                <SelectItem key={category} value={category}>
                  {category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <Card>
        <CardHeader className="pb-0">
          <CardTitle>Menu Items ({filteredItems.length})</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[80px]">Image</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead className="hidden md:table-cell">
                    Description
                  </TableHead>
                  <TableHead>Price</TableHead>
                  <TableHead className="hidden md:table-cell">
                    Category
                  </TableHead>
                  <TableHead className="hidden md:table-cell">Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredItems.length > 0 ? (
                  filteredItems.map((item) => (
                    <TableRow key={item.id}>
                      <TableCell>
                        <div className="w-16 h-16 rounded-md overflow-hidden">
                          <img
                            src={
                              item.image ||
                              "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=200&q=80"
                            }
                            alt={item.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </TableCell>
                      <TableCell className="font-medium">{item.name}</TableCell>
                      <TableCell className="hidden md:table-cell max-w-xs truncate">
                        {item.description}
                      </TableCell>
                      <TableCell>${item.price.toFixed(2)}</TableCell>
                      <TableCell className="hidden md:table-cell">
                        {item.category}
                      </TableCell>
                      <TableCell className="hidden md:table-cell">
                        <Badge
                          variant={item.isAvailable ? "default" : "outline"}
                        >
                          {item.isAvailable ? "Available" : "Unavailable"}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end gap-2">
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleEdit(item)}
                          >
                            <Pencil className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleDelete(item.id)}
                          >
                            <Trash2 className="h-4 w-4 text-red-500" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell
                      colSpan={7}
                      className="text-center py-8 text-gray-500"
                    >
                      No menu items found. Add a new item or adjust your search
                      filters.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>
              {currentItem?.id ? "Edit Menu Item" : "Add New Menu Item"}
            </DialogTitle>
            <DialogDescription>
              Fill in the details for this menu item. Click save when you're
              done.
            </DialogDescription>
          </DialogHeader>
          {currentItem && (
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Item Name</Label>
                  <Input
                    id="name"
                    value={currentItem.name}
                    onChange={(e) =>
                      setCurrentItem({ ...currentItem, name: e.target.value })
                    }
                    placeholder="e.g. Grilled Atlantic Salmon"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="price">Price ($)</Label>
                  <Input
                    id="price"
                    type="number"
                    step="0.01"
                    value={currentItem.price}
                    onChange={(e) =>
                      setCurrentItem({
                        ...currentItem,
                        price: parseFloat(e.target.value),
                      })
                    }
                    placeholder="0.00"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  value={currentItem.description}
                  onChange={(e) =>
                    setCurrentItem({
                      ...currentItem,
                      description: e.target.value,
                    })
                  }
                  placeholder="Describe the menu item..."
                  rows={3}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="category">Category</Label>
                  <Select
                    value={currentItem.category}
                    onValueChange={(value) =>
                      setCurrentItem({ ...currentItem, category: value })
                    }
                  >
                    <SelectTrigger id="category">
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories
                        .filter((c) => c !== "All")
                        .map((category) => (
                          <SelectItem key={category} value={category}>
                            {category}
                          </SelectItem>
                        ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="image">Image URL</Label>
                  <Input
                    id="image"
                    value={currentItem.image}
                    onChange={(e) =>
                      setCurrentItem({ ...currentItem, image: e.target.value })
                    }
                    placeholder="https://example.com/image.jpg"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label>Dietary Information</Label>
                <div className="flex flex-wrap gap-3">
                  {dietaryOptions.map((option) => (
                    <div key={option} className="flex items-center space-x-2">
                      <Switch
                        id={`dietary-${option}`}
                        checked={currentItem.dietaryInfo.includes(option)}
                        onCheckedChange={() => toggleDietaryInfo(option)}
                      />
                      <Label htmlFor={`dietary-${option}`}>{option}</Label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <Switch
                  id="availability"
                  checked={currentItem.isAvailable}
                  onCheckedChange={(checked) =>
                    setCurrentItem({ ...currentItem, isAvailable: checked })
                  }
                />
                <Label htmlFor="availability">Item is available</Label>
              </div>

              {currentItem.image && (
                <div className="mt-2">
                  <Label>Image Preview</Label>
                  <div className="mt-2 border rounded-md overflow-hidden w-full h-48">
                    <img
                      src={currentItem.image}
                      alt="Preview"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src =
                          "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=200&q=80";
                      }}
                    />
                  </div>
                </div>
              )}
            </div>
          )}
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleSave}>Save Changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default MenuEditor;
