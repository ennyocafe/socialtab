function status(request, response) {
  response
    .status(200)
    .json({
      chave: "requisição de dados",
      teste: "chave de teste638",
      chavek: "chave disponivel",
    });
}
export default status;
