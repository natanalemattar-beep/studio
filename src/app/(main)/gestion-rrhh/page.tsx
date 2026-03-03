'use client';

import { LandingHeader } from "@/components/landing/landing-header";
import { Footer } from "@/components/landing/footer";
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Briefcase, Users, FileSignature, UserPlus } from "lucide-react";
import { motion } from 'framer-motion';

const features = [
    {
        icon: Users,
        title: "Gestión de Nómina Automatizada",
        description: "Calcula sueldos, deducciones, aportes parafiscales (IVSS, FAOV) y prestaciones sociales con precisión milimétrica y en minutos."
    },
    {
        icon: FileSignature,
        title: "Administración de Personal",
        description: "Gestiona el ciclo de vida completo del empleado: contratos, vacaciones, reposos y control de asistencia, todo en un solo lugar."
    },
    {
        icon: UserPlus,
        title: "Portal de Reclutamiento",
        description: "Publica vacantes, gestiona candidatos y agiliza el proceso de selección para atraer al mejor talento a tu empresa."
    },
    {
        icon: Briefcase,
        title: "Cumplimiento Laboral Garantizado",
        description: "Genera todos los libros laborales obligatorios (horas extras, vacaciones) y mantente siempre al día con la legislación venezolana."
    }
];

export default function GestionRrhhPage() {
  return (
    <>
      <LandingHeader />
      <main className="pt-24 bg-background">
        <section className="py-16 md:py-20 text-center">
          <div className="container">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter mb-4">Módulo de Gestión de RR.HH.</h1>
                <p className="max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground">
                  El talento es tu activo más valioso. Adminístralo, motívalo y cumple con la ley sin esfuerzo.
                </p>
            </motion.div>
          </div>
        </section>

        <section className="pb-20">
            <div className="container">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((feature, index) => (
                         <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                        >
                            <Card className="bg-card/50 backdrop-blur-sm h-full">
                                <CardHeader>
                                    <div className="p-3 bg-primary/10 rounded-lg w-fit mb-4">
                                        <feature.icon className="h-6 w-6 text-primary" />
                                    </div>
                                    <CardTitle>{feature.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground">{feature.description}</p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
        
        <section className="pb-20">
            <div className="container text-center">
                 <Card className="max-w-2xl mx-auto bg-primary/10 border-primary/20">
                    <CardHeader>
                        <CardTitle>Potencia tu Equipo Humano</CardTitle>
                        <CardDescription>Accede al portal de RR.HH. o regístrate para empezar a transformar tu gestión de talento.</CardDescription>
                    </CardHeader>
                    <CardContent className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button asChild size="lg">
                            <Link href="/auth/login-rrhh">Acceder al Portal de RR.HH. <ArrowRight className="ml-2 h-4 w-4" /></Link>
                        </Button>
                        <Button asChild size="lg" variant="secondary">
                            <Link href="/auth/register">Registrar mi Empresa</Link>
                        </Button>
                    </CardContent>
                </Card>
            </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
