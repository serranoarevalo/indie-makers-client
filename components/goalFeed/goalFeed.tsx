import React from "react";
import Link from "next/link";
import LazyLoad from "react-lazyload";
import styled from "../../typed-components";
import GoalText from "../goalText";
import routes from "../../routes";
import ImagePlaceholder from "../../components/imagePlaceholder";

const Goal = styled.div`
  margin-bottom: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  &:last-child {
    margin-bottom: 0;
  }
  @media (max-width: 500px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const PhotoContainers = styled.div`
  display: flex;
  align-items: center;
`;

const ProductContainer = styled.div`
  margin-left: 10px;
  display: flex;
  align-items: center;
`;

const Photo = styled<any, any>("div")`
  background-image: url(${props => props.src});
  background-size: cover;
  background-position: center center;
  width: 35px;
  height: 35px;
  border-radius: 50%;
`;

interface IProps {
  goal: any;
}

const GoalFeed: React.SFC<IProps> = ({ goal }) => (
  <Goal key={goal.id}>
    <GoalText
      goalId={goal.id}
      key={goal.id}
      lineThrough={false}
      isCompleted={goal.isCompleted}
      text={goal.text}
      productName={goal.product!.name}
      productSlug={goal.product!.slug}
      timeStamp={goal.completedAt || goal.createdAt}
    />
    <PhotoContainers>
      <Link
        prefetch
        href={routes.userDetail(goal.maker!.username || "")}
        as={routes.asUserDetail(goal.maker!.username || "")}
      >
        <a
          style={{ height: "35px", marginRight: "10px" }}
          aria-label={goal.maker.username}
        >
          <LazyLoad height={35} once>
            <Photo
              alt={(goal.maker && goal.maker.username) || "Profile"}
              src={(goal.maker && goal.maker.profilePhoto) || ""}
            />
          </LazyLoad>
        </a>
      </Link>
      👉🏻
      <Link
        prefetch
        href={routes.productDetail(goal.product!.slug || "")}
        as={routes.asProductDetail(goal.product!.slug || "")}
      >
        <a aria-label={goal.product.name}>
          <LazyLoad height={35} once>
            {goal && goal.product && goal.product.logo ? (
              <ProductContainer>
                <Photo src={(goal.product && goal.product.logo) || ""} />
              </ProductContainer>
            ) : (
              <ProductContainer>
                <ImagePlaceholder letter={goal.product.name[0]} size={35} />
              </ProductContainer>
            )}
          </LazyLoad>
        </a>
      </Link>
    </PhotoContainers>
  </Goal>
);
export default GoalFeed;
