import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 80px;
    padding: 0 16;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
export const NumberContainer = styled.div`
    width: 400px;
    heigth: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    h1 {
        font-size: 20px;
        text-align: center;
        color: black;
    }
    h2 {
        font-size: 15px;
        text-align: center;
        color: #777;
    }

    &:hover {
        cursor: pointer;
        background: rgba(0, 0, 0, 0.1);
        trasition: 0.4s ease;
        border-radius: 10px;
    }
`;
