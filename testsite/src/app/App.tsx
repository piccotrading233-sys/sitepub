import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { NewsSection } from './components/NewsSection';
import { AdUnit } from './components/AdUnit';
import { PhotoGallery } from './components/PhotoGallery';
import { VideoSection } from './components/VideoSection';
import { Timeline } from './components/Timeline';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        <HeroSection />
        
        {/* Ad placement after hero */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <AdUnit format="horizontal" />
        </div>

        <NewsSection />
        
        {/* Ad placement between sections */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <AdUnit format="horizontal" />
        </div>

        <Timeline />

        <PhotoGallery />
        
        {/* Ad placement */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <AdUnit format="horizontal" />
        </div>

        <VideoSection />

        {/* Sidebar with ads - visible on larger screens */}
        <div className="hidden xl:block fixed right-4 top-32 w-64">
          <AdUnit format="vertical" className="mb-4" />
          <AdUnit format="square" />
        </div>
      </main>

      <Footer />
    </div>
  );
}
