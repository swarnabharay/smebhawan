import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/hooks/use-toast";
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSubscribe = () => {
    if (email && email.includes("@")) {
      // Simulate sending confirmation email
      toast({
        title: "Congratulations!",
        description: "You have successfully subscribed for daily market trends and price insights. Check your email for confirmation.",
      });
      setEmail("");
    } else {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
    }
  };

  return (
    <footer className="bg-white text-primary">
      {/* Newsletter Section */}
      <div className="bg-primary py-12">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-4 text-primary-foreground">
            Stay Updated with Market Prices
          </h3>
          <p className="text-lg mb-6 text-primary-foreground/90">
            Get daily price alerts and market insights delivered to your inbox
          </p>
          <div className="max-w-md mx-auto flex gap-2">
            <Input 
              type="email" 
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-white text-foreground"
            />
            <Button variant="secondary" onClick={handleSubscribe}>Subscribe</Button>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-primary">SmeBhawan</h3>
            <p className="text-primary/80">
              India's largest B2B marketplace for raw materials. Connecting buyers and suppliers across the country.
            </p>

          </div>

          {/* Categories */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Categories</h4>
            <ul className="space-y-2 text-primary/80">
              <li><a href="/category/raw-materials" className="hover:text-primary transition-colors">Raw Materials</a></li>
              <li><a href="/category/polymers-packaging" className="hover:text-primary transition-colors">Polymers & Packaging</a></li>
              <li><a href="/category/chemicals" className="hover:text-primary transition-colors">Chemicals</a></li>
              <li><a href="/category/steel" className="hover:text-primary transition-colors">Steel</a></li>
              <li><a href="/category/textiles" className="hover:text-primary transition-colors">Textiles</a></li>
              <li><a href="/category/agriculture" className="hover:text-primary transition-colors">Agriculture</a></li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Services</h4>
            <ul className="space-y-2 text-primary/80">
              <li><a href="#" className="hover:text-primary transition-colors">Price Discovery</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Quality Assurance</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Logistics Support</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Payment Solutions</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Trade Finance</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Market Analytics</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Us</h4>
            <div className="space-y-3 text-primary/80">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4" />
                <a href="tel:+918617219004" className="hover:text-primary transition-colors">+91-8617219004</a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4" />
                <a href="mailto:swarnabha2u2010@gmail.com" className="hover:text-primary transition-colors">swarnabha2u2010@gmail.com</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Separator className="bg-primary/20" />

      {/* Bottom Footer */}
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-primary/80 text-sm">
            © 2025 SmeBhawan. All rights reserved.
          </div>
          <div className="flex space-x-6 text-sm text-primary/80">
            <a href="/about-us" className="hover:text-primary transition-colors">About Us</a>
            <a href="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="/contact" className="hover:text-primary transition-colors">Contact Us</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;