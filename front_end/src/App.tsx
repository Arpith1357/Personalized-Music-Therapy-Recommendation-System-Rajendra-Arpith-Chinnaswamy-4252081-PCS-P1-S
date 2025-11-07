import { useState } from 'react';
import { Music, ThumbsUp, ThumbsDown } from 'lucide-react';

interface Track {
  id: number;
  name: string;
  tempo: number;
  rms: number;
}

const placeholderTracks: Record<string, Track[]> = {
  Relax: [
    { id: 1, name: 'Calm Ocean Waves', tempo: 60, rms: 0.12 },
    { id: 2, name: 'Forest Meditation', tempo: 55, rms: 0.10 },
    { id: 3, name: 'Gentle Piano Dreams', tempo: 58, rms: 0.14 },
  ],
  Focus: [
    { id: 4, name: 'Deep Work Flow', tempo: 90, rms: 0.18 },
    { id: 5, name: 'Study Ambience', tempo: 85, rms: 0.16 },
    { id: 6, name: 'Concentration Boost', tempo: 88, rms: 0.17 },
  ],
  Energize: [
    { id: 7, name: 'Morning Motivation', tempo: 128, rms: 0.25 },
    { id: 8, name: 'Power Workout', tempo: 135, rms: 0.28 },
    { id: 9, name: 'Active Energy', tempo: 130, rms: 0.26 },
  ],
  Sad: [
    { id: 10, name: 'Healing Rain', tempo: 50, rms: 0.08 },
    { id: 11, name: 'Emotional Release', tempo: 48, rms: 0.09 },
    { id: 12, name: 'Comfort & Hope', tempo: 52, rms: 0.11 },
  ],
};

function App() {
  const [selectedMood, setSelectedMood] = useState<string>('Relax');
  const [recommendations, setRecommendations] = useState<Track[]>([]);
  const [feedback, setFeedback] = useState<Record<number, 'positive' | 'negative' | null>>({});

  const handleGetRecommendations = () => {
    setRecommendations(placeholderTracks[selectedMood]);
    setFeedback({});
  };

  const handleFeedback = (trackId: number, type: 'positive' | 'negative') => {
    setFeedback(prev => ({
      ...prev,
      [trackId]: prev[trackId] === type ? null : type,
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-blue-100">
      <div className="container mx-auto px-4 py-8 md:py-12 max-w-4xl">
        <header className="text-center mb-12 animate-fade-in">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Music className="w-10 h-10 text-purple-600" />
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
              Personalized Music Therapy Recommender
            </h1>
          </div>
          <p className="text-xl text-gray-600 font-light italic">
            Listen. Relax. Refocus.
          </p>
        </header>

        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10 mb-8">
          <div className="mb-6">
            <label htmlFor="mood-select" className="block text-lg font-semibold text-gray-700 mb-3">
              How are you feeling today?
            </label>
            <select
              id="mood-select"
              value={selectedMood}
              onChange={(e) => setSelectedMood(e.target.value)}
              className="w-full px-4 py-3 text-lg border-2 border-purple-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all bg-white text-gray-700"
            >
              <option value="Relax">Relax</option>
              <option value="Focus">Focus</option>
              <option value="Energize">Energize</option>
              <option value="Sad">Sad</option>
            </select>
          </div>

          <button
            onClick={handleGetRecommendations}
            className="w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white text-lg font-semibold py-4 rounded-lg hover:from-purple-600 hover:to-blue-600 transform hover:scale-[1.02] transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Get Recommendations
          </button>
        </div>

        {recommendations.length > 0 && (
          <div className="space-y-4 animate-slide-up">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Recommended Tracks for {selectedMood}
            </h2>
            {recommendations.map((track) => (
              <div
                key={track.id}
                className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all duration-200 transform hover:-translate-y-1"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      {track.name}
                    </h3>
                    <div className="flex gap-4 text-sm text-gray-600">
                      <span className="bg-blue-100 px-3 py-1 rounded-full">
                        Tempo: {track.tempo} BPM
                      </span>
                      <span className="bg-purple-100 px-3 py-1 rounded-full">
                        RMS: {track.rms.toFixed(2)}
                      </span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleFeedback(track.id, 'positive')}
                      className={`p-3 rounded-lg border-2 transition-all duration-200 ${
                        feedback[track.id] === 'positive'
                          ? 'bg-green-500 border-green-500 text-white scale-110'
                          : 'border-gray-300 text-gray-600 hover:border-green-500 hover:text-green-500'
                      }`}
                      title="Like this track"
                    >
                      <ThumbsUp className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => handleFeedback(track.id, 'negative')}
                      className={`p-3 rounded-lg border-2 transition-all duration-200 ${
                        feedback[track.id] === 'negative'
                          ? 'bg-red-500 border-red-500 text-white scale-110'
                          : 'border-gray-300 text-gray-600 hover:border-red-500 hover:text-red-500'
                      }`}
                      title="Dislike this track"
                    >
                      <ThumbsDown className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <footer className="text-center py-8 text-gray-600 text-sm">
        <p>Created by Arpith Chinnaswamy Rajendra – IU International University of Applied Sciences</p>
      </footer>
    </div>
  );
}

export default App;
