import styled from "styled-components";
import {ReactComponent as right} from '../../assets/icons/right.svg'

export const Icons = styled.div`

`
Icons.Right = styled(right)`
 width: 18px;
 height: 18px;
 color: #ccc;
 margin-right: 20px;
`

export const Container = styled.div`
 width: 250px;
 height: 100vh;
 /* background-color: rgb(29 21 52); */
 background-color: rgb(29 21 52);

`
export const Title = styled.h1`
 color: #fff;
 font-size: 22px;
 font-weight: 700;
 height: 70px;
 text-align: center;
 line-height: 70px;
 border-bottom: 1px solid rgb(133 129 129);
`
export const Menu = styled.ul`
 margin-top: 40px;
 width: 100%;
 margin-left: 30px;
 `
 Menu.Item = styled.li`
  color: #fff;
  margin-top: 20px;
  a{
    font-weight: 400;
    padding: 10px;
    display: flex;
    align-items: center ;
    opacity: 0.8;
  }
  .active{
    background-color: rgb(239, 243, 249);
    border-radius: 20px 0 0 20px;
    color: #333;
  }
 `