"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Book, School, MapPin, Download, Printer } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const teamInfo = {
  projectName: "AutoMind AI",
  members: ["Miguel Uzcategui", "Miguel Angel Goites", "Joaquin de Barros"],
  institution: "Colegio Santa Rosa de Lima",
  location: "Venezuela, Caracas",
};

export default function ZeduEquipoPage() {
    const { toast } = useToast();

    const getDocumentContent = () => {
        const membersList = teamInfo.members.map(member => `<li>${member}</li>`).join('');
        return `
            <h1>Modelo ZEDU - Parte 2: Información del Equipo</h1>
            <br/>
            <h2>Nombre del Proyecto</h2>
            <p>${teamInfo.projectName}</p>
            <br/>
            <h2>Integrantes del Equipo</h2>
            <ul>${membersList}</ul>
            <br/>
            <h2>Institución Educativa</h2>
            <p>${teamInfo.institution}</p>
            <br/>
            <h2>País/Ciudad</h2>
            <p>${teamInfo.location}</p>
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
            const header = "<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'><head><meta charset='utf-8'><title>Modelo ZEDU Parte 2</title></head><body>";
            const footer = "</body></html>";
            const sourceHTML = header + content.replace(/\n/g, '') + footer;

            const source = 'data:application/vnd.ms-word;charset=utf-8,' + encodeURIComponent(sourceHTML);
            const fileDownload = document.createElement("a");
            document.body.appendChild(fileDownload);
            fileDownload.href = source;
            fileDownload.download = 'ZEDU_Modelo_Equipo.doc';
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
                <Users className="h-8 w-8" />
                Modelo ZEDU - Parte 2: Información del Equipo
            </h1>
            <p className="text-muted-foreground mt-2">
            Detalles sobre el proyecto y el equipo responsable.
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
                    <CardTitle className="flex items-center gap-2"><Book className="text-primary"/> Nombre del Proyecto</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-lg font-semibold">{teamInfo.projectName}</p>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2"><Users className="text-primary"/> Integrantes del Equipo</CardTitle>
                </CardHeader>
                <CardContent>
                    <ul className="list-disc list-inside space-y-1">
                        {teamInfo.members.map((member, index) => (
                            <li key={index} className="text-md">{member}</li>
                        ))}
                    </ul>
                </CardContent>
            </Card>
            
            <div className="grid md:grid-cols-2 gap-6">
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2"><School className="text-primary"/> Institución Educativa</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-md">{teamInfo.institution}</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2"><MapPin className="text-primary"/> País/Ciudad</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-md">{teamInfo.location}</p>
                    </CardContent>
                </Card>
            </div>
        </div>
      </div>
    </div>
  );
}
