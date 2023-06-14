import React from "react";
import { Container } from "components/Container/style";
import * as S from "./style";

const InfoColumns = ({ data, reverse }) => {
    const { title, image, firstText, secondText } = data?.[0];
    return (
        <S.InfoColumnsWrapper>
            <Container>
                <S.Content reverse={reverse}>
                    <S.InfoContent>
                        <S.ContentTitle>{title}</S.ContentTitle>
                        <S.ContentText>{firstText}</S.ContentText>
                        <S.ContentText>{secondText}</S.ContentText>
                    </S.InfoContent>
                    <S.ImageWrapper>
                        <S.ContentImage src={image} alt={title} />
                    </S.ImageWrapper>
                </S.Content>
            </Container>
        </S.InfoColumnsWrapper>
    );
};

export default InfoColumns;
