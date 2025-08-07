import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, TrendingDown } from "lucide-react";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  unit: string;
  location: string;
  supplier: string;
  priceChange?: number;
  image?: string;
  onClick?: () => void;
}

const ProductCard = ({ 
  id, 
  name, 
  price, 
  unit, 
  location, 
  supplier, 
  priceChange = 0,
  image,
  onClick 
}: ProductCardProps) => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  const isPositiveChange = priceChange >= 0;

  return (
    <Card className="cursor-pointer hover:shadow-lg transition-shadow" onClick={onClick}>
      <CardHeader className="pb-2">
        {image && (
          <div className="w-full h-32 bg-gray-100 rounded-md mb-2 flex items-center justify-center">
            <img src={image} alt={name} className="max-w-full max-h-full object-contain" />
          </div>
        )}
        <CardTitle className="text-sm font-medium line-clamp-2">{name}</CardTitle>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xl font-bold text-primary">
              {formatPrice(price)}
            </span>
            <span className="text-sm text-muted-foreground">per {unit}</span>
          </div>
          
          {priceChange !== 0 && (
            <div className={`flex items-center space-x-1 text-sm ${
              isPositiveChange ? 'text-green-600' : 'text-red-600'
            }`}>
              {isPositiveChange ? (
                <TrendingUp className="h-4 w-4" />
              ) : (
                <TrendingDown className="h-4 w-4" />
              )}
              <span>{Math.abs(priceChange).toFixed(1)}%</span>
            </div>
          )}
          
          <div className="space-y-1">
            <div className="text-sm text-muted-foreground">
              📍 {location}
            </div>
            <div className="text-sm text-muted-foreground">
              🏢 {supplier}
            </div>
          </div>
          
          <div className="flex items-center justify-between pt-2">
            <Badge variant="outline" className="text-xs">
              Live Price
            </Badge>
            <Button size="sm" className="text-xs">
              Get Quote
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;