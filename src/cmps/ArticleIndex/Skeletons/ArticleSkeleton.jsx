import React from "react"
import ContentLoader from "react-content-loader"
import {
  ImgContainer,
  RowsContainer,
  SkeletonContainer,
  SkeletonsContainer,
} from "./styles"

export const ArticleSkeleton = () => {
  return (
    <SkeletonsContainer>
      <Skeleton />
      <Skeleton />
      <Skeleton />
      <Skeleton />
      <Skeleton />
    </SkeletonsContainer>
  )
}

const Skeleton = () => {
  return (
    <SkeletonContainer>
      <ImgContainer>
        <ContentLoader
          className="desktop"
          speed={2}
          width={"100%"}
          height="250px"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
        >
          <rect x="0" y="0" rx="20" ry="20" width="100%" height="100%" />
          <rect x="20" y="0" width="100%" height="100%" />
        </ContentLoader>

        <ContentLoader
          className="mobile"
          speed={2}
          width={"100%"}
          height="250px"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
        >
          <rect x="0" y="0" rx="20" ry="20" width="100%" height="100%" />
          <rect x="0" y="20" width="100%" height="100%" />
        </ContentLoader>
      </ImgContainer>

      <RowsContainer>
        <ContentLoader
          speed={2}
          width={"100%"}
          height="250px"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
        >
          <rect x="0" y="20" rx="5" ry="5" width="150" height="22" />
          <rect x="0" y="72" rx="5" ry="5" width="100%" height="22" />
          <rect x="0" y="124" rx="5" ry="5" width="150" height="22" />
          <rect x="0" y="176" rx="5" ry="5" width="50%" height="22" />
        </ContentLoader>
      </RowsContainer>
    </SkeletonContainer>
  )
}
