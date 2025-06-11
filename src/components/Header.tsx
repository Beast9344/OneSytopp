import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { rentalCategories, locations } from '../data/mockData';
import type { SVGProps } from 'react';

const ChevronDownIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><polyline points="6 9 12 15 18 9"></polyline></svg>
);

const Header = ({ onBookNow }: {onBookNow: () => void}) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isRentalsDropdownOpen, setRentalsDropdownOpen] = useState(false);
    const [isLocationsDropdownOpen, setLocationsDropdownOpen] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleScrollLink = (sectionId: string) => {
        navigate('/');
        setTimeout(() => {
            document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
    };

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg py-2' : 'bg-transparent py-4'}`}>
            <div className="container mx-auto px-6 flex justify-between items-center">
                <Link to="/" className={`font-bold text-2xl transition-colors ${isScrolled ? 'text-gray-800' : 'text-white'}`}>OneStop Mobility</Link>
                <nav className="hidden md:flex space-x-2 items-center">
                    <div className="relative" onMouseEnter={() => setRentalsDropdownOpen(true)} onMouseLeave={() => setRentalsDropdownOpen(false)}>
                        <button className={`flex items-center transition-colors px-3 py-2 rounded-md ${isScrolled ? 'text-gray-600 hover:text-teal-500' : 'text-white hover:text-gray-200'}`}>
                            Rentals <ChevronDownIcon className="ml-1"/>
                        </button>
                        {isRentalsDropdownOpen && (
                            <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-md shadow-lg py-2 z-50">
                                {rentalCategories.map(cat => (
                                    <Link to={`/rentals/${cat.slug}`} key={cat.slug} onClick={() => setRentalsDropdownOpen(false)} className="block px-4 py-2 text-gray-700 hover:bg-teal-50">{cat.name}</Link>
                                ))}
                            </div>
                        )}
                    </div>
                    <button onClick={() => handleScrollLink('repairs')} className={`transition-colors px-3 py-2 rounded-md ${isScrolled ? 'text-gray-600 hover:text-teal-500' : 'text-white hover:text-gray-200'}`}>Repairs</button>
                    <button onClick={() => handleScrollLink('about')} className={`transition-colors px-3 py-2 rounded-md ${isScrolled ? 'text-gray-600 hover:text-teal-500' : 'text-white hover:text-gray-200'}`}>About Us</button>
                    <div className="relative" onMouseEnter={() => setLocationsDropdownOpen(true)} onMouseLeave={() => setLocationsDropdownOpen(false)}>
                         <button className={`flex items-center transition-colors px-3 py-2 rounded-md ${isScrolled ? 'text-gray-600 hover:text-teal-500' : 'text-white hover:text-gray-200'}`}>
                            Our Locations <ChevronDownIcon className="ml-1"/>
                        </button>
                        {isLocationsDropdownOpen && (
                            <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-md shadow-lg py-2 z-50">
                                {locations.map(loc => (
                                    <Link to={`/locations/${loc.slug}`} key={loc.slug} onClick={() => setLocationsDropdownOpen(false)} className="block px-4 py-2 text-gray-700 hover:bg-teal-50">{loc.name}</Link>
                                ))}
                            </div>
                        )}
                    </div>
                    <button onClick={() => handleScrollLink('contact')} className={`transition-colors px-3 py-2 rounded-md ${isScrolled ? 'text-gray-600 hover:text-teal-500' : 'text-white hover:text-gray-200'}`}>Contact Us</button>
                </nav>
                <button onClick={onBookNow} className="bg-teal-500 text-white px-5 py-2 rounded-full font-semibold hover:bg-teal-600 transform hover:scale-105 transition-all">
                    Book Now
                </button>
            </div>
        </header>
    );
};

export default Header;