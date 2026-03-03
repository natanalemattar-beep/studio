'use client';

import React from 'react';
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Download, Users, MapPin, HelpCircle, Rocket, Lightbulb, TrendingUp, Handshake } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableRow, TableHeader, TableHead } from "@/components/ui/table";
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
    const tableStyle = `border: 1px solid #dddddd; width: 100%; border-collapse: collapse; margin-bottom: 20px; font-family: Arial, sans-serif;`;
    const thStyle = `background-color: #2c5282; color: #ffffff; padding: 12px; text-align: left; font-size: 16px;`;
    const tdKeyStyle = `border: 1px solid #dddddd; padding: 10px; font-weight: bold; width: 30%; background-color: #f2f2f2;`;
    const tdValueStyle = `border: 1px solid #dddddd; padding: 10px;`;
    const thSpanStyle = `background-color: #4a5568; color: #ffffff; padding: 10px; text-align: left; font-size: 14px;`;

    const createSection = (title: string, data: Record<string, any>) => {
        let rows = '';
        for (const [key, value] of Object.entries(data)) {
            const formattedKey = key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());
            rows += `<tr><td style="${tdKeyStyle}">${formattedKey}</td><td style="${tdValueStyle}">${value}</td></tr>`;
        }
        return `
            <table style="${tableStyle}">
                <thead><tr><th colspan="2" style="${thStyle}">${title}</th></tr></thead>
                <tbody>${rows}</tbody>
            </table>
        `;
    };

    const createTableSection = (title: string, note: string, headers: string[]) => {
        const headerCells = headers.map(h => `<th style="${thSpanStyle}">${h}</th>`).join('');
        let emptyRows = '';
        for (let i = 0; i < 3; i++) {
            emptyRows += `<tr>${headers.map(() => `<td style="${tdValueStyle}">&nbsp;</td>`).join('')}</tr>`;
        }
        return `
            <table style="${tableStyle}">
                 <thead><tr><th colspan="${headers.length}" style="${thStyle}">${title}</th></tr></thead>
                <tbody>
                    ${note ? `<tr><td colspan="${headers.length}" style="${tdValueStyle}"><i>${note}</i></td></tr>` : ''}
                    <tr style="background-color: #edf2f7;">${headerCells}</tr>
                    ${emptyRows}
                </tbody>
            </table>
        `;
    };

    const sections = [
        { title: "1. IDENTIFICACIÓN DEL PROYECTO", data: projectData },
        { title: "2. ESTUDIO DE POBLACIÓN (ZEDU)", data: poblacionData },
        { title: "3. ANÁLISIS DEL PROBLEMA", data: problemaData },
        { title: "4. SOLUCIÓN PROPUESTA", data: { "Desarrolla tu Proyecto": solucionData.proyecto } },
        { title: "5. ANÁLISIS COMPETITIVO", data: { "Otras Propuestas Existentes": solucionData.propuestasExistentes, "Diferenciadores Clave": solucionData.diferenciadores } },
    ];
    
    let content = `<h1 style="font-family: Arial, sans-serif; color: #2c5282;">MODELO DE ZEDU - System Kyron 2025</h1>`;
    sections.forEach(section => {
        content += createSection(section.title, section.data);
    });

    content += createTableSection("6. PRESUPUESTO", presupuestoData.nota, ["ITEM", "CANTIDAD", "COSTO", "LUGAR DE COMPRA"]);
    content += createTableSection("7. ALIADOS", "Busca aliados estratégicos, ya sea persona natural, empresas públicas o privadas.", ["ALIADO", "APOYO"]);

    return content;
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

    const sections = [
        { icon: Users, title: "1. IDENTIFICACIÓN DEL PROYECTO", data: projectData },
        { icon: MapPin, title: "2. ESTUDIO DE POBLACIÓN (ZEDU)", data: poblacionData },
        { icon: HelpCircle, title: "3. ANÁLISIS DEL PROBLEMA", data: problemaData },
        { icon: Rocket, title: "4. SOLUCIÓN PROPUESTA", data: { "Desarrolla tu Proyecto": solucionData.proyecto } },
        { icon: Lightbulb, title: "5. ANÁLISIS COMPETITIVO", data: { "Otras Propuestas Existentes": solucionData.propuestasExistentes, "Diferenciadores Clave": solucionData.diferenciadores } },
        { icon: TrendingUp, title: "6. PRESUPUESTO", data: presupuestoData, isTable: true, note: presupuestoData.nota, tableHeaders: ["ITEM", "CANTIDAD", "COSTO", "LUGAR DE COMPRA"] },
        { icon: Handshake, title: "7. ALIADOS", data: aliadosData, isTable: true, note: "Busca aliados estratégicos, ya sea persona natural, empresas públicas o privadas.", tableHeaders: ["ALIADO", "APOYO"] }
    ];

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
            <CardHeader>
                <CardTitle>Modelo Consolidado</CardTitle>
                <CardDescription>Haz clic en cada sección para expandir y ver los detalles.</CardDescription>
            </CardHeader>
            <CardContent>
                 <Accordion type="single" collapsible className="w-full" defaultValue="item-0">
                    {sections.map((section, index) => (
                        <AccordionItem value={`item-${index}`} key={section.title}>
                            <AccordionTrigger className="text-lg">
                                <div className="flex items-center gap-3">
                                    <section.icon className="h-5 w-5 text-primary" />
                                    <span className="font-semibold">{section.title}</span>
                                </div>
                            </AccordionTrigger>
                            <AccordionContent>
                                {section.isTable ? (
                                    <div className="p-2">
                                        {section.note && <p className="text-sm text-muted-foreground mb-4">{section.note}</p>}
                                        <Table>
                                            <TableHeader>
                                                <TableRow>
                                                    {section.tableHeaders?.map(header => <TableHead key={header}>{header}</TableHead>)}
                                                </TableRow>
                                            </TableHeader>
                                            <TableBody>
                                                 {/* Render empty rows for user to fill */}
                                                {[...Array(3)].map((_, i) => (
                                                    <TableRow key={i}>
                                                        {section.tableHeaders?.map((_, j) => <TableCell key={j}>&nbsp;</TableCell>)}
                                                    </TableRow>
                                                ))}
                                            </TableBody>
                                        </Table>
                                    </div>
                                ) : (
                                    <Table>
                                        <TableBody>
                                            {Object.entries(section.data).map(([key, value]) => (
                                                <TableRow key={key}>
                                                    <TableCell className="font-semibold text-muted-foreground w-1/3 uppercase text-xs tracking-wider">
                                                        {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                                                    </TableCell>
                                                    <TableCell>{String(value)}</TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                )}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                 </Accordion>
            </CardContent>
        </Card>
    </div>
  );
}
