import type { Metadata } from "next"
import { CartaoContent } from "./cartao-content"

export const metadata: Metadata = {
  title: "O Cartão — HyperCard",
  description: "Conheça cada detalhe do cartão mais exclusivo do Brasil. Tungstênio maciço, biometria, segurança quântica.",
}

export default function CartaoPage() {
  return <CartaoContent />
}
