import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ProjectPage from "./pages/ProjectPage";
import { EcosistemaPage, ComunicadorPage, ServiciosPage, PrensaPage, InvestigacionPage } from "./pages/ContentPages";

const queryClient = new QueryClient();
const basename = import.meta.env.BASE_URL || "/";
const App = () => (
  <ErrorBoundary>
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter basename={basename}>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/ecosistema-vilanova-group" element={<EcosistemaPage />} />
              <Route path="/yo-soy-el-comunicador-libre" element={<ComunicadorPage />} />
              <Route path="/servicios-profesionales" element={<ServiciosPage />} />
              <Route path="/prensa-y-medios" element={<PrensaPage />} />
              <Route path="/investigacion-y-pensamiento" element={<InvestigacionPage />} />
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
