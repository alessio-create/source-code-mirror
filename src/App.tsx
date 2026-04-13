import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import BlogPost from "./pages/BlogPost.tsx";
import BlogPage from "./pages/BlogPage.tsx";
import SeparazioniPage from "./pages/SeparazioniPage.tsx";
import DivorziPage from "./pages/DivorziPage.tsx";
import AffidoPage from "./pages/AffidoPage.tsx";
import ChiSonoPage from "./pages/ChiSonoPage.tsx";
import ContattiPage from "./pages/ContattiPage.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/separazioni" element={<SeparazioniPage />} />
          <Route path="/divorzi" element={<DivorziPage />} />
          <Route path="/affido-figli" element={<AffidoPage />} />
          <Route path="/chi-sono" element={<ChiSonoPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/contatti" element={<ContattiPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
