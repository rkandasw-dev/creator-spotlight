import { motion, AnimatePresence } from "framer-motion";
import { CreatorCard } from "./CreatorCard";
import { Creator } from "@/data/creators";
import { Loader2 } from "lucide-react";

interface CreatorGridProps {
  creators: Creator[];
  isLoading?: boolean;
}

export function CreatorGrid({ creators, isLoading = false }: CreatorGridProps) {
  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center py-20">
        <Loader2 className="w-8 h-8 animate-spin text-primary mb-4" />
        <p className="text-muted-foreground font-medium">Finding your perfect match…</p>
      </div>
    );
  }

  if (creators.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20">
        <p className="text-xl font-bold text-foreground mb-2">No creators found</p>
        <p className="text-muted-foreground">Try adjusting your filters</p>
      </div>
    );
  }

  return (
    <section className="py-12 bg-yt-gray-100">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="mb-8"
        >
          <p className="text-sm text-muted-foreground">
            Showing <span className="font-medium text-foreground">{creators.length}</span> creators
          </p>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={creators.map(c => c.id).join(",")}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {creators.map((creator, index) => (
              <CreatorCard key={creator.id} creator={creator} index={index} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Bottom microcopy */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-12 text-center"
        >
          <p className="text-sm text-muted-foreground">
            Shorts that never scroll past.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
