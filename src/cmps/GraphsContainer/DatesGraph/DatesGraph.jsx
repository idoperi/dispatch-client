import { useRef } from "react"
import { Line } from "react-chartjs-2"

export const DatesGraph = ({ articles }) => {
  const uniqueMonths = Array.from(
    new Set(
      articles.map((article) =>
        new Date(article.publishedAt).toLocaleString("default", {
          month: "short",
        })
      )
    )
  )

  const sortedMonths = uniqueMonths.sort((a, b) => {
    const monthToIndex = {
      Jan: 0,
      Feb: 1,
      Mar: 2,
      Apr: 3,
      May: 4,
      Jun: 5,
      Jul: 6,
      Aug: 7,
      Sep: 8,
      Oct: 9,
      Nov: 10,
      Dec: 11,
    }
    return monthToIndex[a] - monthToIndex[b]
  })

  const articlesCountByMonth = {}
  articles.forEach((article) => {
    const month = new Date(article.publishedAt).toLocaleString("default", {
      month: "short",
    })
    articlesCountByMonth[month] = (articlesCountByMonth[month] || 0) + 1
  })

  const labels = sortedMonths

  const data = {
    labels: labels.map((label) => label.toUpperCase()),
    datasets: [
      {
        data: labels.map((month) => articlesCountByMonth[month] || 0),
        borderColor: "#0058B9",
        pointRadius: 0,
        cubicInterpolationMode: "monotone",
        borderWidth: 4,
        fill: true,
        backgroundColor: (context) => {
          const bgColor = ["rgba(0, 88, 185, 0.4)", "rgba(0, 185, 255, 0.00)"]

          if (!context.chart.chartArea) return

          const {
            ctx,
            data,
            chartArea: { top, bottom },
          } = context.chart

          const gradientBg = ctx.createLinearGradient(0, top, 0, bottom)
          gradientBg.addColorStop(0, bgColor[0])
          gradientBg.addColorStop(1, bgColor[1])

          return gradientBg
        },
      },
    ],
  }

  const options = {
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        display: false,
        beginAtZero: true,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  }

  return <Line data={data} options={options} />
}
