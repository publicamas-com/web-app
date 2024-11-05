'use client';

import React, {
  createContext,
  useEffect,
  useId,
  useRef,
  useState,
} from 'react';
import { usePathname } from 'next/navigation';
import { Footer } from './Footer';
import { useReducedMotion } from 'framer-motion';
import { HeroSection } from '@/components/HeroSection';
import { MobileMenu } from '@/components/MobileMenu';

const RootLayoutContext = createContext<{
  logoHovered: boolean
  setLogoHovered: React.Dispatch<React.SetStateAction<boolean>>
} | null>(null);

function RootLayoutInner({
                           children,
                         }: {
  children: React.ReactNode
}) {
  let panelId = useId();
  let [expanded, setExpanded] = useState(false);
  let openRef = useRef<React.ElementRef<'button'>>(null);
  let closeRef = useRef<React.ElementRef<'button'>>(null);
  let navRef = useRef<React.ElementRef<'div'>>(null);
  let shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    function onClick(event: MouseEvent) {
      if (
        event.target instanceof HTMLElement &&
        event.target.closest('a')?.href === window.location.href
      ) {
        setExpanded(false);
      }
    }

    window.addEventListener('click', onClick);

    return () => {
      window.removeEventListener('click', onClick);
    };
  }, []);

  return (
    <div className="bg-white">
      <MobileMenu />
      <HeroSection />
      {children}
      <Footer />
    </div>
  );
}

export function RootLayout({ children }: { children: React.ReactNode }) {
  let pathname = usePathname();
  let [logoHovered, setLogoHovered] = useState(false);

  return (
    <RootLayoutContext.Provider value={{ logoHovered, setLogoHovered }}>
      <RootLayoutInner key={pathname}>{children}</RootLayoutInner>
    </RootLayoutContext.Provider>
  );
}
