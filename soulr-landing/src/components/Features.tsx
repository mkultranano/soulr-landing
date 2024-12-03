import { motion } from 'framer-motion';
import { 
  Brain, 
  HeartHandshake, 
  Globe, 
  ShieldCheck 
} from 'lucide-react';
import { Container } from './ui/Container';
import { Section } from './ui/Section';
import { SectionHeader } from './ui/SectionHeader';
import { FeatureCard } from './ui/FeatureCard';
import { SoulMap } from './SoulMap';

const features = [
  {
    icon: Brain,
    title: 'Data You Can Trust',
    description: 'No more swipes. By analyzing and packaging your behavior from the apps you already use, soulr creates personalized, authentic matches and recommendations that actually resonate with you.'
  },
  {
    icon: HeartHandshake,
    title: 'Compatibility That Matters %',
    description: 'Our advanced AI grows more accurate as you and others use it. Sync anytime to update your growth and foster lasting connections forever.'
  },
  {
    icon: Globe,
    title: 'From Digital to IRL',
    description: 'soulr bridges the gap between digital and physical worlds, guiding you to events, nudges for activities, and experiences locally.'
  },
  {
    icon: ShieldCheck,
    title: 'Authenticity Always',
    description: 'At soulr, we believe data is truth. Truth will bring people together. By focusing on authenticity, we disrupt the toxic cycles of superficiality and envy in other social networks.'
  }
];

interface FeaturesProps {
  id?: string;
}

export function Features({ id }: FeaturesProps) {
  return (
    <Section id={id} className="bg-black">
      <Container>
        <SectionHeader
          title="We help you find the right people."
          subtitle="The only social network 100% powered by YOUR truth."
          className="mb-16"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <FeatureCard
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <SoulMap />
        </motion.div>
      </Container>
    </Section>
  );
}