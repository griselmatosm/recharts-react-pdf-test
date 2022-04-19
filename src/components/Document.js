import React from 'react'
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Line,
} from '@react-pdf/renderer'
import { SampleLineChart, SampleBarChart } from './SampleChart'
import { ChartSvg } from './Chart'
import CustomScatterChart from './charts/ScatterChart'

const styles = StyleSheet.create({
  page: {
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textDecoration: 'underline',
    textAlign: 'center',
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  line: {
    borderBottom: 1,
    marginBottom: 40,
  },
  chartTitle: {
    fontSize: 14,
    marginBottom: 5,
  },
  sideBySide: {
    display: 'flex',
    flexDirection: 'row',
  },
  paragraph: {
    fontSize: 10,
    maxWidth: '40%',
    marginTop: 20,
  },
})

const TestDocument = () => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <Text style={styles.title}>React PDF test</Text>
        <View style={styles.section}>
          <Text style={styles.chartTitle}>Line Chart</Text>
          <View style={styles.sideBySide} debug={true}>
            <ChartSvg width={500} height={800}>
              <SampleLineChart />
            </ChartSvg>
          </View>
          <Line style={styles.line} />
          <Text style={styles.chartTitle}>Bar Chart</Text>
          <View debug={true}>
          <ChartSvg width={800} height={600}>
            <SampleBarChart />
          </ChartSvg>
          </View>
          <View debug={true}>
          <ChartSvg>
            <CustomScatterChart />
          </ChartSvg>
          </View>
        </View>
      </Page>
    </Document>
  )
}

export default TestDocument
