import {
  AvatarIcon,
  DashboardIcon,
  ExitIcon,
  HomeIcon,
  PaddingIcon,
} from '@radix-ui/react-icons';

const CorrectIcons = ({ icon }: { icon: string }) => {
  switch (icon) {
    case 'HomeIcon':
      return <HomeIcon width={25} height={25} />;

    case 'DashboardIcon':
      return <DashboardIcon width={25} height={25} />;

    case 'AvatarIcon':
      return <AvatarIcon width={25} height={25} />;

    case 'ExitIcon':
      return <ExitIcon width={25} height={25} />;

    default:
      return <PaddingIcon width={25} height={25} />;
  }
};

export default CorrectIcons;
