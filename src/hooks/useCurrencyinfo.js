import { useState, useEffect } from "react"

//hook se hook bana do
function useCurrencyinfo(currency) {
  const [data, setData] = useState({})

  useEffect(() => {
    fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2025-09-13/v1/currencies/${currency}.json
  `).then((res) => res.json())
      .then((res) => setData(res[currency]))
    console.log(data);

  }, [currency])
  
  return data
}
export default useCurrencyinfo;