import http from 'utils/http'
import config from 'config'

export async function fetchShareCompanies() {
  const url = config.endpoints.ipo.companies
  const { data } = await http.get(url)

  return data
}

export async function fetchAllotmentResult(companyShareId, boid) {
  const url = config.endpoints.ipo.checkAllotment
  const data = await http({
    method: 'post',
    url,
    data: {
      boid,
      companyShareId
    }
  })
  return data
}
