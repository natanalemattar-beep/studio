"use client";

import React from 'react';
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { FileText, Printer, Download, Users, Book, School, MapPin, Target, HelpCircle, Lightbulb, TrendingDown, History, Rocket } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Separator } from '@/components/ui/separator';

const projectData = {
    info: {
        proyecto: "AutoMind AI",
        integrantes: "Miguel Uzcategui, Miguel Angel Goites, Joaquin de Barros",
        institucion: "U.E.P. Gabriela Mistral",
        ubicacion: "Venezuela, Caracas"
    },
    poblacion: {
        ubicacion: "Venezuela, Caracas",
        comunidad: "Santa Rosa de Lima"
    },
    analisis: {
        definicion: "Falta de educación vial en los jóvenes.",
        importancia: "La falta de educación vial puede causar accidentes de tránsito, lesiones graves e incluso la muerte.",
        causas: "Falta de programas educativos, poca conciencia, mal ejemplo de los adultos.",
        consecuencias: "Accidentes, congestión vehicular, estrés y ansiedad al conducir.",
        origen: "Históricamente, la educación vial no ha sido una prioridad en el sistema educativo."
    },
    solucion: {
        proyecto: "Crear una aplicación móvil interactiva que enseñe las normas de tránsito a través de juegos y simulaciones."
    }
}


export default function ModuloZeduPage() {
    const { toast } = useToast();

    const getDocumentContent = () => {
        return `
# MODELO ZEDU - AutoMind AI

## 1. INFORMACIÓN DEL EQUIPO
- **Nombre del Proyecto:** ${projectData.info.proyecto}
- **Integrantes:** ${projectData.info.integrantes}
- **Institución Educativa:** ${projectData.info.institucion}
- **País/Ciudad:** ${projectData.info.ubicacion}

---

## 2. POBLACIÓN A TRABAJAR
- **Ubicación Específica:** ${projectData.poblacion.ubicacion}
- **Nombre de la Comunidad:** ${projectData.poblacion.comunidad}

---

## 3. ANÁLISIS DEL PROBLEMA
- **Definición del Problema:** ${projectData.analisis.definicion}
- **Importancia:** ${projectData.analisis.importancia}
- **Causas:** ${projectData.analisis.causas}
- **Consecuencias:** ${projectData.analisis.consecuencias}
- **Origen y Antecedentes:** ${projectData.analisis.origen}

---

## 4. SOLUCIÓN PROPUESTA
- **Desarrollo del Proyecto:** ${projectData.solucion.proyecto}
        `;
    };

    const handleAction = (action: 'print' | 'word') => {
        const content = getDocumentContent().replace(/(\r\n|\n|\r)/gm, "\n").replace(/#/g, '').replace(/\*/g, '');
        
        if (action === 'print') {
            const printWindow = window.open('', '_blank');
            if(printWindow) {
                printWindow.document.write(`<pre>${content}</pre>`);
                printWindow.document.close();
                printWindow.focus();
                setTimeout(() => {
                    printWindow.print();
                    printWindow.close();
                }, 250);
                 toast({
                    title: "Preparando Descarga PDF",
                    description: "Se ha abierto el diálogo de impresión. Selecciona 'Guardar como PDF' para crear tu documento.",
                });
            }
        } else if (action === 'word') {
             const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
             const url = URL.createObjectURL(blob);
             const a = document.createElement('a');
             a.href = url;
             a.download = 'Modelo_Zedu.txt';
             a.click();
             URL.revokeObjectURL(url);

            toast({
                title: "Descarga Iniciada",
                description: "El documento se está descargando como un archivo .txt.",
            });
        }
    };

  return (
    <div className="p-4 md:p-8 max-w-6xl mx-auto">
        <header className="mb-10 text-center">
            <h1 className="text-4xl font-bold tracking-tight flex items-center justify-center gap-3">
                <FileText className="h-10 w-10 text-primary" />
                Modelo Zedu
            </h1>
            <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
                Visión consolidada del proyecto, desde su concepción hasta la solución propuesta.
            </p>
             <div className="flex gap-2 justify-center mt-6">
                <Button variant="outline" onClick={() => handleAction('print')}><Printer className="mr-2 h-4 w-4"/> Guardar como PDF</Button>
                <Button onClick={() => handleAction('word')}><Download className="mr-2 h-4 w-4"/> Descargar Documento</Button>
            </div>
        </header>

      <div className="space-y-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="bg-card/50 backdrop-blur-sm">
                <CardHeader>
                    <CardTitle className="flex items-center gap-3"><Users className="h-6 w-6 text-primary"/>Información del Equipo</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="flex items-start gap-3"><Book className="h-5 w-5 text-muted-foreground shrink-0 mt-1"/><p><strong className="font-semibold text-foreground">Proyecto:</strong> {projectData.info.proyecto}</p></div>
                    <div className="flex items-start gap-3"><Users className="h-5 w-5 text-muted-foreground shrink-0 mt-1"/><p><strong className="font-semibold text-foreground">Integrantes:</strong> {projectData.info.integrantes}</p></div>
                    <div className="flex items-start gap-3"><School className="h-5 w-5 text-muted-foreground shrink-0 mt-1"/><p><strong className="font-semibold text-foreground">Institución:</strong> {projectData.info.institucion}</p></div>
                    <div className="flex items-start gap-3"><MapPin className="h-5 w-5 text-muted-foreground shrink-0 mt-1"/><p><strong className="font-semibold text-foreground">Ubicación:</strong> {projectData.info.ubicacion}</p></div>
                </CardContent>
            </Card>
            <Card className="bg-card/50 backdrop-blur-sm">
                <CardHeader>
                    <CardTitle className="flex items-center gap-3"><Target className="h-6 w-6 text-primary"/>Población a Trabajar</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="flex items-start gap-3"><MapPin className="h-5 w-5 text-muted-foreground shrink-0 mt-1"/><p><strong className="font-semibold text-foreground">Lugar:</strong> {projectData.poblacion.ubicacion}</p></div>
                    <div className="flex items-start gap-3"><School className="h-5 w-5 text-muted-foreground shrink-0 mt-1"/><p><strong className="font-semibold text-foreground">Comunidad:</strong> {projectData.poblacion.comunidad}</p></div>
                </CardContent>
            </Card>
        </div>

        <Card className="bg-card/50 backdrop-blur-sm">
            <CardHeader>
                <CardTitle className="flex items-center gap-3"><HelpCircle className="h-6 w-6 text-primary"/>Análisis del Problema</CardTitle>
                 <CardDescription>Desglose de la situación actual y sus implicaciones.</CardDescription>
            </CardHeader>
            <CardContent>
                <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                        <AccordionTrigger><div className="flex items-center gap-2"><HelpCircle className="h-4 w-4"/>Definición del Problema</div></AccordionTrigger>
                        <AccordionContent className="pt-2 text-base">{projectData.analisis.definicion}</AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger><div className="flex items-center gap-2"><Lightbulb className="h-4 w-4"/>Importancia</div></AccordionTrigger>
                        <AccordionContent className="pt-2 text-base">{projectData.analisis.importancia}</AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                        <AccordionTrigger><div className="flex items-center gap-2"><TrendingDown className="h-4 w-4"/>Causas y Consecuencias</div></AccordionTrigger>
                        <AccordionContent className="pt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                            <p><strong>Causas:</strong> {projectData.analisis.causas}</p>
                            <p><strong>Consecuencias:</strong> {projectData.analisis.consecuencias}</p>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4">
                        <AccordionTrigger><div className="flex items-center gap-2"><History className="h-4 w-4"/>Origen y Antecedentes</div></AccordionTrigger>
                        <AccordionContent className="pt-2 text-base">{projectData.analisis.origen}</AccordionContent>
                    </AccordionItem>
                </Accordion>
            </CardContent>
        </Card>

         <Card className="bg-primary/10 border-primary/20">
            <CardHeader>
                <CardTitle className="flex items-center gap-3"><Rocket className="h-6 w-6 text-primary"/>Solución Propuesta</CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-lg text-foreground">{projectData.solucion.proyecto}</p>
            </CardContent>
        </Card>

      </div>
    </div>
  );
}
