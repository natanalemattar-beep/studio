
"use client";

import React from 'react';
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Download } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableRow, TableHead, TableHeader } from "@/components/ui/table";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Users, School, MapPin, Target, HelpCircle, TrendingDown, History, Rocket } from "lucide-react";


const projectData = {
    nombre: "System Kyron 2025",
    lider: "Carlos Mattar",
    apoyo: "Sebastian Garrido, Marcos Sousa, Miguel Uzcategui, Miguel Goites, Joaquin de Barros",
    institucion: "U.E.P. Gabriela Mistral",
    ubicacion: "La Guaira, Venezuela"
};

const poblacionData = {
    localizacion: "U.E.P. 'Gral. Ladislao Uztariz' y 'Colegio Santa Rosa de Lima'",
    comunidad: "Comunidad Educativa del Sector 'Santa Rosa de Lima'",
    estimada: "200 profesores / 1.500 estudiantes (Inicial a Bachillerato)"
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


export default function ModuloZeduPage() {
    const { toast } = useToast();

    const getDocumentContent = () => {
        return `
            <h1>MODELO DE ZEDU - ${projectData.nombre}</h1>
            <br/>
            <h2>1. IDENTIFICACIÓN DEL PROYECTO</h2>
            <table border="1" cellpadding="5" style="width: 100%; border-collapse: collapse;">
                <tr><td style="width: 30%;"><strong>NOMBRE DEL PROYECTO</strong></td><td>${projectData.nombre}</td></tr>
                <tr><td><strong>LÍDER ESTRATÉGICO</strong></td><td>${projectData.lider}</td></tr>
                <tr><td><strong>PERSONAL DE APOYO</strong></td><td>${projectData.apoyo}</td></tr>
                <tr><td><strong>INSTITUCIÓN BENEFICIARIA</strong></td><td>${projectData.institucion}</td></tr>
                <tr><td><strong>UBICACIÓN GEOGRÁFICA</strong></td><td>${projectData.ubicacion}</td></tr>
            </table>
            <br/>
            <h2>2. ESTUDIO DE POBLACIÓN (ZEDU)</h2>
            <table border="1" cellpadding="5" style="width: 100%; border-collapse: collapse;">
                <tr><td style="width: 30%;"><strong>LOCALIZACIÓN ESPECÍFICA</strong></td><td>${poblacionData.localizacion}</td></tr>
                <tr><td><strong>NOMBRE DE LA COMUNIDAD</strong></td><td>${poblacionData.comunidad}</td></tr>
                <tr><td><strong>POBLACIÓN ESTIMADA</strong></td><td>${poblacionData.estimada}</td></tr>
            </table>
            <br/>
            <h2>3. ANÁLISIS DEL PROBLEMA</h2>
            <table border="1" cellpadding="5" style="width: 100%; border-collapse: collapse;">
                <tr><td style="width: 30%;"><strong>Definición del Problema</strong></td><td>${problemaData.definicion}</td></tr>
                <tr><td><strong>Importancia</strong></td><td>${problemaData.importancia}</td></tr>
                <tr><td><strong>Causas</strong></td><td>${problemaData.causas}</td></tr>
                <tr><td><strong>Consecuencias</strong></td><td>${problemaData.consecuencias}</td></tr>
                <tr><td><strong>Origen y Evolución</strong></td><td>${problemaData.origen}</td></tr>
            </table>
            <br/>
            <h2>4. SOLUCIÓN PROPUESTA</h2>
            <table border="1" cellpadding="5" style="width: 100%; border-collapse: collapse;">
                <tr><td style="width: 30%;"><strong>Desarrolla tu Proyecto</strong></td><td>${solucionData.proyecto}</td></tr>
                <tr><td><strong>Otras Propuestas Existentes</strong></td><td>${solucionData.propuestasExistentes}</td></tr>
            </table>
            <br/>
            <h2>5. DIFERENCIADORES CLAVE</h2>
            <p><strong>Especialización:</strong> Mientras competidores ofrecen servicios genéricos de IT, System Kyron resuelve problemas específicos del sector educativo (archivo físico y comunicación escolar), con escalabilidad a otros sectores.</p>
            <p><strong>Alcance del Usuario:</strong> A diferencia de otros que optimizan procesos internos, System Kyron impacta directamente en la experiencia del cliente final (padres/representantes) mediante su chatbot.</p>
            <p><strong>De Datos a Estrategia:</strong> System Kyron va más allá de la "gestión eficiente", utilizando la IA para generar ideas estratégicas y apoyar la toma de decisiones directivas.</p>
            <br/>
            <h2>6. PRESUPUESTO</h2>
            <table border="1" cellpadding="5" style="width: 100%; border-collapse: collapse;">
                <thead>
                    <tr>
                        <th style="width: 40%;">ITEM</th>
                        <th style="width: 20%;">CANTIDAD</th>
                        <th style="width: 20%;">COSTO</th>
                        <th style="width: 20%;">LUGAR DE COMPRA</th>
                    </tr>
                </thead>
                <tbody>
                    <tr><td>&nbsp;</td><td></td><td></td><td></td></tr>
                    <tr><td>&nbsp;</td><td></td><td></td><td></td></tr>
                    <tr><td>&nbsp;</td><td></td><td></td><td></td></tr>
                    <tr><td colspan="4" style="height:20px;"></td></tr>
                    <tr><td>&nbsp;</td><td></td><td></td><td></td></tr>
                    <tr><td>&nbsp;</td><td></td><td></td><td></td></tr>
                </tbody>
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
        const sourceHTML = header + content.replace(/<h2>/g, '<h2 style="margin-top: 20px;">').replace(/<table/g, '<table style="font-family: Arial, sans-serif; font-size: 11pt;" >') + footer;

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
    <div className="p-4 md:p-8 max-w-4xl mx-auto">
        <header className="mb-10 text-center">
            <h1 className="text-3xl font-bold tracking-tight text-primary">
                MODELO DE ZEDU - {projectData.nombre}
            </h1>
        </header>

        <div className="space-y-8">
            <Card className="border-2 border-primary/20">
                <div className="bg-primary text-primary-foreground p-3">
                    <CardTitle className="flex items-center gap-3"><Users className="h-5 w-5" />1. INFORMACIÓN DEL EQUIPO</CardTitle>
                </div>
                <CardContent className="p-0">
                    <Table>
                        <TableBody>
                            <TableRow><TableCell className="font-semibold w-1/3">Nombre del Proyecto</TableCell><TableCell>{projectData.nombre}</TableCell></TableRow>
                            <TableRow><TableCell className="font-semibold">Líder Estratégico</TableCell><TableCell>{projectData.lider}</TableCell></TableRow>
                            <TableRow><TableCell className="font-semibold">Personal de Apoyo</TableCell><TableCell>{projectData.apoyo}</TableCell></TableRow>
                            <TableRow><TableCell className="font-semibold">Institución</TableCell><TableCell>{projectData.institucion}</TableCell></TableRow>
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>

            <Card className="border-2 border-primary/20">
                <div className="bg-primary text-primary-foreground p-3">
                    <CardTitle className="flex items-center gap-3"><School className="h-5 w-5" />2. POBLACIÓN A TRABAJAR</CardTitle>
                </div>
                <CardContent className="p-0">
                    <Table>
                        <TableBody>
                            <TableRow><TableCell className="font-semibold w-1/3">Localización</TableCell><TableCell>{poblacionData.localizacion}</TableCell></TableRow>
                            <TableRow><TableCell className="font-semibold">Comunidad</TableCell><TableCell>{poblacionData.comunidad}</TableCell></TableRow>
                            <TableRow><TableCell className="font-semibold">Población Estimada</TableCell><TableCell>{poblacionData.estimada}</TableCell></TableRow>
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
            
            <Card className="border-2 border-primary/20">
                <div className="bg-primary text-primary-foreground p-3">
                    <CardTitle className="flex items-center gap-3"><HelpCircle className="h-5 w-5" />3. ANÁLISIS DEL PROBLEMA</CardTitle>
                </div>
                <CardContent className="p-0">
                     <Table>
                        <TableBody>
                             <TableRow><TableCell className="font-semibold w-1/3">Definición del Problema</TableCell><TableCell>{problemaData.definicion}</TableCell></TableRow>
                            <TableRow><TableCell className="font-semibold">Importancia</TableCell><TableCell>{problemaData.importancia}</TableCell></TableRow>
                            <TableRow><TableCell className="font-semibold">Causas</TableCell><TableCell>{problemaData.causas}</TableCell></TableRow>
                            <TableRow><TableCell className="font-semibold">Consecuencias</TableCell><TableCell>{problemaData.consecuencias}</TableCell></TableRow>
                            <TableRow><TableCell className="font-semibold">Origen y Evolución</TableCell><TableCell>{problemaData.origen}</TableCell></TableRow>
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>

            <Card className="border-2 border-primary/20">
                <div className="bg-primary text-primary-foreground p-3">
                    <CardTitle className="flex items-center gap-3"><Rocket className="h-5 w-5" />4. SOLUCIÓN PROPUESTA</CardTitle>
                </div>
                 <CardContent className="p-0">
                     <Table>
                        <TableBody>
                            <TableRow><TableCell className="font-semibold w-1/3">Desarrolla tu Proyecto</TableCell><TableCell>{solucionData.proyecto}</TableCell></TableRow>
                             <TableRow><TableCell className="font-semibold">Otras Propuestas Existentes</TableCell><TableCell>{solucionData.propuestasExistentes}</TableCell></TableRow>
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
            
             <Card className="border-2 border-primary/20">
                <div className="bg-primary text-primary-foreground p-3">
                    <CardTitle className="flex items-center gap-3"><Target className="h-5 w-5" />5. DIFERENCIADORES CLAVE</CardTitle>
                </div>
                <CardContent className="p-6 space-y-4 text-muted-foreground">
                    <div>
                        <h4 className="font-semibold text-foreground">Especialización:</h4>
                        <p>Mientras competidores ofrecen servicios genéricos de IT, System Kyron resuelve problemas específicos del sector educativo (archivo físico y comunicación escolar), con escalabilidad a otros sectores.</p>
                    </div>
                    <div>
                        <h4 className="font-semibold text-foreground">Alcance del Usuario:</h4>
                        <p>A diferencia de otros que optimizan procesos internos, System Kyron impacta directamente en la experiencia del cliente final (padres/representantes) mediante su chatbot.</p>
                    </div>
                    <div>
                        <h4 className="font-semibold text-foreground">De Datos a Estrategia:</h4>
                        <p>System Kyron va más allá de la "gestión eficiente", utilizando la IA para generar ideas estratégicas y apoyar la toma de decisiones directivas.</p>
                    </div>
                </CardContent>
            </Card>

            <Card className="border-2 border-primary/20">
                <div className="bg-primary text-primary-foreground p-3">
                    <CardTitle className="flex items-center gap-3"><TrendingDown className="h-5 w-5" />6. PRESUPUESTO</CardTitle>
                </div>
                <CardContent className="p-0">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="font-semibold w-[40%]">ITEM</TableHead>
                                <TableHead className="font-semibold w-[20%]">CANTIDAD</TableHead>
                                <TableHead className="font-semibold w-[20%]">COSTO</TableHead>
                                <TableHead className="font-semibold w-[20%]">LUGAR DE COMPRA</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            <TableRow><TableCell>&nbsp;</TableCell><TableCell></TableCell><TableCell></TableCell><TableCell></TableCell></TableRow>
                            <TableRow><TableCell>&nbsp;</TableCell><TableCell></TableCell><TableCell></TableCell><TableCell></TableCell></TableRow>
                            <TableRow><TableCell>&nbsp;</TableCell><TableCell></TableCell><TableCell></TableCell><TableCell></TableCell></TableRow>
                            <TableRow className="border-none"><TableCell className="pt-8">&nbsp;</TableCell><TableCell></TableCell><TableCell></TableCell><TableCell></TableCell></TableRow>
                            <TableRow><TableCell>&nbsp;</TableCell><TableCell></TableCell><TableCell></TableCell><TableCell></TableCell></TableRow>
                            <TableRow><TableCell>&nbsp;</TableCell><TableCell></TableCell><TableCell></TableCell><TableCell></TableCell></TableRow>
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
