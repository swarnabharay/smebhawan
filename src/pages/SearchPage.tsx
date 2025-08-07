import { useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import ProductCard from "@/components/ProductCard";
import FilterSidebar from "@/components/FilterSidebar";
import { Search, Filter, Grid, List } from "lucide-react";

const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState(searchParams.get('q') || '');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState('relevance');
  const [showFilters, setShowFilters] = useState(false);

  // Mock search results
  const searchResults = [
    {
      id: "1",
      name: "HDPE PE100 Black Prime Grade",
      price: 89500,
      unit: "MT",
      location: "Mumbai",
      supplier: "Reliance Industries",
      priceChange: 2.3
    },
    {
      id: "2",
      name: "PP Homopolymer 1100N Natural",
      price: 92000,
      unit: "MT",
      location: "Chennai",
      supplier: "ONGC Petro",
      priceChange: -1.2
    },
    {
      id: "3",
      name: "LLDPE Film Grade C4",
      price: 87500,
      unit: "MT",
      location: "Delhi",
      supplier: "Indian Oil Corp",
      priceChange: 0.8
    },
    {
      id: "4",
      name: "PVC Resin S-65 Suspension",
      price: 78000,
      unit: "MT",
      location: "Bangalore",
      supplier: "Reliance Industries",
      priceChange: 1.5
    },
    {
      id: "5",
      name: "LDPE General Purpose Grade",
      price: 91000,
      unit: "MT",
      location: "Hyderabad",
      supplier: "Haldia Petrochemicals",
      priceChange: -0.5
    },
    {
      id: "6",
      name: "PET Bottle Grade Resin",
      price: 95000,
      unit: "MT",
      location: "Pune",
      supplier: "IOCL",
      priceChange: 3.2
    }
  ];

  const handleSearch = () => {
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const sortedResults = [...searchResults].sort((a, b) => {
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
      {/* Search Header */}
      <div className="bg-primary text-primary-foreground py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl md:text-3xl font-bold mb-4">Search Results</h1>
          
          {/* Search Bar */}
          <div className="max-w-2xl">
            <div className="relative">
              <Input
                type="text"
                placeholder="Search for products, categories, brands..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyPress={handleKeyPress}
                className="pr-12 py-3 bg-white text-foreground"
              />
              <Button 
                size="sm" 
                className="absolute right-1 top-1 bottom-1"
                onClick={handleSearch}
              >
                <Search className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {searchParams.get('q') && (
            <p className="mt-4 text-lg opacity-90">
              Showing results for: <span className="font-semibold">"{searchParams.get('q')}"</span>
            </p>
          )}
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
            <Card className="mb-6">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
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
                      {searchResults.length} results found
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <Select value={sortBy} onValueChange={setSortBy}>
                      <SelectTrigger className="w-48">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="relevance">Most Relevant</SelectItem>
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
              </CardContent>
            </Card>

            {/* Search Results */}
            {searchResults.length > 0 ? (
              <>
                <div className={`${
                  viewMode === 'grid' 
                    ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'
                    : 'space-y-4'
                }`}>
                  {sortedResults.map((product) => (
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
                    Load More Results
                  </Button>
                </div>
              </>
            ) : (
              <Card>
                <CardContent className="p-8 text-center">
                  <div className="text-muted-foreground mb-4">
                    <Search className="h-12 w-12 mx-auto mb-4" />
                    <h3 className="text-lg font-medium mb-2">No results found</h3>
                    <p>Try adjusting your search terms or filters</p>
                  </div>
                  <Button variant="outline" onClick={() => navigate('/category/raw-materials')}>
                    Browse All Categories
                  </Button>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;