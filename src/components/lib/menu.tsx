import { CogIcon, FileBarChart, FileClock, GaugeCircle } from 'lucide-react';

import { Icons } from '@/assets/icons';

export const menuConfigs = [
  {
    name: 'A1 - Người dùng',
    link: '/users',
    icon: <GaugeCircle />,
    children: [
      {
        name: 'Nguời dùng',
        link: '/users',
        icon: <GaugeCircle />,
      },
    ],
  },
  {
    name: 'A2 - Việc làm',
    link: '/jobs',
    icon: <GaugeCircle />,
    children: [
      {
        name: 'Ngành nghề',
        link: '/jobs/career',
        icon: <GaugeCircle />,
      },
      {
        name: 'Loại công việc',
        link: '/jobs/types',
        icon: <GaugeCircle />,
      },
      {
        name: 'Hình thức trả lương',
        link: '/jobs/payment-types',
        icon: <GaugeCircle />,
      },
      {
        name: 'Kinh nghiệm',
        link: '/jobs/experience',
        icon: <GaugeCircle />,
      },
      {
        name: 'Bài đăng',
        link: '/jobs',
        icon: <GaugeCircle />,
      },
    ],
  },
  {
    name: 'A3 - Nhà tốt',
    link: '/houses',
    icon: <Icons.user />,
    children: [
      {
        name: 'Danh mục',
        link: '/houses/categories',
        icon: <GaugeCircle />,
      },
      {
        name: 'Tình trạng nội thất',
        link: '/houses/status',
        icon: <GaugeCircle />,
      },
      {
        name: 'Thông tin người bán',
        link: '/houses/career',
        icon: <GaugeCircle />,
      },
      {
        name: 'Bài đăng',
        link: '/houses',
        icon: <GaugeCircle />,
      },
    ],
  },
  {
    name: 'A4 - Tủ lạnh, máy giặt',
    link: '/pixels',
    icon: <FileClock />,
    children: [
      {
        name: 'Danh mục',
        link: '/household-appliances/categories',
        icon: <GaugeCircle />,
      },
      {
        name: 'Tình trạng',
        link: '/household-appliances/status',
        icon: <GaugeCircle />,
      },
      {
        name: 'Bảo hành',
        link: '/household-appliances/guaranteed',
        icon: <GaugeCircle />,
      },
      {
        name: 'Thể tích',
        link: '/household-appliances/volume',
        icon: <GaugeCircle />,
      },
      {
        name: 'Công suất',
        link: '/household-appliances/wattage',
        icon: <GaugeCircle />,
      },
      {
        name: 'Khối lượng giặt',
        link: '/household-appliances/mass',
        icon: <GaugeCircle />,
      },
      {
        name: 'Quản lý bài đăng',
        link: '/household-appliances/items',
        icon: <GaugeCircle />,
      },
    ],
  },
  {
    name: 'A5 - Máy móc thiết bị',
    link: '/game-settings',
    icon: <CogIcon />,
    children: [
      {
        name: 'Tình trạng',
        link: '/specialized-equipment/status',
        icon: <GaugeCircle />,
      },
      {
        name: 'Bảo hành',
        link: '/specialized-equipment/guaranteed',
        icon: <GaugeCircle />,
      },
    ],
  },
  {
    name: 'A6 - Taxi',
    link: '/game-report',
    icon: <FileBarChart />,
    children: [
      {
        name: 'Tình trạng',
        link: '/specialized-equipment/status',
        icon: <GaugeCircle />,
      },
    ],
  },
  {
    name: 'Khu vực địa lý',
    icon: <FileBarChart />,
    children: [
      {
        name: 'Khu vực',
        link: '/location/area',
        icon: <GaugeCircle />,
      },
      {
        name: 'Địa chỉ',
        link: '/location/address',
        icon: <GaugeCircle />,
      },
    ],
  },
  {
    name: 'Đồ điện tử',
    link: '/electronic-device',
    icon: <FileBarChart />,
    children: [
      {
        name: 'Bài đăng',
        link: '/electronic-device',
        icon: <GaugeCircle />,
      },
    ],
  },
  {
    name: 'Xe cộ',
    link: '/vehicle',
    icon: <FileBarChart />,
    children: [
      {
        name: 'Bài đăng',
        link: '/vehicle',
        icon: <GaugeCircle />,
      },
    ],
  },
  {
    name: 'Dịch vụ',
    link: '/services',
    icon: <FileBarChart />,
    children: [
      {
        name: 'Bài đăng',
        link: '/services',
        icon: <GaugeCircle />,
      },
    ],
  },
];
