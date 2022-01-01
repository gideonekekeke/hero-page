import React, { Component } from "react";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import pic1 from "./img/3.jpg";
import pic2 from "./img/4.jpg";
import pic3 from "./img/5.jpg";
import pic4 from "./img/6.jpg";

const HeroSection = () => {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
	};

	return (
		<Container>
			<Wrapper>
				<Mylider {...settings}>
					<MyStyled>
						<SliderImage src={pic1} />
					</MyStyled>
					<MyStyled>
						<SliderImage src={pic4} />
					</MyStyled>
					<MyStyled>
						<SliderImage src={pic2} />
					</MyStyled>
				</Mylider>
			</Wrapper>
			<TextHold>
				<h2>Study at school and connect to the world</h2>
				<p>
					There are many variations of passages of Lorem Ipsum available, but
					the majority have suffered alteration in some form, by injected
					humour, or randomised words which don't look even slightly believable.
					If you are going to use a passage of Lorem Ipsum, you need to be sure
					there isn't anything embarrassing hidden in the middle of text. All
					the Lorem Ipsum generators on the Internet tend to repeat predefined
					chunks as necessary
				</p>
			</TextHold>
		</Container>
	);
};

export default HeroSection;

const TextHold = styled.div`
	position: absolute;
	display: flex;

	color: white;
	/* width: 100%; */
	margin-left: 150px;
	margin-top: 80px;
	flex-direction: column;

	h2 {
		font-size: 35px;
		/* width: 100%; */
		font-weight: bold;
		width: 34.8ch;
		animation: typing 10s steps(45, end), blink-caret 0.85s step-end infinite;
		animation-iteration-count: infinite;
		white-space: nowrap;
		overflow: hidden;
		border-right: 3px solid;

		@keyframes typing {
			from {
				width: 0;
			}
			@keyframes blink {
				50% {
					border-color: transparent;
				}
			}
		}
	}
	p {
		width: 500px;
		margin: 0;
		margin-top: -20px;
	}

	@media screen and (max-width: 600px) {
		margin: 0;
		margin-left: 10px;
		margin-top: 50px;

		p {
			font-size: 12px;
			width: 300px;
			margin-top: 1px;
			font-weight: lighter;
		}

		h2 {
			font-size: 20px;
			width: 300px;
		}
	}
`;

const Container = styled.div`
	width: 100%;
	height: 400px;
	overflow: hidden;

	/* padding-top: 80px; */
`;
const Mylider = styled(Slider)`
	button {
		/* z-index: 1; */
	}
`;
const MyStyled = styled.div`
	width: 100%;
	height: 500px;
	background-color: rgba(0%, 0%, 0%, 1);
	overflow: hidden;
	color: black;

	@media screen and (max-width: 600px) {
		height: 400px;
	}
`;
const Wrapper = styled.div`
	width: 100%;
	position: absolute;
	overflow: hidden;
`;
const SliderImage = styled.img`
	width: 100%;
	height: 100%;
	opacity: 0.3;

	object-fit: cover;
	background-repeat: no-repeat;
	background-attachment: fixed;
	background-position: center;
`;
