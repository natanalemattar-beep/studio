"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { User, Building, Briefcase, Shield, Smartphone, TrendingUp, Users, Gavel, ArrowRight } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";

const loginOptions = [
    {
        icon: User,
        label: "Portal Personal",
        description: "Acceso a gestión personal y trámites individuales.",
        href: "/login-personal"
    },
    {
        icon: Building,
        label: "Portal Empresarial",
        description: "Centro de Contabilidad, Facturación y Gestión Empresarial.",
        href: "/login-empresa"
    },
    {
        icon: Users,
        label: "Recursos Humanos",
        description: "Gestión de nóminas, personal y administración de RR.HH.",
        href: "/login-rrhh"
    },
    {
        icon: TrendingUp,
        label: "Ventas y Comercial",
        description: "Portal de análisis de ventas y gestión comercial.",
        href: "/login-ventas"
    },
    {
        icon: Gavel,
        label: "Escritorio Jurídico",
        description: "Gestión de contratos, recursos legales y asuntos legales.",
        href: "/login-escritorio-juridico"
    },
    {
        icon: Smartphone,
        label: "Telecomunicaciones",
        description: "Gestión de licencias CONATEL y operaciones telecom.",
        href: "/login-telecom"
    },
    {
        icon: Shield,
        label: "Finanzas y Riesgo",
        description: "Portal especializado en finanzas y análisis de riesgo.",
        href: "/login-fintech"
    },
    {
        icon: Briefcase,
        label: "Informática y Sistemas",
        description: "Dashboard para sistemas y tecnología de la información.",
        href: "/login-informatica"
    }
];

export default function LoginPage() {
  return (
    <div className="w-full max-w-6xl mx-auto py-10">
        <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Selecciona tu Portal</h1>
        <p className="text-muted-foreground text-lg">
            Elige el área o departamento al que deseas acceder para iniciar sesión.
        </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {loginOptions.map((option) => (
            <Card
            key={option.href}
            className="flex flex-col text-center bg-card border hover:border-primary hover:shadow-lg transition-all cursor-pointer group"
            >
            <CardHeader className="items-center">
                <div className="p-3 bg-primary/10 rounded-lg mb-3 group-hover:bg-primary/20 transition-colors">
                <option.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg">{option.label}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
                <CardDescription className="text-sm">{option.description}</CardDescription>
            </CardContent>
            <CardFooter>
                <Button asChild className="w-full" size="sm">
                <Link href={option.href}>
                    Ingresar <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                </Button>
            </CardFooter>
            </Card>
        ))}
        </div>
        <p className="mt-12 text-center text-sm text-muted-foreground">
            ¿No tienes cuenta?{" "}
            <Link href="/auth/register" className="font-semibold text-primary hover:underline">
            Registrarse aquí
            </Link>
        </p>
    </div>
  );
}
