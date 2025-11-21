import { ResizableBox } from "react-resizable";
import "react-resizable/css/styles.css";
import styled from "styled-components";

type DependencyPair = [string, string];

const ResizableOutputStyled = styled(ResizableBox)`
  height: 100%;
  border-left: 6px solid #ecececff;
  background: #ffffffff;
  display: flex;
  flex-direction: column;
`;

const OutputDisplayStyled = styled.div`
  margin: 20px;
  background-color: #ecececff;
`;

interface OtherDataProps {
  dependencyArray: DependencyPair[];
  inDependencyArray: DependencyPair[];
  foataForm: string[][];
  canShowOutput: boolean;
}

const Otherdata = ({
  dependencyArray,
  inDependencyArray,
  foataForm,
  canShowOutput,
}: OtherDataProps) => {
  return (
    <ResizableOutputStyled
      className="custom-box box"
      width={300}
      height={Infinity}
      axis="x"
      minConstraints={[0, Infinity]}
      maxConstraints={[1000, Infinity]}
      resizeHandles={["w"]}
    >
      {canShowOutput && (
        <>
          <OutputDisplayStyled>
            Dependency array:
            {dependencyArray.map((pair, key) => (
              <div key={key}>[{pair.join(",")}]</div>
            ))}
            <br />
            Independency array:
            {inDependencyArray.map((pair, key) => (
              <div key={key}>[{pair.join(",")}]</div>
            ))}
            <br />
            FNF=
            {foataForm.map((fnfClass, key) => {
              const stringOutput =
                "[" +
                fnfClass.map((element) => element.split("_")[0]).join(",") +
                "]";

              return <span key={key}>{stringOutput}</span>;
            })}
          </OutputDisplayStyled>
        </>
      )}
    </ResizableOutputStyled>
  );
};

export default Otherdata;
