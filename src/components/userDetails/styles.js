import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100px;
    display: flex;
    align-items: center;
    flex-direction: column;
`;
export const Name = styled.h1`
    width: 100%;
    text-align: center;
    font-size: 25px;
    font-weight: bold;
    color: black;
`;

export const UserName = styled.h2`
    width: 100%;
    text-align: center;
    font-size: 15px;
    font-weight: 600;
    color: blue;
    padding: 2px;
`;

export const Description = styled.p`
    width: center;
    height: 40px;
    margin: 10px 25px;
    font-size: 13px;
    text-align: justify;
    color: black;
    font-style: bold;
    line-height: 1.2;
    overflow: hidden;

    @media (max-width: 430px) {
        width: 250px;
    }
`;
