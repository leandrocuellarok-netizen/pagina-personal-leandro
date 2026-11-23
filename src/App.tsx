import { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import { Analytics } from "@/components/Analytics";
import Index from "./pages/Index";
import AudiencePage from "./pages/AudiencePage";
import NotFound from "./pages/NotFound";
import ProjectPage from "./pages/ProjectPage";
import { EcosistemaPage, ComunicadorPage, ServiciosPage } from "./pages/ContentPages";

const queryClient = new QueryClient();
const basename = import.meta.env.BASE_URL || "/";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname]);
  return null;
};

const App = () => (
  <ErrorBoundary>
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter basename={basename}>
            <Analytics />
            <ScrollToTop />
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/audiencia" element={<AudiencePage />} />
              <Route path="/ecosistema-vilanova-group" element={<EcosistemaPage />} />
              <Route path="/yo-soy-el-comunicador-libre" element={<ComunicadorPage />} />
              <Route path="/servicios-profesionales" element={<ServiciosPage />} />
              <Route path="/proyectos/:slug" element={<ProjectPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </HelmetProvider>
    </QueryClientProvider>
  </ErrorBoundary>
);

export default App;