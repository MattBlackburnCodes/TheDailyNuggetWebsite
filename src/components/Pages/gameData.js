export const missingWordQuestions = [
  {
    id: 1,
    quote: 'Success is not ___, failure is not fatal: it is the courage to continue that counts.',
    answer: 'final',
    options: ['final', 'easy', 'luck', 'fast'],
    author: 'Winston Churchill',
  },
  {
    id: 2,
    quote: 'The only way to do great work is to ___ what you do.',
    answer: 'love',
    options: ['love', 'rush', 'copy', 'avoid'],
    author: 'Steve Jobs',
  },
  {
    id: 3,
    quote: "Believe you can and you're ___ there.",
    answer: 'halfway',
    options: ['halfway', 'never', 'barely', 'already'],
    author: 'Theodore Roosevelt',
  },
  {
    id: 4,
    quote: 'Do what you can, with what you have, where you ___.',
    answer: 'are',
    options: ['are', 'go', 'stand', 'wait'],
    author: 'Theodore Roosevelt',
  },
  {
    id: 5,
    quote: 'It always seems impossible until it is ___.',
    answer: 'done',
    options: ['done', 'easy', 'late', 'planned'],
    author: 'Nelson Mandela',
  },
  {
    id: 6,
    quote: 'The future belongs to those who ___ in the beauty of their dreams.',
    answer: 'believe',
    options: ['believe', 'hide', 'wait', 'wander'],
    author: 'Eleanor Roosevelt',
  },
  {
    id: 7,
    quote: 'Act as if what you do makes a difference. It ___.',
    answer: 'does',
    options: ['does', 'fades', 'stops', 'waits'],
    author: 'William James',
  },
  {
    id: 8,
    quote: 'What you get by achieving your goals is not as important as what you ___ by achieving your goals.',
    answer: 'become',
    options: ['become', 'buy', 'forget', 'borrow'],
    author: 'Zig Ziglar',
  },
  {
    id: 9,
    quote: 'The journey of a thousand miles begins with a single ___.',
    answer: 'step',
    options: ['step', 'map', 'wish', 'delay'],
    author: 'Lao Tzu',
  },
  {
    id: 10,
    quote: 'It does not matter how slowly you go as long as you do not ___.',
    answer: 'stop',
    options: ['stop', 'run', 'smile', 'plan'],
    author: 'Confucius',
  },
  {
    id: 11,
    quote: 'If opportunity does not knock, build a ___.',
    answer: 'door',
    options: ['door', 'wall', 'chair', 'clock'],
    author: 'Milton Berle',
  },
  {
    id: 12,
    quote: 'The best way out is always ___.',
    answer: 'through',
    options: ['through', 'around', 'backward', 'silent'],
    author: 'Robert Frost',
  },
  {
    id: 13,
    quote: 'You miss 100 percent of the shots you do not ___.',
    answer: 'take',
    options: ['take', 'save', 'count', 'drop'],
    author: 'Wayne Gretzky',
  },
  {
    id: 14,
    quote: 'Turn your wounds into ___.',
    answer: 'wisdom',
    options: ['wisdom', 'rumors', 'anchors', 'clouds'],
    author: 'Oprah Winfrey',
  },
  {
    id: 15,
    quote: 'The secret of getting ahead is getting ___.',
    answer: 'started',
    options: ['started', 'sleepy', 'lucky', 'lost'],
    author: 'Mark Twain',
  },
]

export const realOrFakeQuestions = [
  {
    id: 1,
    quote: 'The journey of a thousand miles begins with one step.',
    answer: 'real',
    author: 'Lao Tzu',
  },
  {
    id: 2,
    quote: 'Discipline is the quiet engine that turns dreams into footsteps.',
    answer: 'ai',
    author: 'AI Generated',
  },
  {
    id: 3,
    quote: 'It always seems impossible until it is done.',
    answer: 'real',
    author: 'Nelson Mandela',
  },
  {
    id: 4,
    quote: 'Momentum is built when small promises stop being negotiable.',
    answer: 'ai',
    author: 'AI Generated',
  },
  {
    id: 5,
    quote: 'Well done is better than well said.',
    answer: 'real',
    author: 'Benjamin Franklin',
  },
  {
    id: 6,
    quote: 'Courage grows louder every time doubt loses the vote.',
    answer: 'ai',
    author: 'AI Generated',
  },
  {
    id: 7,
    quote: 'What we think, we become.',
    answer: 'real',
    author: 'Buddha',
  },
  {
    id: 8,
    quote: 'A focused minute can rescue a scattered morning.',
    answer: 'ai',
    author: 'AI Generated',
  },
  {
    id: 9,
    quote: 'Do what you can, with what you have, where you are.',
    answer: 'real',
    author: 'Theodore Roosevelt',
  },
  {
    id: 10,
    quote: 'The habit you feed today becomes the voice that leads tomorrow.',
    answer: 'ai',
    author: 'AI Generated',
  },
]

export const shuffleItems = (items) => {
  const shuffled = [...items]

  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1))
    const currentItem = shuffled[index]
    shuffled[index] = shuffled[randomIndex]
    shuffled[randomIndex] = currentItem
  }

  return shuffled
}

export const createMissingWordRound = (questionCount = 5) =>
  shuffleItems(missingWordQuestions)
    .slice(0, questionCount)
    .map((question) => ({
      ...question,
      options: shuffleItems(question.options),
    }))

export const createRealOrFakeRound = (questionCount = 5) =>
  shuffleItems(realOrFakeQuestions).slice(0, questionCount)
