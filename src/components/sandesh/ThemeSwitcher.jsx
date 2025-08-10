import React from 'react';
import { Button } from "@/components/ui/button";
import { Palette, Zap, Sun, Droplets, Contrast, VenetianMask } from 'lucide-react'; // VenetianMask for Retro

const themes = [
  { id: 'default', name: 'Nebula Purple', icon: <Palette size={18} /> },
  { id: 'cyber', name: 'Cyber Green', icon: <Zap size={18} /> },
  { id: 'solar', name: 'Solar Flare', icon: <Sun size={18} /> },
  { id: 'oceanic', name: 'Oceanic Blue', icon: <Droplets size={18} /> },
  { id: 'monochrome', name: 'Mono Chrome', icon: <Contrast size={18} /> },
  { id: 'retro', name: 'Retro Wave', icon: <VenetianMask size={18} /> },
];

const ThemeSwitcher = ({ currentTheme, setCurrentTheme }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleThemeChange = (themeId) => {
    setCurrentTheme(themeId);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="rounded-full p-3 shadow-xl bg-card hover:bg-card/80 text-foreground focus:ring-4 focus:ring-ring border border-border"
        aria-label="Switch theme"
      >
        {themes.find(t => t.id === currentTheme)?.icon || <Palette size={24} />}
      </Button>
      {isOpen && (
        <div className="absolute bottom-full mb-2 right-0 w-48 bg-card border border-border rounded-lg shadow-xl py-1 z-50">
          {themes.map((theme) => (
            <button
              key={theme.id}
              onClick={() => handleThemeChange(theme.id)}
              className={`w-full text-left px-3 py-2 text-sm flex items-center gap-2 ${
                currentTheme === theme.id ? 'bg-primary/30 text-primary-foreground' : 'text-muted-foreground hover:bg-muted/50 hover:text-foreground'
              } transition-colors duration-150`}
            >
              {theme.icon}
              {theme.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ThemeSwitcher;