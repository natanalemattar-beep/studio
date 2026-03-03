'use client';

import React from 'react';
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Download, Users, School, MapPin, Target, HelpCircle, TrendingDown, History, Rocket, Lightbulb, TrendingUp, Handshake } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableRow, TableHeader, TableHead } from "@/components/ui/table";
import { Separator } from '@/components/ui/separator';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';


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
    definicion: "Falta de una plataforma centralizada que integre la gestión empresarial, fiscal y de cumplimiento en Venezuela, generando ineficiencia, riesgo de multas y desarticulación operativa.",
    importancia: "Una gestión desintegrada dificulta la toma de decisiones, sobrecarga al personal, limita la visibilidad financiera y aumenta la vulnerabilidad ante fiscalizaciones del SENIAT.",
    causas: "Sistemas obsoletos, resistencia al cambio, complejidad de la legislación venezolana, datos fragmentados en múltiples plataformas (Excel, WhatsApp, sistemas aislados).",
    consecuencias: "Pérdida de tiempo y dinero, errores en declaraciones de impuestos, sanciones del SENIAT, comunicación deficiente entre departamentos y falta de datos para la toma de decisiones estratégicas.",
    origen: "Las empresas han adoptado herramientas tecnológicas de forma reactiva, creando un 'Frankenstein' de sistemas que no se comunican entre sí, incapaces de afrontar la dinámica fiscal del país."
};

const solucionData = {
    proyecto: "Desarrollar e implementar 'System Kyron', un ecosistema digital integral (plataforma web y app móvil) que unifica la gestión contable-fiscal (automatización SENIAT), recursos humanos, ventas, inventario y más, conectando todos los departamentos de una empresa en un solo Centro de Mando.",
    propuestasExistentes: "Sistemas ERP internacionales (SAP, Oracle) que son costosos y no están adaptados a la fiscalidad venezolana. Software contable local (como A2, Valery) que a menudo son sistemas de escritorio, obsoletos, y carecen de integración en la nube o capacidades móviles. Gestorías tradicionales que dependen de procesos manuales, lentos y propensos a errores.",
    diferenciadores: "Especialización 100% en Venezuela y sus complejidades fiscales. Enfoque 'Todo en Uno' que elimina la fragmentación de datos y sistemas. Inteligencia Fiscal Predictiva para garantizar 'Cero Riesgo Fiscal'. Arquitectura en la nube y móvil-first para acceso desde cualquier lugar."
};

const presupuestoData = {
    nota: "Los ítems pueden incluir todo material o servicio necesario para ejecutar el proyectos, puede ser donaciones monetarias o en especie. Ejemplo de los ítems: libretas, lápices, bolígrafos, material electrónico o eléctricos, mesas, sillas, formación académica o especializada, traslados y transporte, etc. NOTA: preferiblemente elabora esta tabla en excel o en hoja de cálculo.",
    items: [
        // Example items, can be empty
    ]
};

const aliadosData = [
    // Empty as per the image
    {}, {}, {}, {}, {}
];


const getDocumentContent = () => {
    return `
        <h1>MODELO DE ZEDU - System Kyron 2025</h1>
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
        <p>${presupuestoData.nota}</p>
        <br/>
        <h2>7. ALIADOS</h2>
        <p>(Información sobre aliados aquí)</p>
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
                MODELO DE ZEDU - System Kyron 2025
            </h1>
            <div className="flex justify-center pt-8">
                <Button onClick={handleDownloadWord} size="lg" className="shadow-lg">
                    <Download className="mr-2 h-5 w-5"/> Descargar Documento Completo (.doc)
                </Button>
            </div>
        </header>

        <Card className="bg-card/50 backdrop-blur-sm">
            <CardHeader className="bg-primary/10 rounded-t-lg">
                <CardTitle className="flex items-center gap-3"><Users className="h-5 w-5 text-primary" />1. INFORMACIÓN DEL EQUIPO</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
                <Table>
                     <TableBody>
                        <TableRow><TableCell className="font-semibold text-muted-foreground w-1/3">PROYECTO</TableCell><TableCell>{projectData.nombre}</TableCell></TableRow>
                        <TableRow><TableCell className="font-semibold text-muted-foreground">INTEGRANTES</TableCell><TableCell>{projectData.lider}, {projectData.apoyo}</TableCell></TableRow>
                        <TableRow><TableCell className="font-semibold text-muted-foreground">INSTITUCIÓN</TableCell><TableCell>{projectData.institucion}</TableCell></TableRow>
                    </TableBody>
                </Table>
            </CardContent>
        </Card>

        <Card className="bg-card/50 backdrop-blur-sm">
            <CardHeader className="bg-primary/10 rounded-t-lg">
                <CardTitle className="flex items-center gap-3"><MapPin className="h-5 w-5 text-primary" />2. POBLACIÓN A TRABAJAR</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
                 <Table>
                     <TableBody>
                        <TableRow><TableCell className="font-semibold text-muted-foreground w-1/3">LOCALIZACIÓN</TableCell><TableCell>{poblacionData.localizacion}</TableCell></TableRow>
                        <TableRow><TableCell className="font-semibold text-muted-foreground">COMUNIDAD</TableCell><TableCell>{poblacionData.comunidad}</TableCell></TableRow>
                        <TableRow><TableCell className="font-semibold text-muted-foreground">POBLACIÓN ESTIMADA</TableCell><TableCell>{poblacionData.estimada}</TableCell></TableRow>
                    </TableBody>
                </Table>
            </CardContent>
        </Card>

        <Card className="bg-card/50 backdrop-blur-sm">
            <CardHeader className="bg-primary/10 rounded-t-lg">
                <CardTitle className="flex items-center gap-3"><HelpCircle className="h-5 w-5 text-primary" />3. ANÁLISIS DEL PROBLEMA</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
                 <Table>
                     <TableBody>
                        <TableRow><TableCell className="font-semibold text-muted-foreground w-1/3">DEFINICIÓN</TableCell><TableCell>{problemaData.definicion}</TableCell></TableRow>
                        <TableRow><TableCell className="font-semibold text-muted-foreground">IMPORTANCIA</TableCell><TableCell>{problemaData.importancia}</TableCell></TableRow>
                        <TableRow><TableCell className="font-semibold text-muted-foreground">CAUSAS</TableCell><TableCell>{problemaData.causas}</TableCell></TableRow>
                        <TableRow><TableCell className="font-semibold text-muted-foreground">CONSECUENCIAS</TableCell><TableCell>{problemaData.consecuencias}</TableCell></TableRow>
                         <TableRow><TableCell className="font-semibold text-muted-foreground">ORIGEN Y EVOLUCIÓN</TableCell><TableCell>{problemaData.origen}</TableCell></TableRow>
                    </TableBody>
                </Table>
            </CardContent>
        </Card>

        <Card className="bg-card/50 backdrop-blur-sm">
            <CardHeader className="bg-primary/10 rounded-t-lg">
                <CardTitle className="flex items-center gap-3"><Rocket className="h-5 w-5 text-primary" />4. SOLUCIÓN PROPUESTA</CardTitle>
            </CardHeader>
            <CardContent className="p-4">
                 <p>{solucionData.proyecto}</p>
            </CardContent>
        </Card>

        <Card className="bg-card/50 backdrop-blur-sm">
            <CardHeader className="bg-primary/10 rounded-t-lg">
                <CardTitle className="flex items-center gap-3"><Lightbulb className="h-5 w-5 text-primary" />5. ANÁLISIS COMPETITIVO</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
                 <Table>
                     <TableBody>
                        <TableRow><TableCell className="font-semibold text-muted-foreground w-1/3">OTRAS PROPUESTAS EXISTENTES</TableCell><TableCell>{solucionData.propuestasExistentes}</TableCell></TableRow>
                        <TableRow><TableCell className="font-semibold text-muted-foreground">DIFERENCIADORES CLAVE</TableCell><TableCell>{solucionData.diferenciadores}</TableCell></TableRow>
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
        
        <Card className="bg-card/50 backdrop-blur-sm">
            <CardHeader className="bg-primary/10 rounded-t-lg">
                <CardTitle className="flex items-center gap-3"><TrendingUp className="h-5 w-5 text-primary" />6. PRESUPUESTO</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
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
                        {/* Empty rows for user to fill */}
                        <TableRow><TableCell>&nbsp;</TableCell><TableCell></TableCell><TableCell></TableCell><TableCell></TableCell></TableRow>
                        <TableRow><TableCell>&nbsp;</TableCell><TableCell></TableCell><TableCell></TableCell><TableCell></TableCell></TableRow>
                        <TableRow><TableCell>&nbsp;</TableCell><TableCell></TableCell><TableCell></TableCell><TableCell></TableCell></TableRow>
                    </TableBody>
                </Table>
            </CardContent>
        </Card>

        <Card className="bg-card/50 backdrop-blur-sm">
            <CardHeader className="bg-primary/10 rounded-t-lg">
                <CardTitle className="flex items-center gap-3"><Handshake className="h-5 w-5 text-primary" />7. ALIADOS</CardTitle>
            </CardHeader>
            <CardContent className="p-4">
                 <p className="text-sm text-muted-foreground mb-4">
                    {presupuestoData.nota}
                 </p>
                 <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-1/2">ALIADO</TableHead>
                            <TableHead>APOYO</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                         {aliadosData.map((_, index) => (
                           <TableRow key={index}><TableCell>&nbsp;</TableCell><TableCell></TableCell></TableRow>
                         ))}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    </div>
  );
}
