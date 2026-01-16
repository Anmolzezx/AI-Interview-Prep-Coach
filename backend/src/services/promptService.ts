/**
 * Prompt Engineering Service
 * Creates structured prompts for different AI interactions
 */

interface FeedbackResponse {
    score: number;
    strengths: string[];
    weaknesses: string[];
    improvements: string[];
    starAnalysis: {
        situation: string;
        task: string;
        action: string;
        result: string;
    };
    exampleAnswer: string;
}

/**
 * Generate prompt for answer feedback with STAR analysis
 */
export const generateFeedbackPrompt = (question: string, answer: string): string => {
    return `You are an expert interview coach. Analyze this interview answer using the STAR method (Situation, Task, Action, Result).

Question: "${question}"

Candidate's Answer: "${answer}"

Provide detailed feedback in JSON format with the following structure:
{
  "score": <number 0-10>,
  "strengths": [<list of 2-3 strengths>],
  "weaknesses": [<list of 2-3 areas for improvement>],
  "improvements": [<list of 2-3 specific suggestions>],
  "starAnalysis": {
    "situation": "<analysis of situation component>",
    "task": "<analysis of task component>",
    "action": "<analysis of action component>",
    "result": "<analysis of result component>"
  },
  "exampleAnswer": "<a better version of the answer incorporating improvements>"
}

Be constructive, specific, and encouraging. Focus on actionable feedback.`;
};

/**
 * Generate prompt for creating interview questions
 */
export const generateQuestionPrompt = (
    category: string,
    difficulty: string,
    topic?: string
): string => {
    const topicContext = topic ? `related to ${topic}` : '';

    return `You are an expert technical interviewer. Generate a ${difficulty} difficulty ${category} interview question ${topicContext}.

Requirements:
- The question should be realistic and commonly asked in interviews
- Difficulty: ${difficulty} (easy/medium/hard)
- Category: ${category} (behavioral/technical/system-design)
${topic ? `- Topic: ${topic}` : ''}

Provide the response in JSON format:
{
  "question": "<the interview question>",
  "context": "<brief context or what to focus on>",
  "expectedPoints": [<list of 3-4 key points a good answer should cover>]
}`;
};

/**
 * Generate prompt for resume-based questions
 */
export const generateResumeQuestionPrompt = (
    resumeText: string,
    projectName?: string
): string => {
    const projectContext = projectName
        ? `Focus specifically on the project: "${projectName}"`
        : 'Choose any interesting project from the resume';

    return `You are an experienced technical interviewer reviewing a candidate's resume.

Resume Content:
${resumeText}

${projectContext}

Generate a technical interview question based on their experience. The question should:
- Be specific to their actual work
- Test deep technical understanding
- Be challenging but fair

Provide the response in JSON format:
{
  "question": "<the interview question>",
  "project": "<which project/experience this relates to>",
  "technicalAreas": [<list of technical areas being tested>]
}`;
};

/**
 * Generate prompt for STAR method analysis only
 */
export const generateSTARAnalysisPrompt = (answer: string): string => {
    return `Analyze this interview answer using the STAR method framework.

Answer: "${answer}"

Identify and extract:
- Situation: The context or background
- Task: The challenge or responsibility
- Action: The specific steps taken
- Result: The outcome or impact

Provide analysis in JSON format:
{
  "situation": "<identified situation or 'Not clearly stated'>",
  "task": "<identified task or 'Not clearly stated'>",
  "action": "<identified actions or 'Not clearly stated'>",
  "result": "<identified results or 'Not clearly stated'>",
  "completeness": <percentage 0-100>,
  "suggestions": [<list of suggestions to improve STAR structure>]
}`;
};

/**
 * Generate prompt for company-specific questions
 */
export const generateCompanyQuestionPrompt = (
    company: string,
    role: string
): string => {
    return `You are preparing a candidate for an interview at ${company} for a ${role} position.

Generate a realistic interview question that ${company} is known to ask, considering:
- Company culture and values
- Technical stack commonly used
- Role-specific expectations

Provide the response in JSON format:
{
  "question": "<the interview question>",
  "companyContext": "<why this question is relevant to ${company}>",
  "keyPoints": [<list of important points to address>]
}`;
};

export type { FeedbackResponse };
