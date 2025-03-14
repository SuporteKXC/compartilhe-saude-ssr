import { parseToUrl } from "./parse-to-url";

describe('parseNomeToUrl', () => {
    const cases = [
        ["Pacote de Check-up da Mulher", "pacote-de-check-up-da-mulher"],
        ["Pacote de Check-up do Homem 40+", "pacote-de-check-up-do-homem-40"],
        ["Pacote Saúde Mental", "pacote-saude-mental"],
    ];

    it.each(cases)("Deve fazer o parse dos nomes de pacote para o formato de url definido",
        (nomePacote, expectedUrl) => {
            const result = parseToUrl(nomePacote);
            expect(result).toEqual(expectedUrl);
        }
    );
});
