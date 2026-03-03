
"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { Download, FileText, Printer } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const informacionEquipo = [
  { campo: "NOMBRE DEL PROYECTO", valor: "AutoMind AI" },
  { campo: "INTEGRANTES DEL EQUIPO", valor: "Carlos Mattar, Marcos Sousa, Sebastian Garrido" },
  { campo: "INSTITUCIÓN EDUCATIVA", valor: "U.E.P. Gabriela Mistral" },
  { campo: "PAÍS/CIUDAD", valor: "Venezuela, Caracas" },
];

const poblacionTrabajar = [
  { campo: "PAÍS/ CIUDAD/ MUNICIPIO/ LOCALIDAD ESPECÍFICA", valor: "Venezuela, Caracas" },
  { campo: "NOMBRE DE LA COMUNIDAD", valor: "(No especificado)" },
  { campo: "NÚMERO DE HABITANTES", valor: "(No especificado)" },
  { campo: "GÉNERO", valor: "(No especificado)" },
  { campo: "EDADES COMPRENDIDAS", valor: "(No especificado)" },
  { campo: "CARACTERÍSTICAS SOCIALES", valor: "(No especificado)" },
  { campo: "CARACTERÍSTICAS ECONÓMICAS", valor: "(No especificado)" },
  { campo: "CARACTERÍSTICAS EDUCATIVAS", valor: "(No especificado)" },
  { campo: "CARACTERÍSTICAS CULTURALES", valor: "(No especificado)" },
];

const planteamientoProblema = [
    { campo: "QUE TAN INFORMADA ESTA LA COMUNIDAD SOBRE LOS IMPUESTOS?", valor: "LA COMUNIDAD EDUCATIVA NO ESTA INFORMADA SOBRE LOS IMPUESTOS, YA QUE ES UN TEMA COMPLEJO Y POCO ATRACTIVO, LO QUE GENERA CONFUSIÓN Y DESINTERÉS EN LA MATERIA." },
    { campo: "COMO AYUDARIA ESTO A LA COMUNIDAD?", valor: "COMPRENDER LOS IMPUESTOS ES FUNDAMENTAL PARA UNA CIUDADANÍA RESPONSABLE. PERMITE A LAS PERSONAS TOMAR DECISIONES FINANCIERAS MÁS CONSCIENTES, EXIGIR TRANSPARENCIA EN EL USO DE LOS RECURSOS PÚBLICOS Y ENTENDER CÓMO SE FINANCIAN LOS SERVICIOS ESENCIALES, FORTALECIENDO ASÍ LA DEMOCRACIA Y EL BIENESTAR COLECTIVO." },
    { campo: "QUE OCASIONA ESTE PROBLEMA?", valor: "1. FALTA DE EDUCACIÓN FINANCIERA EN EL SISTEMA EDUCATIVO.\n2. COMPLEJIDAD DEL LENGUAJE TRIBUTARIO.\n3. PERCEPCIÓN NEGATIVA DE LOS IMPUESTOS.\n4. FALTA DE TRANSPARENCIA EN EL USO DE LOS RECURSOS.\n5. POCO INTERÉS DE LOS MEDIOS DE COMUNICACIÓN." },
    { campo: "QUE CONSECUENCIAS TRAE ESTE PROBLEMA?", valor: "1. EVASIÓN FISCAL Y REDUCCIÓN DE LA RECAUDACIÓN.\n2. DESCONFIANZA EN LAS INSTITUCIONES PÚBLICAS.\n3. DIFICULTAD PARA PLANIFICAR FINANZAS PERSONALES.\n4. POCA PARTICIPACIÓN CIUDADANA EN EL DEBATE FISCAL.\n5. MENOR CALIDAD EN LOS SERVICIOS PÚBLICOS." },
    { campo: "DE DONDE PROVIENE ESTE PROBLEMA?", valor: "ESTE PROBLEMA SE ORIGINA EN UNA COMBINACIÓN DE FACTORES HISTÓRICOS Y CULTURALES. LA EDUCACIÓN FINANCIERA NO HA SIDO UNA PRIORIDAD, Y LA COMPLEJIDAD DEL SISTEMA TRIBUTARIO HA FOMENTADO UNA DISTANCIA ENTRE LOS CIUDADANOS Y SUS RESPONSABILIDADES FISCALES. ADEMÁS, LA FALTA DE TRANSPARENCIA HA ALIMENTADO LA DESCONFIANZA, CREANDO UN CÍRCULO VICIOSO DE DESINTERÉS Y EVASIÓN." },
];

const ZeduSection = ({ title, data }: { title: string, data: { campo: string, valor: string }[] }) => (
    <Card>
        <CardHeader className="bg-primary text-primary-foreground p-3 rounded-t-xl">
            <CardTitle className="text-lg">{title}</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
            <Table>
                <TableBody>
                    {data.map(item => (
                        <TableRow key={item.campo}>
                            <TableCell className="font-semibold w-1/3 border-r">{item.campo}</TableCell>
                            <TableCell className="whitespace-pre-line">{item.valor}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </CardContent>
    </Card>
);

export default function ModuloZeduPage() {
    const { toast } = useToast();

    const getDocumentContent = () => {
        const createHtmlSection = (title: string, data: {campo: string, valor: string}[]) => `
            <h2 style="color: #333; font-family: Arial, sans-serif; border-bottom: 2px solid #333; padding-bottom: 5px;">${title}</h2>
            <ul style="list-style-type: none; padding-left: 0; font-family: Arial, sans-serif;">
                ${data.map(item => `
                    <li style="margin-bottom: 15px;">
                        <p style="margin: 0; font-weight: bold; color: #555;">${item.campo}</p>
                        <p style="margin: 0; white-space: pre-wrap;">${item.valor}</p>
                    </li>
                `).join('')}
            </ul>
        `;

        return `
            <div style="text-align:center;">
                <h1 style="font-family: Arial, sans-serif; font-size: 24px; color: #111;">Modelo ZEDU Consolidado</h1>
            </div>
            ${createHtmlSection('IDENTIFICACIÓN DEL PROYECTO', informacionEquipo)}
            ${createHtmlSection('ESTUDIO DE POBLACIÓN', poblacionTrabajar)}
            ${createHtmlSection('PLANTEAMIENTO DEL PROBLEMA', planteamientoProblema)}
        `;
    };

    const handleAction = (action: 'print' | 'word') => {
        const content = getDocumentContent();
        const header = "<!DOCTYPE html><html><head><meta charset='utf-8'><title>Modelo ZEDU Consolidado</title></head><body>";
        const footer = "</body></html>";
        const sourceHTML = header + content + footer;

        if (action === 'print') {
            const printWindow = window.open('', '_blank');
            if(printWindow) {
                printWindow.document.write(sourceHTML);
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
            const source = 'data:application/vnd.ms-word;charset=utf-8,' + encodeURIComponent(sourceHTML);
            const fileDownload = document.createElement("a");
            document.body.appendChild(fileDownload);
            fileDownload.href = source;
            fileDownload.download = 'ZEDU_Modelo_Consolidado.doc';
            fileDownload.click();
            document.body.removeChild(fileDownload);
            toast({
                title: "Descarga Iniciada",
                description: "El documento se está descargando como un archivo .doc de Word.",
            });
        }
    };


  return (
    <div className="p-4 md:p-8">
        <style>
            {`
                @media print {
                    body * { visibility: hidden; }
                    .no-print { display: none; }
                    #printable-content, #printable-content * { visibility: visible; }
                    #printable-content { position: absolute; left: 0; top: 0; width: 100%; }
                }
            `}
        </style>
      <header className="mb-8 flex items-center justify-between no-print">
        <div>
            <h1 className="text-3xl font-bold tracking-tight flex items-center gap-2">
                <FileText className="h-8 w-8" />
                Modelo ZEDU Consolidado
            </h1>
            <p className="text-muted-foreground mt-2">
            Todas las partes del modelo en una sola vista.
            </p>
        </div>
        <div className="flex gap-2">
            <Button variant="outline" onClick={() => handleAction('print')}><Printer className="mr-2 h-4 w-4"/> Guardar como PDF</Button>
            <Button onClick={() => handleAction('word')}><Download className="mr-2 h-4 w-4"/> Descargar Word</Button>
        </div>
      </header>

      <div id="printable-content" className="space-y-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold">Modelo Zedu</h2>
          </div>
          <ZeduSection title="IDENTIFICACIÓN DEL PROYECTO" data={informacionEquipo} />
          <ZeduSection title="ESTUDIO DE POBLACIÓN" data={poblacionTrabajar} />
          <ZeduSection title="PLANTEAMIENTO DEL PROBLEMA" data={planteamientoProblema} />
      </div>
    </div>
  );
}
