import React from "react";
import Head from "next/head";
import styled from "../../typed-components";
import routes from "../../routes";
import Wrapper from "../../components/wrapper";
import Tabs from "../../components/tabs";
import Tab from "../../components/tab";
import Pagination from "../../components/pagination";
import SmallDetailCard from "../../components/smallDetailCard";
import { filterMakers } from "types/api";

const MakersGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
  grid-gap: 50px;
`;

interface IProps {
  tab: "UPDATED" | "FIRE" | "SHIPPED";
  page: number;
  data?: filterMakers;
}

const MakersPresenter: React.SFC<IProps> = ({
  tab,
  data: { FilterUsers: { makers = [], totalPages = 0 } = {} } = {},
  page
}) => (
  <Wrapper>
    <Head>
      <title>Makers | Indie Makers</title>
    </Head>
    <Tabs>
      <Tab
        link={routes.makers}
        text={"More Active"}
        selected={tab === "FIRE"}
      />
      <Tab
        link={routes.makersFn(0, "SHIPPED")}
        linkAs={routes.asMakersFn(0, "SHIPPED")}
        text={"Serial Makers"}
        selected={tab === "SHIPPED"}
      />
      <Tab
        link={routes.makersFn(0, "UPDATED")}
        linkAs={routes.asMakersFn(0, "UPDATED")}
        text={"All"}
        selected={tab === "UPDATED"}
      />
    </Tabs>
    <MakersGrid>
      {makers &&
        makers.map(
          maker =>
            maker && (
              <SmallDetailCard
                icon={maker.profilePhoto}
                title={maker.fullName}
                subtitle={maker.username || ""}
                streakNumber={maker.streak}
                launchedNumber={maker.launchedProductCount}
                isLink={true}
                link={routes.userDetail(maker.username || "")}
                linkAs={routes.asUserDetail(maker.username || "")}
                isCard={true}
              />
            )
        )}
      {makers &&
        makers.length === 0 && (
          <h1 className={"thickText"}>There are no makers to show now.</h1>
        )}
    </MakersGrid>
    {makers &&
      makers.length !== 0 && (
        <Pagination
          hasNext={page > totalPages}
          currentPage={`${page + 1}`}
          totalPages={`${totalPages + 1}`}
          previousLink={routes.makersFn(page - 1, tab)}
          nextLink={routes.makersFn(page + 1, tab)}
          asPreviousLink={routes.asMakersFn(page - 1, tab)}
          asNextLink={routes.asMakersFn(page + 1, tab)}
          hasPrevious={page !== 0}
        />
      )}
  </Wrapper>
);

export default MakersPresenter;
