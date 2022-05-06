import styled from "styled-components";

export const Section = styled.section`
    width: 700px;
    height: 500px;
    background: rgba(255, 255, 255, 0.95);
    border-radius: 15px;
    margin-top: 15px;
    @media (max-width: 430px) {
        width: 300px;
    }
`;

export const Title = styled.h1`
    font-size: 20px;
    font-weight: 400px;
    margin-top: 10px;
    color: black;
    text-align: center;
    height: 28px;
`;
export const ListStarredContainer = styled.h1`
    height: 450px;
    width: 680px;
    padding: 15px;
    overflow-y: scroll;
`;

export const Starred = styled.h2`
    width: 100%;
    height: 80px;
    background: #4169e1;
    border-radius: 10px;
    padding: 10px;
    margin-bottom: 10px;
    h2 {
        font-size: 20px;
        width: 700;
        overflow: hidden;
        color: black;
    }
    p {
        font-size: 15px;
        font-weight: 400;
        color: black;
        width: 600px;
        height: 40px;
        overflow: hidden;
        line-height: 1.2;
    }
`;
