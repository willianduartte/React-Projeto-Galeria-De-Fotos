import styled from 'styled-components'

export const Container = styled.div`
  background-color: #27282f;
  color: #fff;
  min-height: 100vh;
`

export const Area = styled.div`
  margin: auto;
  max-width: 1000px;
  padding: 30px 0px;
`

export const Header = styled.h1`
  margin: 0;
  padding: 0;
  text-align: center;
  margin-bottom: 30px;
`

export const ScreenWarning = styled.div`
  text-align: center;
  .emoji {
    font-size: 50px;
    margin-bottom: 20px;
  }
`

export const PhotoList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  margin-inline: 20px;

  @media (max-width: 927px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 500px) {
    grid-template-columns: repeat(2, 1fr);
    margin-inline: 10px;
  }
`

export const uploadForm = styled.form`
  background-color: #3d3f43;
  padding: 15px;
  border-radius: 10px;
  margin-bottom: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-inline: 20px;

  input[type='file'] {
    outline: 0;
    border: 0;
    background-color: #756df4;
    font-size: 15px;
    border-radius: 10px;
    margin: 0 20px;
    cursor: pointer;
    color: #fff;
    transition: opacity ease 0.8s;
    max-width: 85%;
    width: 85%;

    &[type='file']::-webkit-file-upload-button {
      background-color: transparent;
      padding: 10px 20px;
      border-radius: 10px;
      outline: 0;
      border: 0;
      color: #fff;
      cursor: pointer;
      width: 20%;
    }

    &:hover {
      opacity: 0.8;
    }
  }

  input[type='submit'] {
    outline: 0;
    border: 0;
    background-color: #756df4;
    padding: 8px 16px;
    font-size: 15px;
    border-radius: 10px;
    margin: 0 10px;
    cursor: pointer;
    color: #fff;
    transition: opacity ease 0.8s;

    &:hover {
      opacity: 0.8;
    }
  }

  span {
    margin-top: 20px;
  }

  @media (max-width: 947px) {
    margin-inline: 10px;
    input[type='submit'] {
      margin-top: 20px;
    }
  }
`
