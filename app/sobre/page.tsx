import type { Metadata } from "next"
import { SobreContent } from "./sobre-content"

export const metadata: Metadata = {
  title: "Sobre Nós — HyperCard",
  description: "Conheça a história, os valores e a equipe por trás do clube financeiro mais exclusivo do Brasil.",
}

export default function SobrePage() {
  return <SobreContent />
}
