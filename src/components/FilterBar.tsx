import { motion } from "framer-motion";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { niches, audienceSizes, vibes } from "@/data/creators";
import { Filter, Sparkles } from "lucide-react";

interface FilterBarProps {
  selectedNiche: string;
  selectedSize: string;
  selectedVibe: string;
  onNicheChange: (value: string) => void;
  onSizeChange: (value: string) => void;
  onVibeChange: (value: string) => void;
}

export function FilterBar({
  selectedNiche,
  selectedSize,
  selectedVibe,
  onNicheChange,
  onSizeChange,
  onVibeChange,
}: FilterBarProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="sticky top-0 z-40 bg-background/80 backdrop-blur-xl border-b border-border py-4"
    >
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Filter className="w-4 h-4" />
            <span className="text-sm font-medium">Filter by</span>
          </div>
          
          <div className="flex flex-wrap items-center gap-3">
            {/* Niche Filter */}
            <Select value={selectedNiche} onValueChange={onNicheChange}>
              <SelectTrigger className="w-[160px] bg-yt-gray-100 border-0 rounded-full font-medium hover:bg-yt-gray-200 transition-colors">
                <Sparkles className="w-4 h-4 mr-2 text-muted-foreground" />
                <SelectValue placeholder="Pick your world" />
              </SelectTrigger>
              <SelectContent>
                {niches.map((niche) => (
                  <SelectItem key={niche} value={niche}>
                    {niche === "All" ? "All Niches" : niche}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* Audience Size Filter */}
            <Select value={selectedSize} onValueChange={onSizeChange}>
              <SelectTrigger className="w-[160px] bg-yt-gray-100 border-0 rounded-full font-medium hover:bg-yt-gray-200 transition-colors">
                <SelectValue placeholder="Find your scale" />
              </SelectTrigger>
              <SelectContent>
                {audienceSizes.map((size) => (
                  <SelectItem key={size} value={size}>
                    {size}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* Vibe Filter */}
            <Select value={selectedVibe} onValueChange={onVibeChange}>
              <SelectTrigger className="w-[160px] bg-yt-gray-100 border-0 rounded-full font-medium hover:bg-yt-gray-200 transition-colors">
                <SelectValue placeholder="Choose the energy" />
              </SelectTrigger>
              <SelectContent>
                {vibes.map((vibe) => (
                  <SelectItem key={vibe} value={vibe}>
                    {vibe}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Results hint */}
          <div className="ml-auto hidden md:block">
            <p className="text-sm text-muted-foreground">
              Your perfect match is one scroll away.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
