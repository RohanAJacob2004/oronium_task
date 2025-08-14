import { FFmpeg } from '@ffmpeg/ffmpeg';
import { fetchFile, toBlobURL } from '@ffmpeg/util';

let ffmpeg = null;

// Initialize FFmpeg
export const initFFmpeg = async () => {
  if (ffmpeg) return ffmpeg;
  
  ffmpeg = new FFmpeg();
  
  // Load FFmpeg wasm files
  const baseURL = 'https://unpkg.com/@ffmpeg/core@0.12.6/dist/umd';
  
  ffmpeg.on('log', ({ message }) => {
    console.log('FFmpeg log:', message);
  });
  
  ffmpeg.on('progress', ({ progress, time }) => {
    console.log('FFmpeg progress:', progress, time);
  });
  
  await ffmpeg.load({
    coreURL: await toBlobURL(`${baseURL}/ffmpeg-core.js`, 'text/javascript'),
    wasmURL: await toBlobURL(`${baseURL}/ffmpeg-core.wasm`, 'application/wasm'),
  });
  
  return ffmpeg;
};

// Convert blob to MP3
export const convertBlobToMp3 = async (blob, filename = 'audio') => {
  try {
    if (!ffmpeg) {
      await initFFmpeg();
    }
    
    // Write the input file
    const inputFileName = `${filename}.webm`;
    const outputFileName = `${filename}.mp3`;
    
    await ffmpeg.writeFile(inputFileName, await fetchFile(blob));
    
    // Run FFmpeg conversion
    await ffmpeg.exec([
      '-i', inputFileName,
      '-codec:a', 'libmp3lame',
      '-b:a', '192k',
      '-ar', '44100',
      outputFileName
    ]);
    
    // Read the output file
    const data = await ffmpeg.readFile(outputFileName);
    
    // Create blob from the output
    const mp3Blob = new Blob([data.buffer], { type: 'audio/mp3' });
    
    // Clean up
    await ffmpeg.deleteFile(inputFileName);
    await ffmpeg.deleteFile(outputFileName);
    
    return mp3Blob;
  } catch (error) {
    console.error('Error converting to MP3:', error);
    throw error;
  }
};

// Download blob as MP3 file
export const downloadMp3 = (blob, filename = 'recording') => {
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `${filename}.mp3`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
};