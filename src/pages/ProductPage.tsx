
import { useParams, Link } from 'react-router-dom';
import AnimatedSection from '../components/AnimatedSection';
import { productDetails } from '../data/mockData';
import type { SVGProps } from 'react';

const ChevronLeftIcon = (props: SVGProps<SVGSVGElement>) => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><polyline points="15 18 9 12 15 6"></polyline></svg>);

const ProductPage = () => {
    const { slug } = useParams<{ slug: string }>();
    const data = productDetails[slug as keyof typeof productDetails];

    if (!data) {
        return <div className="pt-32 text-center">Product not found.</div>;
    }

    return (
        <main className="container mx-auto px-6 py-20 pt-32">
            <AnimatedSection>
                <Link to="/" className="flex items-center text-gray-500 hover:text-teal-600 font-semibold mb-8">
                    <ChevronLeftIcon className="w-5 h-5 mr-2" />
                    Back to Rentals
                </Link>
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-800">{data.title}</h1>
                    <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">{data.description}</p>
                </div>
                <div className="space-y-12">
                    {data.items.map((item: any, index: number) => (
                        <div key={index} className="grid md:grid-cols-12 gap-8 items-center bg-gray-50 p-8 rounded-2xl shadow-lg">
                            <div className="md:col-span-4"><img src={item.image} alt={item.name} className="w-full h-auto object-cover rounded-xl shadow-md" /></div>
                            <div className="md:col-span-5">
                                <h2 className="text-3xl font-bold text-gray-800">{item.name}</h2>
                                <ul className="mt-4 space-y-2 text-gray-600 list-disc list-inside">
                                    {item.specs.map((spec: string) => <li key={spec}>{spec}</li>)}
                                </ul>
                            </div>
                            <div className="md:col-span-3 text-center md:text-left bg-white p-6 rounded-xl shadow-inner">
                                <div className="text-gray-500 font-semibold">Daily</div>
                                <div className="text-4xl font-bold text-teal-600">${item.pricing.day}</div>
                                <div className="text-sm text-gray-500 mt-2">Weekly: ${item.pricing.week} | Monthly: ${item.pricing.month}</div>
                                <button className="mt-4 w-full bg-teal-500 text-white px-6 py-3 rounded-full font-bold hover:bg-teal-600 transform hover:scale-105 transition-all">Rent Now</button>
                            </div>
                        </div>
                    ))}
                </div>
            </AnimatedSection>
        </main>
    );
};

export default ProductPage;
