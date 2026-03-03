"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Users, MapPin, BarChart2, TrendingUp, Sun, FileText } from "lucide-react";

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
  return (
    <div className="p-4 md:p-8">
      <header className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight flex items-center gap-2">
            <FileText className="h-8 w-8" />
            Modelo ZEDU - Parte 1: Población a Trabajar
        </h1>
        <p className="text-muted-foreground mt-2">
          Análisis demográfico y características de la población objetivo.
        </p>
      </header>

      <div className="grid gap-6">
        <Card>
            <CardHeader>
                <CardTitle className="flex items-center gap-2"><MapPin className="text-primary"/> Ubicación y Comunidad</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
                <p><strong>País/Ciudad/Municipio:</strong> {poblacionData.ubicacion}</p>
                <p><strong>Nombre de la Comunidad:</strong> {poblacionData.nombreComunidad}</p>
            </CardContent>
        </Card>

        <div className="grid md:grid-cols-3 gap-6">
             <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2"><Users className="text-primary"/> Total Habitantes</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-lg font-semibold">{poblacionData.totalHabitantes}</p>
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2"><BarChart2 className="text-primary"/> Distribución por Género</CardTitle>
                </CardHeader>
                <CardContent>
                    <p>{poblacionData.distribucionGenero}</p>
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2"><TrendingUp className="text-primary"/> Distribución por Edad</CardTitle>
                </CardHeader>
                <CardContent>
                     <p>{poblacionData.distribucionEdad}</p>
                </CardContent>
            </Card>
        </div>

        <Card>
            <CardHeader>
                <CardTitle className="flex items-center gap-2">Características Clave de la Población</CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-muted-foreground">{poblacionData.caracteristicas}</p>
            </CardContent>
        </Card>
        
        <Card>
            <CardHeader>
                <CardTitle className="flex items-center gap-2"><Sun className="text-primary"/> Clima</CardTitle>
            </CardHeader>
            <CardContent>
                <p>{poblacionData.clima}</p>
            </CardContent>
        </Card>

      </div>
    </div>
  );
}
