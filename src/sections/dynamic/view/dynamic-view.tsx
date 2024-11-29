import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import { DashboardContent } from 'src/layouts/dashboard';
import _ from 'lodash';

import { AnalyticsLineChart } from '../analytics-line-chart';
import { AnalyticsBox } from '../analytics-box';
import { AnalyticsHorizontalBar } from '../analytics-horizontal-bar';
import { AnalyticsPieChart } from '../analytics-pie-chart';
import { AnalyticsRadar } from '../analytics-radar';
import { AnalyticsTasks } from '../analytics-tasks';
import { AnalyticsVerticalBar } from '../analytics-vertical-bar';

interface GridConfig {
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
}

interface ComponentProps {
  type: string;
  props: Record<string, any>;
}

interface GridItemConfig {
  grid: GridConfig;
  component: ComponentProps;
}

interface ContainerConfig {
  grid: GridConfig & { container: boolean; spacing?: number };
  components: GridItemConfig[];
}

interface DashboardJSON {
  heading?: string;
  components: ContainerConfig[];
}

const componentMap: Record<string, React.FC<any>> = {
  AnalyticsLineChart,
  AnalyticsPieChart,
  AnalyticsVerticalBar,
  AnalyticsRadar,
  AnalyticsTasks,
  AnalyticsBox,
  AnalyticsHorizontalBar,
};

const parseDashboardJSON = (json: DashboardJSON): JSX.Element | null => {
  if (!json || !json.components) {
    console.error('Invalid JSON structure');
    return null;
  }

  const renderComponent = (componentConfig: ComponentProps): JSX.Element | null => {
    const { type, props } = componentConfig;

    if (!componentMap[type]) {
      console.error(`Component type "${type}" is not registered.`);
      return null;
    }

    const Component = componentMap[type];
    return <Component {...props} />;
  };

  const renderGrid = (gridConfig: GridItemConfig): JSX.Element | null => {
    const { grid, component } = gridConfig;

    if (!grid || !component) {
      console.error('Invalid grid or component configuration');
      return null;
    }

    return (
      <Grid item {...grid} key={JSON.stringify(component)}>
        {renderComponent(component)}
      </Grid>
    );
  };

  const renderContainer = (containerConfig: ContainerConfig): JSX.Element | null => {
    const { grid, components } = containerConfig;

    if (!grid || !components) {
      console.error('Invalid container configuration');
      return null;
    }

    return (
      <Grid {...grid} key={JSON.stringify(grid)}>
        {components.map((childConfig, index) => renderGrid(childConfig))}
      </Grid>
    );
  };

  return <>{json.components.map((containerConfig, index) => renderContainer(containerConfig))}</>;
};

export function DynamicView({ nav }: any) {
  return (
    <DashboardContent maxWidth="xl">
      <Typography variant="h4" sx={{ mb: { xs: 3, md: 5 } }}>
        {nav.heading}
      </Typography>
      {parseDashboardJSON(nav)}
    </DashboardContent>
  );
}
