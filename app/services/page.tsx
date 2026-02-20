import { Metadata } from 'next';
import ServicesContent from '@/components/Services/ServicesContent';

export const metadata: Metadata = {
    title: 'Our Services | Professional IT & Business Solutions',
    description: 'Explore the wide range of services offered by Sysbreeze, including Branding, Digital Marketing, HR Management, Website Design, Ecommerce Development, and Mobile Applications.',
    openGraph: {
        title: 'Our Services | Sysbreeze',
        description: 'Transform your business with our professional IT and consulting services.',
    },
};

export default function ServicesPage() {
    return <ServicesContent />;
}
