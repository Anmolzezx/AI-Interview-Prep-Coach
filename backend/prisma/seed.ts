import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    console.log('🌱 Starting database seed...');

    // Seed Questions
    const questions = [
        // Behavioral Questions
        {
            category: 'behavioral',
            difficulty: 'medium',
            question: 'Tell me about a time when you had to deal with a difficult team member. How did you handle it?',
            tags: ['teamwork', 'conflict-resolution', 'communication'],
        },
        {
            category: 'behavioral',
            difficulty: 'medium',
            question: 'Describe a situation where you had to meet a tight deadline. What steps did you take?',
            tags: ['time-management', 'pressure', 'planning'],
        },
        {
            category: 'behavioral',
            difficulty: 'hard',
            question: 'Tell me about a time when you failed. What did you learn from it?',
            tags: ['failure', 'learning', 'growth-mindset'],
        },
        {
            category: 'behavioral',
            difficulty: 'easy',
            question: 'Why do you want to work for our company?',
            tags: ['motivation', 'company-research'],
        },
        {
            category: 'behavioral',
            difficulty: 'medium',
            question: 'Describe a time when you had to learn a new technology quickly. How did you approach it?',
            tags: ['learning', 'adaptability', 'technical-skills'],
        },

        // Technical Questions - General
        {
            category: 'technical',
            difficulty: 'easy',
            question: 'What is the difference between let, const, and var in JavaScript?',
            tags: ['javascript', 'fundamentals', 'variables'],
        },
        {
            category: 'technical',
            difficulty: 'medium',
            question: 'Explain the concept of closures in JavaScript with an example.',
            tags: ['javascript', 'closures', 'scope'],
        },
        {
            category: 'technical',
            difficulty: 'hard',
            question: 'How would you optimize a React application for better performance?',
            tags: ['react', 'performance', 'optimization'],
        },
        {
            category: 'technical',
            difficulty: 'medium',
            question: 'What is the difference between SQL and NoSQL databases? When would you use each?',
            tags: ['database', 'sql', 'nosql'],
        },
        {
            category: 'technical',
            difficulty: 'hard',
            question: 'Explain how you would design a scalable URL shortener service.',
            tags: ['system-design', 'scalability', 'architecture'],
        },

        // Company-Specific - Google
        {
            category: 'company-specific',
            difficulty: 'hard',
            question: 'How would you design Google Maps?',
            company: 'Google',
            tags: ['system-design', 'scalability', 'google'],
        },
        {
            category: 'company-specific',
            difficulty: 'medium',
            question: 'Why Google? What excites you about working here?',
            company: 'Google',
            tags: ['motivation', 'google', 'culture'],
        },

        // Company-Specific - Amazon
        {
            category: 'company-specific',
            difficulty: 'medium',
            question: 'Tell me about a time when you had to make a decision with incomplete information.',
            company: 'Amazon',
            tags: ['leadership-principles', 'decision-making', 'amazon'],
        },
        {
            category: 'company-specific',
            difficulty: 'medium',
            question: 'Describe a time when you went above and beyond for a customer.',
            company: 'Amazon',
            tags: ['customer-obsession', 'amazon', 'leadership-principles'],
        },

        // Company-Specific - Microsoft
        {
            category: 'company-specific',
            difficulty: 'medium',
            question: 'How would you improve Microsoft Teams?',
            company: 'Microsoft',
            tags: ['product-thinking', 'microsoft', 'improvement'],
        },

        // Resume-Based (Generic)
        {
            category: 'resume-based',
            difficulty: 'medium',
            question: 'Walk me through your most challenging project. What was your role and what did you achieve?',
            tags: ['projects', 'achievements', 'technical-depth'],
        },
        {
            category: 'resume-based',
            difficulty: 'medium',
            question: 'Tell me about a technical decision you made in one of your projects. Why did you make that choice?',
            tags: ['technical-decisions', 'architecture', 'reasoning'],
        },
        {
            category: 'resume-based',
            difficulty: 'easy',
            question: 'What technologies are you most comfortable with and why?',
            tags: ['technical-skills', 'expertise'],
        },
    ];

    console.log('📝 Seeding questions...');
    for (const question of questions) {
        await prisma.question.create({
            data: question,
        });
    }

    console.log(`✅ Created ${questions.length} questions`);
    console.log('🎉 Database seed completed!');
}

main()
    .catch((e) => {
        console.error('❌ Error seeding database:', e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
