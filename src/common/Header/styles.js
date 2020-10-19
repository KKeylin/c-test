import styled from 'styled-components'

export const StyledHeader = styled.header`
  background-color: #D60000;
  display: flex;
  align-items: center;
  justify-content: initial;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  height: 48px;
  z-index: 9;
`
export const StyledImg = styled.img`
  height: 48px;
`

export const StyledUl = styled.ul`
  background-color: #D60000;
  display: inline-flex;
  align-items: center;
  justify-content: initial;
`

export const StyledLi = styled.li`
  text-transform: uppercase;
  font-size: 14px;
  line-height: 24px;
  display: block;
  padding: calc(1 * 1/2 * ( 2*24px - 24px) ) 14px;
  transition: 0.2s;
  
  &:hover {
    background: #ab0000;
  }  
  
  a {
    color: #fff;
    text-decoration: none;
  }    
`
