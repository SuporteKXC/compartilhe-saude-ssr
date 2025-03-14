import { CarrinhoItem } from './carrinho-item.model';

export interface CarrinhoLocalStorage {
  carrinho: CarrinhoItem[];

  /**
   * Epoch, em milissegundos, em que o carrinho foi modificado pela última vez.
   */
  updatedIn: number;

  /**
   * Tempo, em milissegundos, para que o carrinho armazenado se torne inválido.
   *
   * `null` indica que não há tempo de expiração.
   */
  expireIn: number | null;

  /**
   * Se verdadeiro, indica que o carrinho foi atualizado pela última vez por um usuário logado.
   *
   * Se falso, o usuário não estava logado.
   */
  updatedWhenLoggedIn: boolean;
}
