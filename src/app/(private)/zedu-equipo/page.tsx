"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Book, School, MapPin } from "lucide-react";

const teamInfo = {
  projectName: "AutoMind AI",
  members: ["Miguel Uzcategui", "Miguel Angel Goites", "Joaquin de Barros"],
  institution: "Colegio Santa Rosa de Lima",
  location: "Venezuela, Caracas",
};

export default function ZeduEquipoPage() {
  return (
    <div className="p-4 md:p-8">
      <header className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight flex items-center gap-2">
            <Users className="h-8 w-8" />
            Modelo ZEDU - Parte 2: Información del Equipo
        </h1>
        <p className="text-muted-foreground mt-2">
          Detalles sobre el proyecto y el equipo responsable.
        </p>
      </header>

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
  );
}
