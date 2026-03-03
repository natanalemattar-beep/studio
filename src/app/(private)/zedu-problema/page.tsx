
"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Users, MapPin, BarChart2, TrendingUp, Sun, FileText, Download, Printer, BrainCircuit, AlertTriangle, ChevronsRight, Search, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const problemaData = {
  causas: [
    "Falta de organización",
    "Poca disposición",
    "Escaso presupuesto",
    "Desactualización tecnológica",
  ],
  consecuencias: "Pérdida de tiempo en búsqueda de archivos.",
  definicion: "En la Institución el sistema de archivado es muy pobre, ya que el método de archivado es netamente físico. Esto no permite agilidad a la hora de buscar información respecto a un estudiante de la institución.",
  importancia: "Para disminuir la carga de trabajo a la hora de buscar un archivo.",
  origen: "Desactualización e ignorancia en la gestión de nuevas tecnologías e información.",
};


export default function ZeduProblemaPage() {
    const { toast } = useToast();

    const getDocumentContent = () => {
        return `
            <h1>Modelo ZEDU - Parte 3: Planteamiento del Problema</h1>
            <br/>
            <h2>ANÁLISIS DEL PROBLEMA</h2>
            <br/>
            <h3>CAUSAS DEL PROBLEMA</h3>
            <ul>
                ${problemaData.causas.map(c => `<li>- ${c}</li>`).join('')}
            </ul>
            <br/>
            <h3>CONSECUENCIAS DEL PROBLEMA</h3>
            <p>${problemaData.consecuencias}</p>
            <br/>
            <h3>DEFINE EL PROBLEMA</h3>
            <p>${problemaData.definicion}</p>
            <br/>
            <h3>¿POR QUÉ ES IMPORTANTE RESOLVER ESTE PROBLEMA?</h3>
            <p>${problemaData.importancia}</p>
            <br/>
            <h3>ORIGEN DEL PROBLEMA</h3>
            <p>${problemaData.origen}</p>
        `;
    };

    const handleAction = (action: 'print' | 'word') => {
        if (action === 'print') {
            window.print();
            toast({
                title: "Impresión Iniciada",
                description: "Se ha abierto el diálogo de impresión. Selecciona 'Guardar como PDF' para crear un PDF.",
            });
        } else if (action === 'word') {
            const content = getDocumentContent();
            const header = "<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'><head><meta charset='utf-8'><title>Modelo ZEDU Parte 3</title></head><body>";
            const footer = "</body></html>";
            const sourceHTML = header + content.replace(/<h2>/g, '<h2 style="font-size: 16pt; margin-top: 20px;">').replace(/<h3>/g, '<h3 style="font-size: 14pt;">').replace(/<p>/g, '<p style="font-size: 12pt;">').replace(/<ul>/g, '<ul style="font-size: 12pt;">') + footer;

            const source = 'data:application/vnd.ms-word;charset=utf-8,' + encodeURIComponent(sourceHTML);
            const fileDownload = document.createElement("a");
            document.body.appendChild(fileDownload);
            fileDownload.href = source;
            fileDownload.download = 'ZEDU_Modelo_Problema.doc';
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
                <BrainCircuit className="h-8 w-8" />
                Modelo ZEDU - Parte 3: Planteamiento del Problema
            </h1>
            <p className="text-muted-foreground mt-2">
            Análisis detallado del problema, sus causas y consecuencias.
            </p>
        </div>
        <div className="flex gap-2">
            <Button variant="outline" onClick={() => handleAction('print')}><Printer className="mr-2 h-4 w-4"/> Guardar como PDF</Button>
            <Button onClick={() => handleAction('word')}><Download className="mr-2 h-4 w-4"/> Descargar Word</Button>
        </div>
      </header>

      <div id="printable-content" className="space-y-6">
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-xl"><AlertTriangle className="text-primary"/> CAUSAS DEL PROBLEMA</CardTitle>
                </CardHeader>
                <CardContent>
                    <ul className="list-disc list-inside space-y-2">
                        {problemaData.causas.map((causa, index) => <li key={index}>{causa}</li>)}
                    </ul>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-xl"><ChevronsRight className="text-primary"/> CONSECUENCIAS DEL PROBLEMA</CardTitle>
                </CardHeader>
                <CardContent>
                    <p>{problemaData.consecuencias}</p>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-xl"><Search className="text-primary"/> DEFINE EL PROBLEMA</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground">{problemaData.definicion}</p>
                </CardContent>
            </Card>
            
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-xl"><CheckCircle className="text-primary"/> ¿POR QUÉ ES IMPORTANTE RESOLVER ESTE PROBLEMA?</CardTitle>
                </CardHeader>
                <CardContent>
                    <p>{problemaData.importancia}</p>
                </CardContent>
            </Card>
            
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-xl"><Sun className="text-primary"/> ORIGEN DEL PROBLEMA</CardTitle>
                </CardHeader>
                <CardContent>
                    <p>{problemaData.origen}</p>
                </CardContent>
            </Card>
      </div>
    </div>
  );
}
