import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import BookingModal from './BookingModal';

const Layout = () => {
    const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

    return (
        <div className="bg-white text-gray-700 font-sans">
            <Header onBookNow={() => setIsBookingModalOpen(true)} />
            <BookingModal isOpen={isBookingModalOpen} onClose={() => setIsBookingModalOpen(false)} />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default Layout;