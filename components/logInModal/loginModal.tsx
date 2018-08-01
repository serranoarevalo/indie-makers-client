import styled from "../../typed-components";
import Card from "../card";
import Button from "../button";
import { lighten } from "../../node_modules/polished";

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Title = styled.h3`
  font-size: 28px;
  margin-bottom: 40px;
`;

const LoginButton = styled(Button)`
  background-color: rgb(69, 104, 178);
  color: white;
  &:hover {
    background-color: ${lighten(0.1, "rgb(69, 104, 178)")};
  }
`;

const Text = styled.span`
  display: flex;
  align-items: center;
  svg {
    margin-right: 10px;
  }
`;

const LoginModal: React.SFC = () => (
  <Card padding={"40px"}>
    <Container>
      <Title>Login to Indie Makers</Title>
      <LoginButton
        shadowColor={"rgb(69, 104, 178, 0.5)"}
        accent={false}
        text={
          <Text>
            <svg
              viewBox="0 0 32 32"
              role="presentation"
              aria-hidden="true"
              focusable="false"
              style={{
                height: "18px",
                width: "18px",
                display: "block",
                fill: "currentcolor"
              }}
            >
              <path
                d="m8 14.41v-4.17c0-.42.35-.81.77-.81h2.52v-2.08c0-4.84 2.48-7.31 7.42-7.35 1.65 0 3.22.21 4.69.64.46.14.63.42.6.88l-.56 4.06c-.04.18-.14.35-.32.53-.21.11-.42.18-.63.14-.88-.25-1.78-.35-2.8-.35-1.4 0-1.61.28-1.61 1.73v1.8h4.52c.42 0 .81.42.81.88l-.35 4.17c0 .42-.35.71-.77.71h-4.21v16c0 .42-.35.81-.77.81h-5.21c-.42 0-.8-.39-.8-.81v-16h-2.52a.78.78 0 0 1 -.78-.78"
                fill-rule="evenodd"
              />
            </svg>
            Continue with Facebook
          </Text>
        }
      />
    </Container>
  </Card>
);

export default LoginModal;
