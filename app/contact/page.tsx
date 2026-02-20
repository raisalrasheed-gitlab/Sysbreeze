import { Metadata } from 'next';
import ContactContent from '@/components/Contact/ContactContent';

export const metadata: Metadata = {
    title: 'Contact Us | Get in Touch with Sysbreeze',
    description: 'Have a project in mind? Contact Sysbreeze for professional business consulting, IT services, and training programs. We are located at Kinfra Techno Park, Calicut.',
    openGraph: {
        title: 'Contact Us | Sysbreeze',
        description: 'Let\'s discuss your next project. Reach out to our team today.',
    },
};

export default function ContactPage() {
    return <ContactContent />;
}
