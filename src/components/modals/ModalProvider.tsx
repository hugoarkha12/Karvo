"use client";

import { createContext, useCallback, useContext, useEffect, useState } from "react";
import type { Dictionary } from "@/i18n/dictionaries/es";
import { Dialog } from "./Dialog";
import { FounderForm } from "./FounderForm";
import { DiagnosticForm } from "./DiagnosticForm";
import { ArkhaDetails } from "./ArkhaDetails";

export type ModalName = "founder" | "diagnostic" | "arkha";

/**
 * Enlaces profundos: `karvo.com/es#apply` abre directo la aplicación. Sirve
 * para compartir el formulario en correos o redes.
 */
const HASH_TO_MODAL: Record<string, ModalName> = {
  "#apply": "founder",
  "#diagnostic": "diagnostic",
  "#arkha": "arkha",
};

const ModalContext = createContext<((name: ModalName) => void) | null>(null);

export function useOpenModal() {
  const open = useContext(ModalContext);
  if (!open) throw new Error("useOpenModal debe usarse dentro de <ModalProvider>");
  return open;
}

export function ModalProvider({
  forms,
  closeLabel,
  children,
}: {
  forms: Dictionary["forms"];
  closeLabel: string;
  children: React.ReactNode;
}) {
  const [active, setActive] = useState<ModalName | null>(null);
  const close = useCallback(() => setActive(null), []);

  useEffect(() => {
    const fromHash = () => {
      const name = HASH_TO_MODAL[window.location.hash];
      if (!name) return;
      setActive(name);
      // Limpia el hash para que cerrar y volver a abrir funcione igual.
      history.replaceState(null, "", window.location.pathname + window.location.search);
    };
    fromHash();
    window.addEventListener("hashchange", fromHash);
    return () => window.removeEventListener("hashchange", fromHash);
  }, []);

  return (
    <ModalContext.Provider value={setActive}>
      {children}

      <Dialog open={active === "founder"} onClose={close} closeLabel={closeLabel} size="lg">
        <FounderForm copy={forms.founder} requiredHint={forms.requiredHint} closeLabel={closeLabel} onDone={close} />
      </Dialog>
      <Dialog open={active === "diagnostic"} onClose={close} closeLabel={closeLabel}>
        <DiagnosticForm copy={forms.diagnostic} requiredHint={forms.requiredHint} closeLabel={closeLabel} onDone={close} />
      </Dialog>
      <Dialog open={active === "arkha"} onClose={close} closeLabel={closeLabel}>
        <ArkhaDetails copy={forms.arkha} />
      </Dialog>
    </ModalContext.Provider>
  );
}
