import { createContext, PropsWithChildren, useCallback, useContext, useEffect, useRef, useState } from 'react';

const AUDIO_SRC = `${import.meta.env.BASE_URL}audio/ambient.mp3`;

const AmbientAudioContext = createContext<HTMLAudioElement | null>(null);

export const useAmbientAudio = () => useContext(AmbientAudioContext);

export const AmbientAudio = ({ children }: PropsWithChildren) => {
  const [audioElement, setAudioElement] = useState<HTMLAudioElement | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const setRef = useCallback((node: HTMLAudioElement | null) => {
    if (node) {
      node.volume = 0.25;
    }
    audioRef.current = node;
    setAudioElement(node);
  }, []);

  useEffect(() => {
    const audio = audioElement;
    if (!audio) return;

    audio.volume = 0.25;
    const handleInteraction = () => {
      audio.play().catch(() => {});
      window.removeEventListener('pointerdown', handleInteraction);
      window.removeEventListener('keydown', handleInteraction);
    };

    audio.play().catch(() => {
      window.addEventListener('pointerdown', handleInteraction, { once: true });
      window.addEventListener('keydown', handleInteraction, { once: true });
    });

    return () => {
      window.removeEventListener('pointerdown', handleInteraction);
      window.removeEventListener('keydown', handleInteraction);
    };
  }, [audioElement]);

  return (
    <AmbientAudioContext.Provider value={audioElement}>
      {children}
      <audio
        ref={setRef}
        src={AUDIO_SRC}
        loop
        autoPlay
        preload="auto"
        aria-hidden="true"
        tabIndex={-1}
        style={{ display: 'none' }}
      />
    </AmbientAudioContext.Provider>
  );
};
