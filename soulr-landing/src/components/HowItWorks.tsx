import { motion } from 'framer-motion';
import { Sparkles, Users, Map } from 'lucide-react';
import { Container } from './ui/Container';
import { Section } from './ui/Section';
import { Heading, Text } from './ui/Typography';
import { Onyx } from './Onyx';

const steps = [
  {
    icon: Sparkles,
    title: 'Sync - Align',
    description: 'Connect your apps and unlock your personalized Soul Map.',
  },
  {
    icon: Users,
    title: 'Match - Find',
    description: 'Find people who align with your values and interests—no swipes, just those in orbit.',
  },
  {
    icon: Map,
    title: 'Compass - Go',
    description: 'Orb to nearby events, activities, and spots you and your matches share.',
  },
];

interface HowItWorksProps {
  id?: string;
}

export function HowItWorks({ id }: HowItWorksProps) {
  return (
    <>
      <Section id={id} className="bg-gradient-to-b from-black via-purple-900/20 to-black">
        <Container>
          <Heading className="text-center mb-16">how to ~ soulr flow</Heading>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
                className="relative"
              >
                <div className="cosmic-border p-8 h-full">
                  <div className="text-center">
                    <step.icon className="w-12 h-12 mx-auto mb-6 text-yellow-400" />
                    <Heading as="h3" className="mb-4">{step.title}</Heading>
                    <Text>{step.description}</Text>
                  </div>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-6 w-12 h-0.5 bg-gradient-to-r from-yellow-400/30 to-transparent transform translate-y-[-50%]" />
                )}
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>
      <Onyx />
    </>
  );
}