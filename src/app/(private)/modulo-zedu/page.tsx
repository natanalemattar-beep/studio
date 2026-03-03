
"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Users, MapPin, BarChart2, TrendingUp, Sun, FileText, Download, Printer, BrainCircuit, AlertTriangle, ChevronsRight, Search, CheckCircle, Book, School, HelpCircle, ListChecks, Flag, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Separator } from "@/components/ui/separator";

// --- Data from Part 1 ---
const poblacionData = {
  ubicacion: "Venezuela, La Atlántida entre calle 7 a calle 3, Catia La Mar Pinta Catia, Supermercado Bensica.",
  nombreComunidad: "La Atlantida catia La Mar",
  totalHabitantes: "Aproximadamente 500 empresas (unos 5.000 empleados)",
  distribucionGenero: "52% femenino, 48% masculino (en cargos administrativos)",
  distribucionEdad: "25-40 años: 60% / 41-55 años: 30% / mayores de 55: 10%",
  caracteristicas: "Empresas que buscan automatizar sus procesos fiscales y contables, y que además están interesadas en adoptar prácticas sostenibles. Generan grandes volúmenes de residuos de papel y otros materiales reciclables.",
  clima: "Tropical, con alta humedad y temperaturas promedio de 28°C.",
};

// --- Data from Part 2 ---
const teamInfo = {
  projectName: "AutoMind AI",
  members: ["Miguel Uzcategui", "Miguel Angel Goites", "Joaquin de Barros"],
  institution: "Colegio Santa Rosa de Lima",
  location: "Venezuela, Caracas",
};

// --- Data from Part 3 ---
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

// --- Data from Part 4 ---
const objetivosData = {
  general: "Agilizar el sistema de archivado en la institución para facilitar la búsqueda de información de los estudiantes.",
  especificos: [
    "Analizar el sistema de archivado actual de la institución",
    "Determinar los requerimientos para el nuevo sistema de archivado",
    "Desarrollar un sistema de archivado que facilite la búsqueda de información",
  ],
};


export default function ModuloZeduPage() {
    const { toast } = useToast();

    const getDocumentContent = () => {
        return `
            <h1>Modelo ZEDU - Documento Consolidado</h1>
            <br/><br/>
            
            <h2>Parte 1: Población a Trabajar</h2>
            <br/>
            <h3>Ubicación y Comunidad</h3>
            <p><strong>País/Ciudad/Municipio:</strong> ${poblacionData.ubicacion}</p>
            <p><strong>Nombre de la Comunidad:</strong> ${poblacionData.nombreComunidad}</p>
            <br/>
            <h3>Análisis Demográfico</h3>
            <p><strong>Total Habitantes:</strong> ${poblacionData.totalHabitantes}</p>
            <p><strong>Distribución por Género:</strong> ${poblacionData.distribucionGenero}</p>
            <p><strong>Distribución por Edad:</strong> ${poblacionData.distribucionEdad}</p>
            <br/>
            <h3>Características Clave de la Población</h3>
            <p>${poblacionData.caracteristicas}</p>
            <br/>
            <h3>Clima</h3>
            <p>${poblacionData.clima}</p>
            
            <br/><hr/><br/>

            <h2>Parte 2: Información del Equipo</h2>
            <br/>
            <h3>Nombre del Proyecto</h3>
            <p>${teamInfo.projectName}</p>
            <br/>
            <h3>Integrantes del Equipo</h3>
            <ul>${teamInfo.members.map(member => `<li>${member}</li>`).join('')}</ul>
            <br/>
            <h3>Institución Educativa</h3>
            <p>${teamInfo.institution}</p>
            <br/>
            <h3>País/Ciudad</h3>
            <p>${teamInfo.location}</p>

            <br/><hr/><br/>

            <h2>Parte 3: Planteamiento del Problema</h2>
            <br/>
            <h3>CAUSAS DEL PROBLEMA</h3>
            <ul>${problemaData.causas.map(c => `<li>- ${c}</li>`).join('')}</ul>
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
            
            <br/><hr/><br/>

            <h2>Parte 4: Objetivos del Proyecto</h2>
            <br/>
            <h3>OBJETIVO GENERAL</h3>
            <p>${objetivosData.general}</p>
            <br/>
            <h3>OBJETIVOS ESPECÍFICOS</h3>
            <ul>${objetivosData.especificos.map(o => `<li>- ${o}</li>`).join('')}</ul>
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
            const header = "<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'><head><meta charset='utf-8'><title>Modelo ZEDU Consolidado</title></head><body>";
            const footer = "</body></html>";
            const sourceHTML = header + content.replace(/<h2>/g, '<h2 style="font-size: 16pt; margin-top: 20px;">').replace(/<h3>/g, '<h3 style="font-size: 14pt;">').replace(/<p>/g, '<p style="font-size: 12pt;">').replace(/<ul>/g, '<ul style="font-size: 12pt;">') + footer;

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
                Modelo ZEDU - Consolidado
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

      <div id="printable-content" className="space-y-12">
            {/* --- PARTE 1 --- */}
            <div className="space-y-6">
                <h2 className="text-2xl font-bold text-primary border-b pb-2 mb-6">Parte 1: Población a Trabajar</h2>
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
                        <CardContent><p className="font-semibold">{poblacionData.totalHabitantes}</p></CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2 text-lg"><BarChart2 className="text-primary"/> Distribución por Género</CardTitle>
                        </CardHeader>
                        <CardContent><p>{poblacionData.distribucionGenero}</p></CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2 text-lg"><TrendingUp className="text-primary"/> Distribución por Edad</CardTitle>
                        </CardHeader>
                        <CardContent><p>{poblacionData.distribucionEdad}</p></CardContent>
                    </Card>
                </div>

                <Card>
                    <CardHeader>
                        <CardTitle className="text-xl">Características Clave de la Población</CardTitle>
                    </CardHeader>
                    <CardContent><p className="text-muted-foreground">{poblacionData.caracteristicas}</p></CardContent>
                </Card>
                
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2 text-xl"><Sun className="text-primary"/> Clima</CardTitle>
                    </CardHeader>
                    <CardContent><p>{poblacionData.clima}</p></CardContent>
                </Card>
            </div>

            <Separator className="my-12" />

            {/* --- PARTE 2 --- */}
            <div className="space-y-6">
                <h2 className="text-2xl font-bold text-primary border-b pb-2 mb-6">Parte 2: Información del Equipo</h2>
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2 text-xl"><Book className="text-primary"/> Nombre del Proyecto</CardTitle>
                    </CardHeader>
                    <CardContent><p className="text-lg font-semibold">{teamInfo.projectName}</p></CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2 text-xl"><Users className="text-primary"/> Integrantes del Equipo</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ul className="list-disc list-inside space-y-2 text-md">
                            {teamInfo.members.map((member, index) => (<li key={index}>{member}</li>))}
                        </ul>
                    </CardContent>
                </Card>
                
                <div className="grid md:grid-cols-2 gap-6">
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2 text-xl"><School className="text-primary"/> Institución Educativa</CardTitle>
                        </CardHeader>
                        <CardContent><p className="text-md">{teamInfo.institution}</p></CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2 text-xl"><MapPin className="text-primary"/> País/Ciudad</CardTitle>
                        </CardHeader>
                        <CardContent><p className="text-md">{teamInfo.location}</p></CardContent>
                    </Card>
                </div>
            </div>

            <Separator className="my-12" />

            {/* --- PARTE 3 --- */}
             <div className="space-y-6">
                <h2 className="text-2xl font-bold text-primary border-b pb-2 mb-6">Parte 3: Planteamiento del Problema</h2>
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
                    <CardContent><p>{problemaData.consecuencias}</p></CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-3 text-xl"><Search className="text-primary"/> DEFINE EL PROBLEMA</CardTitle>
                    </CardHeader>
                    <CardContent><p className="text-muted-foreground">{problemaData.definicion}</p></CardContent>
                </Card>
                
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-3 text-xl"><CheckCircle className="text-primary"/> ¿POR QUÉ ES IMPORTANTE RESOLVER ESTE PROBLEMA?</CardTitle>
                    </CardHeader>
                    <CardContent><p>{problemaData.importancia}</p></CardContent>
                </Card>
                
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-3 text-xl"><BrainCircuit className="text-primary"/> ORIGEN DEL PROBLEMA</CardTitle>
                    </CardHeader>
                    <CardContent><p>{problemaData.origen}</p></CardContent>
                </Card>
            </div>

            <Separator className="my-12" />

            {/* --- PARTE 4 --- */}
            <div className="space-y-6">
                <h2 className="text-2xl font-bold text-primary border-b pb-2 mb-6">Parte 4: Objetivos del Proyecto</h2>
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-3 text-xl"><Target className="text-primary"/> OBJETIVO GENERAL</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p>{objetivosData.general}</p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-3 text-xl"><ListChecks className="text-primary"/> OBJETIVOS ESPECÍFICOS</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ul className="list-disc list-inside space-y-2">
                            {objetivosData.especificos.map((obj, index) => <li key={index}>{obj}</li>)}
                        </ul>
                    </CardContent>
                </Card>
            </div>
      </div>
    </div>
  );
}
