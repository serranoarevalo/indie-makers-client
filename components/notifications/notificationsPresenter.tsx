import React from "react";
import { getNotifications } from "types/api";
import styled, { keyframes } from "../../typed-components";
import Card from "../card";
import Notification from "../notification";

const IconContainer = styled.span`
  cursor: pointer;
  position: relative;
`;

const IconNumber = styled.div`
  position: absolute;
  right: -10px;
  top: -10px;
  background-color: ${props => props.theme.redColor};
  color: white;
  width: 20px;
  justify-content: center;
  height: 20px;
  border-radius: 10px;
  font-size: 12px;
  display: flex;
  align-items: center;
`;

interface IIConProps {
  number?: number;
  onClick?: (any) => void;
}

const Icon: React.SFC<IIConProps> = ({ number = 0, onClick }) => (
  <IconContainer onClick={onClick ? () => onClick!(number) : (null as any)}>
    {number > 0 && <IconNumber>{number}</IconNumber>}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <path d="M15 21c0 1.598-1.392 3-2.971 3s-3.029-1.402-3.029-3h6zm.137-17.055c-.644-.374-1.042-1.07-1.041-1.82v-.003c.001-1.172-.938-2.122-2.096-2.122s-2.097.95-2.097 2.122v.003c.001.751-.396 1.446-1.041 1.82-4.668 2.709-1.985 11.715-6.862 13.306v1.749h20v-1.749c-4.877-1.591-2.193-10.598-6.863-13.306zm-3.137-2.945c.552 0 1 .449 1 1 0 .552-.448 1-1 1s-1-.448-1-1c0-.551.448-1 1-1zm-6.451 16c1.189-1.667 1.605-3.891 1.964-5.815.447-2.39.869-4.648 2.354-5.509 1.38-.801 2.956-.76 4.267 0 1.485.861 1.907 3.119 2.354 5.509.359 1.924.775 4.148 1.964 5.815h-12.903z" />
    </svg>
  </IconContainer>
);

const RelativeContainer = styled.div`
  position: relative;
`;

const fadeIn = keyframes`
  from{
    opacity:0;
    transform:translateY(10px)
  }
  to {
    opacity:1;
    transform:none;
  }
`;

const NotificationsContainer = styled(Card)`
  position: absolute;
  width: 300px;
  top: 40px;
  left: -280px;
  animation: ${fadeIn} 0.2s ease-in-out;
  padding: 0;
  overflow: hidden;
  max-height: 500px;
  overflow: scroll;
`;

interface IProps {
  loading: boolean;
  isOpen: boolean;
  data: getNotifications | undefined;
  toggleOpen: (notifNumber: number) => void;
}

const NotificationsPresenter: React.SFC<IProps> = ({
  loading,
  isOpen,
  data,
  toggleOpen
}) =>
  !loading && data ? (
    <RelativeContainer>
      <Icon number={data.GetNotifications.unseen || 0} onClick={toggleOpen} />
      {isOpen &&
        data.GetNotifications.notifications &&
        data.GetNotifications.notifications.length > 0 && (
          <NotificationsContainer>
            {data.GetNotifications.notifications.map(notification => {
              if (notification) {
                try {
                  const product = JSON.parse(notification.object);
                  const formattedUsername = notification.actor.replace(
                    /\-/g,
                    "."
                  );
                  return (
                    <Notification
                      key={notification.id}
                      username={formattedUsername}
                      verb={notification.verb}
                      productName={product.title}
                      productSlug={product.slug}
                      isSeen={notification.isSeen}
                    />
                  );
                } catch (error) {
                  return;
                }
              }
              return;
            })}
          </NotificationsContainer>
        )}
    </RelativeContainer>
  ) : (
    <Icon />
  );

export default NotificationsPresenter;
