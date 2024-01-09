import {
  ButtonClear,
  ButtonRemove,
  LowerSection,
  RecentSearchLine,
  StyledRecentSearches,
  Text,
  Title,
  UpperSection,
} from "./styles"

export const MobileRecentSearches = ({
  recentSearches,
  onRecentSearchClicked,
  onRemoveRecentSearch,
  onClearRecentSearches,
}) => {
  return (
    <StyledRecentSearches>
      <UpperSection>
        <Title>recent searches</Title>
        <ButtonClear onClick={onClearRecentSearches}>clear</ButtonClear>
      </UpperSection>

      <LowerSection>
        {recentSearches.map((recentSearch, idx) => (
          <RecentSearchLine key={idx}>
            <Text onClick={() => onRecentSearchClicked(recentSearch)}>
              {recentSearch}
            </Text>
            <ButtonRemove onClick={() => onRemoveRecentSearch(idx)} />
          </RecentSearchLine>
        ))}
      </LowerSection>
    </StyledRecentSearches>
  )
}
