"use client";
import { useState } from "react";
import Header from "../components/UI/Header";
import StyleSelector from "../components/UI/StyleSelector";
import PaletteGrid from "../components/Palette/PaletteGrid";
import PaletteDetails from "../components/Palette/PaletteDetails";
import PreviewModal from "../components/UI/PreviewModal";
import CopyNotification from "../components/UI/CopyNotification";
import { colorPalettes } from "../lib/colorPalettes";
import AnimatedBackground from "../components/UI/AnimatedBackground";

const ColorPaletteMatcher = () => {
  const [selectedStyle, setSelectedStyle] = useState(0);
  const [selectedPalette, setSelectedPalette] = useState(0);
  const [copiedColor, setCopiedColor] = useState("");
  const [isPreviewMode, setIsPreviewMode] = useState(false);

  const copyToClipboard = (color: string) => {
    navigator.clipboard.writeText(color);
    setCopiedColor(color);
    setTimeout(() => setCopiedColor(""), 2000);
  };

  const currentPalette =
    colorPalettes.styles[selectedStyle].palettes[selectedPalette];

  const handleStyleChange = (index: number) => {
    setSelectedStyle(index);
    setSelectedPalette(0);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <AnimatedBackground />
      <div className="container mx-auto px-4 py-8 relative z-10">
        <Header />

        <StyleSelector
          styles={colorPalettes.styles}
          selectedStyle={selectedStyle}
          onStyleChange={handleStyleChange}
        />

        <PaletteGrid
          style={colorPalettes.styles[selectedStyle]}
          selectedPalette={selectedPalette}
          onPaletteSelect={setSelectedPalette}
          onCopyColor={copyToClipboard}
        />

        <PaletteDetails
          palette={currentPalette}
          onCopyColor={copyToClipboard}
          onPreview={() => setIsPreviewMode(true)}
        />

        <CopyNotification copiedColor={copiedColor} />

        <PreviewModal
          isOpen={isPreviewMode}
          onClose={() => setIsPreviewMode(false)}
          palette={currentPalette}
        />
      </div>
    </div>
  );
};

export default ColorPaletteMatcher;
