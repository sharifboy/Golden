import styled from "styled-components";
import { adaptiveValue } from "utils/variable";
import { Colors, Flex } from "utils/index";

const InfoColumnsWrapper = styled.section`
    width: 100%;
    background-color: ${Colors.light};
    ${adaptiveValue("margin-bottom", 100, 40)}
`;

const Content = styled.div`
    ${Flex.flexBetween};
    flex-direction: ${({ reverse }) => (reverse ? "row-reverse" : "row")};
    gap: 30px;
`;

const InfoContent = styled.div`
    ${Flex.justFlex};
    justify-content: center;
    flex-direction: column;
    gap: 24px;
`;

const ContentTitle = styled.h3`
    ${adaptiveValue("font-size", 32, 16)}
    ${adaptiveValue("line-height", 42, 26)}
    color: ${Colors.dark};
`;

const ContentText = styled.p`
    ${adaptiveValue("font-size", 18, 14)}
    ${adaptiveValue("line-height", 32, 24)}
    color: ${Colors.gray};
`;

const ImageWrapper = styled.div`
    width: 100%;
    overflow: hidden;
    background-color: aliceblue;
`;

const ContentImage = styled.img`
    display: block;
`;

export {
    InfoColumnsWrapper,
    Content,
    ContentTitle,
    ContentText,
    InfoContent,
    ImageWrapper,
    ContentImage,
};
