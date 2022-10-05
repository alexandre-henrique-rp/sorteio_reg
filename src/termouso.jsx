import { Box, Heading, Link, chakra } from "@chakra-ui/react";

export default function TermoDeUso() {
  return (
    <Box bg={"#00713C"} h="100%" color={'white'}>
      <Box
        py={{ base: 8, md: "5rem" }}
        px={{ base: 5, md: "8rem" }}
        fontSize={{ base: "12px", md: "17px" }}
      >
        <Heading size={"xl"} mb={3} mt={2} textAlign={"center"}>
          Termos de Uso
        </Heading>
        <Heading size={"md"} mb={3} mt={2}>
          1. Termos
        </Heading>
        <p>
          Ao acessar ao site{" "}
          <Link
            fontWeight={"bold"}
            color="black"
            href="https://alexa.redebrasilrp.com.br/"
          >
            Rede Brasil Rp
          </Link>
          , concorda em cumprir estes termos de serviço, todas as leis e
          regulamentos aplicáveis e concorda que é responsável pelo cumprimento
          de todas as leis locais aplicáveis. Se você não concordar com algum
          desses termos, está proibido de usar ou acessar este site. Os
          materiais contidos neste site são protegidos pelas leis de direitos
          autorais e marcas comerciais aplicáveis.
        </p>
        <Heading size={"md"} mb={3} mt={2}>
          2. Uso de Licença
        </Heading>
        <p>
          É concedida permissão para baixar temporariamente uma cópia dos
          materiais (informações ou software) no site Rede Brasil Rp, apenas
          para visualização transitória pessoal e não comercial.Esta é a
          concessão de uma licença, não uma transferência de título e, sob esta
          licença, você não pode:{" "}
        </p>
        <chakra.ol px={{ base: 5, md: 8 }} my={3}>
          {" "}
          <chakra.li>modificar ou copiar os materiais; </chakra.li>{" "}
          <chakra.li>
            usar os materiais para qualquer finalidade comercial ou para
            exibição pública (comercial ou não comercial);{" "}
          </chakra.li>{" "}
          <chakra.li>
            tentar descompilar ou fazer engenharia reversa de qualquer software
            contido no site Rede Brasil Rp;{" "}
          </chakra.li>{" "}
          <chakra.li>
            remover quaisquer direitos autorais ou outras notações de
            propriedade dos materiais; ou{" "}
          </chakra.li>{" "}
          <chakra.li>
            transferir os materiais para outra pessoa ou 'espelhe' os materiais
            em qualquer outro servidor.
          </chakra.li>{" "}
        </chakra.ol>
        <p>
          Esta licença será automaticamente rescindida se você violar alguma
          dessas restrições e poderá ser rescindida por Rede Brasil Rp a
          qualquer momento. Ao encerrar a visualização desses materiais ou após
          o término desta licença, você deve apagar todos os materiais baixados
          em sua posse, seja em formato eletrónico ou impresso.
        </p>
        <Heading size={"md"} mb={3} mt={2}>
          3. Isenção de responsabilidade
        </Heading>
        <ol>
          {" "}
          <li>
            Os materiais no site da Rede Brasil Rp são fornecidos 'como
            estão'.Rede Brasil Rp não oferece garantias, expressas ou
            implícitas, e, por este meio, isenta e nega todas as outras
            garantias, incluindo, sem limitação, garantias implícitas ou
            condições de comercialização, adequação a um fim específico ou não
            violação de propriedade intelectual ou outra violação de direitos.
          </li>{" "}
          <li>
            Além disso, o Rede Brasil Rp não garante ou faz qualquer
            representação relativa à precisão, aos resultados prováveis ou à
            confiabilidade do uso dos materiais em seu site ou de outra forma
            relacionado a esses materiais ou em sites vinculados a este site.
          </li>{" "}
        </ol>
        <Heading size={"md"} mb={3} mt={2}>
          4. Limitações
        </Heading>
        <p>
          Em nenhum caso o Rede Brasil Rp ou seus fornecedores serão
          responsáveis por quaisquer danos (incluindo, sem limitação, danos por
          perda de dados ou lucro ou devido a interrupção dos negócios)
          decorrentes do uso ou da incapacidade de usar os materiais em Rede
          Brasil Rp, mesmo que Rede Brasil Rp ou um representante autorizado da
          Rede Brasil Rp tenha sido notificado oralmente ou por escrito da
          possibilidade de tais danos. Como algumas jurisdições não permitem
          limitações em garantias implícitas, ou limitações de responsabilidade
          por danos conseqüentes ou incidentais, essas limitações podem não se
          aplicar a você.
        </p>
        <Heading size={"md"} mb={3} mt={2}>
          5. Precisão dos materiais
        </Heading>
        <p>
          Os materiais exibidos no site da Rede Brasil Rp podem incluir erros
          técnicos, tipográficos ou fotográficos. Rede Brasil Rp não garante que
          qualquer material em seu site seja preciso, completo ou atual. Rede
          Brasil Rp pode fazer alterações nos materiais contidos em seu site a
          qualquer momento, sem aviso prévio. No entanto, Rede Brasil Rp não se
          compromete a atualizar os materiais.
        </p>
        <Heading size={"md"} mb={3} mt={2}>
          6. Links
        </Heading>
        <p>
          O Rede Brasil Rp não analisou todos os sites vinculados ao seu site e
          não é responsável pelo conteúdo de nenhum site vinculado. A inclusão
          de qualquer link não implica endosso por Rede Brasil Rp do site. O uso
          de qualquer site vinculado é por conta e risco do usuário.
        </p>{" "}
        <Heading size={"lg"} mb={3} mt={2}>
          Modificações
        </Heading>{" "}
        <p>
          O Rede Brasil Rp pode revisar estes termos de serviço do site a
          qualquer momento, sem aviso prévio. Ao usar este site, você concorda
          em ficar vinculado à versão atual desses termos de serviço.
        </p>{" "}
        <Heading size={"lg"} mb={3} mt={2}>
          Lei aplicável
        </Heading>{" "}
        <p>
          Estes termos e condições são regidos e interpretados de acordo com as
          leis do Rede Brasil Rp e você se submete irrevogavelmente à jurisdição
          exclusiva dos tribunais naquele estado ou localidade.
        </p>
      </Box>
    </Box>
  );
}
