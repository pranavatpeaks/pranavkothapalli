import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { MotionConfig } from 'framer-motion';
import React, { useEffect, useState } from 'react';


const queryClient = new QueryClient();

const App = () => {
  const [reducedMotion, setReducedMotion] = useState<'never' | 'user' | 'always'>('user');

  useEffect(() => {
    const prefersReduced = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const deviceMemory = (navigator as any).deviceMemory || 8;
    const cpu = (navigator as any).hardwareConcurrency || 4;
    const lowPower = deviceMemory < 4 || cpu <= 2;
    if (prefersReduced || lowPower) setReducedMotion('always');
  }, []);

  useEffect(() => {
    // Toggle a class to reduce heavy visual effects (blurs, glows) when animations are reduced
    if (typeof document !== 'undefined') {
      if (reducedMotion === 'always') document.documentElement.classList.add('reduced-visual');
      else document.documentElement.classList.remove('reduced-visual');
    }
  }, [reducedMotion]);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <MotionConfig reducedMotion={reducedMotion}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </MotionConfig>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
