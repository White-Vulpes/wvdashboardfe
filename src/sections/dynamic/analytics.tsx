import { AnalyticsBox } from './analytics-box';
import { AnalyticsHorizontalBar } from './analytics-horizontal-bar';
import { AnalyticsPieChart } from './analytics-pie-chart';
import { AnalyticsLineChart } from './analytics-line-chart';
import { AnalyticsRadar } from './analytics-radar';
import { AnalyticsVeritcalBar } from './analytics-vertical-bar';
import { AnalyticsTasks } from './analytics-tasks';

export function AnalyticsComponent({ id, ...others }: any) {
  switch (id) {
    case 'analytics-box':
      return <AnalyticsBox {...others} />;
    case 'analytics-horizontal-bar':
      return <AnalyticsHorizontalBar {...others} />;
    case 'analytics-pie-chart':
      return <AnalyticsPieChart {...others} />;
    case 'analytics-line-chart':
      return <AnalyticsLineChart {...others} />;
    case 'analytics-radar':
      return <AnalyticsRadar {...others} />;
    case 'analytics-vertical-bar':
      return <AnalyticsVeritcalBar {...others} />;
    case 'analytics-tasks':
      return <AnalyticsTasks {...others} />;
    default:
      return <></>;
  }
}
