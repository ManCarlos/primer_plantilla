"use client";

import { useEffect } from "react";
import { initAOS } from "@/lib/aos";

export default function ClientAOSInit() {
    useEffect(() => {
        initAOS();
    }, []);

    return null; // no renderiza nada en la interfaz
}
