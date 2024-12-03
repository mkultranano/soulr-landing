import { motion } from 'framer-motion';
import { VideoBackground } from './VideoBackground';
import { Button } from './ui/Button';
import { Container } from './ui/Container';
import { Section } from './ui/Section';
import { Heading, Text } from './ui/Typography';
import { AppIcon } from './ui/AppIcon';

export function Hero() {
  return (
    <Section className="relative min-h-screen flex items-center justify-center overflow-hidden p-0">
      <VideoBackground />
      <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/50 to-black"></div>
      
      <Container>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-20 text-center"
        >
          <AppIcon />
          
          <Heading as="h1" className="mb-6 text-gradient glow">
            Find Your Orbit
          </Heading>
          
          <Text className="text-xl md:text-2xl mb-12 max-w-2xl mx-auto">
            find your <span className="text-yellow-400">people</span>, find your <span className="text-yellow-400">truth</span>
          </Text>
          
          <div className="space-y-6">
            <Button className="px-12 py-5 text-xl cosmic-border">
              Join the First 10K – Get Free Pro
            </Button>
            
            <a 
              href="#how-it-works" 
              className="block text-lg text-gray-400 hover:text-yellow-400 transition-colors"
            >
              what we do →
            </a>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}