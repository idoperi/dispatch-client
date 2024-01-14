import {
  ButtonClear,
  ButtonRemove,
  LowerSection,
  Modal,
  RecentSearchLine,
  Text,
  Title,
  UpperSection,
} from "./styles"

export const RecentSearchesModal = ({
  recentSearches,
  onRecentSearchClicked,
  onRemoveRecentSearch,
  onClearRecentSearches,
}) => {
  return (
    <Modal>
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
    </Modal>
  )
}
