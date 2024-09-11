function errorParse(
  propertyName,
  propertyValue,
  propertyGroupName,
  requestName,
  customCauseMessage
) {
  const propertyDescription = `Não foi possível ${
    customCauseMessage ? customCauseMessage : " formatar a"
  } propriedade "${propertyName}"`;
  const propertyGroupNameDescription = propertyGroupName
    ? ` presente no grupo "${propertyGroupName}"`
    : "";
  const requestNameDescription = propertyGroupName
    ? ` e recebido como resposta do endpoint "${requestName}"`
    : "";
  const receivedValue = `. Valor recebido: ${propertyValue}`;
  console.error(
    `${propertyDescription}${propertyGroupNameDescription}${requestNameDescription}${receivedValue}`
  );
}

function errorParseResponse(endpoint) {
  console.error(
    `Algo não está retornando devidamente do endpoint ${endpoint}, provocando um erro na camada de parse.`
  );
}

const console = { errorParse, errorParseResponse };

export default console;
