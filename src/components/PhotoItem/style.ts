import styled from 'styled-components'

export const Container = styled.div`
  background-color: #3d3f43;
  border-radius: 10px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: end;

  img {
    max-width: 100%;
    max-height: 100%;
    display: block;
    margin-bottom: 10px;
    border-radius: 10px;
  }

  button {
    background-color: #756df4;
    border: 0;
    color: #fff;
    padding: 8px 16px;
    font-size: 15px;
    border-radius: 10px;
    cursor: pointer;
    transition: all ease 0.3s;

    &:hover {
      opacity: 0.8;
    }
  }
`
