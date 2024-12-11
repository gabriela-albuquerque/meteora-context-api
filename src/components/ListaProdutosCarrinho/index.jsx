import ItemCarrinhoSuspenso from "@/components/CarrinhoSuspenso/ItemCarrinhoSuspenso";
import ItemCarrinho from "@/components/ItemCarrinho";
// import { useContext } from "react";
import { useLocation } from "react-router-dom";
import { useCarrinhoContext } from "../../hooks/useCarrinhoContext";
// import { CarrinhoContext } from "@/context/CarrinhoContext";

const ListaProdutosCarrinho = ({ carrinho }) => {
  const location = useLocation();
  const { removerProduto } = useCarrinhoContext();
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
