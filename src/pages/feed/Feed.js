import axios from "axios";
import CardReceita from "../../componentes/CardReceita/CardReceita";
import { Main } from "./styled";
import { BASE_URL } from "../../constantes/baseUrl";
import { useContext, useEffect, useState } from "react";
import gif from "../../constantes/receitasGIF.gif";
import Header from "../../componentes/Header/Header";
import useReceitas from "../../hook/useReceitas";
import { GlobalContext } from "../../context/GlobalContext";
import { Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { goToAddReceita } from "../../router/coordinator";

export default function Feed() {
  const navigate = useNavigate();

  const context = useContext(GlobalContext);
  const { recipes, getReceita } = context;

  useEffect(() => {
    getReceita();
    // console.log(recipes)
  }, []);

  const card = recipes.map((receita) => {
    return (
      <CardReceita
        key={receita.id}
        url={receita.imageUrl}
        id={receita.id}
        titulo={receita.title}
      />
    );
  });

  return (
    <>
      <Header />
      <Main>
        {recipes.length > 0 ? (
          card
        ) : (
          <div className="carregando">
            <img src={gif} />
          </div>
        )}

        <Button
          position="fixed"
          bottom="5px"
          right="5px"
          bg={"#FB6090"}
          color={"white"}
          _hover={{
            bg: "#FFC5D0",
          }}
          onClick={() => goToAddReceita(navigate)}
        >
          +
        </Button>
      </Main>
    </>
  );
}
