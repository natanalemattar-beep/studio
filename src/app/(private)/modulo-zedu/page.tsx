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
    definicion: "Las empresas en Venezuela enfrentan una gestión fragmentada y de alto riesgo, dependiendo de múltiples sistemas aislados (contables, administrativos, comunicación) que no se comunican entre sí, generando ineficiencia operativa y una alta vulnerabilidad ante el SENIAT.",
    importancia: "La desintegración de sistemas genera sobrecarga de trabajo manual, dificulta la toma de decisiones estratégicas, aumenta el riesgo de errores y sanciones fiscales, y eleva los costos al tener que contratar múltiples proveedores de software, hardware y telecomunicaciones.",
    causas: "Sistemas obsoletos, complejidad de la legislación fiscal venezolana, resistencia al cambio y una adopción reactiva de tecnología que ha creado un 'Frankenstein' de sistemas (Excel, WhatsApp, A2, etc.) que no pueden operar de forma unificada.",
    consecuencias: "Pérdida de tiempo y dinero, errores en declaraciones de impuestos, multas del SENIAT, comunicación deficiente entre departamentos, falta de visibilidad financiera en tiempo real y una incapacidad para adaptarse ágilmente a los cambios del mercado.",
    origen: "Históricamente, las empresas han parchado sus operaciones con soluciones aisladas para problemas específicos, sin una visión de ecosistema. Esto ha resultado en una infraestructura tecnológica frágil e ineficiente, incapaz de afrontar la dinámica económica y fiscal del país."
};

const solucionData = {
    proyecto: "Implementar 'System Kyron', un ecosistema empresarial 'Todo en Uno' que unifica la gestión (Contabilidad, RRHH, Ventas), las telecomunicaciones 5G (línea telefónica privada) y las finanzas (Billetera Blockchain) en un único Centro de Mando. El objetivo es centralizar la operación, garantizar 'Cero Riesgo Fiscal' con IA y dotar a la empresa de soberanía tecnológica.",
    propuestasExistentes: "Sistemas ERP internacionales (SAP, Oracle): costosos y no adaptados a Venezuela. Software local (A2, Valery): obsoletos, de escritorio, sin integración en la nube ni telecomunicaciones. Gestorías tradicionales: procesos manuales, lentos y con alto margen de error.",
    diferenciadores: "Única plataforma que integra ERP, Telecomunicaciones y Finanzas Blockchain. Especialización 100% en el marco fiscal venezolano. Arquitectura 'Nube Primero' y 'Móvil Primero'. Inteligencia Artificial para la predicción de riesgos y optimización de decisiones."
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
        { title: "4. SOLUCIÓN PROPUESTA", data: { "Proyecto": solucionData.proyecto } },
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
        { icon: Rocket, title: "4. SOLUCIÓN PROPUESTA", data: { "Proyecto": solucionData.proyecto } },
        { icon: Lightbulb, title: "5. ANÁLISIS COMPETITIVO", data: { "Otras Propuestas Existentes": solucionData.propuestasExistentes, "Diferenciadores Clave": solucionData.diferenciadores } },
        { icon: TrendingUp, title: "6. PRESUPUESTO", data: presupuestoData, isTable: true, note: presupuestoData.nota, tableHeaders: ["ITEM", "CANTIDAD", "COSTO", "LUGAR DE COMPRA"] },
        { icon: Handshake, title: "7. ALIADOS", data: aliadosData, isTable: true, note: "Busca aliados estratégicos, ya sea persona natural, empresas públicas o privadas.", tableHeaders: ["ALIADO", "APOYO"] }
    ];

  return (
    <div className="p-4 md:p-8 max-w-6xl mx-auto space-y-8">
        <header className="mb-10 text-center">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-primary">
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
                                        <div className="overflow-x-auto">
                                            <Table>
                                                <TableHeader>
                                                    <TableRow>
                                                        {section.tableHeaders?.map(header => <TableHead key={header} className="bg-muted/50">{header}</TableHead>)}
                                                    </TableRow>
                                                </TableHeader>
                                                <TableBody>
                                                    {[...Array(3)].map((_, i) => (
                                                        <TableRow key={i}>
                                                            {section.tableHeaders?.map((_, j) => <TableCell key={j} className="h-10">&nbsp;</TableCell>)}
                                                        </TableRow>
                                                    ))}
                                                </TableBody>
                                            </Table>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="p-4 bg-muted/20 rounded-lg border">
                                        <div className="space-y-4">
                                            {Object.entries(section.data).map(([key, value]) => (
                                                <div key={key} className="grid grid-cols-1 md:grid-cols-3 gap-x-4 gap-y-1 py-2 border-b border-border/20 last:border-b-0">
                                                    <div className="md:col-span-1 font-semibold text-muted-foreground uppercase text-xs tracking-wider">
                                                        {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                                                    </div>
                                                    <div className="md:col-span-2 text-sm text-foreground">
                                                        {String(value)}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
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

    