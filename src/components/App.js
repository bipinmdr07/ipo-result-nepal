import { useEffect } from 'react';

import { connect } from 'react-redux';
import useGoogleSheets from 'use-google-sheets';

import { fetchShareCompanies, fetchAllotmentResult } from 'actions/data/ipo';
import { fetchBOIDList, setBOIDList, setBOIDListLoadingState } from 'actions/data/sheet';
import { Dropdown, Table, Icon, Loader, Dimmer, Segment } from 'semantic-ui-react';
import { isBoolean } from 'lodash';

import config from 'config';

const App = ({
  fetchShareCompanies,
  shareCompanies,
  fetchBOIDList,
  setBOIDList,
  boidList,
  fetchAllotmentResult,
  fetchingShareCompanies,
  setBOIDListLoadingState,
}) => {
  const { data, loading: fetchingBOIDList } = useGoogleSheets({
    apiKey: config.googleApiKey,
    sheetId: config.googleSheetId,
    sheetsNames: [config.googleSheetName]
  })

  useEffect(() => {
    fetchShareCompanies();
  }, [])

  useEffect(() => {
    setBOIDList(data[0]?.data || [])
  }, [data])

  const prepareShareCompaniesOptions = (companies) => {
    return companies.map((company) => {
      const { id, name } = company;

      return {
        key: id,
        text: name,
        value: id.toString()
      }
    });
  }

  return (
    <>
      <Dropdown
        placeholder="Select company"
        selection
        loading={fetchingShareCompanies}
        disabled={fetchingShareCompanies}
        options={prepareShareCompaniesOptions(shareCompanies)}
        onChange={async (e, target) => {
          setBOIDListLoadingState()
          boidList.forEach(async ({ BOID }) => {
            await fetchAllotmentResult(target.value, BOID)
          })
        }}
      />
      <Table celled>
        <Table.Header>
          <Table.HeaderCell>Name</Table.HeaderCell>
          <Table.HeaderCell>BOID</Table.HeaderCell>
          <Table.HeaderCell>Result</Table.HeaderCell>
        </Table.Header>

        <Table.Body>
          {
            fetchingBOIDList ? (
              <Table.Row>
                <Table.Cell colSpan={3}>
                  <Dimmer.Dimmable as={Segment} dimmed={true}>
                    <Loader active inline="centered" size="massive">Loading</Loader> 
                  </Dimmer.Dimmable>
                </Table.Cell>
              </Table.Row>
            ) : (
              <>
                {boidList.map(({ Name, BOID, loading, result, success, error }) => {
                  const isPositive = !loading && isBoolean(success) && success;
                  const isNegative = !loading && isBoolean(success) && !success;
                  const isError = !isPositive && !isNegative && isBoolean(error) && error;
                  return (
                    <Table.Row>
                      <Table.Cell positive={isPositive} negative={isNegative}>{Name || BOID}</Table.Cell>
                      <Table.Cell positive={isPositive} negative={isNegative}>{BOID}</Table.Cell>
                      <Table.Cell positive={isPositive} negative={isNegative}>
                        { loading && <Loader size="tiny" active inline/>}
                        { !loading && !isPositive && !isNegative && !isError && <Icon name="warning" color="yellow"/> }
                        { !loading && isPositive && <Icon name="check" color="green"/> }
                        { !loading && isNegative && <Icon name="close" color="red"/>  }
                        { !loading && isError && <Icon name="warning sign" color="blue"/> }
                        {result || "N/A"}
                      </Table.Cell>
                    </Table.Row>
                  )
                })}    
              </>
            )
          }
          
        </Table.Body>
      </Table>
    </>
  )
}

const mapStateToProps = (state) => ({
  shareCompanies: state.data.ipo.shareCompanies,
  boidList: state.data.sheet.boidList,
  fetchingShareCompanies: state.ui.ipo.fetchingShareCompanies,
})

const mapDispatchToProps = {
  fetchShareCompanies,
  fetchBOIDList,
  fetchAllotmentResult,
  setBOIDList,
  setBOIDListLoadingState,
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
