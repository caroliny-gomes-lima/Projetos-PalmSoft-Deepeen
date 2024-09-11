import { ChartDescription } from "components";
import { Texts } from "../../../config";
import React from "react";
import { UncontrolledReactSVGPanZoom } from "react-svg-pan-zoom";
import toSVG from "../../../lib/NodeJsonToSVG";

function CDMap({ refC }) {
  const Viewer = React.useRef(null);
  const [width, setWidth] = React.useState(100);
  const [height, setHeight] = React.useState(100);
  const [token, setToken] = React.useState(null);

  const texts = Texts["pt-BR"].cdMap;

  React.useEffect(() => {
    const CD = localStorage.getItem("cdValue")
      ? localStorage.getItem("cdValue")
      : "COJ";
    async function getToken() {
      await import(`../../../assets/cdUnidades/${CD}/${CD}.json`).then(
        (json) => {
          return setToken(json);
        }
      );
      Viewer?.current.setPointOnViewerCenter(550, 350, 1);
      Viewer?.current.zoomOnViewerCenter(0.8);
    }
    if (refC != null) {
      setWidth(refC.current.clientWidth);
      setHeight(refC.current.clientHeight);
    }
    if (token === null) {
      getToken();
    }
  }, [refC, token]);

  let SvgJson = toSVG.jsonToSVG(token);

  return (
    <>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <ChartDescription
          noMargin
          color={"#FF0000"}
          loading={false}
          loadingWidth={250}
        >
          {texts.initial}
        </ChartDescription>
        <ChartDescription
          noMargin
          color={"#6AB9FF"}
          loading={false}
          loadingWidth={250}
        >
          {texts.nodes}
        </ChartDescription>
        <ChartDescription
          noMargin
          color={"#6AB9FF"}
          loading={false}
          line
          loadingWidth={250}
        >
          {texts.road}
        </ChartDescription>
      </div>
      <div
        className="toolSelector"
        style={{
          marginBottom: "10px",
          padding: "10px",
        }}
      ></div>
      <div
        style={{
          width: "100%",
          height: "100%",
        }}
      >
        {token ? (
          <UncontrolledReactSVGPanZoom
            ref={Viewer}
            width={width - width * 0.02}
            height={height - height * 0.15}
            background="#36344D"
            SVGBackground="#33374C"
            defaultTool="pan"
          >
            {SvgJson}
          </UncontrolledReactSVGPanZoom>
        ) : null}
      </div>
    </>
  );
}

export default CDMap;
