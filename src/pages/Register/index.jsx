import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import Cliente from "../../models/Client";
import Endereco from "../../models/Address";

import api from "../../services/api";
import apiViaCep from "../../services/viacep-api";

import "../../global.css";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  form: {
    boxSizing: "border-box",
    maxWidth: "30rem",
    display: "flex",
    justifyContent: "center",
    "& > *": {
      margin: theme.spacing(0),
      width: "100vw",
    },
    border: "1px solid #ddd",
    padding: "8px",
  },
  title: {
    textAlign: "center",
    fontSize: "1,5625rem",
    color: "var(--dark)",
  },
  group: {
    padding: theme.spacing(0),
    width: "100%",
  },
}));

export default function Register() {
  const classes = useStyles();

  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [senha, setSenha] = useState("");
  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [telefone, setTelefone] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");
  const [cep, setCep] = useState("");
  const [logradouro, setLogradouro] = useState("");
  const [cidade, setCidade] = useState("");
  const [bairro, setBairro] = useState("");
  const [complemento, setComplemento] = useState("");
  const [numero, setNumero] = useState("");

  // const [endereco, setEndereco] = useState([new Endereco()]);

  var endereco = new Endereco();

  function handleChange(event) {
    const target = event.target;
    const name = target.name;
  }

  // function handleChangeEndereco(event) {
  //   const target = event.target;
  //   const name = target.name;

  //   endereco[name] = target.value;
  //   setEndereco({ endereco });
  // }

  async function ObterEndereco(event) {
    event.preventDefault();
    const target = event.target;
    const name = target.name;

    endereco[name] = target.value.replace(/[^0-9]/, "");
    let cep = parseInt(endereco.cep);

    try {
      const resposta = await apiViaCep.get(`/${cep}/json`);
      endereco = new Endereco(resposta.data);
      setBairro(endereco.bairro);
      setCidade(endereco.cidade);
      setLogradouro(endereco.logradouro);
      console.log(endereco);
    } catch (error) {
      console.log(error);
      alert("Ops, não foi possivel obter o endereço, favor verifique o CEP");
    }
  }

  async function handleSubmit(event) {
    // event.preventDefault();
    console.log(cep);
    console.log(numero);
    console.log(complemento);

    const enderecos = new Endereco({
      cep: cep,
      numero: numero,
      complemento: complemento,
    });

    const cliente = new Cliente({
      email: email,
      username: userName,
      senha: senha,
      nome: nome,
      cpf: cpf,
      telefone: telefone,
      dataNascimento: dataNascimento,
      enderecos: [
        {
          cep: cep,
          numero: numero,
          complemento: complemento,
        },
      ],
    },
    [enderecos]
    );
    console.log(cliente);
    try {
      const resposta = await api.post("/cliente", cliente);
      console.log(resposta);
      alert("Cliente cadastrado com sucesso!");
    } catch (error) {
      console.log(error);
      alert("Ops, não foi possivel completar o cadastro");
    }
  }

  return (
    <Container maxWidth="sm">
      <form action="" className={classes.form}>
        <Grid container spacing={3} zeroMinWidth>
          <Grid item xs={12}>
            <h1 className={classes.title}>Cadastro</h1>
          </Grid>

          <Grid item xs={12} zeroMinWidth>
            <TextField
              className={classes.group}
              required
              // error
              id="email"
              label="Email"
              type="Email"
              name="email"
              onChange={(event) => setEmail(event.target.value)}
              // value={email}
              // helperText="Campo obrigatório"
              variant="outlined"
              size="small"
            />
          </Grid>

          <Grid item xs={12} sm={6} zeroMinWidth>
            <TextField
              className={classes.group}
              required
              // error
              id="username"
              label="Username"
              type="text"
              name="username"
              onChange={(event) => setUserName(event.target.value)}
              // value={userName}
              // helperText="Campo obrigatório"
              variant="outlined"
              size="small"
            />
          </Grid>

          <Grid item xs={12} sm={6} zeroMinWidth>
            <TextField
              className={classes.group}
              required
              // error
              id="senha"
              label="Senha"
              type="password"
              name="senha"
              // value={cliente.senha}
              onChange={(event) => setSenha(event.target.value)}
              // helperText="Campo obrigatório"
              variant="outlined"
              size="small"
            />
          </Grid>

          <Grid item xs={12} zeroMinWidth>
            <TextField
              className={classes.group}
              required
              // error
              id="nome"
              label="Nome Completo"
              type="text"
              name="nome"
              // value={cliente.nome}
              onChange={(event) => setNome(event.target.value)}
              // helperText="Campo obrigatório"
              variant="outlined"
              size="small"
            />
          </Grid>

          <Grid item xs={12} sm={6} zeroMinWidth>
            <TextField
              className={classes.group}
              required
              // error
              id="cpf"
              label="CPF"
              type="text"
              name="cpf"
              // value={cliente.cpf}
              onChange={(event) => setCpf(event.target.value)}
              // helperText="Campo obrigatório"
              variant="outlined"
              size="small"
            />
          </Grid>

          <Grid item xs={12} sm={6} zeroMinWidth>
            <TextField
              id="dataNascimento"
              label="Data de Nascimento"
              type="date"
              name="dataNascimento"
              // value={cliente.dataNascimento}
              onChange={(event) => setDataNascimento(event.target.value)}
              defaultValue="2017-05-24"
              size="small"
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>

          <Grid item xs={6} sm={6} zeroMinWidth>
            <TextField
              className={classes.group}
              required
              // error
              id="telefone"
              label="Telefone"
              type="text"
              name="telefone"
              // value={cliente.telefone}
              onChange={(event) => setTelefone(event.target.value)}
              // helperText="Campo obrigatório"
              variant="outlined"
              size="small"
              placeholder="(21) 99999-9999"
            />
          </Grid>

          <Grid item xs={6} sm={6} zeroMinWidth>
            <TextField
              className={classes.group}
              required
              // error
              id="cep"
              label="CEP"
              type="text"
              name="cep"
              value={cep}
              onChange={(event) => setCep(event.target.value)}
              onBlur={ObterEndereco}
              // helperText="Campo obrigatório"
              variant="outlined"
              size="small"
              placeholder="25900-000"
            />
          </Grid>

          <Grid item xs={12} zeroMinWidth>
            <TextField
              className={classes.group}
              required
              // error
              id="logradouro"
              label="Logradouro"
              type="text"
              name="logradouro"
              value={logradouro}
              // helperText="Campo obrigatório"
              variant="outlined"
              size="small"
              InputLabelProps={{ shrink: true }}
            />
          </Grid>

          <Grid item xs={6} sm={3} zeroMinWidth>
            <TextField
              className={classes.group}
              required
              // error
              id="numero"
              label="Nº"
              type="text"
              name="numero"
              value={numero}
              onChange={(event) => setNumero(event.target.value)}
              // helperText="Campo obrigatório"
              variant="outlined"
              size="small"
            />
          </Grid>

          <Grid item xs={6} sm={4} zeroMinWidth>
            <TextField
              className={classes.group}
              required
              // error
              id="bairro"
              label="Bairro"
              type="text"
              name="bairro"
              value={bairro}
              // helperText="Campo obrigatório"
              variant="outlined"
              size="small"
              InputLabelProps={{ shrink: true }}
            />
          </Grid>

          <Grid item xs={6} sm={5} zeroMinWidth>
            <TextField
              className={classes.group}
              required
              // error
              id="cidade"
              label="Cidade"
              type="text"
              name="cidade"
              value={cidade}
              // helperText="Campo obrigatório"
              variant="outlined"
              size="small"
              InputLabelProps={{ shrink: true }}
            />
          </Grid>

          <Grid item xs={12} zeroMinWidth>
            <TextField
              className={classes.group}
              required
              // error
              id="complemento"
              label="Complemento"
              type="text"
              name="complemento"
              value={complemento}
              onChange={(event) => setComplemento(event.target.value)}
              variant="outlined"
              size="small"
            />
          </Grid>

          <Grid item xs={12} zeroMinWidth>
            <Button
              variant="contained"
              color="primary"
              onClick={() => {
                // setarEnderecoCliente();

                handleSubmit();
              }}
            >
              Cadastrar
            </Button>
          </Grid>
          <Grid item xs={12} zeroMinWidth>
            <Button variant="outlined">Voltar</Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
}