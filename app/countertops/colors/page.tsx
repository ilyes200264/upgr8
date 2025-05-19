"use client"

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { samples } from "@/data/nextjs_gallery_data"; // Adjust path if needed
import { motion, AnimatePresence } from "framer-motion";
import { Filter, X, ChevronDown, Search, Palette, Grid3X3, CheckCircle2 } from "lucide-react";

// Refined UI Components for the enhanced page
type FilterButtonProps = {
  isActive: boolean;
  onClick: () => void;
  children: React.ReactNode;
  icon?: React.ElementType;
};

const FilterButton = ({ isActive, onClick, children, icon: Icon }: FilterButtonProps) => (
  <motion.button
    onClick={onClick}
    className={`flex items-center px-4 py-2.5 rounded-md border transition-all text-sm font-medium ${
      isActive 
        ? "bg-gray-900 text-white border-gray-900" 
        : "bg-white text-gray-700 border-gray-300 hover:border-gray-400"
    }`}
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
  >
    {Icon && <Icon className="mr-2 h-4 w-4" />}
    {children}
  </motion.button>
);

type ColorSwatchProps = {
  color: string;
  colorName: string;
  selected: boolean;
  onClick: () => void;
};

const ColorSwatch = ({ color, colorName, selected, onClick }: ColorSwatchProps) => (
  <motion.button
    onClick={onClick}
    className={`group relative overflow-hidden rounded-full w-10 h-10 border-2 transition-all ${
      selected ? "border-black shadow-md scale-110" : "border-gray-200 hover:border-gray-400"
    }`}
    style={{ backgroundColor: color }}
    whileHover={{ scale: selected ? 1.1 : 1.08 }}
    whileTap={{ scale: 0.95 }}
    title={colorName}
  >
    {selected && (
      <motion.div 
        className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <CheckCircle2 className="w-5 h-5 text-white" />
      </motion.div>
    )}
  </motion.button>
);

type ChipProps = {
  label: string;
  onRemove: () => void;
};

const Chip = ({ label, onRemove }: ChipProps) => (
  <motion.div 
    className="inline-flex items-center bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-1.5 rounded-full mr-2 mb-2"
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.8 }}
    whileHover={{ backgroundColor: "#EEE" }}
  >
    {label}
    <button 
      className="ml-1.5 rounded-full hover:bg-gray-200 flex items-center justify-center w-4 h-4"
      onClick={onRemove}
    >
      <X className="w-3 h-3" />
    </button>
  </motion.div>
);

export default function EnhancedCountertopsPage() {
  // States for filters
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedMaterial, setSelectedMaterial] = useState("");
  const [selectedFinish, setSelectedFinish] = useState("");
  
  // State for search
  const [searchQuery, setSearchQuery] = useState("");
  
  // UI States
  const [visibleItemsCount, setVisibleItemsCount] = useState(16);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isFilterDrawerOpen, setIsFilterDrawerOpen] = useState(false);
  const [activeFilterTab, setActiveFilterTab] = useState("material");
  
  // Observer for infinite scroll
  const observerTarget = useRef(null);
  const gridRef = useRef<HTMLDivElement | null>(null);

  // Dynamically generate filter options based on the full dataset
  const filterColors = Array.from(new Set(samples.map(s => s.color))).sort();
  const filterMaterials = Array.from(new Set(samples.map(s => s.material))).sort();
  const filterFinishes = Array.from(new Set(samples.map(s => s.finish))).sort();

  // Filtered samples based on selected dropdown values and search
  const filteredSamples = samples.filter(s =>
    (selectedColor === "" || s.color === selectedColor) &&
    (selectedMaterial === "" || s.material === selectedMaterial) &&
    (selectedFinish === "" || s.finish === selectedFinish) &&
    (searchQuery === "" || 
      s.name?.toLowerCase().includes(searchQuery.toLowerCase()) || 
      s.color?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.material?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.finish?.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  // Get the subset of items to display based on visibleItemsCount
  const itemsToDisplay = filteredSamples.slice(0, visibleItemsCount);

  // Reset active filter tab when closing the drawer
  useEffect(() => {
    if (!isFilterDrawerOpen) {
      setTimeout(() => setActiveFilterTab("material"), 300);
    }
  }, [isFilterDrawerOpen]);

  // Infinite scroll implementation
  const handleObserver = useCallback((entries: IntersectionObserverEntry[]) => {
    const [entry] = entries;
    if (entry && entry.isIntersecting && visibleItemsCount < filteredSamples.length) {
      // Load more items when the observer target is visible
      setTimeout(() => {
        setVisibleItemsCount(prev => Math.min(prev + 8, filteredSamples.length));
      }, 300);
    }
  }, [visibleItemsCount, filteredSamples.length]);

  useEffect(() => {
    const observer = new IntersectionObserver(handleObserver, {
      root: null,
      rootMargin: "0px",
      threshold: 0.1
    });
    
    if (observerTarget.current) {
      observer.observe(observerTarget.current);
    }
    
    return () => {
      if (observerTarget.current) {
        observer.unobserve(observerTarget.current);
      }
    };
  }, [handleObserver, observerTarget]);

  // Reset visible items count when filters change
  useEffect(() => {
    setVisibleItemsCount(16);
    
    // Scroll to top of grid when filters change
    if (gridRef.current) {
      const headerHeight = 180; // Approximate height of the header area
      const scrollTop = gridRef.current.offsetTop - headerHeight;
      
      window.scrollTo({
        top: scrollTop,
        behavior: 'smooth'
      });
    }
  }, [selectedColor, selectedMaterial, selectedFinish, searchQuery]);

  // Reset all filters
  const resetAllFilters = () => {
    setSelectedColor("");
    setSelectedMaterial("");
    setSelectedFinish("");
    setSearchQuery("");
  };

  // Filter selections tracking for UI
  const activeFilterCount = [
    selectedColor && 1,
    selectedMaterial && 1,
    selectedFinish && 1,
    searchQuery && 1
  ].filter(Boolean).length;

  return (
    // Increased top padding to accommodate fixed navbar
    <div className="bg-slate-50 min-h-screen">
      {/* Header with enhanced design, animation and properly spaced for navbar */}
      <motion.header 
        className="pt-28 pb-12 px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-6xl mx-auto text-center">
          <motion.h1 
            className="text-4xl md:text-5xl font-extrabold text-gray-800 tracking-tight mb-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Explore Our Countertop Collection
          </motion.h1>
          <motion.p 
            className="mt-3 text-lg md:text-xl text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Discover the perfect material, color, and finish for your dream space.
          </motion.p>
        </div>
      </motion.header>

      {/* Main content area */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        {/* Enhanced filter controls */}
        <motion.div 
          className="bg-white rounded-xl shadow-lg mb-10 overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="p-4 sm:p-6">
            {/* Mobile filter toggle and search */}
            <div className="flex items-center justify-between mb-4 md:hidden">
              <FilterButton 
                isActive={isFilterDrawerOpen} 
                onClick={() => setIsFilterDrawerOpen(!isFilterDrawerOpen)}
                icon={Filter}
              >
                Filters {activeFilterCount > 0 && `(${activeFilterCount})`}
              </FilterButton>
              
              {isSearchOpen ? (
                <div className="relative flex-1 ml-2">
                  <input
                    type="text"
                    placeholder="Search countertops..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full border border-gray-300 rounded-md py-2 pl-10 pr-4 focus:ring-2 focus:ring-gray-200 focus:border-gray-300 transition-all"
                  />
                  <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                  
                  <button 
                    onClick={() => {
                      setSearchQuery("");
                      setIsSearchOpen(false);
                    }}
                    className="absolute right-3 top-2.5"
                  >
                    <X className="h-4 w-4 text-gray-400" />
                  </button>
                </div>
              ) : (
                <button 
                  onClick={() => setIsSearchOpen(true)}
                  className="p-2 rounded-md border border-gray-300 hover:border-gray-400 transition-all"
                >
                  <Search className="h-5 w-5 text-gray-600" />
                </button>
              )}
            </div>
            
            {/* Desktop filters */}
            <div className="hidden md:flex md:flex-wrap items-center justify-between">
              <div className="flex flex-1 gap-3">
                {/* Desktop search */}
                <div className="relative w-64 lg:w-80">
                  <input
                    type="text"
                    placeholder="Search countertops..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full border border-gray-300 rounded-md py-2.5 pl-10 pr-4 focus:ring-2 focus:ring-gray-200 focus:border-gray-400"
                  />
                  <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  
                  {searchQuery && (
                    <button 
                      onClick={() => setSearchQuery("")}
                      className="absolute right-3 top-3"
                    >
                      <X className="h-4 w-4 text-gray-400 hover:text-gray-600" />
                    </button>
                  )}
                </div>
                
                {/* Desktop filter dropdowns */}
                <div className="flex flex-wrap gap-3">
                  {/* Material filter */}
                  <div className="relative">
                    <select
                      id="materialFilter"
                      value={selectedMaterial}
                      onChange={e => setSelectedMaterial(e.target.value)}
                      className="appearance-none w-full border border-gray-300 rounded-md py-2.5 pl-4 pr-10 bg-white focus:ring-2 focus:ring-gray-200 focus:border-gray-400"
                    >
                      <option value="">All Materials</option>
                      {filterMaterials.map(m => (
                        <option key={m} value={m}>{m}</option>
                      ))}
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                      <ChevronDown className="h-4 w-4" />
                    </div>
                  </div>
                  
                  {/* Color filter */}
                  <div className="relative">
                    <select
                      id="colorFilter"
                      value={selectedColor}
                      onChange={e => setSelectedColor(e.target.value)}
                      className="appearance-none w-full border border-gray-300 rounded-md py-2.5 pl-4 pr-10 bg-white focus:ring-2 focus:ring-gray-200 focus:border-gray-400"
                    >
                      <option value="">All Colors</option>
                      {filterColors.map(c => (
                        <option key={c} value={c}>{c}</option>
                      ))}
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                      <ChevronDown className="h-4 w-4" />
                    </div>
                  </div>
                  
                  {/* Finish filter */}
                  <div className="relative">
                    <select
                      id="finishFilter"
                      value={selectedFinish}
                      onChange={e => setSelectedFinish(e.target.value)}
                      className="appearance-none w-full border border-gray-300 rounded-md py-2.5 pl-4 pr-10 bg-white focus:ring-2 focus:ring-gray-200 focus:border-gray-400"
                    >
                      <option value="">All Finishes</option>
                      {filterFinishes.map(f => (
                        <option key={f} value={f}>{f}</option>
                      ))}
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                      <ChevronDown className="h-4 w-4" />
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Reset button for desktop */}
              {activeFilterCount > 0 && (
                <button
                  onClick={resetAllFilters}
                  className="ml-3 px-4 py-2 text-sm font-medium text-gray-700 border border-gray-300 rounded-md hover:bg-gray-50 hover:border-gray-400 transition-all"
                >
                  Clear All
                </button>
              )}
            </div>
            
            {/* Active filter chips display */}
            {activeFilterCount > 0 && (
              <div className="mt-4 flex flex-wrap items-center">
                <AnimatePresence>
                  {selectedMaterial && (
                    <Chip 
                      label={`Material: ${selectedMaterial}`} 
                      onRemove={() => setSelectedMaterial("")} 
                    />
                  )}
                  
                  {selectedColor && (
                    <Chip 
                      label={`Color: ${selectedColor}`} 
                      onRemove={() => setSelectedColor("")} 
                    />
                  )}
                  
                  {selectedFinish && (
                    <Chip 
                      label={`Finish: ${selectedFinish}`} 
                      onRemove={() => setSelectedFinish("")} 
                    />
                  )}
                  
                  {searchQuery && (
                    <Chip 
                      label={`Search: ${searchQuery}`} 
                      onRemove={() => setSearchQuery("")} 
                    />
                  )}
                </AnimatePresence>
              </div>
            )}
          </div>
          
          {/* Mobile filter drawer */}
          <AnimatePresence>
            {isFilterDrawerOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="border-t border-gray-200 md:hidden"
              >
                <div className="p-4">
                  {/* Filter tabs */}
                  <div className="flex border-b border-gray-200 mb-4">
                    <button
                      onClick={() => setActiveFilterTab("material")}
                      className={`px-4 py-2 text-sm font-medium relative ${
                        activeFilterTab === "material" ? "text-gray-900" : "text-gray-500"
                      }`}
                    >
                      Material
                      {activeFilterTab === "material" && (
                        <motion.div
                          layoutId="activeTabIndicator"
                          className="absolute bottom-0 left-0 right-0 h-0.5 bg-gray-900"
                        />
                      )}
                    </button>
                    <button
                      onClick={() => setActiveFilterTab("color")}
                      className={`px-4 py-2 text-sm font-medium relative ${
                        activeFilterTab === "color" ? "text-gray-900" : "text-gray-500"
                      }`}
                    >
                      Color
                      {activeFilterTab === "color" && (
                        <motion.div
                          layoutId="activeTabIndicator"
                          className="absolute bottom-0 left-0 right-0 h-0.5 bg-gray-900"
                        />
                      )}
                    </button>
                    <button
                      onClick={() => setActiveFilterTab("finish")}
                      className={`px-4 py-2 text-sm font-medium relative ${
                        activeFilterTab === "finish" ? "text-gray-900" : "text-gray-500"
                      }`}
                    >
                      Finish
                      {activeFilterTab === "finish" && (
                        <motion.div
                          layoutId="activeTabIndicator"
                          className="absolute bottom-0 left-0 right-0 h-0.5 bg-gray-900"
                        />
                      )}
                    </button>
                  </div>
                  
                  {/* Material tab content */}
                  {activeFilterTab === "material" && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        <button
                          onClick={() => setSelectedMaterial("")}
                          className={`text-left px-3 py-2 rounded-md text-sm ${
                            selectedMaterial === "" 
                              ? "bg-gray-100 font-medium" 
                              : "hover:bg-gray-50"
                          }`}
                        >
                          All Materials
                        </button>
                        
                        {filterMaterials.map(material => (
                          <button
                            key={material}
                            onClick={() => setSelectedMaterial(material)}
                            className={`text-left px-3 py-2 rounded-md text-sm ${
                              selectedMaterial === material 
                                ? "bg-gray-100 font-medium" 
                                : "hover:bg-gray-50"
                            }`}
                          >
                            {material}
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}
                  
                  {/* Color tab content */}
                  {activeFilterTab === "color" && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <div className="flex flex-wrap gap-3 items-center mb-4">
                        <button
                          onClick={() => setSelectedColor("")}
                          className={`text-sm px-3 py-1 rounded-full ${
                            selectedColor === "" 
                              ? "bg-gray-900 text-white" 
                              : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                          }`}
                        >
                          All
                        </button>
                        
                        {filterColors.map(color => {
                          // Find a sample with this color to get its hex value
                          const sample = samples.find(s => s.color === color);
                          const colorHex = sample?.dominantHex || "#DDDDDD";
                          
                          return (
                            <ColorSwatch
                              key={color}
                              color={colorHex}
                              colorName={color}
                              selected={selectedColor === color}
                              onClick={() => setSelectedColor(color)}
                            />
                          );
                        })}
                      </div>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-3">
                        {filterColors.map(color => (
                          <button
                            key={color}
                            onClick={() => setSelectedColor(color)}
                            className={`text-left px-3 py-2 rounded-md text-sm ${
                              selectedColor === color 
                                ? "bg-gray-100 font-medium" 
                                : "hover:bg-gray-50"
                            }`}
                          >
                            {color}
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}
                  
                  {/* Finish tab content */}
                  {activeFilterTab === "finish" && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        <button
                          onClick={() => setSelectedFinish("")}
                          className={`text-left px-3 py-2 rounded-md text-sm ${
                            selectedFinish === "" 
                              ? "bg-gray-100 font-medium" 
                              : "hover:bg-gray-50"
                          }`}
                        >
                          All Finishes
                        </button>
                        
                        {filterFinishes.map(finish => (
                          <button
                            key={finish}
                            onClick={() => setSelectedFinish(finish)}
                            className={`text-left px-3 py-2 rounded-md text-sm ${
                              selectedFinish === finish 
                                ? "bg-gray-100 font-medium" 
                                : "hover:bg-gray-50"
                            }`}
                          >
                            {finish}
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}
                  
                  {/* Filter drawer actions */}
                  <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-200">
                    <button
                      onClick={resetAllFilters}
                      className="text-sm text-gray-600 hover:text-gray-900"
                    >
                      Reset all
                    </button>
                    
                    <button
                      onClick={() => setIsFilterDrawerOpen(false)}
                      className="px-4 py-2 bg-gray-900 text-white text-sm font-medium rounded-md hover:bg-gray-800"
                    >
                      Show results ({filteredSamples.length})
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Results count and gallery */}
        <div ref={gridRef}>
          <motion.div
            className="mb-6 flex justify-between items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <h2 className="text-lg font-medium text-gray-800">
              {filteredSamples.length} {filteredSamples.length === 1 ? 'result' : 'results'}
            </h2>
            
            <div className="flex items-center gap-1">
              <span className="text-sm text-gray-500 mr-1">View:</span>
              <button 
                className="p-1.5 rounded hover:bg-gray-100 text-gray-700"
                aria-label="Grid view"
              >
                <Grid3X3 className="w-4 h-4" />
              </button>
            </div>
          </motion.div>

          {/* Gallery Grid */}
          {itemsToDisplay.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
              {itemsToDisplay.map((sample, idx) => (
                <motion.div
                  key={`${sample.name}-${idx}`}
                  className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 ease-in-out flex flex-col group"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.5, 
                    delay: idx < 8 ? 0.1 * (idx % 8) + 0.6 : 0 // Stagger only first 8 for initial load
                  }}
                  whileHover={{ y: -5 }}
                >
                  <div className="relative w-full aspect-[4/3]">
                    <Image
                      src={sample.image}
                      alt={sample.name || 'Countertop sample'}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      loading={idx < 8 ? "eager" : "lazy"}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  
                  <div className="p-5 text-center flex-grow flex flex-col justify-between">
                    <div>
                      <h3 className="font-bold text-lg text-gray-800 mb-1 truncate" title={sample.name}>
                        {sample.name}
                      </h3>
                      {sample.reference && sample.reference !== "N/A" && (
                        <p className="text-xs text-gray-500 mb-2">Ref: {sample.reference}</p>
                      )}
                      <div className="mt-3 grid grid-cols-2 gap-2">
                        <div className="text-left">
                          <p className="text-xs text-gray-500">Material</p>
                          <p className="text-sm font-medium text-gray-800">{sample.material}</p>
                        </div>
                        <div className="text-left">
                          <p className="text-xs text-gray-500">Finish</p>
                          <p className="text-sm font-medium text-gray-800">{sample.finish}</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-center mt-4 pt-3 border-t border-gray-200">
                      <span
                        className="w-6 h-6 rounded-full border-2 border-gray-200 shadow-sm mr-2 shrink-0"
                        style={{ backgroundColor: sample.dominantHex || '#DDDDDD' }}
                        title={`Dominant Color: ${sample.dominantHex}`}
                      ></span>
                      <span className="text-sm text-gray-600 capitalize">{sample.color}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <motion.div 
              className="col-span-full text-center py-16 bg-white rounded-xl shadow"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path vectorEffect="non-scaling-stroke" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="mt-2 text-lg font-medium text-gray-700">No samples found</h3>
              <p className="mt-1 text-sm text-gray-500">Try adjusting your filters or view all items.</p>
              <motion.button
                onClick={resetAllFilters}
                className="mt-4 px-4 py-2 bg-gray-900 text-white text-sm font-medium rounded-md hover:bg-gray-800"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Reset all filters
              </motion.button>
            </motion.div>
          )}
          
          {/* Loading indicator for infinite scroll */}
          {visibleItemsCount < filteredSamples.length && (
            <div 
              ref={observerTarget} 
              className="flex justify-center items-center py-10"
            >
              <motion.div
                className="w-10 h-10 border-4 border-gray-300 border-t-gray-800 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              />
            </div>
          )}
        </div>
      </div>

      {/* Enhanced footer with premium touch */}
      <motion.footer 
        className="py-12 bg-white border-t border-gray-200"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
      >
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-xl font-semibold text-gray-800 mb-3">
            Looking for something specific?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Our design experts can help you find the perfect countertop for your space.
            Contact us for personalized recommendations and samples.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.a 
              href="mailto:info@groupcmr.com" 
              className="text-gray-900 font-medium hover:text-gray-600 transition-colors"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              info@groupcmr.com
            </motion.a>
            <span className="hidden sm:block text-gray-400">|</span>
            <motion.a 
              href="tel:+14389238941" 
              className="text-gray-900 font-medium hover:text-gray-600 transition-colors"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              (438) 923-8941
            </motion.a>
          </div>
        </div>
      </motion.footer>
    </div>
  );
}