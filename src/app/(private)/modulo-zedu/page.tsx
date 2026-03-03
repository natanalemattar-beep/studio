
"use client";

import React from 'react';
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Download, Users, School, MapPin, Target, HelpCircle, TrendingDown, History, Rocket, Lightbulb, TrendingUp } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableRow, TableHeader, TableHead } from "@/components/ui/table";
import { Separator } from '@/components/ui/separator';

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

const problemaData = {
    definicion: "Falta de una plataforma centralizada que integre la gestión académica, administrativa y comunicacional en los colegios, generando ineficiencia, desarticulación y una brecha digital en la comunidad educativa.",
    importancia: "Una gestión desintegrada dificulta la toma de decisiones, sobrecarga al personal con tareas manuales, limita la participación de los padres y no prepara a los estudiantes para un entorno digital.",
    causas: "Sistemas obsoletos, resistencia al cambio, falta de inversión en tecnología, datos fragmentados en múltiples plataformas (Excel, WhatsApp, sistemas aislados).",
    consecuencias: "Pérdida de tiempo, errores en registros, comunicación deficiente con representantes, falta de visibilidad del rendimiento estudiantil, vulnerabilidad de los datos.",
    origen: "Los colegios han adoptado herramientas tecnológicas de forma reactiva y aislada, sin una estrategia de integración a largo plazo, creando un 'Frankenstein' de sistemas que no se comunican entre sí."
};

const solucionData = {
    proyecto: "Desarrollar e implementar 'System Kyron Educativo', un ecosistema digital integral (plataforma web y app móvil) que unifica la gestión académica, el control administrativo-contable y la comunicación instantánea para colegios, conectando a directivos, docentes, estudiantes y representantes en un solo lugar.",
    propuestasExistentes: "Sistemas de gestión escolar genéricos (sin adaptación a la normativa venezolana), plataformas de comunicación como WhatsApp (informales y desorganizadas), sistemas contables no especializados en educación.",
    diferenciadores: "Plataforma todo-en-uno, adaptada a la legislación venezolana, con módulos de contabilidad, RRHH, y comunicación integrados. Interfaz intuitiva y accesible desde cualquier dispositivo. Enfocada en la colaboración y la transparencia."
};

const getDocumentContent = () => {
    // This function will generate the HTML content for the Word document
    // It's a simplified version for demonstration
    return `
        <h1>MODELO DE ZEDU - ${projectData.nombre} 2025</h1>
        <br/>
        <h2>1. IDENTIFICACIÓN DEL PROYECTO</h2>
        <p><strong>NOMBRE DEL PROYECTO:</strong> ${projectData.nombre}</p>
        <p><strong>LÍDER ESTRATÉGICO:</strong> ${projectData.lider}</p>
        <p><strong>PERSONAL DE APOYO:</strong> ${projectData.apoyo}</p>
        <p><strong>INSTITUCIÓN BENEFICIARIA:</strong> ${projectData.institucion}</p>
        <p><strong>UBICACIÓN GEOGRÁFICA:</strong> ${projectData.ubicacion}</p>
        <br/>
        <h2>2. ESTUDIO DE POBLACIÓN (ZEDU)</h2>
        <p><strong>LOCALIZACIÓN ESPECÍFICA:</strong> ${poblacionData.localizacion}</p>
        <p><strong>NOMBRE DE LA COMUNIDAD:</strong> ${poblacionData.comunidad}</p>
        <p><strong>POBLACIÓN ESTIMADA:</strong> ${poblacionData.estimada}</p>
        <br/>
        <h2>3. ANÁLISIS DEL PROBLEMA</h2>
        <p><strong>Definición del Problema:</strong> ${problemaData.definicion}</p>
        <p><strong>Importancia:</strong> ${problemaData.importancia}</p>
        <p><strong>Causas:</strong> ${problemaData.causas}</p>
        <p><strong>Consecuencias:</strong> ${problemaData.consecuencias}</p>
        <p><strong>Origen y Evolución:</strong> ${problemaData.origen}</p>
        <br/>
        <h2>4. SOLUCIÓN PROPUESTA</h2>
        <p><strong>Desarrolla tu Proyecto:</strong> ${solucionData.proyecto}</p>
        <br/>
        <h2>5. ANÁLISIS COMPETITIVO</h2>
        <p><strong>Otras Propuestas Existentes:</strong> ${solucionData.propuestasExistentes}</p>
        <p><strong>Diferenciadores de tu Solución:</strong> ${solucionData.diferenciadores}</p>
        <br/>
        <h2>6. PRESUPUESTO</h2>
        <p>(Tabla de presupuesto aquí)</p>
    `;
};


export default function ModuloZeduPage() {
    const { toast } = useToast();

    const handleDownloadWord = () => {
        const content = getDocumentContent();
        const header = "<html xmlns:o='urn:schemas-microsoft-com:office:office' "+
            "xmlns:w='urn:schemas-microsoft-com:office:word' "+
            "xmlns='http://www.w3.org/TR/REC-html40'>"+
            "<head><meta charset='utf-8'><title>Modelo ZEDU</title></head><body>";
        const footer = "</body></html>";
        const sourceHTML = header + content + footer;

        const source = 'data:application/vnd.ms-word;charset=utf-8,' + encodeURIComponent(sourceHTML);
        const fileDownload = document.createElement("a");
        document.body.appendChild(fileDownload);
        fileDownload.href = source;
        fileDownload.download = `Modelo_Zedu_${projectData.nombre.replace(/ /g, '_')}.doc`;
        fileDownload.click();
        document.body.removeChild(fileDownload);

        toast({
            title: "Descarga Iniciada",
            description: "El documento se está descargando como un archivo .doc.",
        });
    };

  return (
    <div className="p-4 md:p-8 max-w-5xl mx-auto space-y-8">
        <header className="mb-10 text-center">
            <h1 className="text-4xl font-bold tracking-tight text-primary">
                Modelo de Proyecto ZEDU
            </h1>
            <p className="mt-2 text-lg text-muted-foreground">Documentación consolidada del proyecto "{projectData.nombre}"</p>
        </header>

        <div className="flex justify-center mb-10">
            <Button onClick={handleDownloadWord} size="lg" className="shadow-lg">
                <Download className="mr-2 h-5 w-5"/> Descargar Documento Completo (.doc)
            </Button>
        </div>

        {/* Parte 1: Identificación */}
        <Card className="shadow-lg">
            <CardHeader>
                <CardTitle className="flex items-center gap-3"><Users className="h-6 w-6 text-primary" />1. Identificación del Proyecto</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
                <div className="flex justify-between p-3 bg-secondary/50 rounded-md"><strong className="text-muted-foreground">Nombre del Proyecto:</strong> <span className="font-semibold">{projectData.nombre}</span></div>
                <div className="flex justify-between p-3 bg-secondary/50 rounded-md"><strong className="text-muted-foreground">Líder Estratégico:</strong> <span className="font-semibold">{projectData.lider}</span></div>
                <div className="flex justify-between p-3 bg-secondary/50 rounded-md"><strong className="text-muted-foreground">Personal de Apoyo:</strong> <span className="font-semibold">{projectData.apoyo}</span></div>
                <div className="flex justify-between p-3 bg-secondary/50 rounded-md"><strong className="text-muted-foreground">Institución Beneficiaria:</strong> <span className="font-semibold">{projectData.institucion}</span></div>
                <div className="flex justify-between p-3 bg-secondary/50 rounded-md"><strong className="text-muted-foreground">Ubicación Geográfica:</strong> <span className="font-semibold">{projectData.ubicacion}</span></div>
            </CardContent>
        </Card>

        {/* Parte 2: Población */}
        <Card className="shadow-lg">
            <CardHeader>
                <CardTitle className="flex items-center gap-3"><MapPin className="h-6 w-6 text-primary" />2. Estudio de Población (ZEDU)</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
                <div className="p-3 bg-secondary/50 rounded-md"><strong className="text-muted-foreground">Localización Específica:</strong><p>{poblacionData.localizacion}</p></div>
                <div className="flex justify-between p-3 bg-secondary/50 rounded-md"><strong className="text-muted-foreground">Nombre de la Comunidad:</strong> <span className="font-semibold">{poblacionData.comunidad}</span></div>
                <div className="flex justify-between p-3 bg-secondary/50 rounded-md"><strong className="text-muted-foreground">Población Estimada:</strong> <span className="font-semibold">{poblacionData.estimada}</span></div>
            </CardContent>
        </Card>

        {/* Parte 3: Análisis del Problema */}
        <Card className="shadow-lg">
            <CardHeader>
                <CardTitle className="flex items-center gap-3"><HelpCircle className="h-6 w-6 text-primary" />3. Análisis del Problema</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
                <div><h4 className="font-semibold">Definición:</h4><p className="text-muted-foreground">{problemaData.definicion}</p></div>
                <Separator/>
                <div><h4 className="font-semibold">Importancia:</h4><p className="text-muted-foreground">{problemaData.importancia}</p></div>
                <Separator/>
                <div><h4 className="font-semibold">Causas:</h4><p className="text-muted-foreground">{problemaData.causas}</p></div>
                <Separator/>
                <div><h4 className="font-semibold">Consecuencias:</h4><p className="text-muted-foreground">{problemaData.consecuencias}</p></div>
                <Separator/>
                <div><h4 className="font-semibold">Origen y Evolución:</h4><p className="text-muted-foreground">{problemaData.origen}</p></div>
            </CardContent>
        </Card>

        {/* Parte 4: Solución Propuesta */}
        <Card className="shadow-lg">
            <CardHeader>
                <CardTitle className="flex items-center gap-3"><Rocket className="h-6 w-6 text-primary" />4. Solución Propuesta</CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-muted-foreground">{solucionData.proyecto}</p>
            </CardContent>
        </Card>

        {/* Parte 5: Análisis Competitivo */}
        <Card className="shadow-lg">
            <CardHeader>
                <CardTitle className="flex items-center gap-3"><Lightbulb className="h-6 w-6 text-primary" />5. Análisis Competitivo</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
                 <div><h4 className="font-semibold">Otras Propuestas Existentes:</h4><p className="text-muted-foreground">{solucionData.propuestasExistentes}</p></div>
                <Separator/>
                <div><h4 className="font-semibold">Diferenciadores de tu Solución:</h4><p className="text-muted-foreground">{solucionData.diferenciadores}</p></div>
            </CardContent>
        </Card>

        {/* Parte 6: Presupuesto */}
        <Card className="shadow-lg">
            <CardHeader>
                <CardTitle className="flex items-center gap-3"><TrendingUp className="h-6 w-6 text-primary" />6. Presupuesto</CardTitle>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-1/2">ITEM</TableHead>
                            <TableHead>CANTIDAD</TableHead>
                            <TableHead>COSTO</TableHead>
                            <TableHead>LUGAR DE COMPRA</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow><TableCell className="text-muted-foreground italic">Ej: Servidor en la Nube</TableCell><TableCell>1</TableCell><TableCell>$100/mes</TableCell><TableCell>Amazon Web Services</TableCell></TableRow>
                        <TableRow><TableCell className="text-muted-foreground italic">Ej: Licencias de Software</TableCell><TableCell>5</TableCell><TableCell>$50 c/u</TableCell><TableCell>Vendor de Software</TableCell></TableRow>
                        <TableRow><TableCell className="text-muted-foreground italic">Ej: Marketing Inicial</TableCell><TableCell>1</TableCell><TableCell>$500</TableCell><TableCell>Agencia Digital</TableCell></TableRow>
                    </TableBody>
                </Table>
            </CardContent>
        </Card>

    </div>
  );
}
