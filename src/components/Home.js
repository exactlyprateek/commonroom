import React from 'react';
import {
	Container,
	SimpleGrid,
	Box,
	Tabs,
	TabList,
	TabPanel,
	TabPanels,
	Tab,
	Square,
	Image,
	Text,
	VStack,
	WrapItem,
	Avatar,
	StackDivider,
	Link,
	Badge,
	Button,
	HStack,
	IconButton,
	Accordion,
	AccordionItem,
	AccordionButton,
	AccordionPanel,
	AccordionIcon,
	ButtonGroup,
	MotionBox,
	Center
} from '@chakra-ui/react';
import { HTMLMotionProps, motion } from 'framer-motion';
import Header from './Header';

import { AiOutlineHeart } from 'react-icons/ai';
import { FiMessageCircle, FiShare2 } from 'react-icons/fi';

function Home() {
	const body = [
		{
			user: 'prakriti',
			caption: 'lmao xd happy holi dsfsf fs fs fd  sd sdfsd fds fs dsfd fsd fsdfds fsf s d fsd',
			likes: '56',
			location: 'MSIT',
			tag: 'environment'
		},
		{
			user: 'octave',
			caption: 'lmao xd happy holi',
			likes: '24',
			location: 'MSIT',
			tag: 'music'
		},
		{
			user: 'adventure_club',
			caption: 'lmao xd happy holi',
			likes: '56',
			location: 'MSIT',
			tag: 'travel'
		},
		{
			user: 'techsoc',
			caption: 'lmao xd happy holi',
			likes: '56',
			location: 'MSIT',
			tag: 'tech'
		}
	];
	const pr = body.map((i, idx) => (
		<Box
			my={[ '2', '3', '4', '5' ]}
			border="1px"
			borderRadius="sm"
			borderColor="primary.950"
			bg="white"
			className="shadow-custom-anim"
			width={[ '100%', '90%', '70%', '60%' ]}
		>
			<WrapItem alignItems="flex-end" align="center">
				<Avatar mx="1.5" mb="2" size="sm" name="Kent Dodds" src="https://bit.ly/kent-c-dodds" />
				<Link fontWeight="semibold" ml="1.5" py="3" w="100%" color="black">
					{i.user}
				</Link>
				<Box d="flex" ml="1.5" pb="4" mr="1.5" w="100%" justifyContent="end">
					<Badge ml="2.5" mr="2" borderRadius="full" px="2" variant="solid" colorScheme="blue">
						{i.tag}
					</Badge>
				</Box>
			</WrapItem>

			<Image src={`https://via.placeholder.com/1080?text=Location:+${i.location}`} alt="img" />
			<Box>
				<HStack mx="2" my="2">
					<ButtonGroup borderRadius="full" size="lg" isAttached variant="outline">
						<IconButton borderRadius="full" aria-label="Add to friends" icon={<AiOutlineHeart />} />
						<Button borderRadius="full" ml="-px">
							{i.likes}
						</Button>
					</ButtonGroup>
					<ButtonGroup borderRadius="full" size="lg" isAttached variant="outline">
						<IconButton borderRadius="full" aria-label="Add to friends" icon={<FiMessageCircle />} />
						<Button borderRadius="full" ml="-px">
							{i.likes}
						</Button>
					</ButtonGroup>
					<Box w="100%" d="flex" justifyContent="end">
						<IconButton borderRadius="full" aria-label="Add to friends" icon={<FiShare2 />} />
					</Box>
				</HStack>
			</Box>
			<Box mx="2" my="2">
				<Box flex="1" textAlign="left">
					<Text h="30px" color="black" isTruncated>
						<Link fontWeight="semibold" ml="1.5" py="3" w="100%" color="black">
							{i.user}
						</Link>: {i.caption}
					</Text>
				</Box>
				<Accordion allowToggle>
					{' '}
					<AccordionItem>
						<h2>
							<AccordionButton isTruncated>
								<Text>Show Comments</Text>
								<AccordionIcon />
							</AccordionButton>
						</h2>
						<AccordionPanel pb={4}>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
							labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
							laboris nisi ut aliquip ex ea commodo consequat.
						</AccordionPanel>
					</AccordionItem>
				</Accordion>
			</Box>
		</Box>
	));

	return (
		<div className="bg-col" maxH="100vh">
			<Header />
			<Container minChildWidth="120px" maxW="container.lg" p="0">
				<Tabs isFitted isLazy variant="enclosed">
					<TabList mb="0">
						<Tab>Home</Tab>
						<Tab>News</Tab>
						<Tab>Notes</Tab>
						<Tab>Result</Tab>
						<Tab>Room</Tab>
					</TabList>
					<TabPanels>
						<TabPanel p="0">
							<VStack
								divider={<StackDivider borderColor="gray.100" />}
								spacing={1}
								align="center"
								maxH="83vh"
								overflow="scroll"
							>
								{pr}
							</VStack>
						</TabPanel>
						<TabPanel p="0">
							<VStack
								divider={<StackDivider borderColor="gray.100" />}
								spacing={1}
								align="center"
								maxH="83vh"
								overflow="scroll"
							>
								<iframe
									id="inlineFrameExample"
									title="Inline Frame Example"
									width="100%"
									src="http://msit.in/latest_news"
									style={{ height: '1000px' }}
								/>
							</VStack>
						</TabPanel>
						<TabPanel>
							<VStack
								divider={<StackDivider borderColor="gray.100" />}
								spacing={1}
								align="center"
								maxH="83vh"
								overflow="scroll"
							>
								
								<iframe
									id="inlineFrameExample"
									title="Inline Frame Example"
									width="100%"
									style={{ height: '533px' }}
									src="https://noteshub.co.in/"
								/>
							</VStack>
						</TabPanel>
						<TabPanel>
							<VStack
								divider={<StackDivider borderColor="gray.100" />}
								spacing={1}
								align="center"
								maxH="83vh"
								overflow="scroll"
							>
								
								<iframe
									id="inlineFrameExample"
									title="Inline Frame Example"
									width="100%"
									style={{ height: '533px' }}
									src="https://ipuranklist.com/search-by-name"
								/>
							</VStack>
						</TabPanel>
						<TabPanel>
							<VStack
								divider={<StackDivider borderColor="gray.100" />}
								spacing={1}
								align="center"
								maxH="83vh"
								overflow="scroll"
							>
								<Text fontSize="2xl">Room</Text>
								<Box h="533px">
									<Center>
										<Text size="lg">Coming Soon</Text>
									</Center>
								</Box>
							</VStack>
						</TabPanel>
					</TabPanels>
				</Tabs>
			</Container>
		</div>
	);
}

export default Home;
