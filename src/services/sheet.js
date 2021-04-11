import http from 'utils/http';
import config from 'config';

export const fetchBOIDInfoFromSheet = async () => {
  const { data } = await http.get(config.googleSheetBaseURI)

  return data
}
