import { User, Gavel, ShoppingCart, Briefcase, Users, Megaphone, Cpu, Banknote, Signal, Shield, HardHat, UserCheck, TrendingUp, Globe } from "lucide-react";

export const loginGroups = [
    {
        title: "Portales Corporativos",
        options: [
            { href: "/centro-de-contabilidad", label: "Centro de Contabilidad", icon: Banknote, description: "Finanzas, impuestos y gestión administrativa." },
            { href: "/login-ventas", label: "Ventas y Facturación", icon: ShoppingCart, description: "Punto de Venta (TPV) y análisis comercial." },
            { href: "/login-rrhh", label: "Gestión de RR.HH.", icon: Briefcase, description: "Administración de personal, nóminas y talento." },
            { href: "/login-socios", label: "Portal de Socios", icon: Users, description: "Supervisión estratégica y consolidación del holding." },
        ]
    },
    {
        title: "Departamentos Especializados",
        options: [
            { href: "/login-escritorio-juridico", label: "Escritorio Jurídico", icon: Gavel, description: "Contratos, permisos y cumplimiento legal." },
            { href: "/login-informatica", label: "Ingeniería e IT", icon: Cpu, description: "Infraestructura, seguridad y desarrollo." },
            { href: "/login-telecom", label: "Gestión de Telecom", icon: Signal, description: "Redes y servicios de conectividad." },
            { href: "/login-marketing", label: "Marketing y Crecimiento", icon: Megaphone, description: "Análisis de mercado y gestión de campañas." },
        ]
    },
    {
        title: "Módulos Estratégicos",
        options: [
            { href: "/login-empresa", label: "Protección y Alertas IA", icon: Shield, description: "Sistema de Cero Riesgo Fiscal con monitoreo proactivo." },
            { href: "/login-informatica", label: "Ingeniería y Proyectos", icon: HardHat, description: "Planificación de proyectos de construcción con IA." },
            { href: "/login-escritorio-juridico", label: "Gestión de Permisos", icon: UserCheck, description: "Centraliza y gestiona licencias y habilitaciones." },
            { href: "/login-empresa", label: "Análisis de Rentabilidad", icon: TrendingUp, description: "Inteligencia de negocio para maximizar la utilidad." },
            { href: "/login-ventas", label: "Facturación Internacional", icon: Globe, description: "Emite facturas conformes a normativas de múltiples países." },
        ]
    },
    {
        title: "Acceso Personal",
        options: [
             { href: "/login-personal", label: "Acceso Personal", icon: User, description: "Portal para clientes individuales y trámites personales." },
        ]
    }
];

// Flatten the groups for components that need a simple list
export const loginOptions = loginGroups.flatMap(group => group.options);
