import { ChangeEvent, useEffect, useState } from 'react';
import { useAmbientAudio } from './AmbientAudio';

const getSpeakerIcon = (volume: number, muted: boolean) => {
  if (muted || volume === 0) {
    return '🔇';
  }

  if (volume >= 0.66) {
    return '🔊';
  }

  if (volume >= 0.33) {
    return '🔉';
  }

  return '🔈';
};

export const VolumeControl = () => {
  const audio = useAmbientAudio();
  const [volume, setVolume] = useState(0.2);
  const [lastVolume, setLastVolume] = useState(0.05);
  const [muted, setMuted] = useState(false);

  useEffect(() => {
    if (!audio) return;

    const initialVolume = audio.volume || 0.2;
    setVolume(initialVolume);
    if (initialVolume > 0) {
      setLastVolume(initialVolume);
    }
    setMuted(audio.muted ?? false);
  }, [audio]);

  useEffect(() => {
    if (!audio) return;

    if (!muted) {
      audio.volume = volume;
    }
  }, [audio, muted, volume]);

  useEffect(() => {
    if (!audio) return;

    audio.muted = muted;
  }, [audio, muted]);

  const handleIconClick = () => {
    if (!audio) return;

    if (muted) {
      const restored = lastVolume > 0 ? lastVolume : 0.05;
      audio.muted = false;
      audio.volume = restored;
      setMuted(false);
      setVolume(restored);
      return;
    }

    audio.muted = true;
    setLastVolume(volume > 0 ? volume : 0.2);
    setMuted(true);
  };

  const handleSliderChange = (event: ChangeEvent<HTMLInputElement>) => {
    const nextVolume = Number(event.target.value) / 100;
    setVolume(nextVolume);
    if (nextVolume > 0) {
      setLastVolume(nextVolume);
      if (muted) {
        setMuted(false);
      }
    }

    if (!audio) return;

    audio.volume = nextVolume;
  };

  const icon = getSpeakerIcon(volume, muted);
  const sliderValue = Math.round(volume * 100);

  return (
    <div className="fixed left-6 bottom-6 z-50">
      <div className="group relative">
        <button
          type="button"
          aria-label="Toggle ambient volume"
          onClick={handleIconClick}
          className="flex h-14 w-14 items-center justify-center rounded-full border border-white/30 bg-white/10 text-2xl text-white shadow-lg shadow-blue-500/20 transition-transform duration-200 hover:scale-105"
        >
          {icon}
        </button>

        <div className="pointer-events-none absolute left-full top-1/2 -translate-y-1/2 opacity-0 transition-all duration-300 group-hover:opacity-100">
          <div className="flex h-14 items-center overflow-hidden rounded-full border border-white/30 bg-white/10 px-0 transition-all duration-300 group-hover:px-3 group-hover:w-44 group-hover:pointer-events-auto group-hover:opacity-100 group-hover:translate-x-0 w-0 opacity-0 -translate-x-3">
            <input
              type="range"
              min={0}
              max={100}
              value={sliderValue}
              onChange={handleSliderChange}
              className="h-1 w-full cursor-pointer appearance-none rounded-full bg-white/20 transition-all duration-200 accent-sky-400"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
