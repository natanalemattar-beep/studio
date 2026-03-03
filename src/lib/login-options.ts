
import { User, Gavel, ShoppingCart, Briefcase, Users, Megaphone, Cpu, Banknote, Signal, Shield, HardHat, UserCheck, TrendingUp, Globe } from "lucide-react";

export const loginGroups = [
    {
        title: "Portales Corporativos",
        options: [
            { href: "/centro-de-contabilidad", loginHref: "/login-empresa", label: "Centro de Contabilidad", icon: Banknote, description: "Finanzas, impuestos y gestión administrativa." },
            { href: "/ventas-y-facturacion", loginHref: "/login-ventas", label: "Ventas y Facturación", icon: ShoppingCart, description: "Punto de Venta (TPV) y análisis comercial." },
            { href: "/gestion-rrhh", loginHref: "/login-rrhh", label: "Gestión de RR.HH.", icon: Briefcase, description: "Administración de personal, nóminas y talento." },
            { href: "/login-socios", loginHref: "/login-socios", label: "Portal de Socios", icon: Users, description: "Supervisión estratégica y consolidación del holding." },
        ]
    },
    {
        title: "Departamentos Especializados",
        options: [
            { href: "/login-escritorio-juridico", loginHref: "/login-escritorio-juridico", label: "Escritorio Jurídico", icon: Gavel, description: "Contratos, permisos y cumplimiento legal." },
            { href: "/login-informatica", loginHref: "/login-informatica", label: "Ingeniería e IT", icon: Cpu, description: "Infraestructura, seguridad y desarrollo." },
            { href: "/login-telecom", loginHref: "/login-telecom", label: "Telecomunicaciones 5G", icon: Signal, description: "Tu propia operadora virtual. Gestiona tu línea telefónica 5G, planes de datos, y comunicaciones unificadas a nivel global." },
            { href: "/login-marketing", loginHref: "/login-marketing", label: "Marketing y Crecimiento", icon: Megaphone, description: "Análisis de mercado y gestión de campañas." },
        ]
    },
    {
        title: "Acceso Personal",
        options: [
             { href: "/login-personal", loginHref: "/login-personal", label: "Acceso Personal", icon: User, description: "Portal para clientes individuales y trámites personales." },
        ]
    }
];

// Flatten the groups for components that need a simple list
export const loginOptions = loginGroups.flatMap(group => group.options.map(option => ({...option, loginHref: option.loginHref || option.href })));
