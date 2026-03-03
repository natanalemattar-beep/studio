
'use client';

import { motion } from "framer-motion";
import { useHoliday } from "@/hooks/use-holiday";
import { cn } from "@/lib/utils";
import { Card, CardHeader, CardContent, CardTitle } from "../ui/card";
import { loginOptions } from "@/lib/login-options";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";

export function ServicesSection() {
    const { isHolidayActive } = useHoliday();
    const t = useTranslations('LandingHeader');
    
    return (
        <section id="servicios" className={cn("py-20 md:py-28 bg-background/50")}>
            <div className="container mx-auto px-4 md:px-6">
                <motion.div 
                    className="text-center max-w-3xl mx-auto mb-12 md:mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter">{t('ecosystem')}</h2>
                    <p className="mt-4 text-lg text-muted-foreground text-balance">Cada módulo es un portal independiente e integrado. Haz clic en cualquier tarjeta para explorar las herramientas de cada departamento.</p>
                </motion.div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {loginOptions.map((item, index) => (
                        <motion.div
                            key={item.label} 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ duration: 0.5, delay: 0.05 * index }}
                        >
                            <Link href={item.href} className="block h-full group outline-none">
                                <Card className={cn(
                                    "h-full transition-all duration-300 border-2 border-transparent hover:border-primary/40 bg-card hover:bg-card/80 hover:shadow-2xl hover:shadow-primary/10 flex flex-col relative overflow-hidden group-focus-visible:ring-2 group-focus-visible:ring-primary",
                                    isHolidayActive ? "bg-card/50 backdrop-blur-sm" : "bg-card"
                                )}>
                                    
                                    <CardHeader className="flex-row items-center gap-4 relative z-10 p-6 pb-4">
                                        <div className="p-3 bg-primary/10 text-primary rounded-xl w-fit group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300 border border-primary/10">
                                            <item.icon className="h-6 w-6" />
                                        </div>
                                        <CardTitle className="text-lg group-hover:text-primary transition-colors duration-300 font-semibold">{item.label}</CardTitle>
                                    </CardHeader>
                                    
                                    <CardContent className="flex-grow relative z-10 px-6 pb-6">
                                        <p className="text-muted-foreground text-sm leading-relaxed">
                                            {item.description}
                                        </p>
                                    </CardContent>
                                    
                                    <div className="px-6 pb-6 mt-auto relative z-10">
                                        <div className="flex items-center text-xs font-bold uppercase tracking-wider text-muted-foreground group-hover:text-primary transition-all duration-300">
                                            Explorar Módulo <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                        </div>
                                    </div>
                                </Card>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

    
