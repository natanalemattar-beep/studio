
'use client';

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";
import { useHoliday } from "@/hooks/use-holiday";
import { cn } from "@/lib/utils";
import { FestiveEffect } from "../ui/confetti-effect";

export function HeroSection() {
  const t = useTranslations('HeroSection');
  const { activeHoliday, isHolidayActive } = useHoliday();

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      const href = e.currentTarget.href;
      const targetId = href.split('#')[1];
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
          const yOffset = -80; // Offset for sticky header
          const y = targetElement.getBoundingClientRect().top + window.scrollY + yOffset;
          window.scrollTo({top: y, behavior: 'smooth'});
      }
  };

  return (
    <section id="inicio" className={cn(
        "relative min-h-[85vh] flex items-center justify-center overflow-hidden py-24 sm:py-32",
        isHolidayActive && "bg-transparent"
    )}>
      {isHolidayActive && activeHoliday && <FestiveEffect type={activeHoliday.effect} />}
      
      <div className="container mx-auto px-4 md:px-6 z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter text-balance leading-[1.1] mb-6">
              {t('title')}
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground text-balance max-w-3xl mx-auto leading-relaxed mb-10">
              {t('subtitle')}
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button asChild size="lg" className="text-lg h-14 px-8 font-bold shadow-lg btn-3d-primary rounded-xl">
                    <a href="#contacto" onClick={handleScroll}>{t('cta_main')} <ArrowRight className="ml-2 h-5 w-5"/></a>
                </Button>
                <Button asChild size="lg" variant="secondary" className="text-lg h-14 px-8 rounded-xl">
                    <a href="#servicios" onClick={handleScroll}>{t('cta_secondary')}</a>
                </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
