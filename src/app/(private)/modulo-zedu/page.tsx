"use client";

import React from 'react';
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { FileText, Printer, Download } from "lucide-react";

const informacionEquipo = [
  { campo: "NOMBRE DEL PROYECTO", valor: "AutoMind AI" },
  { campo: "INTEGRANTES DEL EQUIPO", valor: "Carlos Mattar, Marcos Sousa, Sebastian Garrido" },
  { campo: "INSTITUCIÓN EDUCATIVA", valor: "U.E.P. Gabriela Mistral" },
  { campo: "PAÍS/CIUDAD", valor: "Venezuela, Caracas" },
];

const estudioPoblacion = [
  { campo: "PAÍS/ CIUDAD/ MUNICIPIO/ LOCALIDAD ESPECÍFICA", valor: "Venezuela, Caracas" },
  { campo: "NOMBRE DE LA COMUNIDAD", valor: "Santa Rosa de Lima" },
  { campo: "NÚMERO DE HABITANTES", valor: "(No especificado)" },
];

const ZeduSection = ({ title, data }: { title: string, data: { campo: string, valor: string }[] }) => (
    <div className="mb-12">
        <h2 className="text-2xl font-bold uppercase tracking-wider border-b-2 border-foreground pb-2 mb-6">{title}</h2>
        <div className="grid grid-cols-[1fr_2fr] items-center gap-x-6">
            {data.map(item => (
                <React.Fragment key={item.campo}>
                    <div className="bg-muted/60 p-3 my-1 rounded-md text-right">
                        <span className="font-semibold text-sm">{item.campo}</span>
                    </div>
                    <div className="p-3 my-1">
                        <p className="text-muted-foreground whitespace-pre-line">{item.valor}</p>
                    </div>
                </React.Fragment>
            ))}
        </div>
    </div>
);


export default function ModuloZeduPage() {
    const { toast } = useToast();

    const getWordContent = () => {
        const createHtmlSection = (title: string, data: {campo: string, valor: string}[]) => `
            <h2 style="font-family: Arial, sans-serif; border-bottom: 1px solid #000; padding-bottom: 2px; font-size: 16pt; margin-top: 20px;">${title}</h2>
            <table style="width: 100%; border-collapse: collapse; font-family: Arial, sans-serif; margin-top: 10px;">
                ${data.map(item => `
                    <tr>
                        <td style="padding: 8px; font-weight: bold; width: 40%; background-color: #f2f2f2; border: 1px solid #ddd;">${item.campo}</td>
                        <td style="padding: 8px; width: 60%; border: 1px solid #ddd;">${item.valor.replace(/\n/g, '<br/>')}</td>
                    </tr>
                `).join('')}
            </table>
            <br/>`;
        return `
            <h1 style="font-family: Arial, sans-serif; text-align: center; font-size: 20pt;">Modelo ZEDU Consolidado</h1><br/>
            ${createHtmlSection('IDENTIFICACIÓN DEL PROYECTO', informacionEquipo)}
            ${createHtmlSection('ESTUDIO DE POBLACIÓN', estudioPoblacion)}
        `;
    };

    const handleAction = (action: 'print' | 'word') => {
        const content = getWordContent();
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
    <div className="p-4 md:p-8 max-w-5xl mx-auto">
      <header className="mb-8 flex items-center justify-between no-print">
        <div>
            <h1 className="text-3xl font-bold tracking-tight flex items-center gap-2">
                <FileText className="h-8 w-8" />
                Modelo ZEDU Consolidado
            </h1>
        </div>
        <div className="flex gap-2">
            <Button variant="outline" onClick={() => handleAction('print')}><Printer className="mr-2 h-4 w-4"/> Guardar como PDF</Button>
            <Button onClick={() => handleAction('word')}><Download className="mr-2 h-4 w-4"/> Descargar Word</Button>
        </div>
      </header>

      <div id="printable-content" className="space-y-8 bg-card p-8 rounded-xl border">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold">Modelo ZEDU Consolidado</h1>
          </div>
          <ZeduSection title="IDENTIFICACIÓN DEL PROYECTO" data={informacionEquipo} />
          <ZeduSection title="ESTUDIO DE POBLACIÓN" data={estudioPoblacion} />
      </div>
    </div>
  );
}
