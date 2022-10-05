/* eslint-disable jsx-a11y/anchor-is-valid */
import {
  Box,
  GridItem,
  SimpleGrid,
  chakra,
  Stack,
  FormControl,
  FormLabel,
  Input,
  Button,
  Heading,
  Select,
  useToast,
  Flex,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Checkbox,
  Link,
  Image,
  Text
} from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const nanvigate = useNavigate();
  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [logradouro, setLogradouro] = useState("");
  const [numero, setNumero] = useState("");
  const [complemento, setComplemento] = useState("");
  const [cep, setCep] = useState("");
  const [municipio, setMunicipio] = useState("");
  const [uf, setUf] = useState("");
  const [bairro, setBairro] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [email, setEmail] = useState("");
  const [empresa, setEmpresa] = useState("");
  const [certificado, setCertificado] = useState("");
  const [lgpd, setLgpd] = useState(false);

  const { isOpen, onOpen, onClose } = useDisclosure();

  const toast = useToast();

  const chekCep = (e) => {
    const cepdig = e.target.value.replace(/\D/g, "");
    console.log(cepdig);

    fetch(`https://viacep.com.br/ws/${cepdig}/json`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setBairro(data.bairro);
        setUf(data.uf);
        setMunicipio(data.localidade);
        setCep(cepdig);
        setLogradouro(data.logradouro);
      });
  };

  const salvar = () => {
    onClose();
    const data = {
      nome: nome,
      email: email,
      telefone: whatsapp,
      cep: cep,
      enderco: logradouro,
      complemento: complemento,
      bairro: bairro,
      numero: numero,
      uf: uf,
      cidade: municipio,
      cpf: cpf,
      empresa: empresa,
      certificado: certificado,
      lgpd: lgpd
    };

    axios({
      url: "https://sisadm.redebrasilrp.com.br/sorteio",
      // url: "http://localhost:3050/sorteio",
      method: "POST",
      data: data
    })
      .then((response) => {
        console.log(response.status);

        toast({
          title: "Registro cuncluido",
          description: "Muito bem! agora so espera o sorteio",
          position: "top-right",
          status: "success",
          duration: 3000,
          isClosable: false
        });
        reset();
      })
      .catch((err) => {
        console.log(err.response.data);
        const errorData = err.response.data;
        if (errorData === "falta dados") {
          toast({
            title: "opss",
            description: "Por favor preencha os campos",
            position: "top-right",
            status: "warning",
            duration: 3000,
            isClosable: false
          });
        } else {
          reset();
          toast({
            title: "Erro",
            description: "falha ded comunicação com o servidor",
            position: "top-right",
            status: "error",
            duration: 2000,
            isClosable: false
          });
        }
      });
  };
  const reset = () => {
    onClose();
    setTimeout(() => {
      window.location.reload();
    }, 2 * 1000);
  };
  return (
    <>
      <Box
        px={{ base: 3, md: 20 }}
        pt={5}
        bg={"#1D1D1B"}
        h={{ md: "100vh", base: nome }}
      >
        <Box>
          <Box w={{ base: "13rem", md: "16rem" }}>
            <Image
              objectFit="cover"
              src="https://redebrasilrp.com.br/_assets/feira/logo.svg"
            />
          </Box>
        </Box>
        <Flex
          justifyContent="center"
          alignItems="center"
          py={{ base: 10, md: 32 }}
          flexDirection="column"
        >
          <Heading mb={10} color={"white"}>
            Sorteio Alexa
          </Heading>
          <Box>
            <SimpleGrid
              display={{
                base: "initial",
                md: "grid"
              }}
              columns={{
                md: 1
              }}
              spacing={{
                md: 12
              }}
            >
              <GridItem
                colSpan={{
                  md: 2
                }}
              >
                <chakra.form
                  shadow="dark-lg"
                  rounded={[10, "xl"]}
                  overflow={{
                    sm: "hidden"
                  }}
                >
                  <Stack
                    px={4}
                    py={5}
                    p={[null, 6]}
                    bg="white"
                    _dark={{
                      bg: "#141517"
                    }}
                    spacing={6}
                  >
                    <SimpleGrid columns={5} spacing={5}>
                      <FormControl as={GridItem} colSpan={[6, 3, null, 2]}>
                        <FormLabel
                          htmlFor="Nome"
                          fontSize="xs"
                          fontWeight="md"
                          textTransform={"uppercase"}
                          color="gray.700"
                          _dark={{
                            color: "gray.50"
                          }}
                        >
                          Nome *
                        </FormLabel>

                        <Input
                          type="text"
                          mt={1}
                          bg={"#00713C"}
                          color={"white"}
                          focusBorderColor="00713c"
                          shadow="xs"
                          size="xs"
                          w="full"
                          rounded="md"
                          onChange={(e) => setNome(e.target.value)}
                        />
                      </FormControl>

                      <FormControl as={GridItem} colSpan={[6, 3, null, 2]}>
                        <FormLabel
                          htmlFor="email"
                          fontSize="xs"
                          textTransform={"uppercase"}
                          fontWeight="md"
                          color="gray.700"
                          _dark={{
                            color: "gray.50"
                          }}
                        >
                          email *
                        </FormLabel>
                        <Input
                          type="email"
                          mt={1}
                          bg={"#00713C"}
                          color={"white"}
                          focusBorderColor="00713c"
                          shadow="xs"
                          size="xs"
                          w="full"
                          rounded="md"
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </FormControl>

                      <FormControl as={GridItem} colSpan={[4, 1]}>
                        <FormLabel
                          htmlFor="postal_code"
                          fontSize="xs"
                          textTransform={"uppercase"}
                          fontWeight="md"
                          color="gray.700"
                          _dark={{
                            color: "gray.50"
                          }}
                        >
                          Cep *
                        </FormLabel>
                        <Input
                          type="text"
                          mt={1}
                          bg={"#00713C"}
                          color={"white"}
                          focusBorderColor="00713c"
                          shadow="xs"
                          size="xs"
                          w="full"
                          rounded="md"
                          onBlur={chekCep}
                        />
                      </FormControl>

                      <FormControl as={GridItem} colSpan={[3, 1]}>
                        <FormLabel
                          fontSize="xs"
                          fontWeight="md"
                          textTransform={"uppercase"}
                          color="gray.700"
                          _dark={{
                            color: "gray.50"
                          }}
                        >
                          N° *
                        </FormLabel>
                        <Input
                          type="number"
                          mt={1}
                          bg={"#00713C"}
                          color={"white"}
                          focusBorderColor="00713c"
                          shadow="xs"
                          size="xs"
                          w="full"
                          rounded="md"
                          onChange={(e) => setNumero(e.target.value)}
                        />
                      </FormControl>

                      <FormControl as={GridItem} colSpan={[2, 1]}>
                        <FormLabel
                          textTransform={"uppercase"}
                          fontSize="xs"
                          fontWeight="md"
                          color="gray.700"
                          _dark={{
                            color: "gray.50"
                          }}
                        >
                          Uf
                        </FormLabel>
                        <Input
                          type="text"
                          mt={1}
                          bg={"#00713C"}
                          color={"white"}
                          focusBorderColor="00713c"
                          shadow="xs"
                          size="xs"
                          w="full"
                          rounded="md"
                          value={uf}
                        />
                      </FormControl>

                      <FormControl as={GridItem} colSpan={[6, 3, null, 2]}>
                        <FormLabel
                          textTransform={"uppercase"}
                          fontSize="xs"
                          fontWeight="md"
                          color="gray.700"
                          _dark={{
                            color: "gray.50"
                          }}
                        >
                          End
                        </FormLabel>
                        <Input
                          type="text"
                          mt={1}
                          bg={"#00713C"}
                          color={"white"}
                          focusBorderColor="00713c"
                          shadow="xs"
                          size="xs"
                          w="full"
                          rounded="md"
                          value={logradouro}
                        />
                      </FormControl>

                      <FormControl as={GridItem} colSpan={[6, 3, null, 2]}>
                        <FormLabel
                          textTransform={"uppercase"}
                          fontSize="xs"
                          fontWeight="md"
                          color="gray.700"
                          _dark={{
                            color: "gray.50"
                          }}
                        >
                          complemento
                        </FormLabel>
                        <Input
                          type="text"
                          mt={1}
                          bg={"#00713C"}
                          color={"white"}
                          focusBorderColor="00713c"
                          shadow="xs"
                          size="xs"
                          w="full"
                          rounded="md"
                          onChange={(e) => setComplemento(e.target.value)}
                          value={complemento}
                        />
                      </FormControl>

                      <FormControl as={GridItem} colSpan={[6, 3, null, 2]}>
                        <FormLabel
                          textTransform={"uppercase"}
                          fontSize="xs"
                          fontWeight="md"
                          color="gray.700"
                          _dark={{
                            color: "gray.50"
                          }}
                        >
                          Bairro
                        </FormLabel>
                        <Input
                          type="text"
                          mt={1}
                          bg={"#00713C"}
                          color={"white"}
                          focusBorderColor="00713c"
                          shadow="xs"
                          size="xs"
                          w="full"
                          rounded="md"
                          value={bairro}
                        />
                      </FormControl>

                      <FormControl as={GridItem} colSpan={[6, 3, null, 1]}>
                        <FormLabel
                          textTransform={"uppercase"}
                          fontSize="xs"
                          fontWeight="md"
                          color="gray.700"
                          _dark={{
                            color: "gray.50"
                          }}
                        >
                          Cidade
                        </FormLabel>
                        <Input
                          type="text"
                          mt={1}
                          bg={"#00713C"}
                          color={"white"}
                          focusBorderColor="00713c"
                          shadow="xs"
                          size="xs"
                          w="full"
                          rounded="md"
                          value={municipio}
                        />
                      </FormControl>

                      <FormControl as={GridItem} colSpan={[6, 3, null, 1]}>
                        <FormLabel
                          textTransform={"uppercase"}
                          fontSize="xs"
                          fontWeight="md"
                          color="gray.700"
                          _dark={{
                            color: "gray.50"
                          }}
                        >
                          Cpf
                        </FormLabel>
                        <Input
                          type="text"
                          mt={1}
                          bg={"#00713C"}
                          color={"white"}
                          focusBorderColor="00713c"
                          shadow="xs"
                          size="xs"
                          w="full"
                          rounded="md"
                          onChange={(e) => setCpf(e.target.value)}
                        />
                      </FormControl>

                      <FormControl as={GridItem} colSpan={[6, 3, null, 1]}>
                        <FormLabel
                          textTransform={"uppercase"}
                          fontSize="xs"
                          fontWeight="md"
                          color="gray.700"
                          _dark={{
                            color: "gray.50"
                          }}
                        >
                          WhatsApp *
                        </FormLabel>
                        <Input
                          type="text"
                          mt={1}
                          bg={"#00713C"}
                          color={"white"}
                          focusBorderColor="00713c"
                          shadow="xs"
                          size="xs"
                          w="full"
                          rounded="md"
                          onChange={(e) => setWhatsapp(e.target.value)}
                        />
                      </FormControl>

                      <FormControl as={GridItem} colSpan={[6, 3, null, 2]}>
                        <FormLabel
                          textTransform={"uppercase"}
                          fontSize="xs"
                          fontWeight="md"
                          color="gray.700"
                          _dark={{
                            color: "gray.50"
                          }}
                        >
                          trabalha / empreende em qual empresa?
                        </FormLabel>
                        <Input
                          type="text"
                          mt={1}
                          bg={"#00713C"}
                          color={"white"}
                          focusBorderColor="00713c"
                          shadow="xs"
                          size="xs"
                          w="full"
                          rounded="md"
                          onChange={(e) => setEmpresa(e.target.value)}
                        />
                      </FormControl>

                      <FormControl as={GridItem} colSpan={[3, null, 1]}>
                        <FormLabel
                          textTransform={"uppercase"}
                          fontSize="xs"
                          fontWeight="md"
                          color="gray.700"
                          _dark={{
                            color: "gray.50"
                          }}
                        >
                          já tem / teve certificado?
                        </FormLabel>
                        <Select
                          mt={1}
                          borderColor="#00713C"
                          focusBorderColor="00713c"
                          shadow="xs"
                          size="xs"
                          w="full"
                          rounded="md"
                          onChange={(e) => setCertificado(e.target.value)}
                        >
                          <option bg={"#00713C"}></option>
                          <option bg={"#00713C"} value="Sim">
                            Sim
                          </option>
                          <option color="black" value="Nao">
                            Não
                          </option>
                        </Select>
                      </FormControl>
                    </SimpleGrid>
                    <Box px={20}>
                        <Text color={'cyan.700'} textAlign="right"> (*) obrigatorio</Text>
                    </Box>
                  </Stack>
                  <Box
                    px={{
                      base: 6,
                      sm: 6
                    }}
                    py={3}
                    bg="gray.50"
                    _dark={{
                      bg: "#121212"
                    }}
                    textAlign="right"
                  >
                    <Button
                      colorScheme="green"
                      bg="#00713C"
                      _focus={{
                        shadow: ""
                      }}
                      fontSize="xl"
                      fontWeight="semibold"
                      isDisabled={(() => {
                        const disasble =
                          nome.length > 3 &&
                          email !== "" &&
                          whatsapp.length > 10 &&
                          cep.length >= 7 &&
                          numero !== ""
                            ? false
                            : true;
                        return disasble;
                      })()}
                      onClick={onOpen}
                      py={6}
                      px={10}
                    >
                      Save
                    </Button>
                  </Box>
                </chakra.form>
              </GridItem>
            </SimpleGrid>
          </Box>
        </Flex>
      </Box>
      <Modal
        closeOnOverlayClick={false}
        blockScrollOnMount={false}
        size={"xl"}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Termos de Uso</ModalHeader>
          <ModalBody>
            <Box mb={5}>
              <Checkbox
                onChange={(e) => {
                  if (lgpd !== true) {
                    return setLgpd(true);
                  } else {
                    return setLgpd(false);
                  }
                }}
                mt={1}
                me={3}
              />
              Eu concordo em participar da roleta Rede Brasil RP e
              posteriormente receber comunicações e ofertas personalizadas de
              acordo com meus interesses.
            </Box>
            <Box>
              <p>
                Ao informar meus dados, eu concordo com a{" "}
                <Link
                  fontWeight={"bold"}
                  color="black"
                  onClick={(e) => nanvigate("/politica_de_privacidade")}
                >
                  Politica de Privacidade
                </Link>{" "}
                e com os {""}
                <Link
                  fontWeight={"bold"}
                  color="black"
                  onClick={(e) => nanvigate("/termos_de_uso")}
                >
                  Termos de Uso
                </Link>
              </p>
            </Box>
          </ModalBody>
          <ModalFooter>
            <Button
              colorScheme="blue"
              mr={3}
              onClick={salvar}
              isDisabled={(() => {
                const disasble = lgpd === true ? false : true;
                return disasble;
              })()}
            >
              aceito
            </Button>
            <Button variant="ghost" onClick={reset}>
              Não aceito
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default Home;
