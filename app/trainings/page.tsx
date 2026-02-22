import { Metadata } from 'next';
import TrainingsContent from '@/components/Trainings/TrainingsContent';

export const metadata: Metadata = {
    title: 'Training Programs | Industry-Focused Skills',
    description: 'Empower your career with Sysbreeze training programs. We offer specialized courses in HR, Digital Marketing, Python Fullstack, AI & Robotics, MERN Stack, Data Science, and Machine Learning.',
    openGraph: {
        title: 'Training Programs | Sysbreeze',
        description: 'Master new skills with our expert-led training programs in IT and management.',
    },
};
export default function TrainingsPage() {
    return <TrainingsContent />;
}
