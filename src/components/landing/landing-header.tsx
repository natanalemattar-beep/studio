'use client';

import { useState, useEffect, type FC, type AnchorHTMLAttributes, Fragment } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { User, Menu, LogIn } from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Logo } from "@/components/logo";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ThemeToggle } from "@/components/theme-toggle";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { loginGroups, loginOptions } from "@/lib/login-options";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ScrollArea } from "../ui/scroll-area";

const SmoothScrollLink: FC<AnchorHTMLAttributes<HTMLAnchorElement> & { onLinkClick?: () => void }> = ({ href, onLinkClick, ...props }) => {
    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        const targetId = href!.substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
             const yOffset = -80; // Offset to account for sticky header
            const y = targetElement.getBoundingClientRect().top + window.scrollY + yOffset;
            window.scrollTo({top: y, behavior: 'smooth'});
        }
        if (onLinkClick) {
            onLinkClick();
        }
    };

    return <a href={href} onClick={handleClick} {...props} />;
};

const navLinks = [
  { href: "#inicio", label: "Inicio" },
  { href: "#servicios", label: "Servicios" },
  { href: "#tecnologia", label: "Tecnología" },
  { href: "#nosotros", label: "Quiénes Somos" },
  { href: "#faq", label: "FAQ" },
  { href: "#contacto", label: "Contacto" },
];

export function LandingHeader() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState("");
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
            
            const sections = navLinks.map(link => document.getElementById(link.href.substring(1))).filter(Boolean);
            let currentSection = "";

            sections.forEach(section => {
                if (section) {
                    const sectionTop = section.offsetTop - 100;
                    if (window.scrollY >= sectionTop) {
                        currentSection = section.id;
                    }
                }
            });
            setActiveSection(currentSection);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
            <header className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                 isScrolled ? "bg-background/80 backdrop-blur-lg border-b" : "bg-transparent"
            )}>
                <motion.div 
                    className="container mx-auto px-4 md:px-6"
                    initial={{ y: -100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                        type: 'spring',
                        stiffness: 70,
                        damping: 20,
                        mass: 1,
                        delay: 0.5
                    }}
                >
                    <div className="flex h-16 items-center justify-between">
                        <Link href="/" className="flex items-center gap-3">
                            <Logo />
                            <span className="text-xl font-bold">System Kyron</span>
                        </Link>
                        <nav className="hidden md:flex gap-2">
                            {navLinks.map((link) => (
                                <Button key={link.href} variant="ghost" size="sm" asChild>
                                    <SmoothScrollLink href={link.href} className={cn(
                                        "text-muted-foreground",
                                        isClient && activeSection === link.href.substring(1) && "text-foreground font-semibold"
                                    )}>
                                        {link.label}
                                    </SmoothScrollLink>
                                </Button>
                            ))}
                        </nav>
                        <div className="hidden md:flex items-center gap-2">
                            <ThemeToggle />
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button>
                                    Acceder <LogIn className="ml-2 h-4 w-4" />
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end" className="w-80">
                                  <ScrollArea className="h-[70vh] w-full">
                                    {loginGroups.map((group, groupIndex) => (
                                      <Fragment key={group.title}>
                                        <DropdownMenuLabel>{group.title}</DropdownMenuLabel>
                                        {group.options.map((option) => (
                                          <DropdownMenuItem key={option.label} asChild>
                                            <Link href={option.loginHref || option.href} className="flex items-start gap-3 p-2">
                                              <div className="p-1 bg-muted rounded-md mt-1">
                                                <option.icon className="h-4 w-4 text-muted-foreground" />
                                              </div>
                                              <div>
                                                <p className="font-semibold leading-none">{option.label}</p>
                                                <p className="text-xs text-muted-foreground leading-tight mt-1">{option.description}</p>
                                              </div>
                                            </Link>
                                          </DropdownMenuItem>
                                        ))}
                                        {groupIndex < loginGroups.length - 1 && <DropdownMenuSeparator />}
                                      </Fragment>
                                    ))}
                                  </ScrollArea>
                                </DropdownMenuContent>
                            </DropdownMenu>
                            <Button asChild variant="secondary">
                                <Link href="/register">Registrarse</Link>
                            </Button>
                        </div>
                        <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
                            <SheetTrigger asChild>
                                <Button variant="ghost" size="icon" className="md:hidden">
                                    <Menu />
                                    <span className="sr-only">Abrir menú</span>
                                </Button>
                            </SheetTrigger>
                            <SheetContent side="left" className="flex flex-col bg-background/80 backdrop-blur-lg shadow-lg p-0">
                                <SheetHeader className="p-4 border-b">
                                    <SheetTitle className="flex items-center gap-3">
                                        <Logo />
                                        <span className="text-xl font-bold">System Kyron</span>
                                    </SheetTitle>
                                </SheetHeader>
                                <nav className="grid gap-2 text-lg font-medium p-4">
                                    {navLinks.map((link) => (
                                        <SmoothScrollLink key={link.href} href={link.href} onLinkClick={() => setIsMobileMenuOpen(false)} className="py-2 px-2 rounded-md hover:bg-muted">{link.label}</SmoothScrollLink>
                                    ))}
                                </nav>
                                <div className="mt-auto">
                                    <Accordion type="single" collapsible className="w-full border-y">
                                        <AccordionItem value="acceder-menu" className="border-b-0">
                                            <AccordionTrigger className="py-4 px-4 text-lg font-medium hover:no-underline">
                                                <div className="flex items-center gap-3">
                                                    <LogIn className="h-5 w-5"/>
                                                    Acceder
                                                </div>
                                            </AccordionTrigger>
                                            <AccordionContent>
                                                <div className="flex flex-col gap-1 pl-12 pr-4">
                                                    {loginOptions.map((option) => (
                                                        <Button asChild variant="ghost" className="justify-start h-auto py-1.5" key={option.href + option.label} onClick={() => setIsMobileMenuOpen(false)}>
                                                            <Link href={option.loginHref || option.href} className="flex items-start gap-2">
                                                                <option.icon className="mt-1 h-4 w-4 text-muted-foreground" />
                                                                <div>
                                                                    <p className="font-semibold leading-tight">{option.label}</p>
                                                                </div>
                                                            </Link>
                                                        </Button>
                                                    ))}
                                                </div>
                                            </AccordionContent>
                                        </AccordionItem>
                                    </Accordion>
                                    <div className="p-4">
                                        <Button asChild className="w-full">
                                            <Link href="/register">Registrarse</Link>
                                        </Button>
                                    </div>
                                    <div className="flex gap-2 p-4 border-t">
                                        <ThemeToggle />
                                    </div>
                                </div>
                            </SheetContent>
                        </Sheet>
                    </div>
                </motion.div>
            </header>
    )
}
