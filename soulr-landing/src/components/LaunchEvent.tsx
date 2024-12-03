import { motion } from 'framer-motion';
import { Calendar, MapPin, Rocket } from 'lucide-react';
import { Container } from './ui/Container';
import { Section } from './ui/Section';
import { Heading, Text } from './ui/Typography';
import { Button } from './ui/Button';

export function LaunchEvent() {
  return (
    <Section className="bg-gradient-to-b from-black via-purple-900/20 to-black">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="cosmic-border p-8 md:p-12 text-center"
        >
          <div className="flex justify-center mb-6">
            <Rocket className="w-16 h-16 text-yellow-400 animate-float" />
          </div>
          
          <Heading className="mb-6">Rare Planetary Alignment Launch Party</Heading>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-8">
            <div className="flex items-center justify-center space-x-4">
              <Calendar className="w-6 h-6 text-yellow-400" />
              <Text className="text-xl">January 25th, 2025</Text>
            </div>
            <div className="flex items-center justify-center space-x-4">
              <MapPin className="w-6 h-6 text-yellow-400" />
              <Text className="text-xl">San Francisco Bay Area</Text>
            </div>
          </div>
          
          <Text className="text-xl mb-8">
           Join us for a historic social network launch party during a rare planetary alignment. Be the first to experience Soulr Systems matching technology in action!
          </Text>
          
          <Button className="px-12">
            RSVP
          </Button>
        </motion.div>
      </Container>
    </Section>
  );
}