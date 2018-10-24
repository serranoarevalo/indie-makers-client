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

const EForm = styled(Form)`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const EInput = styled(Input)`
  &:not(:last-child) {
    margin-bottom: 30px;
  }
`;

const FormInputs = styled.div`
  margin-bottom: 20px;
`;

const UploadedImage = styled.img`
  height: 60px;
  width: 60px;
  border-radius: 50%;
  border: 2px ${props => props.theme.blackColor} dashed;
`;

const Label = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 25px;
  & ${UploadedImage} {
    margin-bottom: 10px;
  }
  color: ${props => props.theme.greyColor};
`;

const FileInput = styled.input`
  display: none;
`;

interface IProps {
  logoUrl?: string;
  name: string;
  description: string;
  website: string;
  needsHelp: boolean;
  isUploading: boolean;
  handleInputChange: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  handleSubmit: () => void;
  handleImageUpload: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  title: string;
  buttonText: string;
  handleCheckbox: () => void;
}

const ProductEditorPresenter: React.SFC<IProps> = ({
  logoUrl,
  name,
  description,
  website,
  needsHelp,
  isUploading,
  handleInputChange,
  handleSubmit,
  handleImageUpload,
  title,
  buttonText,
  handleCheckbox
}) => (
  <Wrapper>
    <Head>
      <title>Add Product | Indie Maker</title>
    </Head>
    <Container>
      <ETitle>{title}</ETitle>
      <Card>
        <EForm onSubmit={handleSubmit}>
          <Label htmlFor="file">
            <UploadedImage
              alt={"Add a photo"}
              src={logoUrl || "/static/photoPlaceholder.jpg"}
            />
            (not required)
          </Label>
          <FileInput
            id={"file"}
            type={"file"}
            accept={"image/*"}
            onChange={handleImageUpload}
          />
          <FormInputs>
            <EInput
              required={true}
              type={"text"}
              name={"name"}
              placeholder={"Name *"}
              value={name}
              onChange={handleInputChange}
            />
            <TextArea
              required={true}
              name={"description"}
              placeholder={"What is it about? * (140 max)"}
              value={description}
              onChange={handleInputChange}
              maxLength={140}
              marginBottom={"30px"}
            />
            <EInput
              required={true}
              type={"url"}
              name={"website"}
              placeholder={"Website"}
              value={website}
              onChange={handleInputChange}
            />
            <input
              onChange={handleCheckbox}
              id={"help"}
              type={"checkbox"}
              name={"needsHelp"}
              checked={needsHelp}
            />
            <label htmlFor="help">I need help to finish this</label>
          </FormInputs>
          {isUploading && "Uploading photo"}
          <Button text={buttonText} onClick={handleSubmit} accent={true} />
        </EForm>
      </Card>
    </Container>
  </Wrapper>
);

export default ProductEditorPresenter;
