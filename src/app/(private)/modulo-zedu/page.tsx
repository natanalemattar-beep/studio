
"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
  { campo: "NOMBRE DE LA COMUNIDAD", valor: "Santa Rosa de Lima" },
  { campo: "CANTIDAD TOTAL DE HABITANTES", valor: "" },
  { campo: "CANTIDAD DE HABITANTES POR GÉNERO", valor: "" },
  { campo: "CANTIDAD DE HABITANTES POR EDAD", valor: "" },
  { campo: "CARACTERISTICAS DE LA POBLACIÓN", valor: "" },
  { campo: "CLIMA", valor: "" },
];

const planteamientoProblema = [
    { campo: "DEFINICIÓN DEL PROBLEMA", valor: "LA COMUNIDAD EDUCATIVA NO ESTA INFORMADA SOBRE LOS IMPUESTOS, YA QUE ES UN TEMA COMPLEJO Y POCO ATRACTIVO, LO QUE GENERA CONFUSIÓN Y DESINTERÉS EN LA MATERIA." },
    { campo: "IMPORTANCIA DE ATENDER EL PROBLEMA", valor: "COMPRENDER LOS IMPUESTOS ES FUNDAMENTAL PARA UNA CIUDADANÍA RESPONSABLE. PERMITE A LAS PERSONAS TOMAR DECISIONES FINANCIERAS MÁS CONSCIENTES, EXIGIR TRANSPARENCIA EN EL USO DE LOS RECURSOS PÚBLICOS Y ENTENDER CÓMO SE FINANCIAN LOS SERVICIOS ESENCIALES, FORTALECIENDO ASÍ LA DEMOCRACIA Y EL BIENESTAR COLECTIVO." },
    { campo: "CAUSAS", valor: "1. FALTA DE EDUCACIÓN FINANCIERA EN EL SISTEMA EDUCATIVO.\n2. COMPLEJIDAD DEL LENGUAJE TRIBUTARIO.\n3. PERCEPCIÓN NEGATIVA DE LOS IMPUESTOS.\n4. FALTA DE TRANSPARENCIA EN EL USO DE LOS RECURSOS.\n5. POCO INTERÉS DE LOS MEDIOS DE COMUNICACIÓN." },
    { campo: "CONSECUENCIAS", valor: "1. EVASIÓN FISCAL Y REDUCCIÓN DE LA RECAUDACIÓN.\n2. DESCONFIANZA EN LAS INSTITUCIONES PÚBLICAS.\n3. DIFICULTAD PARA PLANIFICAR FINANZAS PERSONALES.\n4. POCA PARTICIPACIÓN CIUDADANA EN EL DEBATE FISCAL.\n5. MENOR CALIDAD EN LOS SERVICIOS PÚBLICOS." },
    { campo: "ORIGEN DEL PROBLEMA", valor: "ESTE PROBLEMA SE ORIGINA EN UNA COMBINACIÓN DE FACTORES HISTÓRICOS Y CULTURALES. LA EDUCACIÓN FINANCIERA NO HA SIDO UNA PRIORIDAD, Y LA COMPLEJIDAD DEL SISTEMA TRIBUTARIO HA FOMENTADO UNA DISTANCIA ENTRE LOS CIUDADANOS Y SUS RESPONSABILIDADES FISCALES. ADEMÁS, LA FALTA DE TRANSPARENCIA HA ALIMENTADO LA DESCONFIANZA, CREANDO UN CÍRCULO VICIOSO DE DESINTERÉS Y EVASIÓN." },
];

const objetivos = [
    { campo: "OBJETIVO GENERAL", valor: "CREAR UNA HERRAMIENTA EDUCATIVA ACCESIBLE Y ATRACTIVA QUE SIMPLIFIQUE EL APRENDIZAJE SOBRE IMPUESTOS PARA LA COMUNIDAD EDUCATIVA, UTILIZANDO INTELIGENCIA ARTIFICIAL PARA ADAPTAR EL CONTENIDO A LAS NECESIDADES DE CADA USUARIO." },
    { campo: "OBJETIVOS ESPECÍFICOS", valor: "1. CREAR UNA APLICACIÓN CON UNA INTERFAZ AMIGABLE E INTUITIVA.\n2. UTILIZAR UNA IA PARA PERSONALIZAR EL CONTENIDO EDUCATIVO.\n3. PROMOVER LA PARTICIPACIÓN CIUDADANA Y LA TRANSPARENCIA FISCAL.\n4. EVALUAR EL IMPACTO EDUCATIVO EN LA COMUNIDAD." },
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
            <h2 style="font-family: Arial, sans-serif; border-bottom: 2px solid #333; padding-bottom: 5px; color: #333;">${title}</h2>
            <table style="width: 100%; border-collapse: collapse; font-family: Arial, sans-serif;">
                ${data.map(item => `
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 8px; font-weight: bold; width: 30%; background-color: #f2f2f2;">${item.campo}</td>
                        <td style="padding: 8px; white-space: pre-wrap;">${item.valor}</td>
                    </tr>
                `).join('')}
            </table>
            <br/>
        `;

        return `
            <div style="text-align:center;">
                <h1 style="font-family: Arial, sans-serif; font-size: 24px; color: #111;">Modelo ZEDU Consolidado</h1>
            </div>
            ${createHtmlSection('IDENTIFICACIÓN DEL PROYECTO', informacionEquipo)}
            ${createHtmlSection('ESTUDIO DE POBLACIÓN', poblacionTrabajar)}
            ${createHtmlSection('PLANTEAMIENTO DEL PROBLEMA', planteamientoProblema)}
            ${createHtmlSection('OBJETIVOS', objetivos)}
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
          <ZeduSection title="POBLACIÓN A TRABAJAR" data={poblacionTrabajar} />
          <ZeduSection title="PLANTEAMIENTO DEL PROBLEMA" data={planteamientoProblema} />
          <ZeduSection title="OBJETIVOS" data={objetivos} />
      </div>
    </div>
  );
}
