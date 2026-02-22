import { Metadata } from 'next';
import ServicesContent from '@/components/Services/ServicesContent';

export const metadata: Metadata = {
    title: "IT Services & Business Solutions | Sysbreeze Technologies",

    description:
        "Sysbreeze Technologies provides professional IT services, digital marketing, HR services, website development, ecommerce solutions and mobile app development for businesses.",

    keywords:
        "IT services, digital marketing, website development, HR services, branding services, ecommerce development",

    openGraph: {
        title: "Professional IT Services | Sysbreeze Technologies",

        description:
            "Grow your business with Sysbreeze Technologies IT and digital solutions."
    }
};

export default function ServicesPage() {
    return <ServicesContent />;
}
