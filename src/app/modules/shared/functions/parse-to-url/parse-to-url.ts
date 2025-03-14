export function parseToUrl(nome: string | null | undefined, separator = '-') {
    if (!nome) return '';
    return nome.replace(/\s+/g, separator)
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/[^\w\s-]/gi, '')
        .toLowerCase();
}