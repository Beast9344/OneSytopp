import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import AnimatedSection from '../components/AnimatedSection';
import { locationDetails, rentalCategories } from '../data/mockData';

const ChevronLeftIcon = (props: React.SVGProps<SVGSVGElement>) => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><polyline points="15 18 9 12 15 6"></polyline></svg>);
const MapPinIcon = (props: React.SVGProps<SVGSVGElement>) => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>);
const PhoneIcon = (props: React.SVGProps<SVGSVGElement>) => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>);
const ClockIcon = (props: React.SVGProps<SVGSVGElement>) => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>);

const LocationPage = () => {
    const { slug } = useParams<{ slug: string }>();
    const navigate = useNavigate();
    const data = locationDetails[slug as keyof typeof locationDetails];

    if (!data) {
        return <div className="pt-32 text-center">Location not found.</div>;
    }
    
    const mapUrl = `https://maps.google.com/maps?q=${encodeURIComponent(data.mapQuery)}&t=&z=13&ie=UTF8&iwloc=&output=embed`;

    return(
        <main className="container mx-auto px-6 py-20 pt-32">
            <AnimatedSection>
                <Link to="/" className="flex items-center text-gray-500 hover:text-teal-600 font-semibold mb-8"><ChevronLeftIcon className="w-5 h-5 mr-2" />Back to Home</Link>
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-800">{data.name}</h1>
                        <div className="mt-6 space-y-4 text-lg text-gray-700">
                            <p className="flex items-center"><MapPinIcon className="w-6 h-6 mr-3 text-teal-500"/> {data.address}</p>
                            <p className="flex items-center"><PhoneIcon className="w-6 h-6 mr-3 text-teal-500"/> {data.phone}</p>
                            <p className="flex items-center"><ClockIcon className="w-6 h-6 mr-3 text-teal-500"/> {data.hours}</p>
                        </div>
                    </div>
                    <div className="h-80 lg:h-96 rounded-2xl overflow-hidden shadow-2xl">
                        <iframe src={mapUrl} width="100%" height="100%" style={{ border: 0 }} allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade" title={`${data.name} Location`}></iframe>
                    </div>
                </div>
            </AnimatedSection>
            <section id="location-rentals" className="mt-24">
                <div className="text-center mb-12"><h2 className="text-4xl font-bold text-gray-800">Rentals Available in {data.name}</h2></div>
                <AnimatedSection>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                        {rentalCategories.map((item) => (
                            <div key={item.slug} onClick={() => navigate(`/rentals/${item.slug}`)} className="group text-center cursor-pointer">
                                <div className="relative bg-gray-100 rounded-xl overflow-hidden p-4 h-64 flex items-center justify-center transform group-hover:shadow-xl group-hover:-translate-y-2 transition-all duration-300">
                                    <img src={item.image} alt={item.name} className="max-h-full max-w-full object-contain" />
                                </div>
                                <h3 className="mt-4 text-xl font-bold text-gray-800">{item.name}</h3>
                            </div>
                        ))}
                    </div>
                </AnimatedSection>
            </section>
        </main>
    );
};

export default LocationPage;
