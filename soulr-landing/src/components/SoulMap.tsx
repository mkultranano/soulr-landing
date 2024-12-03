import { motion, AnimatePresence } from 'framer-motion';
import { Music2, Film, Gamepad2, BookOpen, Radio, Users2, ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';
import { Card } from './ui/Card';

interface PlatformData {
  platform: string;
  icon: any;
  summary: string;
  insights: {
    title: string;
    value: string;
    affinity: number;
  }[];
}

const platformData: PlatformData[] = [
  {
    platform: 'Apple Music',
    icon: Music2,
    summary: 'R&B/Soul enthusiast with late-night listening patterns',
    insights: [
      { title: 'Top Artist', value: 'The Weeknd', affinity: 92 },
      { title: 'Genre', value: 'R&B/Soul', affinity: 88 },
      { title: 'Mood', value: 'Melancholic', affinity: 85 }
    ]
  },
  {
    platform: 'Netflix',
    icon: Film,
    summary: 'Drawn to complex narratives and psychological themes',
    insights: [
      { title: 'Category', value: 'Sci-Fi Drama', affinity: 94 },
      { title: 'Director', value: 'Christopher Nolan', affinity: 89 },
      { title: 'Theme', value: 'Mind-bending', affinity: 91 }
    ]
  },
  {
    platform: 'PlayStation',
    icon: Gamepad2,
    summary: 'Immersive storytelling and strategic gameplay focus',
    insights: [
      { title: 'Genre', value: 'RPG/Adventure', affinity: 95 },
      { title: 'Style', value: 'Story-driven', affinity: 93 },
      { title: 'Playtime', value: 'Evening Focus', affinity: 87 }
    ]
  }
];

export function SoulMap() {
  const [expandedPlatform, setExpandedPlatform] = useState<string | null>(null);

  return (
    <Card className="max-w-4xl mx-auto overflow-hidden">
      <div className="p-6">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold mb-2">Soulr Mapped Preview</h3>
          <p className="text-gray-400">Snapshot of Your Digital Soul</p>
        </div>
        
        <div className="space-y-4">
          {platformData.map((platform) => (
            <motion.div
              key={platform.platform}
              className="cosmic-border overflow-hidden"
              initial={false}
            >
              <motion.button
                className="w-full p-4 flex items-center justify-between hover:bg-white/5 transition-colors"
                onClick={() => setExpandedPlatform(
                  expandedPlatform === platform.platform ? null : platform.platform
                )}
              >
                <div className="flex items-center space-x-4">
                  <platform.icon className="w-6 h-6 text-yellow-400" />
                  <div className="text-left">
                    <h4 className="font-semibold">{platform.platform}</h4>
                    <p className="text-sm text-gray-400">{platform.summary}</p>
                  </div>
                </div>
                {expandedPlatform === platform.platform ? (
                  <ChevronUp className="w-5 h-5 text-gray-400" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-400" />
                )}
              </motion.button>

              <AnimatePresence>
                {expandedPlatform === platform.platform && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-4 pb-4 space-y-4">
                      {platform.insights.map((insight) => (
                        <div key={insight.title} className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-400">{insight.title}</span>
                            <span className="text-yellow-400">{insight.affinity}%</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <div className="flex-1 h-1.5 bg-gray-800 rounded-full overflow-hidden">
                              <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: `${insight.affinity}%` }}
                                transition={{ duration: 1 }}
                                className="h-full bg-gradient-to-r from-yellow-400 to-purple-600"
                              />
                            </div>
                            <span className="text-sm font-medium">{insight.value}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-400">
            This is just a preview. Your full Soul Map analyzes 20+ platforms and 100+ data points.
          </p>
        </div>
      </div>
    </Card>
  );
}