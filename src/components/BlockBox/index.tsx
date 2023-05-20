import { BlockBoxProps } from "./blockBox.interface";
import { BlockBoxContainer, BlockBoxContent } from "./blockBox.styles";

export const BlockBox = ({ children, marginTop }: BlockBoxProps) => {
  return (
    <BlockBoxContainer style={{ marginTop }}>
      <BlockBoxContent>{children}</BlockBoxContent>
    </BlockBoxContainer>
  );
};
