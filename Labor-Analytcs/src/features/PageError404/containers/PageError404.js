import React from 'react';
import Styles from "../styles/Styles";
import { ButtonContained, ButtonOutlined } from "../../../components";
import { Texts } from "../../../config";
import { history } from "../../../store";
import { navigateTo } from '../../../navigation/navigate';

function PageError404(props) {
    const texts = Texts["pt-BR"].error;
    return (

        <Styles.Container>
            <Styles.Background>
                <Styles.BackgroundImageRight />
                <Styles.BackgroundImageLeft />
            </Styles.Background>
            <Styles.Content>
                <Styles.LogoContainer >
                    <Styles.Logo />
                </Styles.LogoContainer>
                <Styles.Subtitle>
                    <span style={{ color: "#5AB6E5" }}>{texts.error404}</span>
                    {texts.message404}
                </Styles.Subtitle>
                <ButtonContained
                    style={{ marginBottom: 10 }}
                    loading={props.isFetching}
                    onClick={() => navigateTo.Home()}
                    type="submit"
                >
                    {texts.backHome}
                </ButtonContained>
                <ButtonOutlined
                    onClick={() => history.goBack()}
                    disabled={props.isFetching}
                >
                    {texts.reload}
                </ButtonOutlined>
            </Styles.Content>

        </Styles.Container>

    );
}

export default PageError404;