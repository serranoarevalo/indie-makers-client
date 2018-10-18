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

const EInput = styled(Input)`
  margin-bottom: 30px;
`;

const EForm = styled(Form)`
  margin-bottom: 50px;
`;

const Label = styled.label`
  font-weight: 600;
  display: block;
  margin-bottom: 15px;
  cursor: pointer;
`;

const ECard = styled(Card)`
  margin-bottom: 50px;
`;

interface IProps {
  bio?: string | null;
  username?: string | null;
  homepage?: string | null;
  handleInputChange: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  handleSubmit: () => void;
}

const EditProfilePresenter: React.SFC<IProps> = ({
  bio = "",
  username = "",
  homepage = "",
  handleInputChange,
  handleSubmit
}) => (
  <>
    <Head>
      <title>Edit Profile | Indie Makers</title>
    </Head>
    <Wrapper>
      <Container>
        <ETitle>Edit Profile</ETitle>
        <ECard>
          <EForm onSubmit={handleSubmit}>
            <Label htmlFor={"username"}>Username</Label>
            <EInput
              name={"username"}
              value={username || ""}
              onChange={handleInputChange}
              placeholder={"Username"}
              required={true}
              type={"text"}
              id={"username"}
            />
            <Label htmlFor={"homepage"}>Homepage (no http://)</Label>
            <EInput
              name={"homepage"}
              value={homepage || ""}
              onChange={handleInputChange}
              placeholder={"Where can people contact you?"}
              required={true}
              type={"url"}
              id={"homepage"}
            />
            <Label htmlFor={"bio"}>Bio</Label>
            <TextArea
              id={"bio"}
              value={bio || ""}
              name={"bio"}
              placeholder={"Who are you?"}
              required={false}
              onChange={handleInputChange}
            />
          </EForm>
        </ECard>
        <Button onClick={handleSubmit} text={"Save Profile"} />
      </Container>
    </Wrapper>
  </>
);
export default EditProfilePresenter;
