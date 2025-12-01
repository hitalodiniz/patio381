// src/lib/utils.ts

/**
 * Converte uma string em um slug URL-friendly.
 * Ex: "Volvo FH 540 - Ano 2021" -> "volvo-fh-540-ano-2021"
 */
export function gerarSlug(texto: string): string {
  return texto
    .toString()
    .toLowerCase()
    .normalize('NFD') // Separa os acentos das letras
    .replace(/[\u0300-\u036f]/g, '') // Remove os acentos
    .trim()
    .replace(/\s+/g, '-') // Troca espaços por hífens
    .replace(/[^\w-]+/g, '') // Remove tudo que não for letra, número ou hífen
    .replace(/--+/g, '-'); // Remove hífens duplicados
}

/**
 * Formata número para moeda Real (BRL)
 * Ex: 485000 -> R$ 485.000,00
 */
export function formatarMoeda(valor: number): string {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(valor);
}