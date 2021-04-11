const config = {
  env: process.env.NODE_ENV,
  basename: process.env.REACT_APP_BASE_NAME,
  baseURI: process.env.REACT_APP_API_BASE_URI,
  googleSheetBaseURI: process.env.REACT_APP_SHEET_BASE_URI,
  googleApiKey: process.env.REACT_APP_GOOGLE_API_KEY,
  googleSheetId: process.env.REACT_APP_GOOGLE_SHEET_ID,
  googleSheetName: process.env.REACT_APP_GOOGLE_SHEET_NAME || 'Sheet1',
  endpoints: {
    ipo: {
      companies: '/company-shares',
      checkAllotment: '/ipo-results'
    }
  }
}

export default config;
