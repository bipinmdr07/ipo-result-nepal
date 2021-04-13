import { connect } from 'react-redux';

import { Modal, Button, Form, Input } from 'semantic-ui-react';
import { Formik } from 'formik';
import { setSheetConfigModalStatus } from 'actions/ui/sheet';
import { setSheetConfig } from 'actions/data/sheetConfig';

const SheetConfigModal = ({open, sheetConfig, setSheetConfigModalStatus, setSheetConfig}) => {
  return (
        <Modal open={open}>
    <Formik
      initialValues={{
        apiKey: sheetConfig.apiKey || '',
        sheetId: sheetConfig.sheetId || ''
      }}
    >
      {({ values, handleChange, isSubmitting }) => {
        return (
          <>

            <Modal.Header>
                Configure Google sheet
            </Modal.Header>
            <Modal.Content>
              <Form>
                <Form.Field control={Input} label={"API Key"} placeholder="API Key" name="apiKey" onChange={handleChange} value={values.apiKey}/>
          <Form.Field control={Input} label={"Sheet ID"} placeholder="Sheet ID" name="sheetId" onChange={handleChange} value={values.sheetId}/>
              </Form>
            </Modal.Content>
            <Modal.Actions>
                <Button onClick={() => {
                  setSheetConfigModalStatus(false)
                }}>
                  Cancel
                </Button>
              {/* <Button type="submit">Hello</Button> */}
              <Button positive type="submit" loading={isSubmitting} onClick={() => {
                setSheetConfig(values)
                setSheetConfigModalStatus(false)
              }}>Ok</Button>
            </Modal.Actions>
          </>
        )
      }}
    </Formik>
        </Modal>  
  )
  
 }

const mapStateToProps = (state) => ({
  sheetConfig: state.data.sheetConfig.sheetConfig
})

const mapDispatchToProps = {
  setSheetConfig,
  setSheetConfigModalStatus
}

export default connect(mapStateToProps, mapDispatchToProps)(SheetConfigModal);
