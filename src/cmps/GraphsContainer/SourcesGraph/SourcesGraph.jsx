import { utilService } from "../../../services/util.service"
import { Doughnut } from "react-chartjs-2"
import {
  DoughnutContainer,
  DoughnutTitle,
  GraphContainer,
  LabelList,
  LabelPreview,
  SeparateLine,
  Title,
  TopContainer,
} from "./styles"

export function SourcesGraph({ articles }) {
  const sourceLabels = articles.map((article) => article.source.name)
  const sourceCount = sourceLabels.reduce((acc, source) => {
    acc[source] = (acc[source] || 0) + 1
    return acc
  }, {})

  const totalArticles = sourceLabels.length
  const percentages = Object.values(sourceCount).map(
    (count) => (count / totalArticles) * 100
  )

  const colors = utilService.generateColorsArray(
    Object.values(sourceCount).length
  )

  const data = {
    datasets: [
      {
        data: Object.values(sourceCount),
        backgroundColor: colors,
        borderWidth: 0,
        cutout: "88%",
      },
    ],
  }

  const options = {
    aspectRatio: 1, // Set the aspect ratio to 1 for a perfect circle, adjust as needed
    plugins: {
      legend: {
        display: false,
      },
    },
  }

  const labelsWithColors = Object.keys(sourceCount).map((source, index) => ({
    label: source,
    color: colors[index],
  }))

  return (
    <GraphContainer>
      <TopContainer>
        <Title>Sources</Title>
        <SeparateLine />
      </TopContainer>

      <DoughnutContainer>
        <Doughnut data={data} options={options} />
        <DoughnutTitle>Sum</DoughnutTitle>
      </DoughnutContainer>

      <LabelList>
        {labelsWithColors.map((item, index) => (
          <LabelPreview key={index} color={item.color}>
            <div className="dot"></div>
            <p className="label-name">{item.label}</p>
            <span className="percentages">{percentages[index]}%</span>
          </LabelPreview>
        ))}
      </LabelList>
    </GraphContainer>
  )
}
