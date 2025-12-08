import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Creator } from "@/data/creators";
import { Users, TrendingUp, Play } from "lucide-react";

interface CreatorCardProps {
  creator: Creator;
  index: number;
}

export function CreatorCard({ creator, index }: CreatorCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
    >
      <Link to={`/creator/${creator.id}`}>
        <div className="group relative bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-smooth cursor-pointer">
          {/* Video/Thumbnail Area */}
          <div className="relative aspect-[9/16] bg-yt-gray-200 overflow-hidden">
            <img
              src={creator.topShorts[0].thumbnail}
              alt={`${creator.displayName} content`}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-smooth"
            />
            
            {/* Play overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-base">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center">
                  <Play className="w-8 h-8 text-primary-foreground fill-current ml-1" />
                </div>
              </div>
            </div>

            {/* Engagement tooltip on hover */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileHover={{ opacity: 1, y: 0 }}
              className="absolute top-3 right-3 bg-foreground/90 text-background px-3 py-1.5 rounded-full text-xs font-medium flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-base"
            >
              <TrendingUp className="w-3 h-3" />
              {creator.engagement}% Engagement
            </motion.div>

            {/* Niche badge */}
            <Badge className="absolute top-3 left-3 bg-background/90 text-foreground hover:bg-background/90 font-medium">
              {creator.niche}
            </Badge>
          </div>

          {/* Creator Info */}
          <div className="p-4">
            <div className="flex items-start gap-3 mb-3">
              <img
                src={creator.avatar}
                alt={creator.displayName}
                className="w-10 h-10 rounded-full object-cover ring-2 ring-background"
              />
              <div className="flex-1 min-w-0">
                <h3 className="font-bold text-foreground truncate">
                  {creator.displayName}
                </h3>
                <p className="text-sm text-muted-foreground truncate">
                  {creator.username}
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="flex items-center gap-4 mb-4">
              <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                <Users className="w-4 h-4" />
                <span className="font-medium text-foreground">{creator.subscribers}</span>
              </div>
              <div className="text-sm text-muted-foreground">
                Avg: <span className="font-medium text-foreground">{creator.avgViews}</span> views
              </div>
            </div>

            {/* CTA */}
            <Button variant="booking" className="w-full" size="sm">
              Book this creator
            </Button>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
