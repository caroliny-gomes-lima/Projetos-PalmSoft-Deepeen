import Constants from "config/constants";

/**
 *
 * @param {Array} nodes
 * @param {Array} edges
 * @param {Array} scale
 * @returns
 */
function groups(
  nodes,
  edges,
  scale,
  magicNumber,
  xM,
  yM,
  ruaInicio,
  posiInicio
) {
  let svgG = [];

  edges.forEach((e) => {
    let n1 = nodes.filter((p) => p.reference === e.n1)[0];
    let n2 = nodes.filter((p) => p.reference === e.n2)[0];
    svgG.push(
      <path
        vectorEffect="no-scaling-stroke"
        strokeLinecap="round"
        d={`M${((n1.x * scale[0]) / 100) * magicNumber - xM} ${
          ((n1.y * scale[1]) / 100) * magicNumber - yM
        } L${((n2.x * scale[0]) / 100) * magicNumber - xM} ${
          ((n2.y * scale[1]) / 100) * magicNumber - yM
        }`}
      />
    );
  });

  nodes.forEach((n) => {
    svgG.push(
      <>
        <circle
          strokeWidth="0.3"
          stroke={
            n.rua === ruaInicio && n.posicao === posiInicio
              ? "#FF0000"
              : "#6AB9FF"
          }
          fill={
            n.rua === ruaInicio && n.posicao === posiInicio
              ? "#FF0000"
              : "#6AB9FF"
          }
          onClick={() => console.log(`Rua: ${n.rua} | Posição: ${n.posicao}`)}
          cx={((n.x * scale[0]) / 100) * magicNumber - xM}
          cy={((n.y * scale[1]) / 100) * magicNumber - yM}
          r="1.8"
        />
        <text
          stroke="#FFFFFF"
          fill="#FFFFFF"
          strokeWidth={0.07}
          fontFamily="neue light"
          fontSize={"1.2px"}
          alignmentBaseline="central"
          textAnchor="middle"
          letterSpacing="0"
          onClick={() => console.log(`Rua: ${n.rua} | Posição: ${n.posicao}`)}
          x={((n.x * scale[0]) / 100) * magicNumber - xM}
          y={((n.y * scale[1]) / 100) * magicNumber - yM}
        >
          ({n.rua}/{n.posicao})
        </text>
      </>
    );
  });

  return (
    <g stroke="#6AB9FF" fill="white" strokeWidth="0.6">
      {svgG.map((CP) => CP)}
    </g>
  );
}

function jsonToSVG(json) {
  if (json != null) {
    const CD = localStorage.getItem("cdValue")
      ? localStorage.getItem("cdValue")
      : "COJ";
    const magicNumber = Constants.cdMapNumbers[CD][0];
    const xM = Constants.cdMapNumbers[CD][1];
    const yM = Constants.cdMapNumbers[CD][2];
    const ruaInicio = Constants.cdMapNumbers[CD][3].toString();
    const posiInicio = Constants.cdMapNumbers[CD][4].toString();

    const nodes = json.nodos;
    const edges = json.arestas;
    const scale = [json.imgpScaleX / 100, json.imgpScaleY / 100];
    const GC = groups(
      nodes,
      edges,
      scale,
      magicNumber,
      xM,
      yM,
      ruaInicio,
      posiInicio
    );

    return (
      <svg width={1100} height={700} viewBox="0 0 1100 700">
        {GC}
      </svg>
    );
  } else {
    return <></>;
  }
}

const toSVG = {
  jsonToSVG,
};

export default toSVG;
