"use client";

import React from 'react';
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { FileText, Download, Users, School, MapPin, Target, HelpCircle, TrendingDown, History, Rocket } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";

const projectData = {
    info: {
        proyecto: "AutoMind AI",
        integrantes: "Carlos Mattar, Marcos Sousa, Sebastian Garrido",
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
        fileDownload.download = 'Modelo_Zedu_AutoMind.doc';
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

        {/* PARTE 3 */}
        <Card className="bg-card/50 backdrop-blur-sm">
            <CardHeader className="bg-primary/10 rounded-t-lg">
                <CardTitle className="flex items-center gap-3"><HelpCircle className="h-6 w-6 text-primary"/>Análisis del Problema</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
                <Table>
                    <TableBody>
                        <TableRow>
                            <TableCell className="font-semibold w-1/4">Definición</TableCell>
                            <TableCell>{projectData.analisis.definicion}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="font-semibold">Importancia</TableCell>
                            <TableCell>{projectData.analisis.importancia}</TableCell>
                        </TableRow>
                         <TableRow>
                            <TableCell className="font-semibold">Causas</TableCell>
                            <TableCell>{projectData.analisis.causas}</TableCell>
                        </TableRow>
                         <TableRow>
                            <TableCell className="font-semibold">Consecuencias</TableCell>
                            <TableCell>{projectData.analisis.consecuencias}</TableCell>
                        </TableRow>
                         <TableRow>
                            <TableCell className="font-semibold">Origen</TableCell>
                            <TableCell>{projectData.analisis.origen}</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </CardContent>
        </Card>

        {/* PARTE 4 */}
         <Card className="bg-green-600/10 border-green-600/30">
            <CardHeader className="bg-green-600/20 rounded-t-lg">
                <CardTitle className="flex items-center gap-3 text-green-800 dark:text-green-300"><Rocket className="h-6 w-6"/>Solución Propuesta</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
                <Table>
                    <TableBody>
                        <TableRow className="border-green-600/30">
                            <TableCell className="font-semibold w-1/4">Desarrollo del Proyecto</TableCell>
                            <TableCell>{projectData.solucion.proyecto}</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
      </div>
    </div>
  );
}
