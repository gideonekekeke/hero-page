import React, { useState } from "react";
import styled from "styled-components";
import { CgMenu } from "react-icons/cg";
import { ImCancelCircle } from "react-icons/im";
import { AiFillHome } from "react-icons/ai";
import { FaSwatchbook } from "react-icons/fa";
import { FaSchool } from "react-icons/fa";
import { MdSchool } from "react-icons/md";
import { MdContacts } from "react-icons/md";
import { Link } from "react-router-dom";

const HeaderComponent = () => {
	const [show, setShow] = useState(false);
	const handleShow = () => {
		setShow(!show);
	};

	return (
		<>
			<Container>
				<Logo>
					<FaSchool style={{ fontSize: "19px" }} />
					<span>School</span>
				</Logo>

				<Wrapper>
					<a>
						<AiFillHome style={{ fontSize: "19px" }} />
						<span>Home</span>
					</a>
					<a>
						<FaSwatchbook style={{ fontSize: "19px" }} />
						<span>About</span>
					</a>
					<a>
						<MdSchool style={{ fontSize: "19px" }} />
						<span>Admission</span>
					</a>
					<a>
						<MdContacts style={{ fontSize: "19px" }} />
						<span>Contact</span>
					</a>
				</Wrapper>

				{show ? <Menu2 onClick={handleShow} /> : <Menu onClick={handleShow} />}
			</Container>

			{show ? (
				<>
					<MainSide>
						<SubMenu
							onClick={() => {
								setShow(!show);
							}}>
							<Logo>
								<FaSchool style={{ fontSize: "19px" }} />
								<span>School</span>
							</Logo>
							<a>
								<AiFillHome style={{ fontSize: "19px" }} />
								<span>Home</span>
							</a>

							<a>
								<FaSwatchbook style={{ fontSize: "19px" }} />
								<span>About</span>
							</a>
							<a>
								<MdSchool style={{ fontSize: "19px" }} />
								<span>Admission</span>
							</a>

							<a>
								<MdContacts style={{ fontSize: "19px" }} />
								<span>Contact</span>
							</a>
						</SubMenu>
					</MainSide>
				</>
			) : null}
		</>
	);
};

export default HeaderComponent;

const MainSide = styled.div`
	width: 100%;
	background: rgba(0%, 0%, 0%, 0.5);
	z-index: 1;
	height: 100vh;
	position: fixed;
	top: 0;
`;

const SubUser = styled.div`
	display: flex;
	height: 100px;
	justify-content: space-between;
	align-items: center;
	padding: 0px 30px;

	img {
		width: 50px;
		height: 50px;
		border-radius: 25px;
		object-fit: cover;
		border: 2px solid white;
	}

	span {
		font-size: 15px;
		font-weight: bold;
	}
`;

const SubMenu = styled.div`
	display: none;
	z-index: 1000;
	@media screen and (max-width: 786px) {
		width: 250px;
		height: 100vh;
		background-color: #00243a;
		/* float: right; */
		border-radius: 0 0 0px 10px;
		display: flex;
		flex-direction: column;
		padding-left: 20px;
		position: fixed;
		color: white;
		z-index: 1000;
		padding-top: 50px;
		padding-left: 50px;
		a {
			width: 100%;
			height: 40px;
			display: flex;
			align-items: center;
			margin-top: 30px;

			img {
				width: 30px;
				height: 30px;
				object-fit: 15px;
				opacity: 0.4;
				transition: all 350ms;
			}

			span {
				margin-left: 30px;
				text-transform: uppercase;
				font-weight: bold;
				color: rgba(249, 249, 249, 0.6);
			}

			&:hover {
				cursor: pointer;
				span {
					color: white;
				}
				img {
					opacity: 1;
				}
			}
		}
	}
`;

const Menu2 = styled(ImCancelCircle)`
	display: none;

	@media screen and (max-width: 768px) {
		display: block;
		font-size: 30px;
		padding-right: 30px;
		cursor: pointer;
		color: white;
		z-index: 1000;
	}
`;
const Menu = styled(CgMenu)`
	display: none;

	@media screen and (max-width: 768px) {
		display: block;
		font-size: 30px;
		padding-right: 30px;
		cursor: pointer;
		color: white;
	}
`;

const Container = styled.div`
	width: 100%;
	height: 70px;
	background-color: #00243a;
	display: flex;
	align-items: center;
	justify-content: space-between;

	@media screen and (max-width: 768px) {
		display: flex;
		width: 100vw;
		justify-content: space-between;
	}
`;

const Logo = styled.div`
	width: 100px;
	height: 40px;
	object-fit: contain;
	cursor: pointer;
	margin-left: 30px;
	color: white;
	flex-direction: column;
	display: flex;
	align-items: center;
`;

const Wrapper = styled.div`
display: flex;
align-items: center;
height: 100%; 
cursor: pointer;
/* margin-left: 20px; */
margin-right: 150px;

color : white;


a{
  display: flex;
  align-items: center;
  height: 100%; 
  position: relative;
  margin-left: 30px;

  img{
    width: 20px;
    height: 20px;
    object-fit: cover;
    
  }

  span{
    font-weight: bold;
    text-transform: uppercase;
    font-size: 13px;
    letter-spacing: 1.1px
    position: relative;
    opacity: 0.6;


    &:after{
      content:"";
      position: absolute;
      height: 2px;
      background-color: white;
      right: 0;
      left: 20px;
      bottom: 20px;
      opacity: 0;
      transform: scaleX(1);
      transform-origin: center left;
      transition: all 350ms cubic-bezier(0.34, 0.44, 0.96, 0.47) 0s;
    }
  }

  &:hover{
    span{
      opacity: 1;
    }
    span:after {
      opacity: 1;
      transform: scaleX(1.06)
    }
  }
}

@media screen and (max-width: 768px){
  display: none;
}
`;

const UserAvatar = styled.div`
	width: 50px;
	height: 70px;
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: 15px;
	padding-right: 30px;
	cursor: pointer;

	img {
		width: 40px;
		height: 40px;
		object-fit: cover;
		border-radius: 25px;
	}

	span {
		font-size: 10px;
		font-weight: bold;
		opacity: 0;
		transition: all 350ms;
	}

	&:hover {
		span {
			opacity: 1;
		}
	}

	@media screen and (max-width: 768px) {
		display: none;
	}
`;
