import React, { useState, useEffect, useRef } from 'react';

const AnimatedSection = ({ children, delay = 0 }: {children: React.ReactNode, delay?: number}) => {
    const sectionRef = useRef<HTMLElement>(null);
    const [isVisible, setIsVisible] = useState(false);
    
    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => { 
            if (entry.isIntersecting) { 
                setIsVisible(true); 
                observer.disconnect(); 
            }
        }, { threshold: 0.1 });
        
        const currentRef = sectionRef.current;
        if (currentRef) {
            observer.observe(currentRef);
        }
        
        return () => { 
            if (currentRef) {
                observer.unobserve(currentRef); 
            }
        };
    }, []);
    
    return <section ref={sectionRef} className={`transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: `${delay}ms` }}>{children}</section>;
};

export default AnimatedSection;