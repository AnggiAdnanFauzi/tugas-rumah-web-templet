import { useState, useMemo, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";
import { CatalogHero } from "../components/catalog/CatalogHero";
import { CatalogFilter } from "../components/catalog/CatalogFilter";
import { CatalogFeatured } from "../components/catalog/CatalogFeatured";
import { CatalogGrid } from "../components/catalog/CatalogGrid";
import { CatalogEmptyState } from "../components/catalog/CatalogEmptyState";
import { CatalogCta } from "../components/catalog/CatalogCta";
import { templates } from "../data/templates";
import { categories } from "../data/categories";

export function Templates() {
  const [searchParams, setSearchParams] = useSearchParams();
  
  // State initialization from URL or Defaults
  const initialCategory = searchParams.get("category") || "salon";
  
  // Verify if category is valid, if not, reset to salon
  const isValidCategory = categories.some(cat => cat.name.toLowerCase().replace(/\s+/g, "-") === initialCategory);
  
  const [activeCategory, setActiveCategory] = useState(isValidCategory ? initialCategory : "salon");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("newest");

  // Sync category to URL
  useEffect(() => {
    searchParams.set("category", activeCategory);
    setSearchParams(searchParams);
  }, [activeCategory, searchParams, setSearchParams]);

  // Derived filtered & sorted templates
  const filteredTemplates = useMemo(() => {
    let result = [...templates];

    // 1. Filter by Category
    result = result.filter((t) => 
      t.categoryName.toLowerCase().replace(/\s+/g, "-") === activeCategory
    );

    // 2. Filter by Search Query
    if (searchQuery.trim() !== "") {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (t) =>
          t.title.toLowerCase().includes(query) ||
          t.description.toLowerCase().includes(query) ||
          t.categoryName.toLowerCase().includes(query) ||
          t.features.some((f) => f.toLowerCase().includes(query))
      );
    }

    // 3. Sort
    switch (sortBy) {
      case "featured":
        result.sort((a, b) => b.sales - a.sales);
        break;
      case "name_asc":
        result.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "newest":
      default:
        result.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        break;
    }

    return result;
  }, [activeCategory, searchQuery, sortBy]);

  const handleReset = () => {
    setActiveCategory("salon");
    setSearchQuery("");
    setSortBy("newest");
  };

  return (
    <div className="min-h-screen bg-beauty-background font-sans flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-[72px]">
        <CatalogHero />
        
        <CatalogFilter 
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
          sortBy={sortBy}
          setSortBy={setSortBy}
        />
        
        {/* Only show featured if no active search, to keep it clean */}
        {searchQuery === "" && (
          <CatalogFeatured />
        )}
        
        {filteredTemplates.length > 0 ? (
          <CatalogGrid templates={filteredTemplates} />
        ) : (
          <CatalogEmptyState onReset={handleReset} />
        )}

        <CatalogCta />
      </main>

      <Footer />
    </div>
  );
}
