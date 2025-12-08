import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { creators } from "@/data/creators";
import {
  ArrowLeft,
  Users,
  TrendingUp,
  Clock,
  MapPin,
  Download,
  Play,
  Heart,
  CheckCircle2,
} from "lucide-react";

const CreatorProfile = () => {
  const { id } = useParams();
  const creator = creators.find((c) => c.id === id);

  if (!creator) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container px-4 md:px-6 py-20 text-center">
          <h1 className="text-2xl font-bold mb-4">Creator not found</h1>
          <Link to="/" className="text-primary hover:underline">
            Back to creators
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pb-20">
        {/* Back button */}
        <div className="container px-4 md:px-6 pt-6">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm font-medium">Back to creators</span>
          </Link>
        </div>

        {/* Hero Section */}
        <section className="container px-4 md:px-6 pt-8 pb-12">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            {/* Left: Avatar and basic info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center lg:items-start"
            >
              <img
                src={creator.avatar}
                alt={creator.displayName}
                className="w-32 h-32 rounded-full object-cover ring-4 ring-primary/20 mb-4"
              />
              <Badge className="bg-primary/10 text-primary hover:bg-primary/10 mb-2">
                {creator.niche}
              </Badge>
              <h1 className="text-3xl md:text-4xl font-black text-foreground mb-1">
                {creator.displayName}
              </h1>
              <p className="text-lg text-muted-foreground mb-2">{creator.username}</p>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Users className="w-5 h-5" />
                <span className="font-bold text-foreground">{creator.subscribers}</span>
                <span>Subscribers</span>
              </div>
            </motion.div>

            {/* Right: Tagline and stats */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex-1"
            >
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 italic">
                "Your brand's new best friend."
              </p>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div className="bg-yt-gray-100 rounded-xl p-4">
                  <p className="text-sm text-muted-foreground mb-1">Avg views</p>
                  <p className="text-2xl font-bold text-foreground">{creator.avgViews}</p>
                  <p className="text-xs text-muted-foreground">per Short</p>
                </div>
                <div className="bg-yt-gray-100 rounded-xl p-4">
                  <div className="flex items-center gap-1.5 mb-1">
                    <TrendingUp className="w-4 h-4 text-primary" />
                    <p className="text-sm text-muted-foreground">Engagement</p>
                  </div>
                  <p className="text-2xl font-bold text-foreground">{creator.engagement}%</p>
                </div>
                <div className="bg-yt-gray-100 rounded-xl p-4">
                  <p className="text-sm text-muted-foreground mb-1">Audience</p>
                  <p className="text-lg font-bold text-foreground">{creator.audience.age}</p>
                  <p className="text-xs text-muted-foreground">{creator.audience.gender}</p>
                </div>
                <div className="bg-yt-gray-100 rounded-xl p-4">
                  <div className="flex items-center gap-1.5 mb-1">
                    <Clock className="w-4 h-4 text-muted-foreground" />
                    <p className="text-sm text-muted-foreground">Best time</p>
                  </div>
                  <p className="text-lg font-bold text-foreground">{creator.bestTimeToPost}</p>
                </div>
              </div>

              <p className="text-sm text-muted-foreground flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                {creator.audience.location}
              </p>
              <p className="text-xs text-muted-foreground mt-2">
                Data that helps your campaign land where it matters.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Top Shorts */}
        <section className="bg-yt-gray-100 py-12">
          <div className="container px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="text-2xl font-bold text-foreground mb-6">Top-performing Shorts</h2>
              <div className="grid grid-cols-3 gap-4 max-w-2xl">
                {creator.topShorts.map((short, index) => (
                  <div
                    key={index}
                    className="group relative aspect-[9/16] rounded-xl overflow-hidden bg-yt-gray-200 cursor-pointer"
                  >
                    <img
                      src={short.thumbnail}
                      alt={`Short ${index + 1}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-smooth"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent flex items-end p-3">
                      <div className="flex items-center gap-1.5 text-background">
                        <Play className="w-4 h-4 fill-current" />
                        <span className="font-bold">{short.views}</span>
                        <span className="text-sm opacity-80">views</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Past Brand Partners */}
        <section className="py-12">
          <div className="container px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h2 className="text-2xl font-bold text-foreground mb-2">Brands They've Worked With</h2>
              <p className="text-muted-foreground mb-6">Creators who deliver, again and again.</p>
              <div className="flex flex-wrap gap-3">
                {creator.pastBrands.map((brand) => (
                  <div
                    key={brand}
                    className="flex items-center gap-2 bg-yt-gray-100 rounded-full px-4 py-2"
                  >
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    <span className="font-medium">{brand}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Content Specialties */}
        <section className="bg-yt-gray-100 py-12">
          <div className="container px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h2 className="text-2xl font-bold text-foreground mb-6">Content Specialties</h2>
              <div className="flex flex-wrap gap-3 mb-4">
                {creator.specialties.map((specialty) => (
                  <Badge
                    key={specialty}
                    variant="secondary"
                    className="text-sm py-2 px-4 bg-background"
                  >
                    {specialty}
                  </Badge>
                ))}
              </div>
              <p className="text-sm text-muted-foreground">
                See what they do best — and how your brand can plug in.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Why Brands Love Them */}
        <section className="py-12">
          <div className="container px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="max-w-2xl"
            >
              <div className="flex items-center gap-2 mb-4">
                <Heart className="w-5 h-5 text-primary" />
                <h2 className="text-xl font-bold text-foreground">Why Brands Love Them</h2>
              </div>
              <blockquote className="text-2xl md:text-3xl font-medium text-foreground italic">
                "{creator.whyBrandsLove}"
              </blockquote>
            </motion.div>
          </div>
        </section>

        {/* Booking CTA */}
        <section className="py-12">
          <div className="container px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="bg-foreground rounded-2xl p-8 md:p-12 text-center"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-background mb-4">
                Ready to work with {creator.displayName}?
              </h2>
              <p className="text-background/70 mb-8">
                Powered by YouTube Creator Partnerships.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button
                  variant="hero"
                  size="xl"
                  className="bg-primary text-primary-foreground hover:bg-yt-red-hover"
                >
                  Book {creator.displayName.split(" ")[0]} for Your Campaign
                </Button>
                <Button
                  variant="outline"
                  size="xl"
                  className="border-background/30 text-background hover:bg-background/10 rounded-full"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Download Media Kit
                </Button>
              </div>
              <p className="text-sm text-background/50 mt-6">
                All the numbers, content, and past work in one place.
              </p>
            </motion.div>
          </div>
        </section>
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

export default CreatorProfile;
