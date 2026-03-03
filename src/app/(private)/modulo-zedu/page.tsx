"use client";

import React from 'react';
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { FileText, Download, Users, School, Target, HelpCircle, Rocket, Sparkles } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const projectData = {
    info: {
        proyecto: "AutoMind AI",
        integrantes: "Miguel Uzcategui, Miguel Angel Goites, Joaquin de Barros",
        institucion: "Colegio Santa Rosa de Lima",
        ubicacion: "Venezuela, Caracas"
    },
    poblacion: {
        ubicacion: "Venezuela, Caracas",
        comunidad: "Santa Rosa de Lima"
    },
    analisis: {
        definicion: "Gestión de archivos físicos ineficiente, desorganizada y lenta en instituciones educativas.",
        importancia: "La dificultad para acceder a documentos importantes (expedientes, notas) genera retrasos administrativos, frustración en los representantes y riesgos de pérdida de información.",
        causas: "Dependencia de sistemas de archivado manual, falta de digitalización, comunicación fragmentada entre departamentos y con las familias.",
        consecuencias: "Tiempos de respuesta lentos, altos costos de almacenamiento físico, dificultad para realizar auditorías, y una mala experiencia para la comunidad educativa.",
        origen: "Sistemas heredados y resistencia a la adopción de nuevas tecnologías en el sector educativo tradicional."
    },
    solucion: {
        proyecto: "AutoMind AI consiste en el desarrollo de una aplicación que transforma el sistema de archivado tradicional de una institución educativa en un entorno digital eficiente y organizado, permitiendo la digitalización, almacenamiento y búsqueda rápida de documentos que antes se gestionaban de forma física. La plataforma integrará un chatbot con atención automatizada dirigida a los representantes de los estudiantes, facilitando respuestas inmediatas y mejorando la comunicación colegio-familia. Además, incorporará herramientas de inteligencia artificial que apoyarán al personal administrativo en la generación de ideas estratégicas, contribuyendo a una gestión más moderna, ágil y orientada a la mejora continua institucional."
    }
};

const otrasPropuestasData = {
    titulo: "OTRAS PROPUESTAS EXISTENTES PARA SOLUCIONAR EL PROBLEMA",
    descripcion: "Los proyectos más similares son MOBIAN, que se enfoca en la optimizacion de datos para cualquier negocio, en donde su propósito es la eficiencia operativa y escalabilidad técnica dirigiendose a equipos tecnicos y directivos corporativos con la integración de sistemas y aumento de equipo."
};

const diferenciadoresData = {
    titulo: "DIFERENCIADORES DE TU SOLUCIÓN",
    descripcion: "[Aquí se describirán las características únicas de AutoMind AI que lo diferencian de MOBIAN, como el chatbot de atención a representantes, la IA para la generación de ideas estratégicas y el enfoque específico en instituciones educativas.]"
};

export default function ModuloZeduPage() {
    const { toast } = useToast();

    const getDocumentContent = () => {
        return `
            <div style="font-family: Arial, sans-serif; line-height: 1.6;">
                <h1 style="color: #333;">MODELO ZEDU - ${projectData.info.proyecto}</h1>
                
                <h2 style="color: #005A9C; border-bottom: 1px solid #ddd; padding-bottom: 5px;">INFORMACIÓN DEL EQUIPO</h2>
                <p><strong>Nombre del Proyecto:</strong> ${projectData.info.proyecto}</p>
                <p><strong>Integrantes:</strong> ${projectData.info.integrantes}</p>
                <p><strong>Institución Educativa:</strong> ${projectData.info.institucion}</p>
                <p><strong>País/Ciudad:</strong> ${projectData.info.ubicacion}</p>
                <br/>
                
                <h2 style="color: #005A9C; border-bottom: 1px solid #ddd; padding-bottom: 5px;">POBLACIÓN A TRABAJAR</h2>
                <p><strong>Ubicación Específica:</strong> ${projectData.poblacion.ubicacion}</p>
                <p><strong>Nombre de la Comunidad:</strong> ${projectData.poblacion.comunidad}</p>
                <br/>

                <h2 style="color: #005A9C; border-bottom: 1px solid #ddd; padding-bottom: 5px;">ANÁLISIS DEL PROBLEMA</h2>
                <p><strong>Definición del Problema:</strong> ${projectData.analisis.definicion}</p>
                <p><strong>Importancia:</strong> ${projectData.analisis.importancia}</p>
                <p><strong>Causas:</strong> ${projectData.analisis.causas}</p>
                <p><strong>Consecuencias:</strong> ${projectData.analisis.consecuencias}</p>
                <p><strong>Origen y Antecedentes:</strong> ${projectData.analisis.origen}</p>
                <br/>

                <h2 style="color: #005A9C; border-bottom: 1px solid #ddd; padding-bottom: 5px;">SOLUCIÓN PROPUESTA</h2>
                <p><strong>Desarrollo del Proyecto:</strong> ${projectData.solucion.proyecto}</p>
                <br/>

                <h2 style="color: #005A9C; border-bottom: 1px solid #ddd; padding-bottom: 5px;">OTRAS PROPUESTAS EXISTENTES</h2>
                <p>${otrasPropuestasData.descripcion}</p>
                <br/>

                 <h2 style="color: #005A9C; border-bottom: 1px solid #ddd; padding-bottom: 5px;">DIFERENCIADORES DE TU SOLUCIÓN</h2>
                <p>${diferenciadoresData.descripcion}</p>
                <br/>
            </div>
        `;
    };

    const handleDownloadWord = () => {
        const content = getDocumentContent();
        const header = "<html xmlns:o='urn:schemas-microsoft-com:office:office' "+
            "xmlns:w='urn:schemas-microsoft-com:office:word' "+
            "xmlns='http://www.w3.org/TR/REC-html40'>"+
            "<head><meta charset='utf-8'><title>Export HTML to Word</title></head><body>";
        const footer = "</body></html>";
        const sourceHTML = header + content + footer;

        const source = 'data:application/vnd.ms-word;charset=utf-8,' + encodeURIComponent(sourceHTML);
        const fileDownload = document.createElement("a");
        document.body.appendChild(fileDownload);
        fileDownload.href = source;
        fileDownload.download = `Modelo_Zedu_${projectData.info.proyecto.replace(/ /g, '_')}.doc`;
        fileDownload.click();
        document.body.removeChild(fileDownload);

        toast({
            title: "Descarga Iniciada",
            description: "El documento se está descargando como un archivo .doc.",
        });
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
                <Button onClick={handleDownloadWord}><Download className="mr-2 h-4 w-4"/> Descargar como Word</Button>
            </div>
        </header>

      <div className="space-y-8">
        {/* PARTE 1 & 2 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="bg-card/50 backdrop-blur-sm">
                <CardHeader className="bg-primary/10 rounded-t-lg">
                    <CardTitle className="flex items-center gap-3"><Users className="h-6 w-6 text-primary"/>Información del Equipo</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                    <Table>
                        <TableBody>
                            <TableRow><TableCell className="font-semibold">Proyecto</TableCell><TableCell>{projectData.info.proyecto}</TableCell></TableRow>
                            <TableRow><TableCell className="font-semibold">Integrantes</TableCell><TableCell>{projectData.info.integrantes}</TableCell></TableRow>
                            <TableRow><TableCell className="font-semibold">Institución</TableCell><TableCell>{projectData.info.institucion}</TableCell></TableRow>
                            <TableRow><TableCell className="font-semibold">Ubicación</TableCell><TableCell>{projectData.info.ubicacion}</TableCell></TableRow>
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
            <Card className="bg-card/50 backdrop-blur-sm">
                <CardHeader className="bg-primary/10 rounded-t-lg">
                    <CardTitle className="flex items-center gap-3"><Target className="h-6 w-6 text-primary"/>Población a Trabajar</CardTitle>
                </CardHeader>
                 <CardContent className="p-0">
                    <Table>
                        <TableBody>
                            <TableRow><TableCell className="font-semibold">Ubicación</TableCell><TableCell>{projectData.poblacion.ubicacion}</TableCell></TableRow>
                            <TableRow><TableCell className="font-semibold">Comunidad</TableCell><TableCell>{projectData.poblacion.comunidad}</TableCell></TableRow>
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </div>
        
        <Card className="bg-card/50 backdrop-blur-sm">
             <CardHeader className="bg-primary/10 rounded-t-lg">
                <CardTitle className="flex items-center gap-3"><HelpCircle className="h-6 w-6 text-primary"/>Análisis del Problema</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
                <Accordion type="single" collapsible className="w-full" defaultValue='item-1'>
                    <AccordionItem value="item-1">
                        <AccordionTrigger>Definición del Problema</AccordionTrigger>
                        <AccordionContent>{projectData.analisis.definicion}</AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger>Importancia</AccordionTrigger>
                        <AccordionContent>{projectData.analisis.importancia}</AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                        <AccordionTrigger>Causas</AccordionTrigger>
                        <AccordionContent>{projectData.analisis.causas}</AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4">
                        <AccordionTrigger>Consecuencias</AccordionTrigger>
                        <AccordionContent>{projectData.analisis.consecuencias}</AccordionContent>
                    </AccordionItem>
                     <AccordionItem value="item-5">
                        <AccordionTrigger>Origen y Antecedentes</AccordionTrigger>
                        <AccordionContent>{projectData.analisis.origen}</AccordionContent>
                    </AccordionItem>
                </Accordion>
            </CardContent>
        </Card>

         <Card className="bg-green-600/10 border-green-600/30">
            <CardHeader className="bg-green-600/20 rounded-t-lg">
                <CardTitle className="flex items-center gap-3 text-green-800 dark:text-green-300"><Rocket className="h-6 w-6"/>Solución Propuesta</CardTitle>
            </CardHeader>
            <CardContent className="p-6 text-justify">
               <p>{projectData.solucion.proyecto}</p>
            </CardContent>
        </Card>

        <Card className="bg-card/50 backdrop-blur-sm">
            <CardHeader className="bg-primary/10 rounded-t-lg">
                <CardTitle className="flex items-center gap-3"><Users className="h-6 w-6 text-primary"/>{otrasPropuestasData.titulo}</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
                <p>{otrasPropuestasData.descripcion}</p>
            </CardContent>
        </Card>

        <Card className="bg-card/50 backdrop-blur-sm">
            <CardHeader className="bg-primary/10 rounded-t-lg">
                <CardTitle className="flex items-center gap-3"><Sparkles className="h-6 w-6 text-primary"/>{diferenciadoresData.titulo}</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
                <p className="text-muted-foreground">{diferenciadoresData.descripcion}</p>
            </CardContent>
        </Card>
      </div>
    </div>
  );
}
