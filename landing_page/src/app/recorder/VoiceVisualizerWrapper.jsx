'use client'
import React from "react";
import { VoiceVisualizer } from "react-voice-visualizer";

const VoiceVisualizerWrapper = ({ controls, ...props }) => {
  return (
    <VoiceVisualizer
      controls={controls}
      {...props}
    />
  );
};

export default VoiceVisualizerWrapper;
