import axios from "axios"
import articles from "../assets/json/articles.json"

const API_KEY = "2a619d7b07fd4278bd2f9012d6bd4787"

export const articleService = {
  query,
  getEmptyArticleFilterBy,
  getEverythingFilterOptions,
  getTopHeadlinesFilterOptions,
}

async function query(filterBy = { title: "" }) {
  // console.log("filterBy: ", filterBy)
  let baseUrl = "https://newsapi.org/v2/"

  if (filterBy.type === "everything") {
    baseUrl +=
      `everything` +
      `?pageSize=10` +
      `&q=${filterBy.q || "news"}` +
      `&sources=${filterBy.sources}` +
      `&language=${filterBy.language}` +
      `&sortBy=${filterBy.sortBy}` +
      `&page=${filterBy.pageNumber}` +
      `&apiKey=${API_KEY}`

    if (filterBy.from) {
      console.log("hi")
      baseUrl += `&from=${filterBy.from}` + `&to=${filterBy.to}`
    }
  } else if (filterBy.type === "top headlines") {
    baseUrl +=
      `top-headlines` +
      `?pageSize=10` +
      `&q=${filterBy.q}` +
      `&page=${filterBy.pageNumber}` +
      `&apiKey=${API_KEY}`

    if (filterBy.sources) baseUrl += `&sources=${filterBy.sources || "ynet"}`
    else {
      baseUrl +=
        `&country=${filterBy.country || "us"}` +
        `&category=${filterBy.category}`
    }
  }

  try {
    const { data } = await axios.get(baseUrl)
    const { articles, totalResults } = data
    return { articles, totalResults }
  } catch (error) {
    console.log("error: ", error)
  }

  // return new Promise((resolve) =>
  //   setTimeout(() => resolve({ articles, totalResults: 10 }), 500)
  // )
}

function getEmptyArticleFilterBy() {
  return {
    country: "il",
    category: "",
    sources: "",
    language: "",
    type: "top headlines",
    q: "",
    sortBy: "",
    pageNumber: 1,
    from: "",
    to: "",
  }
}

function getTopHeadlinesFilterOptions() {
  return [
    {
      name: "country",
      filterByKey: "country",
      options: countriesOptions,
    },
    {
      name: "category",
      filterByKey: "category",
      options: categoryOptions,
    },
    {
      name: "sources",
      filterByKey: "sources",
      options: sourcesOptions,
    },
  ]
}

function getEverythingFilterOptions() {
  return [
    {
      name: "language",
      filterByKey: "language",
      options: languageOptions,
    },
    {
      name: "sort by",
      filterByKey: "sortBy",
      options: sortByOptions,
    },
    {
      name: "sources",
      filterByKey: "sources",
      options: sourcesOptions,
    },
  ]
}

const countriesOptions = [
  { id: "fr", name: "France" },
  { id: "gb", name: "United Kingdom" },
  { id: "il", name: "Israel" },
  { id: "in", name: "India" },
  { id: "it", name: "Italy" },
  { id: "jp", name: "Japan" },
  { id: "us", name: "United States" },
]

const sourcesOptions = [
  { id: "abc-news", name: "ABC News" },
  { id: "bbc-news", name: "BBC News" },
  { id: "cnn", name: "CNN" },
  { id: "fox-news", name: "Fox News" },
  { id: "the-huffington-post", name: "The Huffington Post" },
  { id: "the-new-york-times", name: "The New York Times" },
  { id: "reuters", name: "Reuters" },
  { id: "the-wall-street-journal", name: "The Wall Street Journal" },
  { id: "the-washington-post", name: "The Washington Post" },
  { id: "usa-today", name: "USA Today" },
  { id: "mako", name: "Mako" },
]

const sortByOptions = [
  { id: "relevancy", name: "relevancy" },
  { id: "popularity", name: "popularity" },
  { id: "publishedAt", name: "published at" },
]

const categoryOptions = [
  { id: "sports", name: "sports" },
  { id: "business", name: "business" },
  { id: "entertainment", name: "entertainment" },
  { id: "general", name: "general" },
  { id: "health", name: "health" },
  { id: "science", name: "science" },
  { id: "technology", name: "technology" },
]

const languageOptions = [
  { id: "he", name: "he" },
  { id: "en", name: "en" },
  { id: "fr", name: "fr" },
  { id: "es", name: "es" },
]
