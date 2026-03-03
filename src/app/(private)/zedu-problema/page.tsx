"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Users, MapPin, BarChart2, TrendingUp, Sun, FileText, Download, Printer, BrainCircuit } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const problemaData = {
  ubicacion: "Venezuela, Caracas",
  nombreComunidad: "Santa Rosa de Lima",
  totalHabitantes: "",
  distribucionGenero: "",
  distribucionEdad: "",
  caracteristicas: "",
  clima: "",
};

export default function ZeduProblemaPage() {
    const { toast } = useToast();

    const getDocumentContent = () => {
        return `
            <h1>Modelo ZEDU - Parte 3: Planteamiento del Problema</h1>
            <br/>
            <h2>POBLACIÓN A TRABAJAR</h2>
            <br/>
            <h3>PAÍS/ CIUDAD/ MUNICIPIO/ LOCALIDAD ESPECÍFICA:</h3>
            <p>${problemaData.ubicacion}</p>
            <br/>
            <h3>NOMBRE DE LA COMUNIDAD:</h3>
            <p>${problemaData.nombreComunidad}</p>
            <br/>
            <h3>CANTIDAD TOTAL DE HABITANTES:</h3>
            <p>${problemaData.totalHabitantes || "(No especificado)"}</p>
            <br/>
            <h3>CANTIDAD DE HABITANTES POR GÉNERO:</h3>
            <p>${problemaData.distribucionGenero || "(No especificado)"}</p>
            <br/>
            <h3>CANTIDAD DE HABITANTES POR EDAD:</h3>
            <p>${problemaData.distribucionEdad || "(No especificado)"}</p>
            <br/>
            <h3>CARACTERISTICAS DE LA POBLACIÓN:</h3>
            <p>${problemaData.caracteristicas || "(No especificado)"}</p>
            <br/>
            <h3>CLIMA:</h3>
            <p>${problemaData.clima || "(No especificado)"}</p>
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
            const sourceHTML = header + content.replace(/\n/g, '') + footer;

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
            Contexto y población para el desarrollo de la solución.
            </p>
        </div>
        <div className="flex gap-2">
            <Button variant="outline" onClick={() => handleAction('print')}><Printer className="mr-2 h-4 w-4"/> Guardar como PDF</Button>
            <Button onClick={() => handleAction('word')}><Download className="mr-2 h-4 w-4"/> Descargar Word</Button>
        </div>
      </header>

      <div id="printable-content">
        <div className="grid gap-6">
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2"><MapPin className="text-primary"/> Ubicación y Comunidad</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                    <p><strong>País/Ciudad/Municipio:</strong> {problemaData.ubicacion}</p>
                    <p><strong>Nombre de la Comunidad:</strong> {problemaData.nombreComunidad}</p>
                </CardContent>
            </Card>

            <div className="grid md:grid-cols-3 gap-6">
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2"><Users className="text-primary"/> Total Habitantes</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground italic">(No especificado)</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2"><BarChart2 className="text-primary"/> Distribución por Género</CardTitle>
                    </CardHeader>
                    <CardContent>
                         <p className="text-muted-foreground italic">(No especificado)</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2"><TrendingUp className="text-primary"/> Distribución por Edad</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground italic">(No especificado)</p>
                    </CardContent>
                </Card>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">Características Clave de la Población</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground italic">(No especificado)</p>
                </CardContent>
            </Card>
            
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2"><Sun className="text-primary"/> Clima</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground italic">(No especificado)</p>
                </CardContent>
            </Card>
        </div>
      </div>
    </div>
  );
}
