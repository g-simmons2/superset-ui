import React from 'react';
import { SuperChart } from '@superset-ui/chart';
import dummyDatasource from '../../../../../shared/dummyDatasource';

export const noData = () => (
  <SuperChart
    chartType="pie"
    width={400}
    height={400}
    datasource={dummyDatasource}
    queryData={{ data: [] }}
    formData={{
      colorScheme: 'd3Category10',
      donut: false,
      labelsOutside: true,
      numberFormat: '.3s',
      pieLabelType: 'key',
      showLabels: true,
      showLegend: true,
      vizType: 'pie',
    }}
  />
);
