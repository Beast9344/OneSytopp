import { useNavigate } from 'react-router-dom';
import AnimatedSection from '../components/AnimatedSection';
import { locations, rentalCategories } from '../data/mockData';
import type { SVGProps } from 'react';

// Re-importing necessary icons for this specific page
const PhoneIcon = (props: SVGProps<SVGSVGElement>) => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>);
const MailIcon = (props: SVGProps<SVGSVGElement>) => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>);

const HomePage = () => {
    const navigate = useNavigate();

    return (
        <div className="space-y-24">
            <section className="relative h-screen flex items-center justify-center text-white text-center px-6 -mt-20">
                <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
                <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover z-[-1]">
                    <source src="https://assets.mixkit.co/videos/preview/mixkit-elderly-man-in-a-wheelchair-looking-at-the-sea-44040-large.mp4" type="video/mp4" />
                </video>
                <div className="relative z-10 container mx-auto">
                    <AnimatedSection>
                        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight">Wheelchair & Scooter Experts</h1>
                        <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto">Your trusted partner for mobility rentals, sales, and repairs.</p>
                    </AnimatedSection>
                </div>
            </section>

            <div className="container mx-auto px-6 py-10 space-y-24">
                <AnimatedSection delay={200}>
                    <div id="locations" className="text-center bg-gray-50 py-16 rounded-xl shadow-lg -mt-48 relative z-10">
                        <h2 className="text-4xl font-bold text-gray-800">Find Equipment Near You</h2>
                        <p className="mt-2 text-lg text-gray-500 mb-8">Select your service area to get started.</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto px-4">
                            {locations.map(loc => (
                                <div key={loc.slug} onClick={() => navigate(`/locations/${loc.slug}`)} className="group relative rounded-xl overflow-hidden shadow-lg cursor-pointer h-64">
                                    <img src={loc.image} alt={loc.name} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"/>
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                    <h3 className="absolute bottom-4 left-4 text-2xl font-bold text-white">{loc.name}</h3>
                                </div>
                            ))}
                        </div>
                    </div>
                </AnimatedSection>

                <section id="rentals">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-gray-800">Rentals</h2>
                        <p className="mt-2 text-lg text-gray-500">A comprehensive selection of mobility equipment for your needs.</p>
                    </div>
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

                <section id="repairs">
                    <AnimatedSection>
                        <div className="text-center mb-12">
                            <h2 className="text-4xl font-bold text-gray-800">Our Repair Services</h2>
                            <p className="mt-2 text-lg text-gray-500">Keeping your equipment in perfect condition.</p>
                        </div>
                        <div className="grid md:grid-cols-2 gap-12 items-center bg-gray-50 p-12 rounded-2xl">
                            <div>
                                <h3 className="text-2xl font-bold text-gray-800 mb-4">Expert Maintenance & Repairs</h3>
                                <p className="text-gray-600 mb-4">We service all major brands of scooters, wheelchairs, and lift chairs. Our certified technicians provide diagnostics, routine maintenance, and complex repairs to ensure your equipment is safe and reliable.</p>
                                <ul className="list-disc list-inside text-gray-600 space-y-2">
                                    <li>Battery Testing & Replacement</li>
                                    <li>Tire & Tube Repair</li>
                                    <li>Motor & Transaxle Service</li>
                                    <li>Joystick & Controller Diagnostics</li>
                                </ul>
                                <button className="mt-6 bg-teal-500 text-white px-6 py-3 rounded-full font-bold hover:bg-teal-600 transform hover:scale-105 transition-all">Get a Repair Quote</button>
                            </div>
                            <div>
                                <img src="https://images.unsplash.com/photo-1562571253-334a24911224?q=80&w=800&auto=format&fit=crop" alt="Repair technician working" className="rounded-xl shadow-xl w-full h-auto object-cover" />
                            </div>
                        </div>
                    </AnimatedSection>
                </section>

                <section id="about">
                    <AnimatedSection>
                        <div className="text-center mb-12">
                            <h2 className="text-4xl font-bold text-gray-800">About OneStop Mobility</h2>
                            <p className="mt-2 text-lg text-gray-500">Your partners in freedom and independence.</p>
                        </div>
                        <div className="grid md:grid-cols-2 gap-12 items-center bg-teal-50 p-12 rounded-2xl">
                            <div>
                                <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Commitment to You</h3>
                                <p className="text-gray-600 mb-4">Since our founding, OneStop Mobility has been dedicated to providing individuals with the highest quality mobility products and services. We believe that mobility is key to independence and quality of life. This core belief drives us to offer a comprehensive range of solutions, from simple rentals to complex repairs and custom sales.</p>
                                <p className="text-gray-600">Our team of compassionate experts is committed to understanding your unique needs and finding the perfect solution to help you regain your freedom and confidence. We're not just a store; we're a community resource dedicated to service and support.</p>
                            </div>
                            <div>
                                <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop" alt="Our dedicated team" className="rounded-xl shadow-xl w-full h-auto object-cover" />
                            </div>
                        </div>
                    </AnimatedSection>
                </section>
                
                <section id="contact">
                     <AnimatedSection>
                        <div className="text-center mb-12">
                            <h2 className="text-4xl font-bold text-gray-800">Contact Us</h2>
                            <p className="mt-2 text-lg text-gray-500">We're here to help. Reach out to us anytime.</p>
                        </div>
                        <div className="grid md:grid-cols-2 gap-12 bg-gray-50 p-12 rounded-2xl">
                            <div className="space-y-6">
                                <div>
                                    <h3 className="text-2xl font-bold text-gray-800 mb-2">Get In Touch</h3>
                                    <p className="flex items-center text-gray-600"><PhoneIcon className="w-5 h-5 mr-3 text-teal-500"/> (555) 123-4567</p>
                                    <p className="flex items-center text-gray-600 mt-2"><MailIcon className="w-5 h-5 mr-3 text-teal-500"/> info@onestopmobility.com</p>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-800 mb-2">Business Hours</h3>
                                    <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
                                    <p className="text-gray-600">Saturday: 10:00 AM - 4:00 PM</p>
                                    <p className="text-gray-600">Sunday: Closed</p>
                                </div>
                            </div>
                            <form className="space-y-4">
                                <div><label htmlFor="contact-name" className="block text-sm font-medium text-gray-700">Full Name</label><input type="text" id="contact-name" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-teal-500 focus:border-teal-500" /></div>
                                <div><label htmlFor="contact-email" className="block text-sm font-medium text-gray-700">Email</label><input type="email" id="contact-email" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-teal-500 focus:border-teal-500" /></div>
                                <div><label htmlFor="contact-message" className="block text-sm font-medium text-gray-700">Message</label><textarea id="contact-message" rows={4} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-teal-500 focus:border-teal-500"></textarea></div>
                                <div className="pt-2"><button type="submit" className="w-full bg-teal-500 text-white py-3 px-4 rounded-full font-bold hover:bg-teal-600 transition-all">Send Message</button></div>
                            </form>
                        </div>
                     </AnimatedSection>
                </section>
            </div>
        </div>
    );
};

export default HomePage;