import { Label } from 'src/components/label';
import { SvgColor } from 'src/components/svg-color';

// ----------------------------------------------------------------------

const icon = (name: string) => (
  <SvgColor width="100%" height="100%" src={`/assets/icons/navbar/${name}.svg`} />
);

export function getNavData(navs: any[]) {
  return navs.map((i: { nav_path: any }) => {
    switch (i.nav_path) {
      case 'home':
        return {
          title: 'Dashboard',
          path: '/',
          icon: icon('ic-analytics'),
        };
      case 'message':
        return {
          title: 'Message',
          path: '/message',
          icon: icon('ic-message'),
        };
      case 'images':
        return {
          title: 'Images',
          path: '/images',
          icon: icon('ic-image'),
        };
      default:
        return {
          title: 'Dashboard',
          path: '/',
          icon: icon('ic-analytics'),
        };
    }
  });
}
