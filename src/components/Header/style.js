import styled from "styled-components";
import { ReactComponent as search } from '../../assets/icons/search.svg'
import { ReactComponent as plus } from '../../assets/icons/plus.svg'

export const Icons = styled.div`
`
Icons.Search = styled(search)`
cursor: pointer;
width: 18px;
height: 18px;
color: #fff;
`
Icons.Plus = styled(plus)`
cursor: pointer;
width: 20px;
height: 20px;
color: #1d1534;
`
export const Box = styled.div`
 width: 40px;
 /* height: 100%; */
 border: 1px solid #ccc;
 display: flex;
 align-items: center;
 justify-content: center;
 border-radius: 0 6px 6px 0;
 background-color: rgb(29 21 52);
 cursor: pointer;
`
export const Container = styled.div`
 box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
 background-color: #fff;
 border-radius: 4px;
 padding: 10px 20px;
 display: flex;
 align-items: center;
 justify-content: space-between;
`
Container.Category = styled.div`
display: flex;
align-items: center;
`
Container.Title = styled.div`
 font-size: 18px;
 font-weight: 600;
 color: #1d1534;
 width: 140px;
 overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  /* background-color: red; */
`
export const Filter = styled.div`
  display: flex;
  /* align-items: center; */
`
Filter.Input = styled.input`
 width: 150px;
 outline: none;
 border: 1px solid #ccc;
 padding: 7px;
 border-radius: 4px 0 0 4px;
 margin-left: 10px;
`
export const Button =styled.div`
 padding: 8px 15px;
 border-radius: 20px;
 font-size: 14px;
 font-weight: 500;
 color: #1d1534;
 background-color: rgb(239, 243, 249);
 box-shadow: rgba(0, 0, 0, 0.15) 0px 3px 3px 0px; cursor: pointer;
 opacity: 0.8;
 user-select: none;
 display: flex;
 align-items: center;
 :active{
    opacity: 0.6;
    box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 4px 0px inset;
 }
`