"use client";

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Filter, X } from 'lucide-react';

interface ProjectFilterProps {
  categories: string[];
  onFilterChange: (filters: { searchTerm: string; category: string }) => void;
}

export default function ProjectFilter({ categories, onFilterChange }: ProjectFilterProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
    onFilterChange({ searchTerm: event.target.value, category: selectedCategory });
  };

  const handleCategoryChange = (value: string) => {
    setSelectedCategory(value);
    onFilterChange({ searchTerm, category: value });
  };

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedCategory('all');
    onFilterChange({ searchTerm: '', category: 'all' });
  };

  return (
    <div className="mb-8 p-6 rounded-xl glass-card">
      <div className="flex flex-col md:flex-row gap-4 items-center">
        <div className="flex-grow w-full md:w-auto">
          <Input
            type="text"
            placeholder="Search projects..."
            value={searchTerm}
            onChange={handleSearchChange}
            className="bg-background/80 focus:bg-background"
          />
        </div>
        <div className="w-full md:w-auto md:min-w-[200px]">
          <Select value={selectedCategory} onValueChange={handleCategoryChange}>
            <SelectTrigger className="w-full bg-background/80 focus:bg-background">
              <SelectValue placeholder="Filter by category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              {categories.map((category) => (
                <SelectItem key={category} value={category}>
                  {category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <Button variant="ghost" onClick={clearFilters} className="w-full md:w-auto text-muted-foreground hover:text-foreground">
          <X className="mr-2 h-4 w-4" /> Clear Filters
        </Button>
      </div>
    </div>
  );
}
