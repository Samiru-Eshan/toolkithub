import { FaFileAlt, FaCode, FaCalculator, FaLaughSquint } from 'react-icons/fa';

export const tools = [
  // Text & File Utilities
  {
    id: 1,
    name: 'Word Counter',
    description: 'Count words, characters, sentences, and paragraphs in your text.',
    category: 'Text & File Utilities',
    path: '/word-counter',
    icon: FaFileAlt,
    color: 'bg-blue-500'
  },
  {
    id: 2,
    name: 'Online Notepad',
    description: 'A simple online notepad for quick notes with save functionality.',
    category: 'Text & File Utilities',
    path: '/online-notepad',
    icon: FaFileAlt,
    color: 'bg-blue-500'
  },
  
  // Developer Tools
  {
    id: 3,
    name: 'JSON Formatter',
    description: 'Format and validate your JSON data with syntax highlighting.',
    category: 'Developer Tools',
    path: '/json-formatter',
    icon: FaCode,
    color: 'bg-green-500'
  },
  {
    id: 4,
    name: 'Color Picker',
    description: 'Pick colors, get HEX, RGB, HSL values, and create palettes.',
    category: 'Developer Tools',
    path: '/color-picker',
    icon: FaCode,
    color: 'bg-green-500'
  },
  {
    id: 5,
    name: 'Lorem Ipsum Generator',
    description: 'Generate placeholder text in various lengths and formats.',
    category: 'Developer Tools',
    path: '/lorem-ipsum',
    icon: FaCode,
    color: 'bg-green-500'
  },
  {
    id: 6,
    name: 'Regex Tester',
    description: 'Test your regular expressions against sample text.',
    category: 'Developer Tools',
    path: '/regex-tester',
    icon: FaCode,
    color: 'bg-green-500'
  },
  
  // Everyday Calculators
  {
    id: 7,
    name: 'Age Calculator',
    description: 'Calculate age from birth date in years, months, and days.',
    category: 'Everyday Calculators',
    path: '/age-calculator',
    icon: FaCalculator,
    color: 'bg-purple-500'
  },
  {
    id: 8,
    name: 'BMI Calculator',
    description: 'Calculate your Body Mass Index and check your health status.',
    category: 'Everyday Calculators',
    path: '/bmi-calculator',
    icon: FaCalculator,
    color: 'bg-purple-500'
  },
  {
    id: 9,
    name: 'Loan Calculator',
    description: 'Calculate EMI, total interest, and payment schedule for loans.',
    category: 'Everyday Calculators',
    path: '/loan-calculator',
    icon: FaCalculator,
    color: 'bg-purple-500'
  },
  {
    id: 10,
    name: 'Countdown Timer',
    description: 'Set a countdown timer for events, deadlines, or reminders.',
    category: 'Everyday Calculators',
    path: '/countdown-timer',
    icon: FaCalculator,
    color: 'bg-purple-500'
  },
  {
    id: 11,
    name: 'Time Zone Converter',
    description: 'Convert between different time zones around the world.',
    category: 'Everyday Calculators',
    path: '/time-zone-converter',
    icon: FaCalculator,
    color: 'bg-purple-500'
  },
  {
    id: 12,
    name: 'Unit Converter',
    description: 'Convert between different units of length, weight, volume, etc.',
    category: 'Everyday Calculators',
    path: '/unit-converter',
    icon: FaCalculator,
    color: 'bg-purple-500'
  },
  
  // Viral/Fun Tools
  {
    id: 13,
    name: 'Fake Tweet Generator',
    description: 'Create fake tweets for fun or mockups.',
    category: 'Viral/Fun Tools',
    path: '/fake-tweet',
    icon: FaLaughSquint,
    color: 'bg-pink-500'
  },
  {
    id: 14,
    name: 'Love Calculator',
    description: 'Calculate love compatibility between two names (just for fun!).',
    category: 'Viral/Fun Tools',
    path: '/love-calculator',
    icon: FaLaughSquint,
    color: 'bg-pink-500'
  },
  {
    id: 15,
    name: 'Spin the Wheel',
    description: 'Create a custom wheel spinner for decisions or giveaways.',
    category: 'Viral/Fun Tools',
    path: '/spin-the-wheel',
    icon: FaLaughSquint,
    color: 'bg-pink-500'
  },
  {
    id: 16,
    name: 'Would You Rather',
    description: 'Generate fun "Would You Rather" questions.',
    category: 'Viral/Fun Tools',
    path: '/would-you-rather',
    icon: FaLaughSquint,
    color: 'bg-pink-500'
  },
  {
    id: 17,
    name: 'Random Name Generator',
    description: 'Generate random names for characters, projects, or businesses.',
    category: 'Viral/Fun Tools',
    path: '/random-name',
    icon: FaLaughSquint,
    color: 'bg-pink-500'
  },
  {
    id: 18,
    name: 'Lucky Number Picker',
    description: 'Generate random lucky numbers for games or decisions.',
    category: 'Viral/Fun Tools',
    path: '/lucky-number',
    icon: FaLaughSquint,
    color: 'bg-pink-500'
  }
];

export const toolsByCategory = tools.reduce((acc, tool) => {
  if (!acc[tool.category]) {
    acc[tool.category] = [];
  }
  acc[tool.category].push(tool);
  return acc;
}, {});