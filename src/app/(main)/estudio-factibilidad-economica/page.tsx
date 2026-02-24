
"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Download, Printer, Bot, BarChart, Settings, DollarSign, CheckCircle, Target, Rocket, AlertTriangle, GanttChart, Users, Signal, Globe, Shield } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Separator } from "@/components/ui/separator";
import { formatCurrency } from "@/lib/utils";
import { Logo } from "@/components/logo";
import { Accordion, AccordionTrigger, AccordionItem, AccordionContent } from "@/components/ui/accordion";

const estudioData = {
  projectName: "Implementación del Ecosistema Integral Kyron (Gestión, Telecom y Finanzas Blockchain) para 'Cliente Global, S.A.'",
  date: new Date(),
  executiveSummary: "El presente estudio evalúa la viabilidad económica, técnica y operativa para la implementación del ecosistema Kyron. El objetivo es centralizar la gestión contable-fiscal, integrar las telecomunicaciones y modernizar las finanzas con tecnología Blockchain. Se proyecta un ROI del 315% en 24 meses, basado en ahorros directos en cumplimiento, optimización de costos de comunicación y aumento de eficiencia operativa, respaldado por un Valor Presente Neto (VPN) positivo y una Tasa Interna de Retorno (TIR) superior al 50%.",
  marketAnalysis: {
    target: "Empresas en Venezuela y Latinoamérica con operaciones multi-jurisdiccionales, que buscan centralizar su gestión, asegurar el cumplimiento fiscal internacional y optimizar sus costos operativos y de telecomunicaciones.",
    competition: "Sistemas ERP tradicionales (rígidos y costosos), proveedores de telecomunicaciones separados y múltiples soluciones de software aisladas (contabilidad, CRM, etc.).",
    advantage: "Kyron es el único ecosistema que integra en una sola plataforma: gestión empresarial (ERP), cumplimiento fiscal automatizado con IA, infraestructura de telecomunicaciones (VoIP, SMS) y una billetera financiera Blockchain. Esta unificación elimina la fragmentación, reduce costos y proporciona datos en tiempo real para la toma de decisiones estratégicas a nivel global."
  },
  technicalAnalysis: {
    platform: "Software como Servicio (SaaS) basado en una arquitectura de microservicios en la nube (AWS), garantizando un 99.99% de uptime y escalabilidad global.",
    implementationPlan: [
      { phase: "Fase 1 (Semanas 1-2)", tasks: "Kick-off, análisis de requerimientos, migración de datos maestros (clientes, productos)." },
      { phase: "Fase 2 (Semanas 3-4)", tasks: "Configuración de módulos (Contabilidad, Facturación, RRHH), portabilidad numérica y configuración de central VoIP." },
      { phase: "Fase 3 (Semanas 5-6)", tasks: "Pruebas de aceptación (UAT), lanzamiento en vivo y soporte post-implementación 24/7." }
    ],
    telecomPillar: {
        title: "Pilar de Telecomunicaciones Unificadas",
        description: "Infraestructura de comunicaciones de misión crítica, diseñada para garantizar la conectividad global y la eficiencia operativa.",
        features: [
            "Redundancia Geográfica: Nodos en múltiples países (EE.UU., España, Venezuela) para asegurar un 99.99% de uptime y baja latencia.",
            "Telefonía IP (VoIP): Central telefónica virtual con IVR inteligente, extensiones ilimitadas, grabación de llamadas y análisis de sentimiento en tiempo real.",
            "Canal de SMS Masivo y WhatsApp Business API: Integrado para campañas de marketing, notificaciones transaccionales y cobranza automatizada.",
            "Conectividad Segura (VPN y SD-WAN): Enlaces privados y encriptados para sucursales y teletrabajadores a nivel mundial."
        ]
    },
    securityPillar: {
        title: "Pilar de Seguridad y Alertas Predictivas",
        description: "Un escudo de protección de varias capas que combina IA, Blockchain y monitoreo constante para lograr un riesgo fiscal cero.",
        features: [
            "Sistema de Alertas Predictivas (SAP): La IA analiza patrones y monitorea la Gaceta Oficial para alertar sobre posibles riesgos fiscales con 30 días de antelación.",
            "Escudo Fiscal IA (Compliance en tiempo real): Auditoría automática de cada transacción para garantizar el cumplimiento con normativas de SENIAT, CDE, SUDEBAN, etc.",
            "Trazabilidad Blockchain: Cada documento fiscal (factura, nota de crédito) se sella en una cadena de bloques, creando un registro inalterable e incorruptible para auditorías."
        ]
    },
    internationalArchitecture: {
        title: "Arquitectura para Operaciones Internacionales",
        description: "Diseñado para holdings y empresas con presencia global.",
        features: [
            "Multi-Moneda y Multi-Lenguaje: Gestión de transacciones y reportes en Bolívares, Dólares, Euros y Criptomonedas de forma nativa. Interfaz en Español, Inglés y Portugués.",
            "Multi-Jurisdicción Fiscal: Adaptación automática de formatos de factura y cálculo de impuestos para Venezuela (SENIAT), EE.UU. (Sales Tax), España (IVA), Colombia (DIAN) y más.",
            "Consolidación Financiera Global: Generación de estados financieros consolidados del holding en tiempo real, con conversión de moneda automática."
        ]
    }
  },
  operationalAnalysis: {
      processImprovement: "Reducción del ciclo de cierre contable en un 70%. Automatización del 98% de las declaraciones fiscales. Reducción de costos de comunicación en un 40%. Disminución del 90% en errores de facturación.",
      resourceImpact: "El equipo contable se reenfoca en análisis estratégico. El equipo de TI se libera del mantenimiento de infraestructura de telecomunicaciones. Reducción de la necesidad de asesores externos."
  },
  financialAnalysis: {
    investment: 45000,
    annualSavings: {
        fiscal: 25000,
        operational: 30000,
        telecom: 12000
    },
    projectedRevenueIncrease: 40000,
    paybackPeriod: "10 meses",
    roi: "315",
    npv: 95000,
    irr: "55%"
  },
  riskAnalysis: {
      marketRisks: "Cambios regulatorios abruptos (mitigado por Escudo Fiscal IA). Aceptación del mercado de nuevas tecnologías (mitigado con capacitación y soporte).",
      operationalRisks: "Resistencia al cambio del personal (mitigado con plan de gestión del cambio). Problemas de conectividad internacional (mitigado con red redundante y modo offline).",
      mitigationStrategies: "Actualizaciones legales proactivas, soporte 24/7 y arquitectura de nube geográficamente distribuida son los pilares para minimizar el riesgo."
  },
  conclusion: "El proyecto es excepcionalmente viable y estratégico. La inversión se justifica por los significativos ahorros operativos, la eliminación total del riesgo fiscal, la optimización de costos de telecomunicaciones y el aumento de la eficiencia global. Se recomienda proceder con la fase de implementación de inmediato para capitalizar estos beneficios y posicionar a 'Cliente Global, S.A.' como líder tecnológico en su sector."
};


export default function EstudioFactibilidadEconomicaPage() {
    const { toast } = useToast();

    const getWordContent = () => {
      const totalSavings = estudioData.financialAnalysis.annualSavings.fiscal + estudioData.financialAnalysis.annualSavings.operational + estudioData.financialAnalysis.annualSavings.telecom;
      return `
        <h1>Estudio de Factibilidad Económica</h1>
        <p><strong>Proyecto:</strong> ${estudioData.projectName}</p>
        <p><strong>Fecha:</strong> ${estudioData.date.toLocaleDateString('es-ES')}</p>
        <br/>
        <h2>1. Resumen Ejecutivo</h2>
        <p>${estudioData.executiveSummary}</p>
        <br/>
        <h2>2. Análisis de Mercado</h2>
        <h4>Mercado Objetivo:</h4>
        <p>${estudioData.marketAnalysis.target}</p>
        <h4>Competencia:</h4>
        <p>${estudioData.marketAnalysis.competition}</p>
        <h4>Ventaja Competitiva:</h4>
        <p>${estudioData.marketAnalysis.advantage}</p>
        <br/>
        <h2>3. Análisis Técnico y Operativo</h2>
        <h4>Plataforma y Arquitectura General:</h4>
        <p>${estudioData.technicalAnalysis.platform}</p>
        
        <h4>${estudioData.technicalAnalysis.telecomPillar.title}:</h4>
        <p>${estudioData.technicalAnalysis.telecomPillar.description}</p>
        <ul>${estudioData.technicalAnalysis.telecomPillar.features.map(f => `<li><strong>${f.split(':')[0]}:</strong>${f.split(':')[1]}</li>`).join('')}</ul>

        <h4>${estudioData.technicalAnalysis.securityPillar.title}:</h4>
        <p>${estudioData.technicalAnalysis.securityPillar.description}</p>
        <ul>${estudioData.technicalAnalysis.securityPillar.features.map(f => `<li><strong>${f.split(':')[0]}:</strong>${f.split(':')[1]}</li>`).join('')}</ul>

        <h4>${estudioData.technicalAnalysis.internationalArchitecture.title}:</h4>
        <p>${estudioData.technicalAnalysis.internationalArchitecture.description}</p>
        <ul>${estudioData.technicalAnalysis.internationalArchitecture.features.map(f => `<li><strong>${f.split(':')[0]}:</strong>${f.split(':')[1]}</li>`).join('')}</ul>
        
        <h4>Plan de Implementación:</h4>
        <ul>${estudioData.technicalAnalysis.implementationPlan.map(p => `<li><strong>${p.phase}:</strong> ${p.tasks}</li>`).join('')}</ul>
        <br/>
        
        <h2>4. Análisis Operacional</h2>
        <h4>Mejora de Procesos:</h4>
        <p>${estudioData.operationalAnalysis.processImprovement}</p>
        <h4>Impacto en Recursos:</h4>
        <p>${estudioData.operationalAnalysis.resourceImpact}</p>
        <br/>
        
        <h2>5. Análisis de Riesgos</h2>
        <h4>Riesgos de Mercado y Operativos:</h4>
        <p>${estudioData.riskAnalysis.marketRisks}</p>
        <p>${estudioData.riskAnalysis.operationalRisks}</p>
        <h4>Estrategias de Mitigación:</h4>
        <p>${estudioData.riskAnalysis.mitigationStrategies}</p>
        <br/>

        <h2>6. Análisis Financiero</h2>
        <p><strong>Inversión Inicial Total:</strong> ${formatCurrency(estudioData.financialAnalysis.investment, '$')}</p>
        <p><strong>Ahorro Anual Estimado Total:</strong> ${formatCurrency(totalSavings, '$')}</p>
        <ul>
            <li>Ahorro Fiscal (Multas evitadas): ${formatCurrency(estudioData.financialAnalysis.annualSavings.fiscal, '$')}</li>
            <li>Ahorro Operacional (Eficiencia): ${formatCurrency(estudioData.financialAnalysis.annualSavings.operational, '$')}</li>
            <li>Ahorro en Telecomunicaciones: ${formatCurrency(estudioData.financialAnalysis.annualSavings.telecom, '$')}</li>
        </ul>
        <p><strong>Incremento de Ingresos Proyectado:</strong> ${formatCurrency(estudioData.financialAnalysis.projectedRevenueIncrease, '$')}</p>
        <p><strong>Período de Recuperación (Payback):</strong> ${estudioData.financialAnalysis.paybackPeriod}</p>
        <p><strong>Retorno de Inversión (ROI) a 24 meses:</strong> ${estudioData.financialAnalysis.roi}%</p>
        <p><strong>Valor Presente Neto (VPN):</strong> ${formatCurrency(estudioData.financialAnalysis.npv, '$')}</p>
        <p><strong>Tasa Interna de Retorno (TIR):</strong> ${estudioData.financialAnalysis.irr}</p>
        <br/>
        
        <h2>7. Conclusiones y Recomendaciones</h2>
        <p>${estudioData.conclusion}</p>
        <br/><br/>
        <p>Preparado por: <strong>Unidad de Análisis de Datos e IA de System Kyron</strong></p>
    `;
    }

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
            const sourceHTML = header + content
                .replace(/<h2>/g, '<h2 style="margin-top: 2em; color: #333;">')
                .replace(/<h4>/g, '<h4 style="margin-top: 1.5em; color: #555;">')
                .replace(/<p>/g, '<p style="text-align: justify; margin-bottom: 1em;">')
                .replace(/<ul>/g, '<ul style="margin-left: 20px;">')
                .replace(/<li>/g, '<li style="margin-bottom: 0.5em;">')
                + footer;

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
              Generado por IA para analizar la viabilidad de un proyecto integral.
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
                <p className="text-muted-foreground text-justify leading-relaxed">{estudioData.executiveSummary}</p>
            </section>
            
            <Separator />

            <Accordion type="single" collapsible className="w-full" defaultValue="technical-analysis">
                <AccordionItem value="market-analysis">
                    <AccordionTrigger className="text-2xl font-semibold"><div className="flex items-center gap-3"><BarChart/>2. Análisis de Mercado</div></AccordionTrigger>
                    <AccordionContent className="pt-4 space-y-6">
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
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="technical-analysis">
                    <AccordionTrigger className="text-2xl font-semibold"><div className="flex items-center gap-3"><Settings/>3. Análisis Técnico y Operativo</div></AccordionTrigger>
                    <AccordionContent className="pt-4 space-y-6">
                         <div className="p-4 bg-secondary/50 rounded-lg">
                            <h4 className="font-semibold text-primary mb-2">Plataforma y Arquitectura General</h4>
                            <p className="text-sm text-muted-foreground">{estudioData.technicalAnalysis.platform}</p>
                        </div>
                        <div className="p-4 bg-secondary/50 rounded-lg">
                            <h4 className="font-semibold text-primary mb-2 flex items-center gap-2"><Signal /> {estudioData.technicalAnalysis.telecomPillar.title}</h4>
                            <p className="text-sm text-muted-foreground mb-3">{estudioData.technicalAnalysis.telecomPillar.description}</p>
                            <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
                               {estudioData.technicalAnalysis.telecomPillar.features.map(f => <li key={f}>{f}</li>)}
                            </ul>
                        </div>
                         <div className="p-4 bg-secondary/50 rounded-lg">
                            <h4 className="font-semibold text-primary mb-2 flex items-center gap-2"><Shield /> {estudioData.technicalAnalysis.securityPillar.title}</h4>
                             <p className="text-sm text-muted-foreground mb-3">{estudioData.technicalAnalysis.securityPillar.description}</p>
                            <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
                               {estudioData.technicalAnalysis.securityPillar.features.map(f => <li key={f}>{f}</li>)}
                            </ul>
                        </div>
                         <div className="p-4 bg-secondary/50 rounded-lg">
                            <h4 className="font-semibold text-primary mb-2 flex items-center gap-2"><Globe /> {estudioData.technicalAnalysis.internationalArchitecture.title}</h4>
                             <p className="text-sm text-muted-foreground mb-3">{estudioData.technicalAnalysis.internationalArchitecture.description}</p>
                            <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
                               {estudioData.technicalAnalysis.internationalArchitecture.features.map(f => <li key={f}>{f}</li>)}
                            </ul>
                        </div>
                        <div className="p-4 bg-secondary/50 rounded-lg">
                            <h4 className="font-semibold text-primary mb-2 flex items-center gap-2"><GanttChart /> Plan de Implementación</h4>
                            <ul className="list-decimal list-inside space-y-2 mt-2 text-sm text-muted-foreground">
                                {estudioData.technicalAnalysis.implementationPlan.map(p => `<li><strong>${p.phase}:</strong> ${p.tasks}</li>`).join('')}
                            </ul>
                        </div>
                    </AccordionContent>
                </AccordionItem>

                 <AccordionItem value="operational-analysis">
                    <AccordionTrigger className="text-2xl font-semibold"><div className="flex items-center gap-3"><Users/>4. Análisis Operacional</div></AccordionTrigger>
                    <AccordionContent className="pt-4 space-y-6">
                         <div className="p-4 bg-secondary/50 rounded-lg">
                            <h4 className="font-semibold text-primary mb-2">Mejora de Procesos</h4>
                            <p className="text-sm text-muted-foreground">{estudioData.operationalAnalysis.processImprovement}</p>
                        </div>
                        <div className="p-4 bg-secondary/50 rounded-lg">
                            <h4 className="font-semibold text-primary mb-2">Impacto en Recursos Humanos</h4>
                            <p className="text-sm text-muted-foreground">{estudioData.operationalAnalysis.resourceImpact}</p>
                        </div>
                    </AccordionContent>
                </AccordionItem>

                 <AccordionItem value="risk-analysis">
                    <AccordionTrigger className="text-2xl font-semibold"><div className="flex items-center gap-3"><AlertTriangle/>5. Análisis de Riesgos</div></AccordionTrigger>
                    <AccordionContent className="pt-4 space-y-6">
                         <div className="p-4 bg-secondary/50 rounded-lg">
                            <h4 className="font-semibold text-destructive mb-2">Riesgos de Mercado y Operativos</h4>
                            <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                                <li>{estudioData.riskAnalysis.marketRisks}</li>
                                <li>{estudioData.riskAnalysis.operationalRisks}</li>
                            </ul>
                        </div>
                        <div className="p-4 bg-green-500/10 rounded-lg">
                            <h4 className="font-semibold text-green-700 dark:text-green-400 mb-2">Estrategias de Mitigación</h4>
                            <p className="text-sm text-muted-foreground">{estudioData.riskAnalysis.mitigationStrategies}</p>
                        </div>
                    </AccordionContent>
                </AccordionItem>
                
                 <AccordionItem value="financial-analysis">
                    <AccordionTrigger className="text-2xl font-semibold"><div className="flex items-center gap-3"><DollarSign/>6. Análisis Financiero</div></AccordionTrigger>
                    <AccordionContent className="pt-4 space-y-6">
                         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 text-center">
                            <Card><CardHeader><CardTitle className="text-base text-muted-foreground">Inversión Inicial</CardTitle></CardHeader><CardContent><p className="text-2xl font-bold">{formatCurrency(estudioData.financialAnalysis.investment, '$')}</p></CardContent></Card>
                            <Card><CardHeader><CardTitle className="text-base text-muted-foreground">Ahorro Anual Total</CardTitle></CardHeader><CardContent><p className="text-2xl font-bold">{formatCurrency(Object.values(estudioData.financialAnalysis.annualSavings).reduce((a,b) => a + b, 0), '$')}</p></CardContent></Card>
                            <Card><CardHeader><CardTitle className="text-base text-muted-foreground">Recuperación (Payback)</CardTitle></CardHeader><CardContent><p className="text-2xl font-bold">{estudioData.financialAnalysis.paybackPeriod}</p></CardContent></Card>
                            <Card className="bg-primary/10 border-primary/20"><CardHeader><CardTitle className="text-base text-primary">ROI (24 meses)</CardTitle></CardHeader><CardContent><p className="text-3xl font-extrabold text-primary">{estudioData.financialAnalysis.roi}%</p></CardContent></Card>
                             <Card className="bg-secondary"><CardHeader><CardTitle className="text-base text-muted-foreground">Valor Presente Neto (VPN)</CardTitle></CardHeader><CardContent><p className="text-2xl font-bold">{formatCurrency(estudioData.financialAnalysis.npv, '$')}</p></CardContent></Card>
                             <Card className="bg-secondary"><CardHeader><CardTitle className="text-base text-muted-foreground">Tasa Interna de Retorno (TIR)</CardTitle></CardHeader><CardContent><p className="text-2xl font-bold">{estudioData.financialAnalysis.irr}</p></CardContent></Card>
                        </div>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
            
             <Separator className="my-10" />

             <section>
                <h2 className="text-2xl font-semibold mb-4 flex items-center gap-3"><Rocket/>7. Conclusiones y Recomendaciones</h2>
                <div className="p-6 bg-green-900/10 border-l-4 border-green-500 rounded-r-lg">
                    <p className="text-muted-foreground text-justify font-medium leading-relaxed">{estudioData.conclusion}</p>
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
