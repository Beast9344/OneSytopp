export const rentalCategories = [
    { slug: 'electric-scooters', name: 'Electric Scooters', image: 'https://www.onestopmobility.com/wp-content/uploads/2018/09/Transportable-Scooter.jpg' },
    { slug: 'wheelchairs', name: 'Wheelchairs', image: 'https://images.unsplash.com/photo-1614624384042-4b36c4b2a3d0?q=80&w=800&auto=format&fit=crop' },
    { slug: 'strollers', name: 'Strollers', image: 'https://images.unsplash.com/photo-1588702547919-26089e690ecc?w=500&q=80' },
    { slug: 'lift-chairs', name: 'Lift Chairs', image: 'https://images.unsplash.com/photo-1593168743939-509531548a8a?q=80&w=800&auto=format&fit=crop' },
    { slug: 'knee-walkers', name: 'Knee Walkers', image: 'https://placehold.co/800x800/e2e8f0/64748b?text=Knee+Walker' },
    { slug: 'walking-aids', name: 'Walking Aids', image: 'https://images.unsplash.com/photo-1628882298920-567405a782a1?q=80&w=800&auto=format&fit=crop' },
  ];
  
  export const productDetails: {[key: string]: any} = {
    'electric-scooters': { title: "Electric Scooter Rentals", description: "Whether you're traveling or simply need temporary mobility assistance, our electric scooters provide the reliability and freedom you need.", items: [{ name: 'Standard Mobility Scooter', image: 'https://www.onestopmobility.com/wp-content/uploads/2018/09/Transportable-Scooter.jpg', specs: ['300 lbs weight capacity', 'Up to 12-mile range'], pricing: { day: 45, week: 175, month: 450 } }] },
    'wheelchairs': { title: "Wheelchair Rentals", description: "Our wheelchairs are designed for comfort, safety, and ease of use.", items: [{ name: 'Standard Wheelchair', image: 'https://images.unsplash.com/photo-1599599810694-b5b37304c047?q=80&w=800&auto=format&fit=crop', specs: ['18" or 20" seat width', '300 lbs weight capacity'], pricing: { day: 25, week: 90, month: 225 } }] },
    'strollers': { title: "Stroller Rentals", description: "Make your family outing easier with our comfortable and easy-to-use strollers.", items: [{ name: 'Standard Stroller', image: 'https://images.unsplash.com/photo-1596541249918-a6345d94726b?q=80&w=800&auto=format&fit=crop', specs: ['Lightweight and foldable', 'Large storage basket'], pricing: { day: 25, week: 90, month: 250 } }] },
    'lift-chairs': { title: "Lift Chair Rentals", description: "Our lift chairs offer a comfortable seating solution with a powered lifting mechanism.", items: [{ name: '3-Position Lift Chair', image: 'https://images.unsplash.com/photo-1628771065518-5d824131553c?q=80&w=800&auto=format&fit=crop', specs: ['Quiet and smooth lift system', 'Multiple recline positions'], pricing: { day: 40, week: 150, month: 400 } }] },
    'knee-walkers': { title: "Knee Walker Rentals", description: "An excellent mobility device for foot or ankle injuries, providing a stable alternative to crutches.", items: [{ name: 'Standard Knee Walker', image: 'https://placehold.co/800x800/e2e8f0/64748b?text=Knee+Walker', specs: ['Adjustable handlebar and knee pad height', 'Includes basket'], pricing: { day: 20, week: 70, month: 150 } }] },
    'walking-aids': { title: "Walking Aid Rentals", description: "Gain stability and support with our range of walkers and rollators.", items: [{ name: 'Rollator Walker', image: 'https://images.unsplash.com/photo-1628882298920-567405a782a1?q=80&w=800&auto=format&fit=crop', specs: ['Padded seat and backrest', 'Locking hand brakes'], pricing: { day: 15, week: 50, month: 120 } }] }
  };
  
  export const locations = [
      { slug: 'phoenix', name: 'Phoenix, AZ', image: 'https://images.unsplash.com/photo-1586514257210-912c22c04dba?q=80&w=800&auto=format&fit=crop' },
      { slug: 'anaheim', name: 'Anaheim, CA', image: 'https://images.unsplash.com/photo-1596700245434-717646a56e39?q=80&w=800&auto=format&fit=crop' },
      { slug: 'los-angeles', name: 'Los Angeles, CA', image: 'https://images.unsplash.com/photo-1541480601022-230870f0b4f4?q=80&w=800&auto=format&fit=crop' },
      { slug: 'san-diego', name: 'San Diego, CA', image: 'https://images.unsplash.com/photo-1614088444432-62432a766a55?q=80&w=800&auto=format&fit=crop' }
  ];
  
  export const locationDetails: {[key: string]: any} = {
      phoenix: { name: 'Phoenix, AZ', address: '123 Sun Valley Rd, Phoenix, AZ 85001', phone: '(602) 555-0101', hours: 'Mon-Sat: 9am - 6pm', image: 'https://images.unsplash.com/photo-1586514257210-912c22c04dba?q=80&w=1200&auto=format&fit=crop', mapQuery: 'Phoenix, AZ' },
      anaheim: { name: 'Anaheim, CA', address: '456 Disney Way, Anaheim, CA 92802', phone: '(714) 555-0102', hours: 'Mon-Sun: 8am - 8pm', image: 'https://images.unsplash.com/photo-1596700245434-717646a56e39?q=80&w=1200&auto=format&fit=crop', mapQuery: 'Anaheim, CA' },
      'los-angeles': { name: 'Los Angeles, CA', address: '789 Hollywood Blvd, Los Angeles, CA 90028', phone: '(213) 555-0103', hours: 'Mon-Sat: 10am - 7pm', image: 'https://images.unsplash.com/photo-1541480601022-230870f0b4f4?q=80&w=1200&auto=format&fit=crop', mapQuery: 'Los Angeles, CA' },
      'san-diego': { name: 'San Diego, CA', address: '101 Harbor Dr, San Diego, CA 92101', phone: '(619) 555-0104', hours: 'Mon-Sun: 9am - 7pm', image: 'https://images.unsplash.com/photo-1614088444432-62432a766a55?q=80&w=1200&auto=format&fit=crop', mapQuery: 'San Diego, CA' }
  };
  