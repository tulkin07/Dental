import styled, { css } from "styled-components";
import { ReactComponent as bars } from '../../assets/icons/bars.svg'
import { ReactComponent as search } from '../../assets/icons/search.svg'
import { ReactComponent as not } from '../../assets/icons/not.svg'
import { ReactComponent as message } from '../../assets/icons/message.svg'
import { ReactComponent as list } from '../../assets/icons/list.svg'


export const Container = styled.div`
width: 100%;
 background-color: #fff;
 height: 70px;
 /* line-height: 70px; */
 padding: 0 10px;
 box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
 display: flex;
 align-items: center;
 justify-content: space-between;
 `
Container.Left = styled.div`
  display: flex;
  align-items: center;
 `
Container.Right = styled.div`
display: flex;
  align-items: center;
`

export const Icons = styled.div`
`
Icons.Bars = styled(bars)`
cursor: pointer;
width: 25px;
height: 25px;
color: #555;
`
Icons.Search = styled(search)`
cursor: pointer;
width: 20px;
height: 20px;
color: #fff;
`
Icons.Ball = styled(not)`
cursor: pointer;
width: 20px;
height: 20px;
color: #ffa330;
`
Icons.List = styled(list)`
cursor: pointer;
width: 20px;
height: 20px;
color:rgb(58 183 100) ;
`
Icons.Message = styled(message)`
cursor: pointer;
width: 20px;
height: 20px;
color: #555;
`


export const Filter = styled.div`
 display: flex;
 align-items: center;
 justify-content: space-between;
 height: 40px;
 margin-left: 30px;
`
export const Select = styled.select`
 width: 150px;
 height: 100%;
 border: 1px solid #ccc;
 outline: none;
  border-radius: 6px 0 0 6px;
  color: rgb(165 160 160);
  font-weight: 600;
  padding: 0 10px;
`
export const Search = styled.input`
 width: 200px;
 height: 100%;
 border: 1px solid #ccc;
 outline: none;
  border-radius:0;
  color: rgb(165 160 160);
  font-weight: 600;
  padding: 0 10px;
  border-right: 0;
  ::placeholder{
    color: rgb(165 160 160);
  }
`
Search.Icon = styled.div`
 width: 40px;
 height: 100%;
 border: 1px solid #ccc;
 display: flex;
 align-items: center;
 justify-content: center;
 border-radius: 0 6px 6px 0;
 background-color: rgb(29 21 52);
 cursor: pointer;
`

export const Box  =styled.div`
 width: 33px;
 height: 33px;
 display: flex;
 align-items: center;
 justify-content: center;
 margin: 0 10px;
 border-radius: 4px;
 box-shadow: 1px 2px 2px #ccc ,2px 0 2px #ccc;
 position: relative;
 `
 Box.Pill=styled.div`
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  position: absolute;
  right: -10px;
  top: -10px;
  background-color: ${({color})=>color};
  border-radius: 50%;
  font-size: 12px;
 `

 export const User  =styled.div`
 display: flex;
 align-items: center;
 margin-left: 25px;
 `
 User.Img  =styled.img`
  width: 50px;
  height: 50px;
  border-radius: 4px;
  margin-right: 10px;
 `  
  User.Name  =styled.h3`
  color: #555;
  font-size: 12px;
  max-width: 95px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  
 `  
  export const Role  =styled.select`
  color: #555;
  font-size: 12px;
  border: 0;
  outline: none;
  font-weight: 600;
 `  