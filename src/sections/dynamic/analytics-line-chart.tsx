import type { CardProps } from '@mui/material/Card';
import type { ColorType } from 'src/theme/core/palette';
import type { ChartOptions } from 'src/components/chart';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import { useTheme } from '@mui/material/styles';

import { fNumber, fPercent, fShortenNumber } from 'src/utils/format-number';

import { varAlpha, bgGradient } from 'src/theme/styles';

import { Iconify } from 'src/components/iconify';
import { SvgColor } from 'src/components/svg-color';
import { Chart, useChart } from 'src/components/chart';
import { useEffect, useState } from 'react';
import { useAuth } from 'src/routes/hooks';
import _ from 'lodash';

// ----------------------------------------------------------------------

type Props = CardProps & {
  title: string;
  color?: ColorType;
  query?: string;
};

type LineChartProps = {
  total: number;
  percent: number;
  series: number[];
  categories: string[];
  options?: ChartOptions;
  colors?: string[];
};

export function AnalyticsLineChart({ title, query, color = 'primary', sx, ...other }: Props) {
  const theme = useTheme();
  const chartColors = [theme.palette[color].dark];
  const [isAuthenticated, token] = useAuth();
  const [chart, setChart] = useState<LineChartProps>({
    series: [],
    categories: [],
    total: 0,
    percent: 0,
  });

  useEffect(() => {
    if (!(chart.categories.length > 0)) {
      const date = new Date();
      const month = date.getMonth();
      date.setMonth(date.getMonth() - 3);
      fetch(`${import.meta.env.VITE_HASURA_URL}`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          query: `query MyQuery($website_id: uuid = "", $event_id: String = "", $created_at: timestamptz = "") {
            get_events(args: {created_at: $created_at, event_id: $event_id, website_id: $website_id}) {
              event_count
              month
            }
          }`,
          variables: {
            website_id: `${import.meta.env.VITE_WEBSITE_ID}`,
            event_id: 'send_message',
            created_at: date.toISOString(),
          },
        }),
      })
        .then((res) => res.json())
        .then((res) => {
          if (res.errors) {
            //  TODO Error Handling
          } else if (res.data.get_events.length > 0) {
            const categories = ['', '', '', ''];
            const series = [0, 0, 0, 0];
            let index = 0;
            let total = 0;
            while (index <= 3) {
              if (Object.prototype.hasOwnProperty.call(res.data.get_events, index)) {
                categories[index] = res.data.get_events[index].month;
                series[index] = res.data.get_events[index].event_count;
                total += res.data.get_events[index].event_count;
              }
              index += 1;
            }
            setChart({
              series,
              categories,
              total,
              percent: series[1] === 0 ? 100 : (series[0] / series[1]) * 100,
            });
          }
        });
    }
  }, [token, chart]);

  const chartOptions = useChart({
    chart: { sparkline: { enabled: true } },
    colors: chart?.colors ?? chartColors,
    xaxis: { categories: chart.categories },
    grid: {
      padding: {
        top: 6,
        left: 6,
        right: 6,
        bottom: 6,
      },
    },
    tooltip: {
      y: { formatter: (value: number) => fNumber(value), title: { formatter: () => '' } },
    },
    ...chart.options,
  });

  const renderTrending = (
    <Box
      sx={{
        top: 24,
        gap: 0.5,
        right: 16,
        display: 'flex',
        position: 'absolute',
        alignItems: 'center',
      }}
    >
      <Iconify
        width={20}
        icon={chart.percent < 0 ? 'eva:trending-down-fill' : 'eva:trending-up-fill'}
      />
      <Box component="span" sx={{ typography: 'subtitle2' }}>
        {chart.percent > 0 && '+'}
        {fPercent(chart.percent)}
      </Box>
    </Box>
  );

  return (
    <Card
      sx={{
        ...bgGradient({
          color: `135deg, ${varAlpha(theme.vars.palette[color].lighterChannel, 0.48)}, ${varAlpha(theme.vars.palette[color].lightChannel, 0.48)}`,
        }),
        p: 3,
        boxShadow: 'none',
        position: 'relative',
        color: `${color}.darker`,
        backgroundColor: 'common.white',
        ...sx,
      }}
      {...other}
    >
      <Box
        mb={2}
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'flex-end',
          justifyContent: 'flex-end',
        }}
      >
        <Box sx={{ flexGrow: 1, minWidth: 112 }}>
          <Box sx={{ typography: 'subtitle2' }}>{title}</Box>
          <Box sx={{ typography: 'h4' }}>{fShortenNumber(chart.total)}</Box>
        </Box>
      </Box>
      {renderTrending}

      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'flex-end',
          justifyContent: 'flex-end',
        }}
      >
        <Chart
          type="line"
          series={[{ data: chart.series }]}
          options={chartOptions}
          width="100%"
          height={56}
        />
      </Box>

      <SvgColor
        src="/assets/background/shape-square.svg"
        sx={{
          top: 0,
          left: -20,
          width: 240,
          zIndex: -1,
          height: 240,
          opacity: 0.24,
          position: 'absolute',
          color: `${color}.main`,
        }}
      />
    </Card>
  );
}
