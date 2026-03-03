'use client';

import { LandingHeader } from "@/components/landing/landing-header";
import { Footer } from "@/components/landing/footer";
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, BookOpen, Calculator, LayoutDashboard, ShieldCheck } from "lucide-react";
import { motion } from 'framer-motion';

const features = [
    {
        icon: LayoutDashboard,
        title: "Dashboard Unificado",
        description: "Visualiza la salud financiera de tu empresa en tiempo real con KPIs, gráficos de ingresos vs. gastos y acceso rápido a facturas recientes."
    },
    {
        icon: ShieldCheck,
        title: "Cumplimiento Fiscal Automatizado",
        description: "Genera y declara IVA, ISLR y la nueva contribución para pensiones. Conectado directamente con el SENIAT para evitar errores y multas."
    },
    {
        icon: BookOpen,
        title: "Libros Contables y Fiscales",
        description: "Mantén al día tus libros de compras, ventas, diario y mayor de forma automática. Todo según la normativa venezolana."
    },
    {
        icon: Calculator,
        title: "Análisis Financiero Avanzado",
        description: "Accede a reportes como el Balance General y Estado de Resultados, analiza la estructura de costos y la rentabilidad de tu negocio."
    }
];

export default function CentroDeContabilidadPage() {
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
                <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter mb-4">Centro de Contabilidad</h1>
                <p className="max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground">
                  La solución definitiva para la gestión financiera, fiscal y contable de tu empresa. Automatiza, cumple y crece con tranquilidad.
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
                        <CardTitle>¿Listo para tomar el control?</CardTitle>
                        <CardDescription>Accede al portal o regístrate para transformar tu gestión contable.</CardDescription>
                    </CardHeader>
                    <CardContent className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button asChild size="lg">
                            <Link href="/auth/login-empresa">Acceder al Portal <ArrowRight className="ml-2 h-4 w-4" /></Link>
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
