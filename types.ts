/**
 * MəktəbPlus (BilikPortalı) - TypeScript Verilənlər Arxitekturası
 * Bu fayl sistemin bütün modulları üçün möhkəm tipləri müəyyən edir.
 * Gələcəkdə Supabase PostgreSQL və ya REST API backend-inə birbaşa inteqrasiya üçün idealdır.
 */

// 1. Fənlər və Siniflər
export type SubjectId =
  | 'riyaziyyat'
  | 'fizika'
  | 'kimya'
  | 'biologiya'
  | 'cografiya'
  | 'tarix'
  | 'azerbaycan_dili'
  | 'xarici_dil'
  | 'informatika';

export type GradeLevel = 6 | 7 | 8 | 9 | 10 | 11;

export interface SubjectMeta {
  id: SubjectId;
  name: string;
  shortName: string;
  icon: string;
  color: string;
  badgeBg: string;
  badgeText: string;
  gradient: string;
  description: string;
  totalLessons: number;
  totalExams: number;
}

// 2. Sual Strukturu (LaTeX və AI Chain-of-Thought)
export type QuestionOptionKey = 'A' | 'B' | 'C' | 'D' | 'E';

export interface QuestionOption {
  key: QuestionOptionKey;
  text: string;
}

export interface StepExplanation {
  stepNumber: number;
  title: string;
  content: string;
}

export interface Question {
  id: string;
  text: string;
  subjectId: SubjectId;
  grade: GradeLevel;
  topicTags: string[];
  difficulty: 1 | 2 | 3 | 4 | 5;
  options: QuestionOption[];
  correctKey: QuestionOptionKey;
  explanationCoT: {
    given: string;
    formula: string;
    steps: StepExplanation[];
    conclusion: string;
  };
  points?: number;
  imageUrl?: string;
}

// 3. Dərs və Nəzəriyyə Modulu
export interface FormulaItem {
  id: string;
  name: string;
  latex: string;
  description: string;
}

export interface GlossaryTerm {
  term: string;
  definition: string;
}

export interface SolvedExample {
  id: string;
  question: string;
  solution: string;
}

export interface LessonMiniQuiz {
  questionId: string;
  question: string;
  options: QuestionOption[];
  correctKey: QuestionOptionKey;
  explanation: string;
}

export interface Lesson {
  id: string;
  subjectId: SubjectId;
  grade: GradeLevel;
  unit: string;
  unitOrder: number;
  title: string;
  order: number;
  readTimeMinutes: number;
  difficulty: 1 | 2 | 3 | 4 | 5;
  summary: string;
  theoryMarkdown: string;
  keyFormulas: FormulaItem[];
  glossary: GlossaryTerm[];
  interactiveSim?: {
    enabled: boolean;
    provider: 'phet' | 'custom';
    url: string;
    title: string;
    description: string;
  };
  solvedExamples: SolvedExample[];
  miniQuiz: LessonMiniQuiz[];
}

// 4. BSQ / KSQ İmtahan Vərəqi (ExamSheet)
export type ExamType = 'BSQ' | 'KSQ';
export type Semester = 1 | 2;
export type ExamVariant = 'A' | 'B';

export interface ExamSheet {
  id: string;
  title: string;
  subjectId: SubjectId;
  grade: GradeLevel;
  examType: ExamType;
  semester: Semester;
  ksqNumber?: number;
  variant: ExamVariant;
  durationMinutes: number;
  totalQuestions: number;
  maxScore: number;
  questions: Question[];
  schoolMetadata?: {
    ministry: string;
    schoolName: string;
    academicYear: string;
    teacherSignatureLabel: string;
  };
}

// 5. 1v1 PvP Viktorina Modulu
export type MatchStatus = 'waiting' | 'in_progress' | 'finished';

export interface PvpPlayer {
  id: string;
  name: string;
  avatar: string;
  score: number;
  streak: number;
  answers: {
    questionIndex: number;
    selectedKey: QuestionOptionKey;
    isCorrect: boolean;
    timeSpentSeconds: number;
    pointsEarned: number;
  }[];
}

export interface PvpRoom {
  roomCode: string;
  mode: 'friend' | 'quick_match';
  subjectId?: SubjectId | 'mixed';
  status: MatchStatus;
  currentQuestionIndex: number;
  totalQuestions: number;
  timePerQuestionSeconds: number;
  questions: Question[];
  player1: PvpPlayer;
  player2: PvpPlayer;
  winnerId?: string | 'draw';
}

export interface LeaderboardUser {
  id: string;
  rank: number;
  name: string;
  avatar: string;
  schoolGrade: number;
  points: number;
  wins: number;
  winRate: number;
  badge: string;
}

// 6. Məzmun İdarəetmə Paneli (Ingestion)
export interface NewQuestionInput {
  subjectId: SubjectId;
  grade: GradeLevel;
  topicTags: string;
  difficulty: number;
  text: string;
  options: { [key in QuestionOptionKey]: string };
  correctKey: QuestionOptionKey;
  explanationGiven: string;
  explanationFormula: string;
  explanationSteps: string;
  explanationConclusion: string;
}
