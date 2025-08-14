'use client'
import React from "react";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { useVoiceVisualizer } from "react-voice-visualizer";
import { convertBlobToMp3, downloadMp3, initFFmpeg } from "./ffmpegUtils";


const VoiceVisualizerWrapper = dynamic(
  () => import("./VoiceVisualizerWrapper"),
  { 
    ssr: false,
    loading: () => (
      <div className="flex items-center justify-center h-[180px] w-full max-w-[600px] bg-zinc-800 rounded-[18px]">
        <div className="text-white">Loading voice visualizer...</div>
      </div>
    )
  }
);

const RecorderPage = () => {
    const recorderControls = useVoiceVisualizer();
    const {
        recordedBlob,
        error,
    } = recorderControls;

    const [isConverting, setIsConverting] = useState(false);
    const [ffmpegReady, setFfmpegReady] = useState(false);

    // Initialize FFmpeg on component mount
    useEffect(() => {
        const loadFFmpeg = async () => {
            try {
                await initFFmpeg();
                setFfmpegReady(true);
            } catch (error) {
                console.error('Failed to initialize FFmpeg:', error);
            }
        };
        loadFFmpeg();
    }, []);

    useEffect(() => {
        if (!error) return;

        console.error(error);
    }, [error]);

    // Convert and download as MP3
    const handleConvertToMp3 = async () => {
        if (!recordedBlob || !ffmpegReady) return;
        
        setIsConverting(true);
        try {
            const mp3Blob = await convertBlobToMp3(recordedBlob, 'recording');
            downloadMp3(mp3Blob, 'recording');
        } catch (error) {
            console.error('Error converting to MP3:', error);
            alert('Failed to convert to MP3. Please try again.');
        } finally {
            setIsConverting(false);
        }
    };


  return (
    <div className="bg-black min-h-screen w-full flex flex-col items-center justify-center px-2 py-8">
      <div className="w-full max-w-lg sm:max-w-xl md:max-w-2xl flex justify-center mb-4">
        <VoiceVisualizerWrapper
          controls={recorderControls}
          isDownloadAudioButtonShown={false}
          height={180}
          width={typeof window !== 'undefined' && window.innerWidth < 640 ? window.innerWidth - 32 : 600}
          barWidth={3}
          gap={2}
          rounded={10}
          speed={2}
          isControlPanelShown={true}
          fullscreen={false}
          isDefaultUIShown={true}
          isProgressIndicatorOnHoverShown={true}
          style={{ boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)', borderRadius: '18px', width: '100%', maxWidth: 600, background: '#18181b' }}
        />
      </div>
      
      {/* MP3 Conversion Button */}
      {recordedBlob && (
        <div className="flex flex-col items-center gap-2">
          <button
            onClick={handleConvertToMp3}
            disabled={isConverting || !ffmpegReady}
            className="px-5 py-3 bg-white disabled:bg-gray-600 hover:bg-gray-300 disabled:cursor-not-allowed text-black font-medium rounded-full transition-colors duration-200 flex items-center gap-2"
          >
            {isConverting ? (
              <>
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                Converting to MP3...
              </>
            ) : (
              <>
                Download 
              </>
            )}
          </button>
          
          {!ffmpegReady && (
            <p className="text-yellow-400 text-sm">Initializing FFmpeg...</p>
          )}
        </div>
      )}
    </div>
  );
};

export default RecorderPage;