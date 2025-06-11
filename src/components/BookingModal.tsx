
import React from 'react';
import { rentalCategories } from '../data/mockData';

const XIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
);

const BookingModal = ({ isOpen, onClose }: {isOpen: boolean, onClose: () => void}) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-xl shadow-2xl p-8 max-w-lg w-full relative">
                <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-800"><XIcon /></button>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Book a Rental</h3>
                <form className="space-y-4">
                    <div><label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label><input type="text" id="name" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-teal-500 focus:border-teal-500" /></div>
                    <div><label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label><input type="email" id="email" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-teal-500 focus:border-teal-500" /></div>
                    <div><label htmlFor="equipment" className="block text-sm font-medium text-gray-700">Equipment Needed</label><select id="equipment" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-teal-500 focus:border-teal-500"><option>Select Equipment...</option>{rentalCategories.map(cat => <option key={cat.slug} value={cat.slug}>{cat.name}</option>)}</select></div>
                    <div className="grid grid-cols-2 gap-4">
                        <div><label htmlFor="start-date" className="block text-sm font-medium text-gray-700">Start Date</label><input type="date" id="start-date" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-teal-500 focus:border-teal-500" /></div>
                        <div><label htmlFor="end-date" className="block text-sm font-medium text-gray-700">End Date</label><input type="date" id="end-date" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-teal-500 focus:border-teal-500" /></div>
                    </div>
                    <div className="pt-4"><button type="submit" className="w-full bg-teal-500 text-white py-3 px-4 rounded-full font-bold hover:bg-teal-600 transition-all">Submit Request</button></div>
                </form>
            </div>
        </div>
    );
};

export default BookingModal;
