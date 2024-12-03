import { motion } from 'framer-motion';
import { Bot, Sparkles } from 'lucide-react';
import { Container } from './ui/Container';
import { Section } from './ui/Section';
import { SectionHeader } from './ui/SectionHeader';

export function Onyx() {
  return (
    <Section className="bg-gradient-to-b from-black to-purple-900/20">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 to-purple-600 rounded-3xl blur-xl opacity-30" />
              <div className="relative cosmic-border p-8">
                <div className="flex items-center space-x-4 mb-6">
                  <Bot className="w-12 h-12 text-yellow-400" />
                  <div>
                    <h3 className="text-2xl font-bold">Ask ONYX</h3>
                    <p className="text-gray-400">Your Personalized AI Life Coach </p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="bg-purple-900/30 p-4 rounded-xl">
                    <p className="text-gray-300">Hey! I'm here to help you discover more about yourself and plan amazing experiences.</p>
                  </div>
                  <div className="bg-yellow-400/10 p-4 rounded-xl ml-4">
                    <p className="text-gray-300">Can you find me something to do this weekend?</p>
                  </div>
                  <div className="bg-purple-900/30 p-4 rounded-xl">
                    <p className="text-gray-300">Because you spent most of the week listening to indie music and practicing photography, there's a concert with a photo exhibition this Saturday. Want me to reach out to find matches to go with you?</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <SectionHeader
              title="Meet ONYX"
              subtitle="Simplify Your Everyday Decisions"
              className="text-left"
            />
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <Sparkles className="w-6 h-6 text-yellow-400 mt-1" />
                <div>
                  <h4 className="text-xl font-semibold mb-2">Knows You</h4>
                  <p className="text-gray-400">ONYX learns how you think, act, and what you like—offering smarter ideas and advice tailored to your life.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Sparkles className="w-6 h-6 text-yellow-400 mt-1" />
                <div>
                  <h4 className="text-xl font-semibold mb-2">Plans for You</h4>
                  <p className="text-gray-400">From sending and scheduling texts to planning hangouts (orbs) and meals, ONYX makes decisions easy, fast, and meaningful.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Sparkles className="w-6 h-6 text-yellow-400 mt-1" />
                <div>
                  <h4 className="text-xl font-semibold mb-2">Helps You Grow</h4>
                  <p className="text-gray-400">ONYX shows patterns in your life and gives tips to help you improve and unlock your best self.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}