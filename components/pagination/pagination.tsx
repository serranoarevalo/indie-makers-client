import PropTypes from "prop-types";
import styled from "../../typed-components";

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  font-size: 18px;
  font-weight: 600;
  align-items: center;
`;

const Btn = styled.span`
  font-size: 25px;
  cursor: pointer;
  &:first-child {
    margin-right: 20px;
  }
  &:last-child {
    margin-left: 20px;
  }
`;

const Page = styled.span``;

const Divider = styled.span`
  margin: 0px 10px;
`;

interface IProps {
  currentPage: number;
  totalPages: number;
  onNext?: () => void;
  onPrevious?: () => void;
}

const Pagination: React.SFC<IProps> = ({ currentPage, totalPages }) => (
  <Container>
    <Btn>👈🏻</Btn>
    <Page>{currentPage}</Page>
    <Divider>/</Divider>
    <Page>{totalPages}</Page>
    <Btn>👉🏻</Btn>
  </Container>
);

Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  onNext: PropTypes.func,
  onPrevious: PropTypes.func
};

export default Pagination;
