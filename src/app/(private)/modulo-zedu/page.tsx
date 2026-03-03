"use client";

import React from 'react';
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { FileText, Download } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const projectData = {
    nombre: "System Kyron",
    lider: "Carlos Mattar",
    apoyo: "Sebastian Garrido, Marcos Sousa",
    institucion: "U.E.P. Gabriela Mistral",
    ubicacion: "La Guaira, Venezuela"
};

const poblacionData = {
    localizacion: "La Atlántida, entre calle 7 a calle 3, Catia La Mar. Referencias: Pinta Catia, Supermercado Bensica.",
    comunidad: "Comunidad Comercial y Residencial La Atlántida",
    estimada: "500 empresas activas / 5.000 empleados administrativos y civiles."
};


export default function ModuloZeduPage() {
    const { toast } = useToast();

    const getDocumentContent = () => {
        return `
            <h1>MODELO DE ZEDU - SYSTEM KYRON 2025</h1>
            
            <h2>1. IDENTIFICACIÓN DEL PROYECTO</h2>
            <table border="1" cellpadding="5" style="width: 100%; border-collapse: collapse;">
                <tr><td style="width: 30%;">NOMBRE DEL PROYECTO</td><td>${projectData.nombre}</td></tr>
                <tr><td>LÍDER ESTRATÉGICO</td><td>${projectData.lider}</td></tr>
                <tr><td>PERSONAL DE APOYO (RELLENO)</td><td>${projectData.apoyo}</td></tr>
                <tr><td>INSTITUCIÓN BENEFICIARIA</td><td>${projectData.institucion}</td></tr>
                <tr><td>UBICACIÓN GEOGRÁFICA</td><td>${projectData.ubicacion}</td></tr>
            </table>
            <br/>
            
            <h2>2. ESTUDIO DE POBLACIÓN (ZEDU)</h2>
            <table border="1" cellpadding="5" style="width: 100%; border-collapse: collapse;">
                <tr><td style="width: 30%;">LOCALIZACIÓN ESPECÍFICA</td><td>${poblacionData.localizacion}</td></tr>
                <tr><td>NOMBRE DE LA COMUNIDAD</td><td>${poblacionData.comunidad}</td></tr>
                <tr><td>POBLACIÓN ESTIMADA</td><td>${poblacionData.estimada}</td></tr>
            </table>
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
        fileDownload.download = `Modelo_Zedu_System_Kyron.doc`;
        fileDownload.click();
        document.body.removeChild(fileDownload);

        toast({
            title: "Descarga Iniciada",
            description: "El documento se está descargando como un archivo .doc.",
        });
    };

  return (
    <div className="p-4 md:p-8 max-w-4xl mx-auto">
        <header className="mb-10 text-center">
            <h1 className="text-3xl font-bold tracking-tight text-primary">
                MODELO DE ZEDU - SYSTEM KYRON 2025
            </h1>
        </header>

        <div className="space-y-8">
            {/* Identificación del Proyecto */}
            <Card className="border-2 border-primary/20">
                <div className="bg-primary text-primary-foreground p-3">
                    <CardTitle>1. IDENTIFICACIÓN DEL PROYECTO</CardTitle>
                </div>
                <CardContent className="p-0">
                    <Table>
                        <TableBody>
                            <TableRow>
                                <TableCell className="font-semibold w-1/3">NOMBRE DEL PROYECTO</TableCell>
                                <TableCell>{projectData.nombre}</TableCell>
                            </TableRow>
                             <TableRow>
                                <TableCell className="font-semibold">LÍDER ESTRATÉGICO</TableCell>
                                <TableCell>{projectData.lider}</TableCell>
                            </TableRow>
                             <TableRow>
                                <TableCell className="font-semibold">PERSONAL DE APOYO (RELLENO)</TableCell>
                                <TableCell>{projectData.apoyo}</TableCell>
                            </TableRow>
                             <TableRow>
                                <TableCell className="font-semibold">INSTITUCIÓN BENEFICIARIA</TableCell>
                                <TableCell>{projectData.institucion}</TableCell>
                            </TableRow>
                             <TableRow>
                                <TableCell className="font-semibold">UBICACIÓN GEOGRÁFICA</TableCell>
                                <TableCell>{projectData.ubicacion}</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>

            {/* Estudio de Población */}
            <Card className="border-2 border-primary/20">
                <div className="bg-primary text-primary-foreground p-3">
                    <CardTitle>2. ESTUDIO DE POBLACIÓN (ZEDU)</CardTitle>
                </div>
                <CardContent className="p-0">
                    <Table>
                        <TableBody>
                            <TableRow>
                                <TableCell className="font-semibold w-1/3">LOCALIZACIÓN ESPECÍFICA</TableCell>
                                <TableCell>{poblacionData.localizacion}</TableCell>
                            </TableRow>
                             <TableRow>
                                <TableCell className="font-semibold">NOMBRE DE LA COMUNIDAD</TableCell>
                                <TableCell>{poblacionData.comunidad}</TableCell>
                            </TableRow>
                             <TableRow>
                                <TableCell className="font-semibold">POBLACIÓN ESTIMADA</TableCell>
                                <TableCell>{poblacionData.estimada}</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>

        </div>
        
        <div className="flex justify-center mt-10">
            <Button onClick={handleDownloadWord}><Download className="mr-2 h-4 w-4"/> Descargar como Word</Button>
        </div>
    </div>
  );
}
