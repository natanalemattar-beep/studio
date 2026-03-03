'use client';

import { LandingHeader } from "@/components/landing/landing-header";
import { Footer } from "@/components/landing/footer";
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, ShoppingCart, CreditCard, TrendingUp, TabletSmartphone } from "lucide-react";
import { motion } from 'framer-motion';

const features = [
    {
        icon: TabletSmartphone,
        title: "Punto de Venta (TPV) Inteligente",
        description: "Una interfaz rápida y moderna para procesar ventas en tiempo real. Integrado con el inventario y la contabilidad para una gestión impecable."
    },
    {
        icon: CreditCard,
        title: "Gestión de Crédito y Financiamiento",
        description: "Administra ventas a crédito, controla las cuentas por cobrar y maneja plataformas de financiamiento como Cashea y Krece directamente desde el sistema."
    },
    {
        icon: TrendingUp,
        title: "Análisis de Ventas con IA",
        description: "Obtén KPIs, métricas clave de rendimiento y estrategias de crecimiento sugeridas por nuestra IA para optimizar tu rendimiento comercial."
    },
    {
        icon: ShoppingCart,
        title: "Ciclo de Venta Completo",
        description: "Emite facturas, notas de crédito y débito, y proformas, todo conforme a la normativa fiscal del SENIAT y con trazabilidad en Blockchain."
    }
];

export default function VentasYFacturacionPage() {
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
                <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter mb-4">Módulo de Ventas y Facturación</h1>
                <p className="max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground">
                  Transforma cada venta en una oportunidad. Desde el TPV hasta el análisis con IA, controla todo el ciclo comercial.
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
                        <CardTitle>Optimiza tu Proceso de Venta</CardTitle>
                        <CardDescription>Accede al portal de ventas o regístrate para potenciar tu equipo comercial.</CardDescription>
                    </CardHeader>
                    <CardContent className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button asChild size="lg">
                            <Link href="/login-ventas">Acceder al Portal de Ventas <ArrowRight className="ml-2 h-4 w-4" /></Link>
                        </Button>
                        <Button asChild size="lg" variant="secondary">
                            <Link href="/register">Registrar mi Empresa</Link>
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
