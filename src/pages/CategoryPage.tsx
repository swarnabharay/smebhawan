import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import ProductCard from "@/components/ProductCard";
import FilterSidebar from "@/components/FilterSidebar";
import { Grid, List, Filter } from "lucide-react";

const CategoryPage = () => {
  const { category } = useParams();
  const navigate = useNavigate();
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState('price-low');
  const [showFilters, setShowFilters] = useState(false);

  const categoryData = {
    'raw-materials': {
      title: 'Raw Materials',
      description: 'Industrial raw materials and commodities for manufacturing',
      subcategories: ['Polymers & Packaging', 'Chemicals', 'Steel', 'Textiles', 'Agriculture']
    },
    'polymers-packaging': {
      title: 'Polymers & Packaging',
      description: 'Plastic resins, polymers and packaging materials',
      subcategories: ['HDPE', 'LDPE', 'LLDPE', 'PP', 'PVC', 'PET', 'PS', 'ABS']
    },
    'chemicals': {
      title: 'Chemicals',
      description: 'Industrial and specialty chemicals',
      subcategories: ['Basic Chemicals', 'Specialty Chemicals', 'Petrochemicals', 'Agrochemicals']
    },
    'steel': {
      title: 'Steel',
      description: 'Steel products and alloys',
      subcategories: ['HR Coils', 'CR Coils', 'Galvanized Steel', 'Stainless Steel', 'Pipes & Tubes']
    },
    'textiles': {
      title: 'Textiles',
      description: 'Fabrics, yarns and textile materials',
      subcategories: ['Cotton', 'Polyester', 'Viscose', 'Yarn', 'Fabric']
    },
    'agriculture': {
      title: 'Agriculture',
      description: 'Agricultural products and supplies',
      subcategories: ['Grains', 'Pulses', 'Seeds', 'Fertilizers', 'Pesticides']
    }
  };

  const currentCategory = categoryData[category as keyof typeof categoryData] || categoryData['raw-materials'];

  // Mock product data
  const products = [
    {
      id: "1",
      name: "HDPE PE100 Black Prime Grade",
      price: 89500,
      unit: "MT",
      location: "Mumbai",
      supplier: "Reliance Industries",
      priceChange: 2.3,
      category: "polymers-packaging"
    },
    {
      id: "2",
      name: "PP Homopolymer 1100N Natural",
      price: 92000,
      unit: "MT",
      location: "Chennai",
      supplier: "ONGC Petro",
      priceChange: -1.2,
      category: "polymers-packaging"
    },
    {
      id: "3",
      name: "LLDPE Film Grade C4",
      price: 87500,
      unit: "MT",
      location: "Delhi",
      supplier: "Indian Oil Corp",
      priceChange: 0.8,
      category: "polymers-packaging"
    },
    {
      id: "4",
      name: "PVC Resin S-65 Suspension",
      price: 78000,
      unit: "MT",
      location: "Bangalore",
      supplier: "Reliance Industries",
      priceChange: 1.5,
      category: "polymers-packaging"
    },
    {
      id: "5",
      name: "LDPE General Purpose",
      price: 91000,
      unit: "MT",
      location: "Hyderabad",
      supplier: "Haldia Petrochemicals",
      priceChange: -0.5,
      category: "polymers-packaging"
    },
    {
      id: "6",
      name: "PET Bottle Grade",
      price: 95000,
      unit: "MT",
      location: "Pune",
      supplier: "IOCL",
      priceChange: 3.2,
      category: "polymers-packaging"
    }
  ];

  const filteredProducts = products.filter(product => 
    category === 'raw-materials' || product.category === category
  );

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'name':
        return a.name.localeCompare(b.name);
      case 'location':
        return a.location.localeCompare(b.location);
      default:
        return 0;
    }
  });

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-primary text-primary-foreground py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">{currentCategory.title}</h1>
          <p className="text-lg opacity-90">{currentCategory.description}</p>
          <div className="flex items-center space-x-2 mt-4">
            <Badge variant="secondary" className="bg-white/20 text-primary-foreground">
              {filteredProducts.length} Products
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-primary-foreground">
              Live Pricing
            </Badge>
          </div>
        </div>
      </div>

      {/* Subcategories */}
      <div className="bg-gray-50 py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-4 overflow-x-auto">
            <span className="text-sm font-medium whitespace-nowrap">Categories:</span>
            {currentCategory.subcategories.map((subcategory, index) => (
              <Button
                key={index}
                variant="outline"
                size="sm"
                className="whitespace-nowrap"
              >
                {subcategory}
              </Button>
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-6">
        <div className="flex gap-6">
          {/* Filters Sidebar */}
          <div className={`w-80 space-y-4 ${showFilters ? 'block' : 'hidden'} lg:block`}>
            <FilterSidebar />
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-6 bg-white p-4 rounded-lg border">
              <div className="flex items-center space-x-4">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setShowFilters(!showFilters)}
                  className="lg:hidden"
                >
                  <Filter className="h-4 w-4 mr-2" />
                  Filters
                </Button>
                <div className="text-sm text-muted-foreground">
                  {filteredProducts.length} products found
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-48">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                    <SelectItem value="price-high">Price: High to Low</SelectItem>
                    <SelectItem value="name">Name: A to Z</SelectItem>
                    <SelectItem value="location">Location</SelectItem>
                  </SelectContent>
                </Select>
                
                <div className="flex border rounded-md">
                  <Button
                    variant={viewMode === 'grid' ? 'default' : 'ghost'}
                    size="sm"
                    onClick={() => setViewMode('grid')}
                  >
                    <Grid className="h-4 w-4" />
                  </Button>
                  <Button
                    variant={viewMode === 'list' ? 'default' : 'ghost'}
                    size="sm"
                    onClick={() => setViewMode('list')}
                  >
                    <List className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Products Grid/List */}
            <div className={`${
              viewMode === 'grid' 
                ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'
                : 'space-y-4'
            }`}>
              {sortedProducts.map((product) => (
                <div key={product.id}>
                  {viewMode === 'grid' ? (
                    <ProductCard
                      {...product}
                      onClick={() => navigate(`/product/${product.id}`)}
                    />
                  ) : (
                    <Card className="cursor-pointer hover:shadow-lg transition-shadow">
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between">
                          <div className="flex-1">
                            <h3 className="font-medium text-lg mb-2">{product.name}</h3>
                            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                              <span>📍 {product.location}</span>
                              <span>🏢 {product.supplier}</span>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-2xl font-bold text-primary">
                              ₹{product.price.toLocaleString()}
                            </div>
                            <div className="text-sm text-muted-foreground">per {product.unit}</div>
                            <Button className="mt-2">Get Quote</Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  )}
                </div>
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-8">
              <Button variant="outline" size="lg">
                Load More Products
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;