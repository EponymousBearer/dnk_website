"use client";
import React, { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { ChevronRight } from "lucide-react";

// Define a type or interface for your product objects
interface Product {
  id: number;
  name: string;
  description: string;
}

const ProductList: React.FC<{ products: Product[] }> = ({ products }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);

  const handleSearch = () => {
    // Filter the products based on the search query
    const filtered = products.filter((product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    setFilteredProducts(filtered);
  };

  return (
    <div>
      <div className="flex w-full max-w-[400px] lg:max-w-sm items-center space-x-2">
        <Input
          type="text"
          placeholder="Search products..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <Button
          className="bg-blue-500 px-2 lg:px-2"
          type="submit"
          onClick={handleSearch}
        >
          <ChevronRight color="#ffffff" />
        </Button>
      </div>
      {/* <div>
        {filteredProducts.map((product) => (
          <div key={product.id}>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
          </div>
        ))}
      </div> */}
    </div>
  );
};

// Example data
const products: Product[] = [
  { id: 1, name: "Product 1", description: "Description 1" },
  { id: 2, name: "Product 2", description: "Description 2" },
  { id: 3, name: "Product 3", description: "Description 3" },
  // Add more products here
];

const App: React.FC = () => {
  return (
    <div>
      <ProductList products={products} />
    </div>
  );
};

export default App;
