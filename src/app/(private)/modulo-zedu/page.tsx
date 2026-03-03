"use client";

import React from 'react';
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { FileText, Printer, Download } from "lucide-react";

// Data from the provided image
const informacionEquipo = [
  { campo: "NOMBRE DEL PROYECTO", valor: "System Kyron" },
  { campo: "LÍDER ESTRATÉGICO", valor: "Carlos Mattar" },
  { campo: "PERSONAL DE APOYO (RELLENO)", valor: "Sebastian Garrido, Marcos Sousa" },
  { campo: "INSTITUCIÓN BENEFICIARIA", valor: "U.E.P. Gabriela Mistral" },
  { campo: "UBICACIÓN GEOGRÁFICA", valor: "La Guaira, Venezuela" },
];

const estudioPoblacion = [
  { campo: "LOCALIZACIÓN ESPECÍFICA", valor: "La Atlántida, entre calle 7 a calle 3, Catia La Mar. Referencias: Pinta Catia, Supermercado Bensica." },
  { campo: "NOMBRE DE LA COMUNIDAD", valor: "Comunidad Comercial y Residencial La Atlántida" },
  { campo: "POBLACIÓN ESTIMADA", valor: "500 empresas activas / 5.000 empleados administrativos y civiles." },
  { campo: "DISTRIBUCIÓN POR GÉNERO", valor: "52% femenino, 48% masculino (en cargos administrativos)" },
  { campo: "DISTRIBUCIÓN POR EDAD", valor: "25-40 años: 60% / 41-55 años: 30% / mayores de 55: 10%" },
];

// Reusable component for each section
const ZeduTableSection = ({ title, data }: { title: string, data: { campo: string, valor: string }[] }) => (
    <div className="mb-10">
        <h2 className="text-lg font-bold text-white bg-[#4472c4] p-2 rounded-t-md">{title}</h2>
        <div className="border-x border-b border-gray-400 dark:border-gray-600 rounded-b-md overflow-hidden">
            {data.map((item, index) => (
                <div key={index} className="grid grid-cols-[35%_65%] border-b border-gray-400 dark:border-gray-600 last:border-b-0 text-sm">
                    <div className="font-semibold bg-gray-100 dark:bg-white/5 p-3 flex items-center border-r border-gray-400 dark:border-gray-600">
                        <span>{item.campo}</span>
                    </div>
                    <div className="p-3 text-muted-foreground flex items-center">
                        <span className="whitespace-pre-line">{item.valor}</span>
                    </div>
                </div>
            ))}
        </div>
    </div>
);


export default function ModuloZeduPage() {
    const { toast } = useToast();

    const getWordContent = () => {
        const createHtmlSection = (title: string, data: {campo: string, valor: string}[]) => `
            <h2 style="font-family: Arial, sans-serif; background-color: #4472c4; color: white; padding: 8px; font-size: 14pt; margin-top: 20px;">${title}</h2>
            <table style="width: 100%; border-collapse: collapse; font-family: Arial, sans-serif; border: 1px solid #bfbfbf;">
                ${data.map(item => `
                    <tr style="border-bottom: 1px solid #bfbfbf;">
                        <td style="padding: 8px; font-weight: bold; width: 35%; background-color: #f2f2f2; border-right: 1px solid #bfbfbf; vertical-align: top;">${item.campo}</td>
                        <td style="padding: 8px; width: 65%; vertical-align: top;">${item.valor}</td>
                    </tr>
                `).join('')}
            </table>
            <br/>`;
        return `
            <div style="font-family: 'Times New Roman', Times, serif; text-align: center;">
                <h1 style="font-size: 16pt; font-weight: bold; margin-bottom: 0;">MODELO DE ZEDU - SYSTEM KYRON</h1>
                <h1 style="font-size: 16pt; font-weight: bold; margin-top: 0;">2025</h1>
            </div>
            <br/>
            ${createHtmlSection('1. IDENTIFICACIÓN DEL PROYECTO', informacionEquipo)}
            ${createHtmlSection('2. ESTUDIO DE POBLACIÓN (ZEDU)', estudioPoblacion)}
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
            <h1 className="text-2xl font-serif font-bold">MODELO DE ZEDU - SYSTEM KYRON</h1>
            <h1 className="text-2xl font-serif font-bold">2025</h1>
          </div>
          <ZeduTableSection title="1. IDENTIFICACIÓN DEL PROYECTO" data={informacionEquipo} />
          <ZeduTableSection title="2. ESTUDIO DE POBLACIÓN (ZEDU)" data={estudioPoblacion} />
      </div>
    </div>
  );
}
