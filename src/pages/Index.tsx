import { useState, useMemo } from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { FilterBar } from "@/components/FilterBar";
import { CreatorGrid } from "@/components/CreatorGrid";
import { creators } from "@/data/creators";

const Index = () => {
  const [selectedNiche, setSelectedNiche] = useState("All");
  const [selectedSize, setSelectedSize] = useState("All Sizes");
  const [selectedVibe, setSelectedVibe] = useState("All Vibes");
  const [isLoading, setIsLoading] = useState(false);

  const filteredCreators = useMemo(() => {
    return creators.filter((creator) => {
      // Niche filter
      if (selectedNiche !== "All" && creator.niche !== selectedNiche) {
        return false;
      }

      // Size filter
      if (selectedSize !== "All Sizes") {
        if (selectedSize === "Under 1M" && creator.subscriberCount >= 1000000) {
          return false;
        }
        if (selectedSize === "1M - 3M" && (creator.subscriberCount < 1000000 || creator.subscriberCount > 3000000)) {
          return false;
        }
        if (selectedSize === "3M+" && creator.subscriberCount <= 3000000) {
          return false;
        }
      }

      return true;
    });
  }, [selectedNiche, selectedSize, selectedVibe]);

  const handleFilterChange = (setter: (value: string) => void) => (value: string) => {
    setIsLoading(true);
    setter(value);
    // Simulate a brief loading state for smooth transition
    setTimeout(() => setIsLoading(false), 300);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <FilterBar
          selectedNiche={selectedNiche}
          selectedSize={selectedSize}
          selectedVibe={selectedVibe}
          onNicheChange={handleFilterChange(setSelectedNiche)}
          onSizeChange={handleFilterChange(setSelectedSize)}
          onVibeChange={handleFilterChange(setSelectedVibe)}
        />
        <CreatorGrid creators={filteredCreators} isLoading={isLoading} />
      </main>
      
      {/* Footer */}
      <footer className="bg-foreground text-background py-12">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm opacity-70">
              Powered by YouTube Creator Partnerships.
            </p>
            <p className="text-sm opacity-70">
              © 2024 CreatorMatch. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
