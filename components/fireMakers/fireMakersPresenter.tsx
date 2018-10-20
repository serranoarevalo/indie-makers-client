import styled from "../../typed-components";
import routes from "../../routes";
import Section from "../section";
import Title from "../title";
import SmallDetailCard from "../smallDetailCard";
import { fireMakers } from "types/api";

const Container = styled.div`
  display: grid;
  & > a:not(:last-child) {
    margin-bottom: 30px;
  }
`;

interface IProps {
  data?: fireMakers;
}

const FireMakers: React.SFC<IProps> = ({
  data: { FilterUsers: { makers = [] } = {} } = {}
}) =>
  makers && makers.length > 0 ? (
    <Section titleElements={<Title>Makers on 🔥</Title>}>
      <Container>
        {makers &&
          makers.map(
            maker =>
              maker && (
                <SmallDetailCard
                  key={maker.id}
                  icon={maker.profilePhoto}
                  title={maker.fullName}
                  subtitle={maker.username || ""}
                  streakNumber={maker.streak}
                  isLink={true}
                  link={routes.userDetail(maker.username!)}
                  linkAs={routes.asUserDetail(maker.username!)}
                  isCard={true}
                />
              )
          )}
      </Container>
    </Section>
  ) : null;
export default FireMakers;
