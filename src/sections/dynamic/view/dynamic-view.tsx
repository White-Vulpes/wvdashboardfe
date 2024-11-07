import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import { DashboardContent } from 'src/layouts/dashboard';
import _ from 'lodash';

import { AnalyticsComponent } from '../analytics';
import { AnalyticsLineChart } from '../analytics-line-chart';

export function DynamicView({ nav }: any) {
  function getComponents(components: any) {
    return _.map(components, (component, index) => {
      if (component.grid !== undefined) {
        return (
          <Grid
            key={index}
            container={component.grid.container}
            spacing={component.grid.spacing ? component.grid.spacing : 0}
            xs={component.grid.xs ? component.grid.xs : false}
            sm={component.grid.sm ? component.grid.sm : false}
            md={component.grid.md ? component.grid.md : false}
            lg={component.grid.lg ? component.grid.lg : false}
          >
            {getComponents(component.components)}
          </Grid>
        );
      }
      if (component.id) {
        return (
          <AnalyticsLineChart
            title="New users"
            percent={-0.1}
            total={1352831}
            color="secondary"
            chart={{
              categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
              series: [56, 47, 40, 62, 73, 30, 23, 54],
            }}
          />
        );
      }
      return <></>;
    });
  }

  return (
    <DashboardContent maxWidth="xl">
      <Typography variant="h4" sx={{ mb: { xs: 3, md: 5 } }}>
        {nav.heading}
      </Typography>
      {getComponents(nav.components)}
      {/* <Grid container spacing={3}>
        <Grid xs={12} sm={6} md={3}>
          <AnalyticsLineChart
            title="Weekly sales"
            percent={2.6}
            total={714000}
            chart={{
              categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
              series: [22, 8, 35, 50, 82, 84, 77, 1],
            }}
          />
        </Grid>

        <Grid xs={12} sm={6} md={3}>
          <AnalyticsLineChart
            title="New users"
            percent={-0.1}
            total={1352831}
            color="secondary"
            chart={{
              categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
              series: [56, 47, 40, 62, 73, 30, 23, 54],
            }}
          />
        </Grid>

        <Grid xs={12} sm={6} md={3}>
          <AnalyticsLineChart
            title="Purchase orders"
            percent={2.8}
            total={1723315}
            color="warning"
            chart={{
              categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
              series: [40, 70, 50, 28, 70, 75, 7, 64],
            }}
          />
        </Grid>

        <Grid xs={12} sm={6} md={3}>
          <AnalyticsLineChart
            title="Messages"
            percent={3.6}
            total={234}
            color="error"
            chart={{
              categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
              series: [56, 30, 23, 54, 47, 40, 62, 73],
            }}
          />
        </Grid>

        <Grid xs={12} md={6} lg={4}>
          <AnalyticsPieChart
            title="Current visits"
            chart={{
              series: [
                { label: 'America', value: 3500 },
                { label: 'Asia', value: 2500 },
                { label: 'Europe', value: 1500 },
                { label: 'Africa', value: 500 },
              ],
            }}
          />
        </Grid>

        <Grid xs={12} md={6} lg={8}>
          <AnalyticsVeritcalBar
            title="Website visits"
            subheader="(+43%) than last year"
            chart={{
              categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
              series: [
                { name: 'Team A', data: [43, 33, 22, 37, 67, 68, 37, 24, 55] },
                { name: 'Team B', data: [51, 70, 47, 67, 40, 37, 24, 70, 24] },
              ],
            }}
          />
        </Grid>

        <Grid xs={12} md={6} lg={8}>
          <AnalyticsHorizontalBar
            title="Conversion rates"
            subheader="(+43%) than last year"
            chart={{
              categories: ['Italy', 'Japan', 'China', 'Canada', 'France'],
              series: [
                { name: '2022', data: [44, 55, 41, 64, 22] },
                { name: '2023', data: [53, 32, 33, 52, 13] },
              ],
            }}
          />
        </Grid>

        <Grid xs={12} md={6} lg={4}>
          <AnalyticsRadar
            title="Current subject"
            chart={{
              categories: ['English', 'History', 'Physics', 'Geography', 'Chinese', 'Math'],
              series: [
                { name: 'Series 1', data: [80, 50, 30, 40, 100, 20] },
                { name: 'Series 2', data: [20, 30, 40, 80, 20, 80] },
                { name: 'Series 3', data: [44, 76, 78, 13, 43, 10] },
              ],
            }}
          />
        </Grid>

        <Grid xs={12} md={6} lg={4}>
          <AnalyticsBox
            title="Traffic by site"
            list={[
              { value: 'facebook', label: 'Facebook', total: 323234 },
              { value: 'google', label: 'Google', total: 341212 },
              { value: 'linkedin', label: 'Linkedin', total: 411213 },
              { value: 'twitter', label: 'Twitter', total: 443232 },
            ]}
          />
        </Grid>
        <Grid xs={12} md={6} lg={8}>
          <AnalyticsTasks
            title="Tasks"
            list={[...Array(5)].map((_, index) => ({
              id: `19aee0a9-02ed-4a40-a603-ac54a99aae86${index}`,
              name: `Hello World ${index}`,
            }))}
          />
        </Grid>
      </Grid> */}
    </DashboardContent>
  );
}
