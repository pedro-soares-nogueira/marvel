import { styled } from "styled-components";
import { motion } from "framer-motion";

export const CarouselHeroWrapper = styled.div``;

export const CarouselHeroImageWhapper = styled(motion.div)`
  display: flex;
  gap: 4px;
`;

export const CarouselImage = styled.img`
  width: 12rem;
  object-fit: none;
  border-radius: 10px;
  pointer-events: none;
`;

export const CarouselWrapper = styled(motion.div)`
  cursor: grab;
  overflow: hidden;
  max-width: 474px;
  width: 100%;
`;
