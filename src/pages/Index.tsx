
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play, Pause, Maximize } from 'lucide-react';
import TitleSlide from '../components/slides/TitleSlide';
import MethodologySlide from '../components/slides/MethodologySlide';
import FrameworkSlide from '../components/slides/FrameworkSlide';
import FindingsSlide from '../components/slides/FindingsSlide';
import HeuristicOneSlide from '../components/slides/HeuristicOneSlide';
import HeuristicTwoSlide from '../components/slides/HeuristicTwoSlide';
import MobileSlide from '../components/slides/MobileSlide';
import ArchitectureSlide from '../components/slides/ArchitectureSlide';
import BenchmarkSlide from '../components/slides/BenchmarkSlide';
import AbandonmentSlide from '../components/slides/AbandonmentSlide';
import RecommendationsSlide from '../components/slides/RecommendationsSlide';
import ImpactSlide from '../components/slides/ImpactSlide';
import NextStepsSlide from '../components/slides/NextStepsSlide';

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const slides = [
    TitleSlide,
    MethodologySlide,
    FrameworkSlide,
    FindingsSlide,
    HeuristicOneSlide,
    HeuristicTwoSlide,
    MobileSlide,
    ArchitectureSlide,
    BenchmarkSlide,
    AbandonmentSlide,
    RecommendationsSlide,
    ImpactSlide,
    NextStepsSlide
  ];

  const totalSlides = slides.length;

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' && currentSlide < totalSlides - 1) {
        setCurrentSlide(currentSlide + 1);
      } else if (e.key === 'ArrowLeft' && currentSlide > 0) {
        setCurrentSlide(currentSlide - 1);
      } else if (e.key === 'Escape') {
        setIsFullscreen(false);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [currentSlide, totalSlides]);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying) {
      interval = setInterval(() => {
        if (currentSlide < totalSlides - 1) {
          setCurrentSlide(currentSlide + 1);
        } else {
          setIsPlaying(false);
        }
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isPlaying, currentSlide, totalSlides]);

  const nextSlide = () => {
    if (currentSlide < totalSlides - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  const CurrentSlideComponent = slides[currentSlide];

  return (
    <div className={`min-h-screen bg-gray-100 ${isFullscreen ? 'fixed inset-0 z-50' : ''}`}>
      {/* Navigation Header */}
      <div className="bg-white shadow-sm border-b px-6 py-4">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex items-center space-x-4">
            <h1 className="text-lg font-semibold text-gray-800">Auditoría UX: Farmers Insurance</h1>
            <div className="text-sm text-gray-600">
              Slide {currentSlide + 1} of {totalSlides}
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
              title={isPlaying ? "Pause" : "Play"}
            >
              {isPlaying ? <Pause size={20} /> : <Play size={20} />}
            </button>
            
            <button
              onClick={toggleFullscreen}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
              title="Fullscreen"
            >
              <Maximize size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto">
          <div className="h-1 bg-gray-200">
            <div 
              className="h-full bg-[#1E3F90] transition-all duration-300"
              style={{ width: `${((currentSlide + 1) / totalSlides) * 100}%` }}
            />
          </div>
        </div>
      </div>

      {/* Main Presentation Area */}
      <div className="relative">
        <div className="flex items-center justify-center min-h-[calc(100vh-120px)]">
          {/* Previous Button */}
          <button
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className="absolute left-4 z-10 p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronLeft size={24} className="text-[#1E3F90]" />
          </button>

          {/* Slide Container */}
          <div className="w-full max-w-6xl mx-auto px-16">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <CurrentSlideComponent />
            </div>
          </div>

          {/* Next Button */}
          <button
            onClick={nextSlide}
            disabled={currentSlide === totalSlides - 1}
            className="absolute right-4 z-10 p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronRight size={24} className="text-[#1E3F90]" />
          </button>
        </div>
      </div>

      {/* Slide Thumbnails */}
      <div className="bg-white border-t px-6 py-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex space-x-2 overflow-x-auto pb-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`flex-shrink-0 w-12 h-8 rounded text-xs font-medium transition-all duration-200 ${
                  currentSlide === index
                    ? 'bg-[#1E3F90] text-white'
                    : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
                }`}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
