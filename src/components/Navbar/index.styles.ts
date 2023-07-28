import styled from "styled-components";

export const NavbarContainer = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 0px;
    padding-bottom: 10px;
    position: relative;
`;

export const BackgroundLogo = styled.div`
    position: absolute;
    left: -194px;
    top: 0;
    width: 15%;
    height: 91%;
    background: #000;
`;

export const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${(props) => props.theme.black};
    padding: 1rem;
    color: ${(props) => props.theme.white};

    &:hover {
        cursor: pointer;
    }
`;

export const MenuListWrapper = styled.div`
    width: 433px;
    height: 33px;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 26px;
    display: inline-flex;
`;

interface MenuListIsActive {
    isActive: boolean;
}

export const MenuList = styled.div<MenuListIsActive>`
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 6px;
    padding-bottom: 6px;
    border-bottom: 3px
        ${(props) => (props.isActive ? props.theme.red300 : props.theme.white)}
        solid;
    justify-content: center;
    align-items: center;
    gap: 10px;
    display: flex;

    &:hover {
        opacity: 0.8;
        cursor: pointer;
    }
`;

export const BuyMeaCoffee = styled.button`
    background-color: ${(props) => props.theme.yellow300};
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    border: 2px solid ${(props) => props.theme.yellow300};
    border-radius: 9rem;
    padding: 12px 18px 12px 18px;

    &:hover {
        opacity: 0.6;
        cursor: pointer;
    }
`;

export const CoffeeImage = styled.img`
    width: 22px;
`;
