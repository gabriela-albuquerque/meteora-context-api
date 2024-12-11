import ItemCarrinhoSuspenso from "@/components/CarrinhoSuspenso/ItemCarrinhoSuspenso";
import ItemCarrinho from "@/components/ItemCarrinho";
import { useContext } from "react";
import { useLocation } from "react-router-dom";
import { CarrinhoContext } from "@/context/CarrinhoContext";

const ListaProdutosCarrinho = () => {
  const location = useLocation();

  const { carrinho, setCarrinho } = useContext(CarrinhoContext);

  function removerProduto(id) {
    // encontra o produto em questão
    const produto = carrinho.find((itemDoCarrinho) => itemDoCarrinho.id === id);
    // verifica se a quantidade é igual a um. Isso significa que este é o último
    // produto do tipo no carrinho
    const ehOUltimo = produto.quantidade === 1;
    // Com o if faz a verificação do último produto do tipo no carrinho e atualiza o estado do carrinho
    if (ehOUltimo) {
      return setCarrinho((carrinhoAnterior) =>
        carrinhoAnterior.filter((itemDoCarrinho) => itemDoCarrinho.id !== id)
      );
    }
    // Se não é o último produto do carrinho, só atualizamos a quantidade, removendo um item
    setCarrinho((carrinhoAnterior) =>
      carrinhoAnterior.map((itemDoCarrinho) => {
        if (itemDoCarrinho.id === id) itemDoCarrinho.quantidade -= 1;
        return itemDoCarrinho;
      })
    );
  }

  return (
    <ul className="list-unstyled">
      {carrinho.length === 0 ? (
        <p className="text-center my-5">Não há produtos no carrinho</p>
      ) : (
        carrinho.map((itemCarrinho) => {
          return location.pathname === "/carrinho" ? (
            <ItemCarrinho key={itemCarrinho.id} itemCarrinho={itemCarrinho} />
          ) : (
            <ItemCarrinhoSuspenso
              key={itemCarrinho.id}
              itemCarrinho={itemCarrinho}
              removerProduto={removerProduto}
            />
          );
        })
      )}
    </ul>
  );
};

export default ListaProdutosCarrinho;
