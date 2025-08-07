import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search, TrendingUp, Package, Users, Globe } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import ProductCard from "@/components/ProductCard";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Label } from "@/components/ui/label";

const HomePage = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [gstNumber, setGstNumber] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);
  const [isSupplierRegisterOpen, setIsSupplierRegisterOpen] = useState(false);
  const [supplierData, setSupplierData] = useState({
    companyName: "",
    gstNumber: "",
    phoneNumber: "",
    email: "",
    address: "",
    businessType: "",
    yearsInBusiness: "",
    productCategories: "",
    certifications: ""
  });

  const handleSearch = () => {
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      
      // Category keyword mapping
      const categoryKeywords = {
        'raw-materials': ['raw', 'materials', 'raw materials', 'commodity', 'commodities'],
        'polymers-packaging': ['polymer', 'polymers', 'packaging', 'plastic', 'resin', 'hdpe', 'ldpe', 'pp', 'pvc'],
        'chemicals': ['chemical', 'chemicals', 'acid', 'alkali', 'solvent', 'catalyst'],
        'steel': ['steel', 'iron', 'metal', 'alloy', 'stainless', 'carbon steel'],
        'textiles': ['textile', 'textiles', 'fabric', 'cotton', 'yarn', 'fiber', 'cloth'],
        'agriculture': ['agriculture', 'agricultural', 'farming', 'crop', 'seed', 'fertilizer', 'pesticide'],
        'food-fmcg': ['food', 'fmcg', 'beverage', 'snack', 'dairy', 'grain', 'spice']
      };
      
      // Check if query matches any category keywords
      for (const [category, keywords] of Object.entries(categoryKeywords)) {
        if (keywords.some(keyword => query.includes(keyword))) {
          navigate(`/category/${category}?q=${encodeURIComponent(searchQuery)}`);
          return;
        }
      }
      
      // Default search if no category match
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const categories = [
    { 
      name: "Raw Materials", 
      path: "/category/raw-materials", 
      icon: "🏭", 
      description: "Industrial raw materials & commodities" 
    },
    { 
      name: "Polymers & Packaging", 
      path: "/category/polymers-packaging", 
      icon: "📦", 
      description: "Plastic resins, packaging materials" 
    },
    { 
      name: "Chemicals", 
      path: "/category/chemicals", 
      icon: "⚗️", 
      description: "Industrial & specialty chemicals" 
    },
    { 
      name: "Steel", 
      path: "/category/steel", 
      icon: "🔩", 
      description: "Steel products & alloys" 
    },
    { 
      name: "Textiles", 
      path: "/category/textiles", 
      icon: "🧵", 
      description: "Fabrics, yarns & textile materials" 
    },
    { 
      name: "Agriculture", 
      path: "/category/agriculture", 
      icon: "🌾", 
      description: "Agricultural products & supplies" 
    }
  ];

  const featuredProducts = [
    {
      id: "1",
      name: "HDPE PE100 Black Prime",
      price: 89500,
      unit: "MT",
      location: "Mumbai",
      supplier: "Reliance Industries",
      priceChange: 2.3
    },
    {
      id: "2", 
      name: "PP Homopolymer 1100N",
      price: 92000,
      unit: "MT",
      location: "Chennai",
      supplier: "ONGC Petro",
      priceChange: -1.2
    },
    {
      id: "3",
      name: "LLDPE Film Grade",
      price: 87500,
      unit: "MT", 
      location: "Delhi",
      supplier: "Indian Oil Corp",
      priceChange: 0.8
    },
    {
      id: "4",
      name: "PVC Resin S-65",
      price: 78000,
      unit: "MT",
      location: "Bangalore",
      supplier: "Reliance Industries", 
      priceChange: 1.5
    }
  ];

  const stats = [
    { icon: Package, label: "Products Listed", value: "50,000+" },
    { icon: Users, label: "Active Suppliers", value: "5,000+" },
    { icon: Globe, label: "Cities Covered", value: "500+" }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-16 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            India's Largest B2B
            <br />
            Raw Materials Marketplace
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Connect with verified suppliers. Get best prices. Trade with confidence.
          </p>
          
          {/* Hero Search */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Input
                type="text"
                placeholder="Search for raw materials, chemicals, polymers..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyPress={handleKeyPress}
                className="pr-16 py-6 text-lg bg-white text-foreground"
              />
              <Button 
                size="lg" 
                className="absolute right-1 top-1 bottom-1"
                onClick={handleSearch}
              >
                <Search className="h-5 w-5 mr-2" />
                Search
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center">
                <CardContent className="pt-6">
                  <stat.icon className="h-8 w-8 mx-auto mb-4 text-primary" />
                  <div className="text-2xl font-bold mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Browse Categories</h2>
            <p className="text-xl text-muted-foreground">
              Explore our wide range of industrial products and raw materials
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <Card 
                key={index} 
                className="cursor-pointer hover:shadow-lg transition-shadow"
                onClick={() => navigate(category.path)}
              >
                <CardHeader>
                  <div className="text-4xl mb-2">{category.icon}</div>
                  <CardTitle className="text-xl">{category.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{category.description}</p>
                  <Button variant="outline" className="mt-4">
                    Explore Category
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Live Market Prices</h2>
            <p className="text-xl text-muted-foreground">
              Real-time pricing from verified suppliers across India
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard
                key={product.id}
                {...product}
                onClick={() => navigate(`/product/${product.id}`)}
              />
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Button size="lg" onClick={() => navigate("/category/raw-materials")}>
              View All Products
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Trading?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of businesses already using SmeBhawan
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {!isRegistered ? (
              <Sheet open={isRegisterOpen} onOpenChange={setIsRegisterOpen}>
                <SheetTrigger asChild>
                  <Button size="lg" variant="secondary">
                    Register as Buyer
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[400px] sm:w-[540px]">
                  <SheetHeader>
                    <SheetTitle>Register Your Business</SheetTitle>
                  </SheetHeader>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="gst">GST Number</Label>
                      <Input
                        id="gst"
                        placeholder="Enter GST Number"
                        value={gstNumber}
                        onChange={(e) => setGstNumber(e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        placeholder="Enter Phone Number"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                      />
                    </div>
                    {!isOtpSent ? (
                      <Button 
                        onClick={() => setIsOtpSent(true)} 
                        className="w-full"
                        disabled={!gstNumber || !phoneNumber}
                      >
                        Send OTP
                      </Button>
                    ) : (
                      <div className="space-y-2">
                        <Label htmlFor="otp">Enter OTP</Label>
                        <Input
                          id="otp"
                          placeholder="Enter 6-digit OTP"
                          value={otp}
                          onChange={(e) => setOtp(e.target.value)}
                          maxLength={6}
                        />
                        <Button 
                          onClick={() => {
                            setIsRegistered(true);
                            setIsRegisterOpen(false);
                            setIsOtpSent(false);
                            setOtp("");
                            setGstNumber("");
                            setPhoneNumber("");
                            navigate("/category/raw-materials");
                          }} 
                          className="w-full"
                          disabled={otp.length !== 6}
                        >
                          Verify & Register
                        </Button>
                      </div>
                    )}
                  </div>
                </SheetContent>
              </Sheet>
            ) : (
              <Button size="lg" variant="secondary" onClick={() => navigate("/category/raw-materials")}>
                Register as Buyer
              </Button>
            )}
            <Sheet open={isSupplierRegisterOpen} onOpenChange={setIsSupplierRegisterOpen}>
              <SheetTrigger asChild>
                <Button size="lg" variant="outline" className="bg-transparent">
                  Register as Supplier
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[400px] sm:w-[540px] overflow-y-auto">
                <SheetHeader>
                  <SheetTitle>Register as Verified Supplier</SheetTitle>
                </SheetHeader>
                <div className="space-y-4 mt-6">
                  <div className="space-y-2">
                    <Label htmlFor="companyName">Company Name *</Label>
                    <Input
                      id="companyName"
                      placeholder="Enter company name"
                      value={supplierData.companyName}
                      onChange={(e) => setSupplierData({...supplierData, companyName: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="supplierGst">GST Number *</Label>
                    <Input
                      id="supplierGst"
                      placeholder="Enter GST Number"
                      value={supplierData.gstNumber}
                      onChange={(e) => setSupplierData({...supplierData, gstNumber: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="supplierPhone">Phone Number *</Label>
                    <Input
                      id="supplierPhone"
                      placeholder="Enter phone number"
                      value={supplierData.phoneNumber}
                      onChange={(e) => setSupplierData({...supplierData, phoneNumber: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="supplierEmail">Email Address *</Label>
                    <Input
                      id="supplierEmail"
                      type="email"
                      placeholder="Enter email address"
                      value={supplierData.email}
                      onChange={(e) => setSupplierData({...supplierData, email: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="address">Business Address *</Label>
                    <Input
                      id="address"
                      placeholder="Enter complete business address"
                      value={supplierData.address}
                      onChange={(e) => setSupplierData({...supplierData, address: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="businessType">Business Type *</Label>
                    <Input
                      id="businessType"
                      placeholder="e.g., Manufacturer, Distributor, Trader"
                      value={supplierData.businessType}
                      onChange={(e) => setSupplierData({...supplierData, businessType: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="yearsInBusiness">Years in Business *</Label>
                    <Input
                      id="yearsInBusiness"
                      type="number"
                      placeholder="Enter years in business"
                      value={supplierData.yearsInBusiness}
                      onChange={(e) => setSupplierData({...supplierData, yearsInBusiness: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="productCategories">Product Categories *</Label>
                    <Input
                      id="productCategories"
                      placeholder="e.g., Raw Materials, Chemicals, Steel"
                      value={supplierData.productCategories}
                      onChange={(e) => setSupplierData({...supplierData, productCategories: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="certifications">Certifications (Optional)</Label>
                    <Input
                      id="certifications"
                      placeholder="e.g., ISO 9001, CE, FDA"
                      value={supplierData.certifications}
                      onChange={(e) => setSupplierData({...supplierData, certifications: e.target.value})}
                    />
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-sm mb-2">Required Documents:</h4>
                    <ul className="text-xs text-gray-600 space-y-1">
                      <li>• GST Registration Certificate</li>
                      <li>• Company Registration Certificate</li>
                      <li>• Bank Account Details</li>
                      <li>• Product Catalog/Brochure</li>
                      <li>• Quality Certifications (if any)</li>
                    </ul>
                  </div>
                  <Button 
                    className="w-full"
                    disabled={!supplierData.companyName || !supplierData.gstNumber || !supplierData.phoneNumber || !supplierData.email}
                  >
                    Submit for Verification
                  </Button>
                  <p className="text-xs text-gray-500 text-center">
                    Our team will review your application within 2-3 business days
                  </p>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;