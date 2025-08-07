import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import PriceChart from "@/components/PriceChart";
import { ArrowLeft, Share2, Heart, Phone, Mail, MapPin, Building, Truck, Shield } from "lucide-react";

const ProductDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState("1");

  // Mock product data
  const product = {
    id: "1",
    name: "HDPE PE100 Black Prime Grade",
    price: 89500,
    unit: "MT",
    location: "Mumbai",
    supplier: "Reliance Industries",
    priceChange: 2.3,
    description: "High-quality HDPE PE100 black prime grade plastic resin suitable for pipe manufacturing, injection molding, and various industrial applications. Excellent chemical resistance and durability.",
    specifications: {
      "Grade": "Prime",
      "Color": "Black",
      "Melt Index": "0.3-0.4 g/10min",
      "Density": "0.959 g/cm³",
      "Tensile Strength": "≥ 23 MPa",
      "Packaging": "25 kg bags",
      "Minimum Order": "1 MT",
      "Delivery Time": "7-10 days"
    },
    supplier_info: {
      name: "Reliance Industries",
      location: "Mumbai, Maharashtra",
      phone: "+91-22-3555-5000",
      email: "sales@ril.com",
      rating: 4.8,
      verified: true,
      years_in_business: 45
    },
    images: [
      "/placeholder.svg",
      "/placeholder.svg",
      "/placeholder.svg"
    ]
  };

  // Mock price history data
  const priceHistory = [
    { date: "Jan 1", price: 87000 },
    { date: "Jan 8", price: 88200 },
    { date: "Jan 15", price: 86500 },
    { date: "Jan 22", price: 89000 },
    { date: "Jan 29", price: 88800 },
    { date: "Feb 5", price: 90200 },
    { date: "Feb 12", price: 89500 },
    { date: "Feb 19", price: 91000 },
    { date: "Feb 26", price: 89500 },
    { date: "Mar 5", price: 89500 }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-2 text-sm">
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => navigate(-1)}
              className="p-0"
            >
              <ArrowLeft className="h-4 w-4 mr-1" />
              Back
            </Button>
            <span className="text-muted-foreground">/</span>
            <Button variant="ghost" size="sm" onClick={() => navigate("/category/polymers-packaging")}>
              Polymers & Packaging
            </Button>
            <span className="text-muted-foreground">/</span>
            <span className="font-medium">{product.name}</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Product Images and Info */}
            <Card>
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Images */}
                  <div className="space-y-4">
                    <div className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center">
                      <img 
                        src={product.images[0]} 
                        alt={product.name}
                        className="max-w-full max-h-full object-contain"
                      />
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      {product.images.slice(1).map((image, index) => (
                        <div key={index} className="aspect-square bg-gray-100 rounded border cursor-pointer">
                          <img 
                            src={image} 
                            alt={`${product.name} ${index + 2}`}
                            className="w-full h-full object-contain"
                          />
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Product Info */}
                  <div className="space-y-4">
                    <div>
                      <h1 className="text-2xl md:text-3xl font-bold mb-2">{product.name}</h1>
                      <div className="flex items-center space-x-2 mb-4">
                        <Badge variant="outline">Prime Grade</Badge>
                        <Badge variant="outline" className="text-green-600">In Stock</Badge>
                        <Badge variant="outline">Live Price</Badge>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-baseline space-x-2">
                        <span className="text-3xl font-bold text-primary">
                          ₹{product.price.toLocaleString()}
                        </span>
                        <span className="text-muted-foreground">per {product.unit}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-green-600">
                        <span className="text-sm">↗ {product.priceChange}% from last week</span>
                      </div>
                    </div>

                    <div className="space-y-2 text-sm">
                      <div className="flex items-center space-x-2">
                        <MapPin className="h-4 w-4 text-muted-foreground" />
                        <span>{product.location}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Building className="h-4 w-4 text-muted-foreground" />
                        <span>{product.supplier}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Truck className="h-4 w-4 text-muted-foreground" />
                        <span>7-10 days delivery</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Shield className="h-4 w-4 text-muted-foreground" />
                        <span>Verified Supplier</span>
                      </div>
                    </div>

                    <div className="flex space-x-2 pt-4">
                      <Button variant="outline" size="sm">
                        <Heart className="h-4 w-4 mr-2" />
                        Save
                      </Button>
                      <Button variant="outline" size="sm">
                        <Share2 className="h-4 w-4 mr-2" />
                        Share
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Tabs Content */}
            <Tabs defaultValue="details" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="details">Details</TabsTrigger>
                <TabsTrigger value="specs">Specifications</TabsTrigger>
                <TabsTrigger value="pricing">Price Trends</TabsTrigger>
                <TabsTrigger value="supplier">Supplier Info</TabsTrigger>
              </TabsList>

              <TabsContent value="details" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Product Description</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      {product.description}
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="specs" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Technical Specifications</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {Object.entries(product.specifications).map(([key, value]) => (
                        <div key={key} className="flex justify-between py-2 border-b">
                          <span className="font-medium">{key}:</span>
                          <span className="text-muted-foreground">{value}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="pricing" className="space-y-4">
                <PriceChart
                  data={priceHistory}
                  title="Price Trend Analysis"
                  currentPrice={product.price}
                  priceChange={product.priceChange}
                  unit={product.unit}
                />
              </TabsContent>

              <TabsContent value="supplier" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Supplier Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-lg font-semibold flex items-center space-x-2">
                          <span>{product.supplier_info.name}</span>
                          {product.supplier_info.verified && (
                            <Badge variant="outline" className="text-green-600">Verified</Badge>
                          )}
                        </h3>
                        <p className="text-muted-foreground">{product.supplier_info.years_in_business} years in business</p>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-yellow-500">★ {product.supplier_info.rating}</div>
                        <div className="text-sm text-muted-foreground">Supplier Rating</div>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <MapPin className="h-4 w-4 text-muted-foreground" />
                        <span>{product.supplier_info.location}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Phone className="h-4 w-4 text-muted-foreground" />
                        <span>{product.supplier_info.phone}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Mail className="h-4 w-4 text-muted-foreground" />
                        <span>{product.supplier_info.email}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quote Request */}
            <Card>
              <CardHeader>
                <CardTitle>Request Quote</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="quantity">Quantity ({product.unit})</Label>
                  <Input
                    id="quantity"
                    type="number"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    placeholder="Enter quantity"
                    min="1"
                  />
                </div>
                
                <div>
                  <Label htmlFor="message">Additional Requirements</Label>
                  <Textarea
                    id="message"
                    placeholder="Any specific requirements or questions..."
                    rows={3}
                  />
                </div>

                <div className="space-y-2">
                  <Button className="w-full" size="lg">
                    Request Quote
                  </Button>
                  <Button variant="outline" className="w-full" size="lg" asChild>
                    <a href="tel:+918617219004">
                      <Phone className="h-4 w-4 mr-2" />
                      Call Supplier
                    </a>
                  </Button>
                </div>

                <div className="text-center text-sm text-muted-foreground">
                  Get instant quote • No obligation • Free consultation
                </div>
              </CardContent>
            </Card>

            {/* Quick Facts */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Facts</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Minimum Order:</span>
                  <span className="font-medium">1 MT</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Delivery Time:</span>
                  <span className="font-medium">7-10 days</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Payment Terms:</span>
                  <span className="font-medium">30 days</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Packaging:</span>
                  <span className="font-medium">25 kg bags</span>
                </div>
              </CardContent>
            </Card>

            {/* Related Products */}
            <Card>
              <CardHeader>
                <CardTitle>Similar Products</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {[
                  { name: "PP Homopolymer 1100N", price: 92000 },
                  { name: "LLDPE Film Grade C4", price: 87500 },
                  { name: "PVC Resin S-65", price: 78000 }
                ].map((item, index) => (
                  <div key={index} className="flex justify-between items-center py-2 border-b">
                    <div>
                      <div className="font-medium text-sm">{item.name}</div>
                      <div className="text-xs text-muted-foreground">Similar grade</div>
                    </div>
                    <div className="text-sm font-medium text-primary">
                      ₹{item.price.toLocaleString()}
                    </div>
                  </div>
                ))}
                <Button variant="outline" size="sm" className="w-full">
                  View All Similar
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;