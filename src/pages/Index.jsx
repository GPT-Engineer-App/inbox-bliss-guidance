import React from "react";
import { Box, Button, Container, Heading, Text, VStack, Image, Badge, useColorMode, IconButton, Tooltip, Flex, Divider } from "@chakra-ui/react";
import { FaSun, FaMoon, FaEnvelopeOpenText, FaBullhorn, FaSearch, FaUndo, FaGamepad } from "react-icons/fa";

const Index = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Container maxW="container.xl" p={4}>
      <VStack spacing={8} align="stretch">
        <Flex justifyContent="space-between" alignItems="center">
          <Heading as="h1" size="xl">
            EmailiLama
          </Heading>
          <Tooltip label="Toggle color mode" hasArrow placement="bottom-end">
            <IconButton aria-label="Toggle color mode" icon={colorMode === "light" ? <FaMoon /> : <FaSun />} onClick={toggleColorMode} />
          </Tooltip>
        </Flex>
        <Divider />
        <Box>
          <Heading as="h2" size="lg" mb={4}>
            Your Inbox Transformation Guide
          </Heading>
          <Text fontSize="xl" mb={4}>
            Transform the chore of email management into a journey towards digital balance.
          </Text>
          <Image src="https://images.unsplash.com/photo-1705747894529-df18ecf5025e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzZXJlbmUlMjBsYW5kc2NhcGV8ZW58MHx8fHwxNzA4NzIzMjg5fDA&ixlib=rb-4.0.3&q=80&w=1080" borderRadius="md" />
        </Box>
        <Box>
          <Heading as="h3" size="md" mb={2}>
            Core Features
          </Heading>
          <VStack spacing={4} align="start">
            <Badge colorScheme="green">Inbox Sensei</Badge>
            <Text>AI-powered categorization that learns from your actions and matches your unique needs.</Text>
            <Badge colorScheme="purple">Llama Recommends</Badge>
            <Text>Personalized suggestions for managing your inbox efficiently.</Text>
            <Badge colorScheme="blue">Zen Focus Mode</Badge>
            <Text>A calming interface with optional nature sounds to eliminate distractions.</Text>
            <Badge colorScheme="orange">Powerful Search & Filtering</Badge>
            <Text>Advanced search tools and AI-powered suggestions for finding specific emails.</Text>
            <Badge colorScheme="red">Undo & Progress Tracking</Badge>
            <Text>Undo actions and track your inbox transformation with motivating visuals.</Text>
          </VStack>
        </Box>
        <Box>
          <Heading as="h3" size="md" mb={2}>
            User Experience
          </Heading>
          <VStack spacing={4} align="start">
            <Text>
              <FaEnvelopeOpenText /> Guided onboarding to get you started quickly.
            </Text>
            <Text>
              <FaBullhorn /> Playful llama-themed elements that can be toggled on or off.
            </Text>
            <Text>
              <FaGamepad /> Gamification with "Inbox Zen" points for engaging mini-games.
            </Text>
            <Text>
              <FaSearch /> Transparent AI that shows how your actions train the Inbox Sensei.
            </Text>
          </VStack>
        </Box>
        <Box>
          <Heading as="h3" size="md" mb={2}>
            Freemium Model
          </Heading>
          <VStack spacing={4} align="start">
            <Text>
              <FaSun /> Free basic features with essential tools for managing a single email account.
            </Text>
            <Text>
              <FaMoon /> Basic plan for more advanced features and up to three email accounts.
            </Text>
            <Text>
              <FaUndo /> Premium plan with customizable AI, Zen Mode, and unlimited accounts.
            </Text>
          </VStack>
        </Box>
        <Box>
          <Heading as="h3" size="md" mb={2}>
            EmailiLama's Promise
          </Heading>
          <Text fontSize="xl">More than just an email cleaner, achieve inbox zen and take back control of your digital life with EmailiLama!</Text>
        </Box>
        <Button rightIcon={<FaEnvelopeOpenText />} colorScheme="teal" size="lg">
          Get Started with EmailiLama
        </Button>
      </VStack>
    </Container>
  );
};

export default Index;
