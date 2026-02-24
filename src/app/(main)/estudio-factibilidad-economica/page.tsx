
"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Download, Printer, Bot, BarChart, Settings, DollarSign, CheckCircle, Target, Rocket } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Separator } from "@/components/ui/separator";
import { formatCurrency } from "@/lib/utils";
import { Logo } from "@/components/logo";

const estudioData = {
  projectName: "Implementación de Sistema ERP Kyron para 'Cliente Ejemplo, C.A.'",
  date: new Date(),
  summary: "El presente estudio evalúa la viabilidad económica, técnica y operativa para la implementación del ecosistema de gestión Kyron en 'Cliente Ejemplo, C.A.'. El objetivo es centralizar la contabilidad, automatizar el cumplimiento fiscal y optimizar las operaciones para lograr un retorno de inversión (ROI) estimado del 253% en 24 meses, basado en ahorros directos y aumento de eficiencia.",
  marketAnalysis: {
    target: "Empresas en Venezuela con necesidad de modernizar su gestión, asegurar el cumplimiento fiscal y optimizar sus operaciones en un entorno económico complejo.",
    competition: "Sistemas contables tradicionales (ej. A2, Valery), desarrollos a medida (costosos y difíciles de mantener) y procesos manuales (alto riesgo de error).",
    advantage: "Kyron ofrece una plataforma integral (ERP + IA + Blockchain), con actualizaciones automáticas de ley y garantía de cero riesgo fiscal. Nuestra ventaja radica en la unificación total de la gestión, eliminando la fragmentación y proporcionando datos en tiempo real para la toma de decisiones."
  },
  technicalAnalysis: {
    platform: "Software como Servicio (SaaS) basado en la nube, con infraestructura redundante y escalable en AWS. Garantiza un 99.9% de uptime.",
    integration: "API RESTful disponible para integración con sistemas de terceros existentes (CRM, sistemas de producción, etc.), permitiendo un flujo de datos consolidado.",
    security: "Cifrado de extremo a extremo (AES-256), autenticación de dos factores (2FA), auditoría de transacciones en Blockchain para inmutabilidad y cumplimiento de normativas de protección de datos.",
    implementationTime: "4-6 semanas, incluyendo migración de datos maestros, configuración de módulos y capacitación de personal clave."
  },
  financialAnalysis: {
    investment: 15000,
    annualSavings: 35000,
    projectedRevenueIncrease: 20000,
    paybackPeriod: "8 meses",
    roi: "253"
  },
  conclusion: "El proyecto es altamente viable y estratégico. La inversión se justifica plenamente por los significativos ahorros operativos, la eliminación de riesgo por multas fiscales, y el aumento de la eficiencia que impacta directamente en la capacidad de generar mayores ingresos. Se recomienda proceder con la fase de implementación de inmediato para capitalizar estos beneficios."
};

export default function EstudioFactibilidadEconomicaPage() {
    const { toast } = useToast();

    const getWordContent = () => `
        <h1>Estudio de Factibilidad Económica</h1>
        <p><strong>Proyecto:</strong> ${estudioData.projectName}</p>
        <p><strong>Fecha:</strong> ${estudioData.date.toLocaleDateString('es-ES')}</p>
        <br>
        <h2>1. Resumen Ejecutivo</h2>
        <p>${estudioData.summary}</p>
        <br>
        <h2>2. Análisis de Mercado</h2>
        <p><strong>Mercado Objetivo:</strong> ${estudioData.marketAnalysis.target}</p>
        <p><strong>Competencia:</strong> ${estudioData.marketAnalysis.competition}</p>
        <p><strong>Ventaja Competitiva:</strong> ${estudioData.marketAnalysis.advantage}</p>
        <br>
        <h2>3. Análisis Técnico y Operativo</h2>
        <p><strong>Plataforma y Arquitectura:</strong> ${estudioData.technicalAnalysis.platform}</p>
        <p><strong>Seguridad y Cumplimiento:</strong> ${estudioData.technicalAnalysis.security}</p>
        <p><strong>Integración:</strong> ${estudioData.technicalAnalysis.integration}</p>
        <p><strong>Tiempo de Implementación:</strong> ${estudioData.technicalAnalysis.implementationTime}</p>
        <br>
        <h2>4. Análisis Financiero</h2>
        <p><strong>Inversión Inicial Total:</strong> ${formatCurrency(estudioData.financialAnalysis.investment, '$')}</p>
        <p><strong>Ahorro Anual Estimado (Optimización + Reducción de Multas):</strong> ${formatCurrency(estudioData.financialAnalysis.annualSavings, '$')}</p>
        <p><strong>Incremento de Ingresos Proyectado (Eficiencia):</strong> ${formatCurrency(estudioData.financialAnalysis.projectedRevenueIncrease, '$')}</p>
        <p><strong>Período de Recuperación (Payback):</strong> ${estudioData.financialAnalysis.paybackPeriod}</p>
        <p><strong>Retorno de Inversión (ROI) a 24 meses:</strong> ${estudioData.financialAnalysis.roi}%</p>
        <br>
        <h2>5. Conclusiones y Recomendaciones</h2>
        <p>${estudioData.conclusion}</p>
        <br><br>
        <p>Preparado por: <strong>Unidad de Análisis de Datos e IA de System Kyron</strong></p>
    `;

    const handleAction = (action: string) => {
        if (action === 'impresa') {
            window.print();
             toast({
                title: "Impresión Iniciada",
                description: "El estudio de factibilidad se ha enviado a la impresora.",
            });
        } else if (action === 'descargado') {
            const filename = 'Estudio_Factibilidad_Kyron.doc';
            const content = getWordContent();
            
            const header = "<html xmlns:o='urn:schemas-microsoft-com:office:office' "+
                "xmlns:w='urn:schemas-microsoft-com:office:word' "+
                "xmlns='http://www.w3.org/TR/REC-html40'>"+
                "<head><meta charset='utf-8'><title>Export HTML to Word</title></head><body>";
            const footer = "</body></html>";
            const sourceHTML = header + content.replace(/<p>/g, '<p style="text-align: justify; margin-bottom: 1em;">').replace(/<h2>/g, '<h2 style="margin-top: 2em;">') + footer;

            const source = 'data:application/vnd.ms-word;charset=utf-8,' + encodeURIComponent(sourceHTML);
            const fileDownload = document.createElement("a");
            document.body.appendChild(fileDownload);
            fileDownload.href = source;
            fileDownload.download = filename;
            fileDownload.click();
            document.body.removeChild(fileDownload);

            toast({
                title: "Descarga Iniciada",
                description: `El documento se está descargando como ${filename}.`
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
                <Download className="mr-2"/> Descargar (.doc)
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
                <h2 className="text-2xl font-semibold mb-4 flex items-center gap-3"><Target/>1. Resumen Ejecutivo</h2>
                <p className="text-muted-foreground text-justify">{estudioData.summary}</p>
            </section>
            
            <Separator />

            <section>
                <h2 className="text-2xl font-semibold mb-4 flex items-center gap-3"><BarChart/>2. Análisis de Mercado</h2>
                <div className="grid md:grid-cols-1 gap-6">
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
                <h2 className="text-2xl font-semibold mb-4 flex items-center gap-3"><Settings/>3. Análisis Técnico y Operativo</h2>
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
                <h2 className="text-2xl font-semibold mb-4 flex items-center gap-3"><DollarSign/>4. Análisis Financiero</h2>
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
                        <CardContent><p className="text-3xl font-extrabold text-primary">{estudioData.financialAnalysis.roi}%</p></CardContent>
                    </Card>
                </div>
            </section>

             <Separator />

             <section>
                <h2 className="text-2xl font-semibold mb-4 flex items-center gap-3"><Rocket/>5. Conclusiones y Recomendaciones</h2>
                <div className="p-6 bg-green-900/10 border-l-4 border-green-500 rounded-r-lg">
                    <p className="text-muted-foreground text-justify font-medium">{estudioData.conclusion}</p>
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
