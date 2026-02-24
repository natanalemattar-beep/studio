
import { User, Gavel, ShoppingCart, Briefcase, Users, Megaphone, Cpu, Banknote, Signal, HardHat, Shield, UserCheck, Globe, TrendingUp } from "lucide-react";

export const loginOptions = [
    { href: "/login-personal", label: "Acceso Personal", icon: User, description: "Portal para clientes individuales y trámites personales." },
    { href: "/login-empresa", label: "Centro de Contabilidad", icon: Banknote, description: "Dashboard de gestión financiera y contable para empresas." },
    { href: "/login-escritorio-juridico", label: "Escritorio Jurídico", icon: Gavel, description: "Acceso para el departamento legal y gestión de cumplimiento." },
    { href: "/login-ventas", label: "Ventas y Facturación", icon: ShoppingCart, description: "Punto de Venta (TPV) para cajeros y personal de ventas." },
    { href: "/login-rrhh", label: "Gestión de RR.HH.", icon: Briefcase, description: "Portal para la administración del talento humano y nóminas." },
    { href: "/login-socios", label: "Portal de Socios", icon: Users, description: "Dashboard de supervisión para socios y junta directiva." },
    { href: "/login-marketing", label: "Marketing y Crecimiento", icon: Megaphone, description: "Herramientas de análisis y gestión de campañas." },
    { href: "/login-telecom", label: "Gestión de Telecom", icon: Signal, description: "Administración de redes, líneas y servicios de conectividad." },
    { href: "/login-informatica", label: "Ingeniería e IT", icon: Cpu, description: "Control de infraestructura, seguridad y desarrollo." },
    { href: "/login-empresa", label: "Protección y Alertas IA", icon: Shield, description: "Sistema de Cero Riesgo Fiscal con monitoreo proactivo y alertas predictivas para garantizar cumplimiento." },
    { href: "/login-informatica", label: "Ingeniería y Proyectos", icon: HardHat, description: "Planificación de proyectos de construcción con IA, desde la generación de planos hasta el presupuesto detallado." },
    { href: "/login-escritorio-juridico", label: "Gestión de Permisos", icon: UserCheck, description: "Centraliza y gestiona el ciclo de vida de todas las licencias, permisos y habilitaciones de tu empresa." },
    { href: "/login-empresa", label: "Análisis de Rentabilidad", icon: TrendingUp, description: "Inteligencia de negocio para maximizar la utilidad y optimizar la estructura de costos de productos y clientes." },
    { href: "/login-ventas", label: "Facturación Internacional", icon: Globe, description: "Emite facturas conformes a normativas de múltiples países, gestionando impuestos y divisas automáticamente." },
];
