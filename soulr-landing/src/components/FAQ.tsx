import { motion } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { useState } from 'react';
import { Container } from './ui/Container';
import { Section } from './ui/Section';
import { SectionHeader } from './ui/SectionHeader';

const faqs = [
  {
    question: 'Is soulr an AI?',
    answer: 'Yes, soulr is an AI. It\'s designed to understand your personality, values, and habits using advanced data analysis, helping you make meaningful connections and find experiences that align with who you are.'
  },
  {
    question: 'How is soulr different from other social media apps?',
    answer: 'Unlike other apps that ask you who you are, soulr tells you what aligns. While traditional apps focus on endless swipes, soulr understands your personality, values, and interests. We don\'t just connect you to people or activities—we connect you to the right things.'
  },
  {
    question: 'What does soulr actually do?',
    answer: 'soulr integrates your apps to create your "Soul Map," showing who you are and what aligns with you. It helps you find friends who share your values and even plans hangouts by suggesting local events and places and maintaining your friendships.'
  },
  {
    question: 'Is soulr only for friendships or can it help with other relationships?',
    answer: 'soulr is focused on creating and maintaining authentic relationships, whether that\'s dating, collaborators, teammates, or simply strangers who align with your interests and values.'
  },
  {
    question: 'How does soulr know who or what I\'ll like?',
    answer: 'soulr uses insights from the apps you already use—like your music, fitness, or event preferences—to build a deep understanding of your habits, values, and interests. This creates a personalized experience tailored just for you.'
  },
  {
    question: 'Is soulr safe to use? What about my data?',
    answer: 'Absolutely. Your privacy is our priority. We only use the data you\'ve already consented to share, and it\'s securely stored, packaged, and anonymized. soulr exists to help you—not exploit your information.'
  },
  {
    question: 'How much does soulr cost?',
    answer: 'soulr is free for 5 matches! We also offer pro features like unlimited matching wherever you travel and personalized compass recommendations for unlimited orbs and nudges.'
  },
  {
    question: 'Can I use soulr in my city?',
    answer: 'soulr is rolling out city by city to ensure the best experience. Check our app to see if your city is live—or be one of the first to join and help shape your local soulr community.'
  },
  {
    question: 'How do I get started?',
    answer: 'Download the soulr app when launched, sync your apps, and let soulr guide you to people, events, and experiences that fit your life. It\'s that simple!'
  }
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div 
      className="cosmic-border mb-4"
      initial={false}
      animate={{ height: 'auto' }}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-6 text-left flex justify-between items-center"
      >
        <span className="text-lg font-semibold">{question}</span>
        {isOpen ? (
          <Minus className="w-5 h-5 text-yellow-400" />
        ) : (
          <Plus className="w-5 h-5 text-yellow-400" />
        )}
      </button>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="px-6 pb-6 text-gray-400 whitespace-pre-line"
        >
          {answer}
        </motion.div>
      )}
    </motion.div>
  );
}

interface FAQProps {
  id?: string;
}

export function FAQ({ id }: FAQProps) {
  return (
    <Section id={id} className="bg-black">
      <Container>
        <SectionHeader
          title="FAQs"
          subtitle="commonly asked questions about soulr"
          className="mb-16"
        />
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq) => (
            <FAQItem key={faq.question} {...faq} />
          ))}
        </div>
      </Container>
    </Section>
  );
}