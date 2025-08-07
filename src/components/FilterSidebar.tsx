import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { X } from "lucide-react";
import { useState } from "react";

interface FilterSidebarProps {
  onFiltersChange?: (filters: any) => void;
}

const FilterSidebar = ({ onFiltersChange }: FilterSidebarProps) => {
  const [priceRange, setPriceRange] = useState([0, 100000]);
  const [selectedLocations, setSelectedLocations] = useState<string[]>([]);
  const [selectedSuppliers, setSelectedSuppliers] = useState<string[]>([]);
  const [selectedGrades, setSelectedGrades] = useState<string[]>([]);

  const locations = [
    "Mumbai", "Delhi", "Bangalore", "Chennai", "Hyderabad", 
    "Pune", "Kolkata", "Ahmedabad", "Surat", "Jaipur"
  ];

  const suppliers = [
    "Reliance Industries", "ONGC Petro", "Indian Oil Corp", 
    "Haldia Petrochemicals", "GAIL India", "Tata Chemicals"
  ];

  const grades = [
    "Prime Grade", "Near Prime", "Off Grade", "Recycled", "Virgin"
  ];

  const handleLocationChange = (location: string, checked: boolean) => {
    const updated = checked 
      ? [...selectedLocations, location]
      : selectedLocations.filter(l => l !== location);
    setSelectedLocations(updated);
    onFiltersChange?.({ locations: updated, suppliers: selectedSuppliers, grades: selectedGrades, priceRange });
  };

  const handleSupplierChange = (supplier: string, checked: boolean) => {
    const updated = checked 
      ? [...selectedSuppliers, supplier]
      : selectedSuppliers.filter(s => s !== supplier);
    setSelectedSuppliers(updated);
    onFiltersChange?.({ locations: selectedLocations, suppliers: updated, grades: selectedGrades, priceRange });
  };

  const handleGradeChange = (grade: string, checked: boolean) => {
    const updated = checked 
      ? [...selectedGrades, grade]
      : selectedGrades.filter(g => g !== grade);
    setSelectedGrades(updated);
    onFiltersChange?.({ locations: selectedLocations, suppliers: selectedSuppliers, grades: updated, priceRange });
  };

  const clearAllFilters = () => {
    setSelectedLocations([]);
    setSelectedSuppliers([]);
    setSelectedGrades([]);
    setPriceRange([0, 100000]);
    onFiltersChange?.({ locations: [], suppliers: [], grades: [], priceRange: [0, 100000] });
  };

  const activeFiltersCount = selectedLocations.length + selectedSuppliers.length + selectedGrades.length;

  return (
    <div className="space-y-4">
      {/* Active Filters */}
      {activeFiltersCount > 0 && (
        <Card>
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <CardTitle className="text-sm">Active Filters</CardTitle>
              <Button variant="ghost" size="sm" onClick={clearAllFilters}>
                Clear All
              </Button>
            </div>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="flex flex-wrap gap-2">
              {selectedLocations.map(location => (
                <Badge key={location} variant="secondary" className="text-xs">
                  {location}
                  <X 
                    className="h-3 w-3 ml-1 cursor-pointer" 
                    onClick={() => handleLocationChange(location, false)}
                  />
                </Badge>
              ))}
              {selectedSuppliers.map(supplier => (
                <Badge key={supplier} variant="secondary" className="text-xs">
                  {supplier}
                  <X 
                    className="h-3 w-3 ml-1 cursor-pointer" 
                    onClick={() => handleSupplierChange(supplier, false)}
                  />
                </Badge>
              ))}
              {selectedGrades.map(grade => (
                <Badge key={grade} variant="secondary" className="text-xs">
                  {grade}
                  <X 
                    className="h-3 w-3 ml-1 cursor-pointer" 
                    onClick={() => handleGradeChange(grade, false)}
                  />
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Price Range */}
      <Card>
        <CardHeader>
          <CardTitle className="text-sm">Price Range (₹)</CardTitle>
        </CardHeader>
        <CardContent>
          <Slider
            value={priceRange}
            onValueChange={(value) => {
              setPriceRange(value);
              onFiltersChange?.({ locations: selectedLocations, suppliers: selectedSuppliers, grades: selectedGrades, priceRange: value });
            }}
            max={100000}
            min={0}
            step={1000}
            className="w-full"
          />
          <div className="flex justify-between text-sm text-muted-foreground mt-2">
            <span>₹{priceRange[0].toLocaleString()}</span>
            <span>₹{priceRange[1].toLocaleString()}</span>
          </div>
        </CardContent>
      </Card>

      {/* Location Filter */}
      <Card>
        <CardHeader>
          <CardTitle className="text-sm">Location</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          {locations.map(location => (
            <div key={location} className="flex items-center space-x-2">
              <Checkbox 
                id={location}
                checked={selectedLocations.includes(location)}
                onCheckedChange={(checked) => handleLocationChange(location, checked as boolean)}
              />
              <label htmlFor={location} className="text-sm cursor-pointer">
                {location}
              </label>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Supplier Filter */}
      <Card>
        <CardHeader>
          <CardTitle className="text-sm">Supplier</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          {suppliers.map(supplier => (
            <div key={supplier} className="flex items-center space-x-2">
              <Checkbox 
                id={supplier}
                checked={selectedSuppliers.includes(supplier)}
                onCheckedChange={(checked) => handleSupplierChange(supplier, checked as boolean)}
              />
              <label htmlFor={supplier} className="text-sm cursor-pointer">
                {supplier}
              </label>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Grade Filter */}
      <Card>
        <CardHeader>
          <CardTitle className="text-sm">Grade</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          {grades.map(grade => (
            <div key={grade} className="flex items-center space-x-2">
              <Checkbox 
                id={grade}
                checked={selectedGrades.includes(grade)}
                onCheckedChange={(checked) => handleGradeChange(grade, checked as boolean)}
              />
              <label htmlFor={grade} className="text-sm cursor-pointer">
                {grade}
              </label>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};

export default FilterSidebar;