"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Users, MapPin, BarChart2, TrendingUp, Sun, FileText, Download, Printer } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const poblacionData = {
  ubicacion: "Venezuela, La Atlántida entre calle 7 a calle 3, Catia La Mar Pinta Catia, Supermercado Bensica.",
  nombreComunidad: "La Atlantida catia La Mar",
  totalHabitantes: "Aproximadamente 500 empresas (unos 5.000 empleados)",
  distribucionGenero: "52% femenino, 48% masculino (en cargos administrativos)",
  distribucionEdad: "25-40 años: 60% / 41-55 años: 30% / mayores de 55: 10%",
  caracteristicas: "Empresas que buscan automatizar sus procesos fiscales y contables, y que además están interesadas en adoptar prácticas sostenibles. Generan grandes volúmenes de residuos de papel y otros materiales reciclables.",
  clima: "Tropical, con alta humedad y temperaturas promedio de 28°C.",
};

export default function ZeduModeloPage() {
    const { toast } = useToast();

    const getDocumentContent = () => {
        return `
            <h1>Modelo ZEDU - Parte 1: Población a Trabajar</h1>
            <br/>
            <h2>Ubicación y Comunidad</h2>
            <p><strong>País/Ciudad/Municipio:</strong> ${poblacionData.ubicacion}</p>
            <p><strong>Nombre de la Comunidad:</strong> ${poblacionData.nombreComunidad}</p>
            <br/>
            <h2>Análisis Demográfico</h2>
            <p><strong>Total Habitantes:</strong> ${poblacionData.totalHabitantes}</p>
            <p><strong>Distribución por Género:</strong> ${poblacionData.distribucionGenero}</p>
            <p><strong>Distribución por Edad:</strong> ${poblacionData.distribucionEdad}</p>
            <br/>
            <h2>Características Clave de la Población</h2>
            <p>${poblacionData.caracteristicas}</p>
            <br/>
            <h2>Clima</h2>
            <p>${poblacionData.clima}</p>
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
            const header = "<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'><head><meta charset='utf-8'><title>Modelo ZEDU Parte 1</title></head><body>";
            const footer = "</body></html>";
            const sourceHTML = header + content.replace(/<h2>/g, '<h2 style="font-size: 16pt; margin-top: 20px;">').replace(/<h3>/g, '<h3 style="font-size: 14pt;">').replace(/<p>/g, '<p style="font-size: 12pt;">') + footer;

            const source = 'data:application/vnd.ms-word;charset=utf-8,' + encodeURIComponent(sourceHTML);
            const fileDownload = document.createElement("a");
            document.body.appendChild(fileDownload);
            fileDownload.href = source;
            fileDownload.download = 'ZEDU_Modelo_Poblacion.doc';
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
                Modelo ZEDU - Parte 1: Población a Trabajar
            </h1>
            <p className="text-muted-foreground mt-2">
            Análisis demográfico y características de la población objetivo.
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
                    <CardTitle className="flex items-center gap-3 text-xl"><MapPin className="text-primary"/> Ubicación y Comunidad</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                    <div>
                        <h3 className="text-sm font-semibold text-muted-foreground">País/Ciudad/Municipio:</h3>
                        <p>{poblacionData.ubicacion}</p>
                    </div>
                    <div>
                        <h3 className="text-sm font-semibold text-muted-foreground">Nombre de la Comunidad:</h3>
                        <p>{poblacionData.nombreComunidad}</p>
                    </div>
                </CardContent>
            </Card>

            <div className="grid md:grid-cols-3 gap-6">
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2 text-lg"><Users className="text-primary"/> Total Habitantes</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="font-semibold">{poblacionData.totalHabitantes}</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2 text-lg"><BarChart2 className="text-primary"/> Distribución por Género</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p>{poblacionData.distribucionGenero}</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2 text-lg"><TrendingUp className="text-primary"/> Distribución por Edad</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p>{poblacionData.distribucionEdad}</p>
                    </CardContent>
                </Card>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle className="text-xl">Características Clave de la Población</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground">{poblacionData.caracteristicas}</p>
                </CardContent>
            </Card>
            
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-xl"><Sun className="text-primary"/> Clima</CardTitle>
                </CardHeader>
                <CardContent>
                    <p>{poblacionData.clima}</p>
                </CardContent>
            </Card>
      </div>
    </div>
  );
}
