import Link from "next/link";
import PropTypes from "prop-types";
import styled from "../../typed-components";

const Container = styled<{ selected: boolean }, any>("div")`
  background-color: ${props =>
    props.selected ? props.theme.blackColor : props.theme.greyColor};
  min-width: 80px;
  text-align: center;
  padding: 7px 20px;
  border-radius: 50px;
  cursor: pointer;
  color: white;
`;

interface IProps {
  text: string;
  selected?: boolean;
  link: string;
  linkAs?: string;
}

const Tab: React.SFC<IProps> = ({
  selected = false,
  text,
  link,
  linkAs = link
}) => (
  <Link href={link} as={linkAs}>
    <a>
      <Container selected={selected}>{text}</Container>
    </a>
  </Link>
);

Tab.propTypes = {
  text: PropTypes.string.isRequired,
  selected: PropTypes.bool,
  link: PropTypes.string.isRequired,
  linkAs: PropTypes.string
};

export default Tab;
