import { motion } from 'framer-motion';
import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { Button } from './ui/Button';
import { Container } from './ui/Container';
import { Section } from './ui/Section';
import { Heading, Text } from './ui/Typography';
import { Input } from './ui/Input';
import { joinWaitlist } from '../services/api';

interface CTAProps {
  id?: string;
}

export function CTA({ id }: CTAProps) {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast.error('Please enter your email');
      return;
    }

    setIsLoading(true);
    try {
      const response = await joinWaitlist(email);
      toast.success(response.message);
      setEmail('');
    } catch (error) {
      toast.error(error instanceof Error ? error.message : 'Failed to join waitlist');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Section id={id} className="bg-black">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <Heading>Join the First 10K Users</Heading>
          <Text className="text-xl mb-8">
            Sign up today and unlock a pro membership for 3 years.
          </Text>
          <form onSubmit={handleSubmit} className="max-w-md mx-auto mb-8">
            <Input
              type="email"
              placeholder="Enter your email"
              className="mb-4"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={isLoading}
            />
            <Button 
              type="submit" 
              className="w-full"
              disabled={isLoading}
            >
              {isLoading ? 'Joining...' : 'Join the waitlist'}
            </Button>
          </form>
          <Text className="text-sm">
            Don't miss the chance to curate your very own Soulr System!
          </Text>
        </motion.div>
      </Container>
      <Toaster position="bottom-center" />
    </Section>
  );
}