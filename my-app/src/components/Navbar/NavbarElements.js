import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
background-color: #fff;
height: 95px;
width: 100%;
display: flex;
align-items: center;
padding: 0.5rem 0rem;
position: relative;
box-shadow: 0 2px 2px 2px rgba(9, 9, 9, 0.23);
`;

export const NavLink = styled(Link)`
color: #808080;
display: flex;
align-items: center;
text-decoration: none;
padding: 0;
margin: 0 3rem;
@media screen and (max-width: 768px) {
	// centers link text and strips off margin
	text-align: center;
	margin: 0;
  padding: 1rem 0;
}
`;

export const NavMenu = styled.div`
margin-left: auto;
display: flex;
padding: 0;
align-items: center;
text-decoration: none;
@media screen and (max-width: 768px) {
	// navigation menu is positioned to start 60px from the top of the document (which is directly below the navbar)
	position: absolute;
	top: 60px;
	left: 0;
	// stacks the li tags vertically 
	flex-direction: column;
 // makes menu span full height and width
	width: 100%;
	height: calc(100vh - 77px);
	background-color: white;
	border-top: 1px solid black;
}
`;

