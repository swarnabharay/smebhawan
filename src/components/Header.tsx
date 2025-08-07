import { Search, Bell, User, Menu, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Label } from "@/components/ui/label";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [gstNumber, setGstNumber] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const navigate = useNavigate();

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

  return (
    <header className="bg-white shadow-sm border-b">
      {/* Top Bar */}
      <div className="bg-primary text-primary-foreground py-2 px-4">
        <div className="container mx-auto flex justify-center items-center text-sm">
          <TooltipProvider>
            <div className="flex items-center space-x-6">
              <Tooltip>
                <TooltipTrigger asChild>
                  <a href="mailto:swarnabha2u2010@gmail.com" className="hover:underline transition-all duration-200 hover:scale-105">
                    ✉ swarnabha2u2010@gmail.com
                  </a>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Click to send email</p>
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                  <a href="tel:+918617219004" className="hover:underline transition-all duration-200 hover:scale-105">
                    📞 +91-8617219004
                  </a>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Click to call</p>
                </TooltipContent>
              </Tooltip>
            </div>
          </TooltipProvider>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="md:hidden">
              <Menu className="h-6 w-6" />
            </Button>
            <div className="text-2xl font-bold text-primary cursor-pointer" onClick={() => navigate("/")}>
              SmeBhawan
            </div>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-2xl mx-8 hidden md:block">
            <div className="relative">
              <Input
                type="text"
                placeholder="Search for products, categories, brands..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyPress={handleKeyPress}
                className="pr-12"
              />
              <Button 
                size="sm" 
                className="absolute right-1 top-0.5 bottom-0.5"
                onClick={handleSearch}
              >
                <Search className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Right Actions */}
          <div className="flex items-center space-x-4">
            <Sheet open={isRegisterOpen} onOpenChange={setIsRegisterOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" size="sm">
                  Register
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
                          setIsVerified(true);
                          setIsRegisterOpen(false);
                          setIsOtpSent(false);
                          setOtp("");
                          setGstNumber("");
                          setPhoneNumber("");
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
          </div>
        </div>

        {/* Mobile Search */}
        <div className="mt-4 md:hidden">
          <div className="relative">
            <Input
              type="text"
              placeholder="Search for products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyPress={handleKeyPress}
              className="pr-12"
            />
            <Button 
              size="sm" 
              className="absolute right-1 top-0.5 bottom-0.5"
              onClick={handleSearch}
            >
              <Search className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-gray-50 border-t">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-8 py-3 overflow-x-auto">
            <Button 
              variant="ghost" 
              className="whitespace-nowrap"
              onClick={() => navigate("/category/raw-materials")}
            >
              Raw Materials
            </Button>
            <Button 
              variant="ghost" 
              className="whitespace-nowrap"
              onClick={() => navigate("/category/polymers-packaging")}
            >
              Polymers & Packaging
            </Button>
            <Button variant="ghost" className="whitespace-nowrap">Chemicals</Button>
            <Button variant="ghost" className="whitespace-nowrap">Steel</Button>
            <Button variant="ghost" className="whitespace-nowrap">Textiles</Button>
            <Button variant="ghost" className="whitespace-nowrap">Agriculture</Button>
            <Button variant="ghost" className="whitespace-nowrap">Food & FMCG</Button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;