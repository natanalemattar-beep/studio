
"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { Download, FileText, Printer } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const informacionEquipo = [
  { campo: "NOMBRE DEL PROYECTO", valor: "AutoMind AI" },
  { campo: "INTEGRANTES DEL EQUIPO", valor: "Miguel Uzcategui, Miguel Angel Goites, Joaquin de Barros" },
  { campo: "INSTITUCIÓN EDUCATIVA", valor: "Colegio Santa Rosa de Lima" },
  { campo: "PAÍS/CIUDAD", valor: "Venezuela, Caracas" },
];

const poblacionTrabajar = [
  { campo: "PAÍS/ CIUDAD/ MUNICIPIO/ LOCALIDAD ESPECÍFICA", valor: "Venezuela, Caracas" },
  { campo: "NOMBRE DE LA COMUNIDAD", valor: "" },
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
        const createTable = (title: string, data: {campo: string, valor: string}[]) => `
            <br/>
            <table border="1" cellpadding="5" style="width:100%; border-collapse: collapse; font-family: Arial, sans-serif; font-size: 12px;">
                <thead style="background-color:#4F81BD; color:white;">
                    <tr><th colspan="2" style="text-align:left; padding: 8px;">${title}</th></tr>
                </thead>
                <tbody>
                    ${data.map(row => `<tr><td style="width:30%; font-weight:bold; padding: 8px; border: 1px solid #ddd;">${row.campo}</td><td style="padding: 8px; border: 1px solid #ddd;">${row.valor.replace(/\n/g, '<br/>')}</td></tr>`).join('')}
                </tbody>
            </table>
            <br/>
        `;

        return `
            <div style="text-align:center;">
                <h1>Modelo Zedu</h1>
            </div>
            ${createTable('INFORMACIÓN DEL EQUIPO', informacionEquipo)}
            ${createTable('POBLACIÓN A TRABAJAR', poblacionTrabajar)}
        `;
    };

    const handleAction = (action: 'print' | 'word') => {
        const content = getDocumentContent();
        const header = "<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'><head><meta charset='utf-8'><title>Modelo ZEDU Consolidado</title></head><body>";
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
          <ZeduSection title="INFORMACIÓN DEL EQUIPO" data={informacionEquipo} />
          <ZeduSection title="POBLACIÓN A TRABAJAR" data={poblacionTrabajar} />
      </div>
    </div>
  );
}
