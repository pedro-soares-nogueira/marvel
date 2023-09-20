import { styled } from "styled-components";
import { Button } from "../../sections/Hero/index.styles";

export const CarouselHeroWrapper = styled.div`
  margin: 4rem 0rem;
`;

export const ComicCard = styled.div`
  width: 100%;
  max-width: 15rem;
  flex: none;
  border: 1px solid #000;
  margin: 0 auto;
  position: relative;
`;

export const ComicCardHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 16px;
  font-weight: 800;
  margin: 14px;
`;

export const ComicImage = styled.img`
  width: 100%;
  background-color: #ccc;
  display: block;
  height: 15rem;
  margin: 1rem 0rem 0rem;
  object-fit: cover;
`;

export const ComicName = styled.span`
  display: block;
  text-align: center;
  font-size: 20px;
  background-color: ${(props) => props.theme.black};
  color: #fff;
  padding: 16px 12px 26px;

  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const ComicCardButton = styled(Button)`
  position: absolute;
  bottom: -5%;
  left: 50%;
  transform: translateX(-50%);
  background-color: ${(props) => props.theme.white};
  color: ${(props) => props.theme.black};
  text-transform: uppercase;
  border: 1px solid ${(props) => props.theme.black};
  border-radius: 0 !important;
`;
