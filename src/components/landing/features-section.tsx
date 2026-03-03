
'use client';

import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { BrainCircuit, GitBranch, Lock, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import { useHoliday } from "@/hooks/use-holiday";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";

const features = [
    { title: "Inteligencia Fiscal Predictiva", description: "Nuestra IA analiza cada transacción en tiempo real contra la normativa vigente, identificando y corrigiendo inconsistencias antes de que se conviertan en un problema. Garantizamos un cumplimiento proactivo.", icon: BrainCircuit},
    { title: "Verificación Inmutable (Blockchain)", description: "Sellamos cada registro contable y fiscal en una cadena de bloques. Esto crea una traza de auditoría inmutable, transparente y 100% verificable, eliminando la posibilidad de manipulación.", icon: Lock },
    { title: "Ecosistema de Gestión Unificado", description: "Desde la gestión de un holding hasta la operación de una sucursal, nuestra arquitectura modular se adapta. Activa los módulos que necesites y mantenlos sincronizados en una única plataforma.", icon: GitBranch },
];

export function FeaturesSection() {
    const aboutImage = PlaceHolderImages.find((img) => img.id === "team-meeting-photo");
    const { isHolidayActive } = useHoliday();
    const t = useTranslations('LandingHeader');

    return (
        <section id="tecnologia" className={cn("py-20 md:py-28 bg-background")}>
          <div className="container mx-auto px-4 md:px-6 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div 
                className="space-y-8"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
            >
                <div>
                  <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-semibold mb-4">
                    {t('technology')}
                  </div>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">Tecnología que te Da el Control Absoluto</h2>
                  <p className="mt-4 text-lg text-muted-foreground">
                    Fusionamos IA, Blockchain y una arquitectura unificada para ofrecerte un nivel de gestión y seguridad sin precedentes.
                  </p>
                </div>
                <div className="space-y-6">
                    {features.map((feature, index) => (
                    <motion.div 
                        key={feature.title} 
                        className="flex items-start gap-4"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                    >
                        <div className="p-3 bg-card text-primary rounded-lg mt-1 border">
                          <feature.icon className="h-6 w-6 shrink-0" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-lg">{feature.title}</h4>
                          <p className="text-muted-foreground text-sm">{feature.description}</p>
                        </div>
                    </motion.div>
                    ))}
                </div>
            </motion.div>
             <motion.div 
                className="relative h-[500px] rounded-2xl flex items-center justify-center overflow-hidden border p-2"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                 {aboutImage && <Image 
                    src={aboutImage.imageUrl}
                    alt={aboutImage.description}
                    data-ai-hint={aboutImage.imageHint}
                    fill
                    className="object-cover rounded-xl"
                 />}
                 <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent"></div>
                 <div className="absolute bottom-6 left-6 right-6 p-4 bg-card/80 backdrop-blur-lg rounded-xl border flex items-center gap-4">
                    <ShieldCheck className="h-8 w-8 text-green-500 shrink-0"/>
                    <div>
                        <p className="font-bold">Garantía Cero Riesgo Fiscal</p>
                        <p className="text-xs text-muted-foreground">Nuestro sistema ha procesado más de 10,000 declaraciones con 0% de errores o multas.</p>
                    </div>
                 </div>
            </motion.div>
          </div>
        </section>
    );
}

    
