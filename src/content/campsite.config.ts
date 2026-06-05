/**
 * ─────────────────────────────────────────────────────────────────────────
 *  CAMPSITE TEMPLATE — aktive Datenschicht (Selektor)
 * ─────────────────────────────────────────────────────────────────────────
 *  Das Design importiert IMMER `{ campsite }` von hier. Welcher Platz aktiv
 *  ist, bestimmt `NEXT_PUBLIC_CAMPSITE` zur Build-/Dev-Zeit (Default:
 *  muellerhof). Pro Lead = eine Datei unter content/campsites/<slug>.ts.
 *
 *  Beispiel:  NEXT_PUBLIC_CAMPSITE=marhof npm run dev
 * ─────────────────────────────────────────────────────────────────────────
 */

export * from "./types";
import type { CampsiteConfig } from "./types";
import { muellerhof } from "./campsites/muellerhof";
import { marhof } from "./campsites/marhof";

const REGISTRY: Record<string, CampsiteConfig> = {
  muellerhof,
  marhof,
};

const selected = process.env.NEXT_PUBLIC_CAMPSITE ?? "muellerhof";

export const campsite: CampsiteConfig = REGISTRY[selected] ?? muellerhof;

export default campsite;
