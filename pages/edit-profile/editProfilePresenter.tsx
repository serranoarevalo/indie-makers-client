import React from "react";
import Head from "next/head";
import styled from "../../typed-components";
import Wrapper from "../../components/wrapper";
import Card from "../../components/card";
import Input from "../../components/input";
import Title from "../../components/title";
import Form from "../../components/form";
import Button from "../../components/button";
import TextArea from "../../components/textArea";

const Container = styled.div`
  max-width: 500px;
  margin: 80px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ETitle = styled(Title)`
  margin-bottom: 20px;
`;

interface IProps {
  bio?: string | null;
  username?: string | null;
  homepage?: string | null;
}

const EditProfilePresenter: React.SFC<IProps> = ({
  bio = "",
  username = "",
  homepage = ""
}) => (
  <>
    <Head>
      <title>Edit Profile | Indie Makers</title>
    </Head>
    <Wrapper>
      <Container>
        <ETitle>Edit Profile</ETitle>
        <Card>
          <Form>
            <Input
              value={bio || ""}
              name={"bio"}
              placeholder={"Bio"}
              type={"text"}
            />
          </Form>
        </Card>
      </Container>
    </Wrapper>
  </>
);
export default EditProfilePresenter;
