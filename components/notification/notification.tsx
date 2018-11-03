import React from "react";
import Link from "next/link";
import styled from "../../typed-components";
import routes from "../../routes";

const Wrapper = styled<{ isSeen: boolean }, any>("div")`
  border-bottom: 1px solid ${props => props.theme.darkBlueColor};
  border-left: ${props =>
    props.isSeen ? "0" : `2px solid ${props.theme.redColor}`};
`;

const Container = styled.div`
  padding: 15px;
  cursor: pointer;
  &:last-child {
    border: none;
  }
  &:hover {
    background-color: ${props => props.theme.darkBlueColor};
  }
`;

const Content = styled.span``;

const Bold = styled.span`
  font-weight: 600;
`;

interface IProps {
  username: string;
  verb: string;
  productName: string;
  productSlug: string;
  isSeen: boolean;
}

const Notification: React.SFC<IProps> = ({
  username,
  verb,
  productName,
  productSlug,
  isSeen
}) => (
  <Wrapper isSeen={true}>
    <Link
      href={routes.productDetail(productSlug)}
      as={routes.asProductDetail(productSlug)}
    >
      <a>
        <Container>
          <Content>
            <Bold>{username}</Bold>{" "}
            {verb === "clap" ? "clapped on" : "commented in"}{" "}
            <Bold>{productName}</Bold>
          </Content>
        </Container>
      </a>
    </Link>
  </Wrapper>
);
export default Notification;
