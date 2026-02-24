
"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Download, Printer, Bot, BarChart, Settings, DollarSign, CheckCircle, Target, Eye, Rocket, BookOpen, Scale } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Separator } from "@/components/ui/separator";
import { formatCurrency } from "@/lib/utils";
import { Logo } from "@/components/logo";

const estudioData = {
  projectName: "Implementación de Sistema ERP Kyron para 'Cliente Ejemplo, C.A.'",
  date: new Date(),
  summary: "El presente estudio evalúa la viabilidad económica, técnica y operativa para la implementación del ecosistema de gestión Kyron en 'Cliente Ejemplo, C.A.'. El objetivo es centralizar la contabilidad, automatizar el cumplimiento fiscal y optimizar las operaciones para lograr un retorno de inversión (ROI) estimado del 250% en 24 meses.",
  marketAnalysis: {
    target: "Empresas en Venezuela con necesidad de modernizar su gestión y asegurar el cumplimiento fiscal.",
    competition: "Sistemas contables tradicionales (A2, Valery) y desarrollos a medida.",
    advantage: "Plataforma integral (ERP + IA + Blockchain), actualizaciones automáticas de ley y garantía de cero riesgo fiscal."
  },
  technicalAnalysis: {
    platform: "Software como Servicio (SaaS) basado en la nube, con infraestructura redundante y escalable.",
    integration: "API REST para integración con sistemas existentes (si aplica).",
    security: "Cifrado de extremo a extremo (AES-256), 2FA, auditoría en Blockchain e inmutabilidad de registros.",
    implementationTime: "4-6 semanas (incluyendo migración de datos y capacitación)."
  },
  financialAnalysis: {
    investment: 15000,
    annualSavings: 35000,
    projectedRevenueIncrease: 20000,
    paybackPeriod: "8 meses",
    roi: "253%"
  },
  conclusion: "El proyecto es altamente viable y estratégico. La inversión se justifica por los ahorros en multas, la optimización de procesos y la capacidad para tomar decisiones basadas en datos en tiempo real. Se recomienda proceder con la fase de implementación."
};

export default function EstudioFactibilidadEconomicaPage() {
    const { toast } = useToast();

    const handleAction = (action: string) => {
        if (action === 'impresa') {
            window.print();
             toast({
                title: "Impresión Iniciada",
                description: "El estudio de factibilidad se ha enviado a la impresora.",
            });
        } else if (action === 'descargado') {
             window.print();
             toast({
                title: "Preparando Descarga",
                description: "Se ha abierto el diálogo de impresión. Por favor, selecciona 'Guardar como PDF' para descargar el documento."
            });
        }
    }

  return (
    <div>
       <style>
            {`
                @media print {
                    body * {
                        visibility: hidden;
                    }
                    #printable-content, #printable-content * {
                        visibility: visible;
                    }
                    #printable-content {
                        position: absolute;
                        left: 0;
                        top: 0;
                        width: 100%;
                        border: none;
                        box-shadow: none;
                    }
                    .no-print {
                        display: none !important;
                    }
                }
            `}
        </style>
      <header className="mb-8 flex items-center justify-between no-print">
        <div>
            <h1 className="text-3xl font-bold tracking-tight flex items-center gap-2">
                <Bot className="h-8 w-8" />
                Estudio de Factibilidad Económica
            </h1>
            <p className="text-muted-foreground mt-2">
              Generado por IA para analizar la viabilidad de un proyecto.
            </p>
        </div>
        <div className="flex gap-2">
            <Button variant="outline" onClick={() => handleAction('impresa')}>
                <Printer className="mr-2"/> Imprimir
            </Button>
            <Button onClick={() => handleAction('descargado')}>
                <Download className="mr-2"/> Descargar PDF
            </Button>
        </div>
      </header>

      <Card id="printable-content" className="max-w-4xl mx-auto bg-card/80 backdrop-blur-sm shadow-xl p-4 sm:p-8">
        <CardHeader className="text-center border-b pb-6">
            <div className="mx-auto w-fit mb-4">
                <Logo className="h-16 w-16" />
            </div>
            <CardTitle className="text-3xl">Estudio de Factibilidad Económica</CardTitle>
            <CardDescription className="text-lg">{estudioData.projectName}</CardDescription>
            <p className="text-sm text-muted-foreground pt-2">Fecha de Emisión: {estudioData.date.toLocaleDateString('es-ES')}</p>
        </CardHeader>
        <CardContent className="pt-8 space-y-10">
            <section>
                <h2 className="text-2xl font-semibold mb-4 flex items-center gap-3"><Target/>Resumen Ejecutivo</h2>
                <p className="text-muted-foreground text-justify">{estudioData.summary}</p>
            </section>
            
            <Separator />

            <section>
                <h2 className="text-2xl font-semibold mb-4 flex items-center gap-3"><BarChart/>Análisis de Mercado</h2>
                <div className="grid md:grid-cols-3 gap-6">
                    <div className="p-4 bg-secondary/50 rounded-lg">
                        <h4 className="font-semibold text-primary mb-2">Mercado Objetivo</h4>
                        <p className="text-sm text-muted-foreground">{estudioData.marketAnalysis.target}</p>
                    </div>
                     <div className="p-4 bg-secondary/50 rounded-lg">
                        <h4 className="font-semibold text-primary mb-2">Competencia</h4>
                        <p className="text-sm text-muted-foreground">{estudioData.marketAnalysis.competition}</p>
                    </div>
                     <div className="p-4 bg-secondary/50 rounded-lg">
                        <h4 className="font-semibold text-primary mb-2">Ventaja Competitiva</h4>
                        <p className="text-sm text-muted-foreground">{estudioData.marketAnalysis.advantage}</p>
                    </div>
                </div>
            </section>
            
            <Separator />
            
             <section>
                <h2 className="text-2xl font-semibold mb-4 flex items-center gap-3"><Settings/>Análisis Técnico y Operativo</h2>
                <div className="grid md:grid-cols-2 gap-6">
                     <div className="p-4 bg-secondary/50 rounded-lg">
                        <h4 className="font-semibold text-primary mb-2">Plataforma y Arquitectura</h4>
                        <p className="text-sm text-muted-foreground">{estudioData.technicalAnalysis.platform}</p>
                    </div>
                     <div className="p-4 bg-secondary/50 rounded-lg">
                        <h4 className="font-semibold text-primary mb-2">Seguridad y Cumplimiento</h4>
                        <p className="text-sm text-muted-foreground">{estudioData.technicalAnalysis.security}</p>
                    </div>
                     <div className="p-4 bg-secondary/50 rounded-lg">
                        <h4 className="font-semibold text-primary mb-2">Integración</h4>
                        <p className="text-sm text-muted-foreground">{estudioData.technicalAnalysis.integration}</p>
                    </div>
                     <div className="p-4 bg-secondary/50 rounded-lg">
                        <h4 className="font-semibold text-primary mb-2">Tiempo de Implementación</h4>
                        <p className="text-sm text-muted-foreground">{estudioData.technicalAnalysis.implementationTime}</p>
                    </div>
                </div>
            </section>

             <Separator />

             <section>
                <h2 className="text-2xl font-semibold mb-4 flex items-center gap-3"><DollarSign/>Análisis Financiero</h2>
                 <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
                    <Card>
                        <CardHeader><CardTitle className="text-base text-muted-foreground">Inversión Inicial</CardTitle></CardHeader>
                        <CardContent><p className="text-2xl font-bold">{formatCurrency(estudioData.financialAnalysis.investment, '$')}</p></CardContent>
                    </Card>
                    <Card>
                        <CardHeader><CardTitle className="text-base text-muted-foreground">Ahorro Anual Estimado</CardTitle></CardHeader>
                        <CardContent><p className="text-2xl font-bold">{formatCurrency(estudioData.financialAnalysis.annualSavings, '$')}</p></CardContent>
                    </Card>
                     <Card>
                        <CardHeader><CardTitle className="text-base text-muted-foreground">Período de Recuperación</CardTitle></CardHeader>
                        <CardContent><p className="text-2xl font-bold">{estudioData.financialAnalysis.paybackPeriod}</p></CardContent>
                    </Card>
                     <Card className="bg-primary/10 border-primary/20">
                        <CardHeader><CardTitle className="text-base text-primary">Retorno de Inversión (ROI)</CardTitle></CardHeader>
                        <CardContent><p className="text-3xl font-extrabold text-primary">{estudioData.financialAnalysis.roi}</p></CardContent>
                    </Card>
                </div>
            </section>

             <Separator />

             <section>
                <h2 className="text-2xl font-semibold mb-4 flex items-center gap-3"><CheckCircle/>Conclusiones y Recomendaciones</h2>
                <div className="p-6 bg-green-900/10 border-l-4 border-green-500 rounded-r-lg">
                    <p className="text-muted-foreground text-justify">{estudioData.conclusion}</p>
                </div>
            </section>
        </CardContent>
        <CardFooter className="flex-col text-center border-t pt-6">
            <h3 className="font-semibold">Preparado por:</h3>
            <p className="text-primary font-bold">Unidad de Análisis de Datos e IA de System Kyron</p>
            <p className="text-xs text-muted-foreground mt-2">Este documento es confidencial y para uso exclusivo del destinatario.</p>
        </CardFooter>
      </Card>
    </div>
  );
}
