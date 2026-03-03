
'use client';

import type { ReactNode } from "react";
import { AppHeader } from "@/components/app-header";
import { BrainCircuit, Users, BookUser } from "lucide-react";
import { ChatDialog } from "@/components/chat-dialog";

// Minimal navigation for this private section
const zeduNavGroup = [{
    title: "Modelo ZEDU",
    icon: BrainCircuit,
    items: [
        { href: "/modulo-zedu", label: "Modelo Consolidado", icon: BrainCircuit },
    ],
    subGroups: [],
}];

export default function PrivateLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    const user = { name: "Investigador", email: "zedu@kyron.com", fallback: "ID" };

    return (
      <div className="flex flex-col min-h-screen">
          {/* A minimal header for this private section */}
          <AppHeader user={user} navGroups={zeduNavGroup} dashboardHref="/modulo-zedu" />
          <main className="flex-1 container mx-auto p-4 md:p-8 pt-20 md:pt-24">
              {children}
          </main>
          <ChatDialog />
      </div>
    );
}
