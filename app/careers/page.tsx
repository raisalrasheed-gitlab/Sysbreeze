import { Metadata } from 'next';
import CareersContent from '@/components/Careers/CareersContent';

export const metadata: Metadata = {
    title: 'Careers | Join the Sysbreeze Team',
    description: 'Explore career opportunities at Sysbreeze. Join a passionate team of developers, designers, and consultants dedicated to building high-quality digital solutions.',
    openGraph: {
        title: 'Careers | Sysbreeze',
        description: 'Build your career with us. We are looking for talented individuals to join our growing team.',
    },
};

export default function CareersPage() {
    return <CareersContent />;
}
