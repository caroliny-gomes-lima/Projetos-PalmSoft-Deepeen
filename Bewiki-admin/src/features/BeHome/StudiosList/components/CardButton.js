import React from "react";
import DropdownActionSelect from "../../../../components/buttons/DropdownActionSelect";
import { Texts } from "../../../../config";
import Styles from "../styles/styledCardButton";

function CardButton({
  TitleCard,
  externalIdTitleCard,
  IconCard,
  IconColor,
  buttonColor,
  dataCard,
  hoverColor,
  titleColor,
  borderColor,
  colorFont,
  onPress,
}) {
  const dropdownActionsTexts =
    Texts["pt-BR"].beHome.StudiosList.dropdownActions;

  return (
    <Styles.ButtomContainer
      $defaultColor={buttonColor}
      $borderColor={borderColor}
      $colorHover={hoverColor}
      $colorFont={colorFont}
      onClick={onPress}
    >
      <Styles.ButtomContent>
        <Styles.ButtomHeader>
          <Styles.ButtomTitle $defaultColor={titleColor}>
            {TitleCard}
          </Styles.ButtomTitle>
          <Styles.ButtomTitle $defaultDataText $defaultColor={titleColor}>
            {externalIdTitleCard}
          </Styles.ButtomTitle>
          <Styles.ButtomHeaderDropdownContainer>
            <DropdownActionSelect
              options={[
                {
                  action: () => console.log("Teste"),
                  name: dropdownActionsTexts.transfer,
                },
                {
                  action: () => console.log("Teste"),
                  name: dropdownActionsTexts.setClean,
                },
              ]}
            />
          </Styles.ButtomHeaderDropdownContainer>
        </Styles.ButtomHeader>
        <Styles.ButtomElementGroup>
          <Styles.ButtomIcon $defaultColor={IconColor}>
            {IconCard}
          </Styles.ButtomIcon>
          <Styles.TextData>{dataCard}</Styles.TextData>
        </Styles.ButtomElementGroup>
      </Styles.ButtomContent>
    </Styles.ButtomContainer>
  );
}

export default CardButton;
