import { Search, X, SlidersHorizontal } from "lucide-react";
import { categories } from "../../data/categories";

export function CatalogFilter({ 
  searchQuery, 
  setSearchQuery, 
  activeCategory, 
  setActiveCategory,
  sortBy,
  setSortBy
}) {
  return (
    <div className="py-6 border-b border-beauty-border bg-beauty-background sticky top-0 z-30 shadow-sm">
      <div className="beauty-container">
        
        {/* Categories (Horizontal Scroll on Mobile) */}
        <div className="flex overflow-x-auto pb-4 mb-4 gap-2 scrollbar-hide no-scrollbar -mx-4 px-4 md:mx-0 md:px-0">
          <button
            onClick={() => setActiveCategory("all")}
            className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              activeCategory === "all" 
                ? "bg-beauty-primary text-white" 
                : "bg-beauty-surface text-beauty-muted hover:text-beauty-foreground hover:bg-beauty-border/50 border border-beauty-border"
            }`}
          >
            All Templates
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.name.toLowerCase().replace(/\s+/g, "-"))}
              className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === cat.name.toLowerCase().replace(/\s+/g, "-")
                  ? "bg-beauty-primary text-white"
                  : "bg-beauty-surface text-beauty-muted hover:text-beauty-foreground hover:bg-beauty-border/50 border border-beauty-border"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Search & Sort Controls */}
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
          
          <div className="relative w-full md:max-w-[320px]">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-beauty-muted" />
            <input 
              type="text" 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari template beauty..."
              aria-label="Cari template beauty"
              className="w-full bg-beauty-surface border border-beauty-border text-beauty-foreground text-sm rounded-xl pl-9 pr-9 py-2.5 focus:outline-none focus:ring-2 focus:ring-beauty-primary/20 transition-shadow"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery("")}
                aria-label="Hapus pencarian"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-beauty-muted hover:text-beauty-foreground"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          <div className="flex items-center gap-2 w-full md:w-auto">
            <SlidersHorizontal className="w-4 h-4 text-beauty-muted hidden md:block" />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="w-full md:w-auto bg-beauty-surface border border-beauty-border text-beauty-foreground text-sm rounded-xl px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-beauty-primary/20"
            >
              <option value="featured">Featured</option>
              <option value="newest">Newest</option>
              <option value="name_asc">A-Z</option>
            </select>
          </div>

        </div>

      </div>
    </div>
  );
}
